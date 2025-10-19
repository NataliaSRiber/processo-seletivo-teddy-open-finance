import { Button } from "@teddy/ui";
import ClientCard from "../components/ClientCard";
import { useEffect, useState } from "react";
import Modal from "../components/Modal";
import DeleteModal from "../components/DeleteModal";
import { userService } from "../services/api";
import type { User } from "../types/user";
import { toast } from "sonner";

export default function Clients(){
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [, setClientToDelete] = useState<number | null>(null);
  const [users, setUsers] = useState<User[]>([]);

  const handleViewDetails = (userId: number) => {
    console.log('Ver detalhes do cliente:', userId);
  };

  const handleEdit = (userId: number) => {
    setIsEditModalOpen(true);
    console.log('Editar cliente:', userId);
  };

  const handleDelete = (userId: number) => {
    setDeleteModalOpen(true);
    setClientToDelete(userId)
    console.log('Deletar cliente:', userId);
  };

  const loadUsers = async () => {
    try {
      const response = await userService.getAll();
      const list = response.data.clients;
      setUsers(list);
    } catch (error: any) {
      toast.error(`Erro ao carregar usuários: ${error.message}`);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);


  return (
    <main className="min-h-screen w-full px-4 bg-brand-background py-8 mt-20"> 
      <div className="max-w-md mx-auto space-y-8">
        <div className="flex flex-col gap-5">
        <p className="mb-5">{users.length === 1 ? ' 1 cliente foi encontrado:': `${users.length} clientes foram encontrados:` }</p>
          {
            users.length === 0 ? (
              <p>Não há clientes cadastrados</p>
            ) : (
              users.map((user) => (
                <ClientCard
                  key={user.id}
                  user={user}
                  onViewDetails={() => user.id && handleViewDetails(user.id)}
                  onEdit={() => user.id && handleEdit(user.id)}
                  onDelete={() => user.id && handleDelete(user.id)}
                />
              ))
            )
          }
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