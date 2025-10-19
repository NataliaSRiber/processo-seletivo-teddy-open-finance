import { createContext } from "react";
import type { User } from "../types/user";

export interface SelectedClientsContextType {
  selectedUsers: User[];
  addToSelected: (user: User) => void;
  removeFromSelected: (userId: number) => void;
  isSelectedClient: (userId: number) => boolean;
  clearAll: () => void;
}

export const SelectedClientsContext =
  createContext<SelectedClientsContextType | undefined>(undefined);
