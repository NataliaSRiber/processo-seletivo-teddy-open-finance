import { useState, type ReactNode } from "react";
import type { User } from "../types/user";
import { SelectedClientsContext } from "./selectedClients.context";

export default function SelectedClientsProvider({ children }: { children: ReactNode }) {
  const [selectedUsers, setSelectedUsers] = useState<User[]>([]);

  const addToSelected = (user: User) =>
    setSelectedUsers(prev => (prev.find(f => f.id === user.id) ? prev : [...prev, user]));

  const removeFromSelected = (userId: number) =>
    setSelectedUsers(prev => prev.filter(u => u.id !== userId));

  const isSelectedClient = (userId: number) =>
    selectedUsers.some(u => u.id === userId);

  const clearAll = () => setSelectedUsers([]);

  return (
    <SelectedClientsContext.Provider
      value={{ selectedUsers, addToSelected, removeFromSelected, isSelectedClient, clearAll }}
    >
      {children}
    </SelectedClientsContext.Provider>
  );
}
