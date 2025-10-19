import { Button } from "@teddy/ui";
import ClientCard from "../components/ClientCard";
import { useEffect, useState } from "react";
import Modal from "../components/Modal";
import DeleteModal from "../components/DeleteModal";
import { userService } from "../services/api";
import type { User } from "../types/user";
import { toast } from "sonner";

export default function Clients(){
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [, setClientToDelete] = useState<number | null>(null);
  const [users, setUsers] = useState<User[]>([]);

  const selectClient = (userId: number) => {
    console.log('Ver detalhes do cliente:', userId);
  };

  const handleEdit = (userId: number) => {
    const userToEdit = users.find(user => user.id === userId);
    setEditingUser(userToEdit || null);
    setIsModalOpen(true);
  };

  const handleDelete = (userId: number) => {
    setDeleteModalOpen(true);
    setClientToDelete(userId)
    console.log('Deletar cliente:', userId);
  };

  const handleCreate = () => {
    setEditingUser(null);
    setIsModalOpen(true);
  };

  const handleSave = async (formData: User) => {
    try {
      if (editingUser) {
        console.log(formData)
        await userService.update(formData);
        toast.success('Cliente atualizado!');
      } else {
        await userService.create(formData);
        toast.success('Cliente criado!');
      }
      await loadUsers();
      setEditingUser(null);
      setIsModalOpen(false);
    } catch (error: any) {
      toast.error(`Erro: ${error.message}`);
    }
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
                  onSelectClient={() => user.id && selectClient(user.id)}
                  onEdit={() => user.id && handleEdit(user.id)}
                  onDelete={() => user.id && handleDelete(user.id)}
                />
              ))
            )
          }
          <Modal
            isOpen={isModalOpen}
            onClose={() => { setIsModalOpen(false); setEditingUser(null); }}
            user={editingUser || undefined}
            onSave={handleSave}
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
            onClick={handleCreate}
          />
        </div>
      </div>
    </main>
  )
}