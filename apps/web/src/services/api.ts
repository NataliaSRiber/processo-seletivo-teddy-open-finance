import axios, { AxiosError, type AxiosInstance} from "axios";
import type { User } from "../types/user";

export type UserListResponse = {
  clients: User[];
  currentPage: number;
  totalPages: number;
  limit: number;
};

export const api: AxiosInstance = axios.create({
  baseURL: "https://boasorte.teddybackoffice.com.br",
  timeout: 15000,
});


function getErrorMessage(err: unknown): string {
  if ((err as AxiosError)?.isAxiosError) {
    const ax = err as AxiosError<{ message?: string }>;
    return ax.response?.data?.message || ax.message || "Erro de requisição";
  }
  if (err instanceof Error) return err.message;
  try { return JSON.stringify(err); } catch { return String(err); }
}

export const userService = {
  async getAll(page: number, limit: number): Promise<UserListResponse> {
    try {
      const res = await api.get<UserListResponse>("/users", { params: { page, limit } });
      return res.data;
    } catch (err: unknown) {
      throw new Error(getErrorMessage(err));
    }
  },

  async create(userData: User): Promise<User> {
    try {
      console.log(userData)
      const res = await api.post<User>("/users", userData);
      return res.data;
    } catch (err: unknown) {
      throw new Error(getErrorMessage(err));
    }
  },

  async update(userData: User): Promise<User> {
    try {
      const res = await api.patch<User>(`/users/${userData.id}`, userData);
      return res.data;
    } catch (err: unknown) {
      throw new Error(getErrorMessage(err));
    }
  },

  async getById(id: number): Promise<User> {
    try {
      const res = await api.get<User>(`/users/${id}`);
      return res.data;
    } catch (err: unknown) {
      throw new Error(getErrorMessage(err));
    }
  },

  async delete(id: number): Promise<void> {
    try {
      await api.delete(`/users/${id}`);
    } catch (err: unknown) {
      throw new Error(getErrorMessage(err));
    }
  },
};


