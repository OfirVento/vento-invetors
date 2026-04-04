import type {
  Sponsor,
  Invitee,
  Invitation,
  DealRoomView,
  Meeting,
  Commitment,
  CommunicationEvent,
  User,
  ContentBlock,
  MessageTemplate,
  RoundSettings,
  FounderAlert,
  ClosingTask,
} from "@/generated/prisma/client";

// Extended types with relations
export type SponsorWithUser = Sponsor & { user: User };
export type SponsorWithInvitees = SponsorWithUser & {
  invitees: InviteeWithRelations[];
};

export type InviteeWithRelations = Invitee & {
  sponsor: SponsorWithUser;
  invitation: Invitation | null;
  dealRoomViews: DealRoomView[];
  meetings: Meeting[];
  commitment: (Commitment & { closingTasks: ClosingTask[] }) | null;
  communicationEvents: CommunicationEvent[];
};

export type InviteeListItem = Invitee & {
  sponsor: SponsorWithUser;
  invitation: Invitation | null;
  _count: {
    dealRoomViews: number;
    meetings: number;
  };
};

// Dashboard types
export interface SprintMetrics {
  targetAmount: number;
  raisedToDate: number;
  sponsorsActivated: number;
  sponsorsTotal: number;
  totalInvitees: number;
  totalInvitationsSent: number;
  totalDealRoomViews: number;
  totalCTAResponses: number;
  meetingsBooked: number;
  meetingsCompleted: number;
  softCircles: number;
  softCircleAmount: number;
  commitments: number;
  committedAmount: number;
  fundedAmount: number;
  daysRemaining: number;
  sprintEndDate: string;
}

export interface ActionItem {
  id: string;
  type:
    | "respond_now"
    | "follow_up"
    | "nudge_sponsor"
    | "hot_no_meeting"
    | "soft_circle_waiting";
  title: string;
  subtitle: string;
  inviteeId?: string;
  sponsorId?: string;
  urgency: "high" | "medium" | "low";
  timestamp: string;
}

export interface PipelineStage {
  name: string;
  count: number;
  amount: number;
}

// Template variable context
export interface TemplateVariables {
  sponsor_name: string;
  invitee_name: string;
  calendar_link: string;
  deal_room_link: string;
  company_name: string;
  round_name: string;
  founder_name: string;
}

// Auth extension
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      name: string | null;
      role: string;
    };
  }
}
