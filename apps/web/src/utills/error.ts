import type { AxiosError } from "axios";

export function getErrorMessage(err: unknown): string {
  if ((err as AxiosError)?.isAxiosError) {
    const ax = err as AxiosError<{ message?: string }>;
    return ax.response?.data?.message || ax.message || "Erro de requisição";
  }
  if (err instanceof Error) return err.message;
  try { return JSON.stringify(err); } catch { return String(err); }
}