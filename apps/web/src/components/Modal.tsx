import { Button, Input } from "@teddy/ui";
import type { User } from "../types/user";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  user?: User
}

export default function Modal({ isOpen, onClose, user}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-900">{user ? 'Editar Cliente' : 'Criar cliente'}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>
        <div className="flex flex-col gap-5">
          <Input label="Digite o nome:"/>
          <Input label="Digite o salário:"/>
          <Input label="Digite o valor da empresa:"/>
        </div>
        <Button label={user ? 'Editar Cliente' : 'Criar cliente'} className="mt-5" />
      </div>
    </div>
  );
}