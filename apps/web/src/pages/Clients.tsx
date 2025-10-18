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
    <main className="flex min-h-screen w-full flex-col items-center justify-center px-4 bg-brand-background ">
      <div className="w-full max-w-md space-y-8">
        <p>X clientes foram encontrados</p>
        <div className="flex flex-col gap-5">
          <ClientCard 
            user={mockUser}
            onViewDetails={() => handleViewDetails(mockUser.id)}
            onEdit={() => handleEdit(mockUser.id)}
            onDelete={() => handleDelete(mockUser.id)}
          />
        </div>
      </div>
    </main>
  )
}