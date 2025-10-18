import { Button } from "@teddy/ui";
import ClientCard from "../components/ClientCard";
import { useState } from "react";
import Modal from "../components/Modal";
import DeleteModal from "../components/DeleteModal";

const mockUser = {
  id: '1',
  name: 'Eduardo',
  salary: 3000, 
  companyValuation: 12000 
}

export default function Clients(){
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [, setClientToDelete] = useState('');

  const handleViewDetails = (userId: string) => {
    console.log('Ver detalhes do cliente:', userId);
  };

  const handleEdit = (userId: string) => {
    setIsEditModalOpen(true);
    console.log('Editar cliente:', userId);
  };

  const handleDelete = (userId: string) => {
    setDeleteModalOpen(true);
    setClientToDelete(userId)
    console.log('Deletar cliente:', userId);
  };

  return (
    <main className="min-h-screen w-full px-4 bg-brand-background py-8 mt-20"> 
      <div className="max-w-md mx-auto space-y-8"> 
        <p>1 cliente foi encontrado</p>
        <div className="flex flex-col gap-5">
          <ClientCard 
            user={mockUser}
            onViewDetails={() => handleViewDetails(mockUser.id)}
            onEdit={() => handleEdit(mockUser.id)}
            onDelete={() => handleDelete(mockUser.id)}
          />
          <Modal
            isOpen={isEditModalOpen}
            onClose={() => setIsEditModalOpen(false)}
            >
          </Modal>
          <DeleteModal
            isOpen={deleteModalOpen}
            onClose={() => setDeleteModalOpen(false)}
          />
        </div>
        <div className="flex justify-center">
          <Button
            label="Criar cliente"
            className="mt-8"
          />
        </div>
      </div>
    </main>
  )
}