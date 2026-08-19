import { User } from "./types";

/**
 * A row mirroring the shape the API used to return. `phoneNumber` here is a
 * DECLARATION of a field that no longer exists upstream -- dead structure, and
 * mechanically removable.
 */
export interface ContactRow {
  email: string;
}

/**
 * A display string. The placeholder can be dropped without changing behaviour,
 * so this reference is MECHANICALLY removable.
 */
export function contactLine(user: User): string {
  return `${user.name} <${user.email}>`;
}

/**
 * An outbound payload. The key can be dropped -- the field no longer exists
 * upstream, so sending it is meaningless.
 */
export function toCrmPayload(user: User): Record<string, string> {
  return {
    id: user.id,
    email: user.email,
  };
}

/**
 * Builds the row above. Both the declaration and this assignment go together.
 */
export function toRow(user: User): ContactRow {
  return {
    email: user.email,
  };
}
