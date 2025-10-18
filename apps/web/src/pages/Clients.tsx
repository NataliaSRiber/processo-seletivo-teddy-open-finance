import { Button } from "@teddy/ui";
import ClientCard from "../components/ClientCard";

const mockUser = {
  id: '1',
  name: 'Eduardo',
  salary: 3000, 
  companyValuation: 12000 
}

export default function Clients(){
  const handleViewDetails = (userId: string) => {
    console.log('Ver detalhes do cliente:', userId);
  };

  const handleEdit = (userId: string) => {
    console.log('Editar cliente:', userId);
  };

  const handleDelete = (userId: string) => {
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