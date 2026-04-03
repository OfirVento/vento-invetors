import { z } from "zod";

export const inviteeFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  geography: z.string().optional(),
  estimatedCheckSize: z.coerce.number().min(0).optional(),
  relationshipStrength: z.coerce.number().min(1).max(10).optional(),
  isTopPick: z.boolean().default(false),
  introMode: z.enum(["SELF_SEND", "THREE_WAY_INTRO", "DRAFT_FOR_APPROVAL"]).default("DRAFT_FOR_APPROVAL"),
  sponsorNote: z.string().optional(),
});

export type InviteeFormData = z.infer<typeof inviteeFormSchema>;

export const ctaResponseSchema = z.object({
  response: z.enum(["INTERESTED", "MORE_DETAILS", "NOT_NOW"]),
  checkSize: z.coerce.number().min(0).optional(),
});

export type CTAResponseData = z.infer<typeof ctaResponseSchema>;

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export type LoginFormData = z.infer<typeof loginSchema>;

export const roundSettingsSchema = z.object({
  roundName: z.string().min(1),
  targetAmount: z.coerce.number().min(0),
  raisedToDate: z.coerce.number().min(0),
  minCheckSize: z.coerce.number().min(0).optional(),
  maxCheckSize: z.coerce.number().min(0).optional(),
  vehicle: z.string().optional(),
  valuationCap: z.string().optional(),
  sprintStartDate: z.string(),
  sprintEndDate: z.string(),
  sponsorGoal: z.coerce.number().min(1),
  inviteeGoal: z.coerce.number().min(1),
  founderName: z.string().optional(),
  founderEmail: z.string().email().optional(),
  founderCalendarLink: z.string().url().optional().or(z.literal("")),
  showAllocationProgress: z.boolean(),
  showUrgencyLanguage: z.boolean(),
  complianceNote: z.string().optional(),
  confidentialityText: z.string().optional(),
});

export type RoundSettingsFormData = z.infer<typeof roundSettingsSchema>;

export const contentBlockSchema = z.object({
  title: z.string().min(1),
  body: z.string().min(1),
  isActive: z.boolean().default(true),
  sortOrder: z.coerce.number().default(0),
});

export type ContentBlockFormData = z.infer<typeof contentBlockSchema>;

export const messageTemplateSchema = z.object({
  name: z.string().min(1),
  subject: z.string().optional(),
  body: z.string().min(1),
  isActive: z.boolean().default(true),
});

export type MessageTemplateFormData = z.infer<typeof messageTemplateSchema>;

export const meetingSchema = z.object({
  scheduledAt: z.string(),
  durationMinutes: z.coerce.number().default(30),
  meetingLink: z.string().optional(),
  notes: z.string().optional(),
});

export type MeetingFormData = z.infer<typeof meetingSchema>;

export const commitmentSchema = z.object({
  stage: z.enum([
    "VERBAL_INTEREST",
    "SOFT_CIRCLE",
    "COMMITTED",
    "DOCS_SENT",
    "DOCS_SIGNED",
    "WIRED",
    "FUNDED",
    "DECLINED",
  ]),
  amount: z.coerce.number().min(0).optional(),
  currency: z.string().default("USD"),
  vehicle: z.string().optional(),
  declineReason: z.string().optional(),
});

export type CommitmentFormData = z.infer<typeof commitmentSchema>;

export const sponsorCreateSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  company: z.string().optional(),
  title: z.string().optional(),
  investedAmount: z.coerce.number().min(0).optional(),
  relationshipNote: z.string().optional(),
});

export type SponsorCreateData = z.infer<typeof sponsorCreateSchema>;
