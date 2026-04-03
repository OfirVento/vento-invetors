import { prisma } from "./prisma";

export interface DuplicateResult {
  isDuplicate: boolean;
  existingInviteeId?: string;
  existingSponsorName?: string;
}

export async function checkDuplicate(
  email: string,
  excludeInviteeId?: string
): Promise<DuplicateResult> {
  const existing = await prisma.invitee.findFirst({
    where: {
      email: email.toLowerCase().trim(),
      ...(excludeInviteeId ? { id: { not: excludeInviteeId } } : {}),
    },
    include: {
      sponsor: {
        include: { user: true },
      },
    },
  });

  if (!existing) {
    return { isDuplicate: false };
  }

  return {
    isDuplicate: true,
    existingInviteeId: existing.id,
    existingSponsorName: existing.sponsor.user.name || "Another sponsor",
  };
}
