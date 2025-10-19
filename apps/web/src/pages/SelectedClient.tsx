import ClientCard from "../components/ClientCard";


const mockUser = {
  id: '1',
  name: 'Eduardo',
  salary: 3000, 
  companyValuation: 12000 
}

export default function SelectedClient(){

  return (
    <main className="min-h-screen w-full px-4 bg-brand-background py-8 mt-20"> 
      <div className="max-w-md mx-auto space-y-8"> 
        <p>Clientes selecionados</p>
        <div className="flex flex-col gap-5">
          <ClientCard 
            user={mockUser}
            isSelected={true}
          />
        </div>
      </div>
    </main>
  )
}
