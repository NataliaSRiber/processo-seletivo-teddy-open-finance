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
  const [users, setUsers] = useState<User[]>([]);
  const [userToDelete, setUserToDelete] = useState<User | null>(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const handleEdit = (userId: number) => {
    const userToEdit = users.find(user => user.id === userId);
    setEditingUser(userToEdit || null);
    setIsModalOpen(true);
  };
  
  const handleOpenDelete = (userId: number) => {
    const userToDeleteFound = users.find(user => user.id === userId);
    if (userToDeleteFound) {
      setUserToDelete(userToDeleteFound);
      setDeleteModalOpen(true);
    }
  };

  const handleDelete = async (userId: number) => {
    try {
      await userService.delete(userId);
      toast.success('Cliente deletado!');
      setDeleteModalOpen(false);
      setUserToDelete(null);
      await loadUsers();
    } catch (error: any) {
      toast.error(`Erro: ${error.message}`);
    }
  };

  const handleCreate = () => {
    setEditingUser(null);
    setIsModalOpen(true);
  };

  const handleSave = async (formData: User) => {
    try {
      if (editingUser) {
        await userService.update(formData);
        toast.success('Cliente atualizado!');
        await loadUsers();
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

  const loadUsers = async (currentPage: number = page, limit: number = itemsPerPage) => {
    try {
      const response = await userService.getAll(currentPage, limit);
      const list = response.data.clients;
      const page = response.data.currentPage;
      const total = response.data.totalPages;
      setPage(page);
      setTotalPages(total);
      setUsers(list);
    } catch (error: any) {
      toast.error(`Erro ao carregar usuários: ${error.message}`);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    loadUsers(newPage, itemsPerPage);
  };

  const handleItemsPerPageChange = (newItemsPerPage: number) => {
    setItemsPerPage(newItemsPerPage);
    setPage(1);
    loadUsers(1, newItemsPerPage);
  };

  return (
    <div className="min-h-screen w-full px-4 bg-brand-background py-8 md:mt-20 mt-30"> 
      <div className="space-y-8 w-full">
        <div className="flex flex-col gap-5 w-full">
          <p className="mb-5 justify-start w-full text-bold text-base">{users.length === 1 ? ' 1 cliente foi encontrado:': `${users.length} clientes foram encontrados:` }</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 min-w-full">
            {
              users.length === 0 ? (
                <p>Não há clientes cadastrados</p>
              ) : (
                users.map((user) => (
                  <ClientCard
                    key={user.id}
                    user={user}
                    onEdit={() => user.id && handleEdit(user.id)}
                    onDelete={() => user.id && handleOpenDelete(user.id)}
                  />
                ))
              )
            }
          </div>
          {totalPages > 1 && (
            <div className="flex flex-col gap-4 items-center mt-8">
              <div className="flex items-center gap-2">
                <label htmlFor="items-per-page" className="text-sm text-gray-600">
                  Itens por página:
                </label>
                <input
                  id="items-per-page"
                  type="number"
                  min="1"
                  max="50"
                  value={itemsPerPage}
                  onChange={(e) => handleItemsPerPageChange(Number(e.target.value))}
                  className="w-16 px-2 py-1 border border-gray-300 rounded text-center"
                />
              </div>
              <div className="flex gap-4 items-center">
                <Button 
                  label="←" 
                  disabled={page === 1} 
                  onClick={() => handlePageChange(page - 1)} 
                />
                <span className="text-sm">
                  Página {page} de {totalPages}
                </span>
                <Button 
                  label="→" 
                  disabled={page === totalPages} 
                  onClick={() => handlePageChange(page + 1)} 
                />
              </div>
            </div>
          )}
          <Modal
            isOpen={isModalOpen}
            onClose={() => { setIsModalOpen(false); setEditingUser(null); }}
            user={editingUser || undefined}
            onSave={handleSave}
          >
          </Modal>
          <DeleteModal
            isOpen={deleteModalOpen}
            onClose={() => {
            setDeleteModalOpen(false);
            setUserToDelete(null);
            }}
            onDelete={handleDelete}
            user={userToDelete || undefined}
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
    </div>
  )
}