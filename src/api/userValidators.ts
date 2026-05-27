import type { User } from "../types";

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

export function isUser(value: unknown): value is User {
  return (
    isRecord(value) &&
    typeof value["id"] === "number" &&
    typeof value["name"] === "string" &&
    typeof value["email"] === "string" &&
    value["email"].includes("@")
  );
}

export function isUserArray(value: unknown): value is User[] {
  return Array.isArray(value) && value.every(isUser);
}

