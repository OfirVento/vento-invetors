import type { Invitee, DealRoomView, Meeting } from "@/generated/prisma";

interface HeatScoreInput {
  invitee: Invitee & {
    dealRoomViews: DealRoomView[];
    meetings: Meeting[];
  };
  sponsorRelationshipStrength?: number;
}

interface HeatScoreWeights {
  relationshipStrength: number;
  topPick: number;
  checkSize: number;
  ctaInterested: number;
  ctaMoreDetails: number;
  ctaNotNow: number;
  dealRoomView: number;
  dealRoomViewMax: number;
  highScrollDepth: number;
  longTimeOnPage: number;
  meetingBooked: number;
  meetingCompleted: number;
  timeDecayPerDay: number;
}

const DEFAULT_WEIGHTS: HeatScoreWeights = {
  relationshipStrength: 2, // multiplied by 1-10 score = 0-20
  topPick: 15,
  checkSize: 15, // max pts for check size
  ctaInterested: 20,
  ctaMoreDetails: 10,
  ctaNotNow: -30,
  dealRoomView: 5,
  dealRoomViewMax: 15,
  highScrollDepth: 5,
  longTimeOnPage: 5,
  meetingBooked: 15,
  meetingCompleted: 10,
  timeDecayPerDay: 1,
};

export function computeHeatScore(
  input: HeatScoreInput,
  weights: HeatScoreWeights = DEFAULT_WEIGHTS
): number {
  const { invitee } = input;
  let score = 0;

  // Sponsor relationship strength (0-20)
  if (invitee.relationshipStrength) {
    score += invitee.relationshipStrength * weights.relationshipStrength;
  }

  // Top pick bonus
  if (invitee.isTopPick) {
    score += weights.topPick;
  }

  // Check size (0-15, scaled: 100K+ = max)
  if (invitee.estimatedCheckSize) {
    const checkVal = Number(invitee.estimatedCheckSize);
    const scaled = Math.min(checkVal / 100000, 1);
    score += scaled * weights.checkSize;
  }

  // CTA response
  switch (invitee.ctaResponse) {
    case "INTERESTED":
      score += weights.ctaInterested;
      break;
    case "MORE_DETAILS":
      score += weights.ctaMoreDetails;
      break;
    case "NOT_NOW":
      score += weights.ctaNotNow;
      break;
  }

  // Deal room views
  const viewCount = invitee.dealRoomViews.length;
  score += Math.min(viewCount * weights.dealRoomView, weights.dealRoomViewMax);

  // High scroll depth (any view > 80%)
  const hasDeepScroll = invitee.dealRoomViews.some(
    (v) => v.scrollDepth && v.scrollDepth > 0.8
  );
  if (hasDeepScroll) {
    score += weights.highScrollDepth;
  }

  // Long time on page (any view > 120 seconds)
  const hasLongView = invitee.dealRoomViews.some(
    (v) => v.durationSecs && v.durationSecs > 120
  );
  if (hasLongView) {
    score += weights.longTimeOnPage;
  }

  // Meeting booked / completed
  const hasMeetingBooked = invitee.meetings.some(
    (m) => m.status === "SCHEDULED" || m.status === "CONFIRMED"
  );
  const hasMeetingCompleted = invitee.meetings.some(
    (m) => m.status === "COMPLETED"
  );
  if (hasMeetingCompleted) {
    score += weights.meetingCompleted;
  }
  if (hasMeetingBooked) {
    score += weights.meetingBooked;
  }

  // Time decay: -1 per day since invite with no engagement
  if (invitee.ctaResponse === "NO_RESPONSE" && viewCount === 0) {
    const daysSinceCreated = Math.floor(
      (Date.now() - new Date(invitee.createdAt).getTime()) /
        (1000 * 60 * 60 * 24)
    );
    score -= daysSinceCreated * weights.timeDecayPerDay;
  }

  return Math.max(0, Math.round(score * 10) / 10);
}

export type PriorityTier = "A" | "B" | "C";

export function computeTier(heatScore: number): PriorityTier {
  if (heatScore >= 60) return "A";
  if (heatScore >= 30) return "B";
  return "C";
}

export type Recommendation =
  | "RESPOND_NOW"
  | "SCHEDULE_CALL"
  | "SEND_DETAILS"
  | "FOLLOW_UP"
  | "WAIT"
  | "NURTURE"
  | "CLOSE";

export function computeRecommendation(
  invitee: Invitee & { meetings: Meeting[] }
): Recommendation {
  const hasMeetingCompleted = invitee.meetings.some(
    (m) => m.status === "COMPLETED"
  );
  const hasMeetingBooked = invitee.meetings.some(
    (m) => m.status === "SCHEDULED" || m.status === "CONFIRMED"
  );

  if (invitee.ctaResponse === "NOT_NOW") return "NURTURE";

  if (invitee.ctaResponse === "INTERESTED") {
    if (hasMeetingCompleted) return "CLOSE";
    if (hasMeetingBooked) return "WAIT";
    return "RESPOND_NOW";
  }

  if (invitee.ctaResponse === "MORE_DETAILS") {
    return "SEND_DETAILS";
  }

  // NO_RESPONSE
  if (invitee.heatScore >= 40) return "FOLLOW_UP";
  return "WAIT";
}
