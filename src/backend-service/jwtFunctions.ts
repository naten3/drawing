import assert from "assert";
import { randomUUID } from "crypto";
import { sign, verify } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET as string;
assert(JWT_SECRET, "JWT_SECRET must be set");

export function createUser(): { userId: string; token: string } {
  const userId = randomUUID();
  const claims = { iss: "draw-app", userId };
  const token = sign(claims, JWT_SECRET);
  return { token, userId };
}

export function getUserId(token: string): string {
  var decoded = verify(token, JWT_SECRET);
  return decoded.userId;
}
