import { User } from "./types";

/**
 * Every reference to `phoneNumber` in this file is a JUDGMENT call, and Ripple
 * must refuse all of them:
 *
 *   the constructor parameter   removing it changes the signature every caller
 *                               relies on, in files this PR is not touching
 *   the shorthand property      `{ name, email, phoneNumber }` -- dropping it
 *                               silently changes the request body
 *
 * A correct automated fix does not exist here. Someone has to decide whether
 * callers should stop passing the value, and that decision is not in this file.
 * This package exists so the demo shows a REFUSAL next to a fix, in one repo.
 */
export interface CreateUserRequest {
  name: string;
  email: string;
  phoneNumber: string;
}

interface HttpResponse<T> {
  data: T;
}

async function post<T>(url: string, body: unknown): Promise<HttpResponse<T>> {
  const response = await fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body),
  });
  return { data: (await response.json()) as T };
}

export class UserClient {
  constructor(private readonly baseUrl: string) {}

  async createUser(
    name: string,
    email: string,
    phoneNumber: string,
  ): Promise<User> {
    const request: CreateUserRequest = { name, email, phoneNumber };
    const response = await post<User>(`${this.baseUrl}/users`, request);
    return response.data;
  }

  async getUser(id: string): Promise<User> {
    const response = await post<User>(`${this.baseUrl}/users/${id}`, {});
    return response.data;
  }
}
