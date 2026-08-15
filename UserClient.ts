import { HttpClient } from '@billing/http';

export interface User {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  createdAt: Date;
}

export interface CreateUserRequest {
  name: string;
  email: string;
  phoneNumber: string;
}

export class UserClient {
  private readonly http: HttpClient;
  private readonly baseUrl: string;

  constructor(baseUrl: string) {
    this.http = new HttpClient();
    this.baseUrl = baseUrl;
  }

  async createUser(name: string, email: string, phoneNumber: string): Promise<User> {
    const request: CreateUserRequest = { name, email, phoneNumber };
    const response = await this.http.post<User>(`${this.baseUrl}/users`, request);
    return response.data;
  }

  async getUser(id: string): Promise<User> {
    const response = await this.http.get<User>(`${this.baseUrl}/users/${id}`);
    return response.data;
  }

  async updateUser(id: string, updates: Partial<CreateUserRequest>): Promise<User> {
    const response = await this.http.patch<User>(`${this.baseUrl}/users/${id}`, updates);
    return response.data;
  }
}
