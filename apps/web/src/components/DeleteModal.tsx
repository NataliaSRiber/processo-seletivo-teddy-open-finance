import { Button } from "@teddy/ui";
import type { User } from "../types/user";
import { useEffect, useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  user?: User;
  onDelete: (userData: number) => void;
} 

export default function DeleteModal({ isOpen, onClose, user, onDelete}: ModalProps) {
  const [name, setName] = useState(user?.name || '');
  const [id, setId] = useState(user?.id);

  useEffect(() => {
    if (isOpen && user){
      setName(user?.name || '');
      setId(user?.id)
    }
  }, [isOpen, user]);

  const handleDelete  = () => {
    if (id) {
      onDelete(id);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-900">Excluir cliente:{name}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>
        <p>Você está prestes a excluir o cliente: {user?.name}</p>
        <Button label="Excluir cliente" className="mt-5" onClick={handleDelete} />
      </div>
    </div>
  );
}