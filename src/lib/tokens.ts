import { nanoid } from "nanoid";

export function generateToken(length = 21): string {
  return nanoid(length);
}

export function generateSponsorUrl(token: string): string {
  const base = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
  return `${base}/s/${token}`;
}

export function generateDealRoomUrl(token: string): string {
  const base = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
  return `${base}/d/${token}`;
}
