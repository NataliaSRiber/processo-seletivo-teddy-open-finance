import { createContext, useContext, useState, type ReactNode } from 'react';
import type { User } from '../types/user';

interface SelectedClientsContextType {
  selectedUsers: User[];
  addToSelected: (user: User) => void;
  removeFromSelected: (userId: number) => void;
  isSelectedClient: (userId: number) => boolean;
  clearAll: () => void;
}

const SelectedClientsContext = createContext<SelectedClientsContextType | undefined>(undefined);

export function SelectedClientsProvider({ children }: { children: ReactNode }) {
  const [selectedUsers, setSelectedUsers] = useState<User[]>([]);

  const addToSelected = (user: User) => {
    setSelectedUsers(prev => {
      if (prev.find(fav => fav.id === user.id)) return prev;
      return [...prev, user];
    });
  };

  const removeFromSelected = (userId: number) => {
    setSelectedUsers(prev => prev.filter(user => user.id !== userId));
  };

  const isSelectedClient = (userId: number) => {
    return selectedUsers.some(user => user.id === userId);
  };

  const clearAll = () => {
    setSelectedUsers([]);
  };

  return (
    <SelectedClientsContext.Provider value={{
      selectedUsers,
      addToSelected,
      removeFromSelected,
      isSelectedClient,
      clearAll
    }}>
      {children}
    </SelectedClientsContext.Provider>
  );
}

export function useSelectedClients() {
  const context = useContext(SelectedClientsContext);
  if (context === undefined) {
    throw new Error('useSelectedClients deve ser utilizado com um SelectedClientsProvider');
  }
  return context;
}