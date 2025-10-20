import { Button, Input } from "@teddy/ui";
import { useEffect, useState } from "react";
import type { User } from "../types/user";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  user?: User;
  onSave: (userData: User) => void;
}

export default function Modal({ isOpen, onClose, user, onSave }: ModalProps) {
  const [name, setName] = useState(user?.name || '');
  const [salary, setSalary] = useState(user?.salary?.toString() || '');
  const [valuation, setValuation] = useState(user?.companyValuation?.toString() || '');

const handleSave = () => {
  const userData: User = {
    name,
    salary: Number(salary),
    companyValuation: Number(valuation)
  };
  
  if (user?.id) {
    userData.id = user.id;
  }
  onSave(userData);
};

  useEffect(() => {
    if (isOpen) {
      setName(user?.name || '');
      setSalary(user?.salary?.toString() || '');
      setValuation(user?.companyValuation?.toString() || '');
    }
  }, [isOpen, user]);


  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-900">
            {user ? 'Editar cliente' : 'Criar cliente'}
          </h2>
          <button onClick={onClose} className="text-2xl">×</button>
        </div>
        
        <div className="flex flex-col gap-4">
          <Input data-testid="nome-input" label="Nome" value={name} onChange={setName} />
          <Input data-testid="salario-input"  label="Salário" value={salary} onChange={setSalary} type="number" />
          <Input data-testid="valor-empresa-input" label="Valor da Empresa" value={valuation} onChange={setValuation} type="number" />
        </div>
        
        <Button 
          label={user ? 'Salvar' : 'Criar'} 
          className="mt-5 w-full" 
          onClick={handleSave}
        />
      </div>
    </div>
  );
}