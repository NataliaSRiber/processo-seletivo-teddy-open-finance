import { useSelectedClients } from "../context/SelectedClientsContext";
import ClientCard from "../components/ClientCard";
import { Button } from "@teddy/ui";


export default function SelectedClient(){
  const { selectedUsers, clearAll } = useSelectedClients();
  

  return (
    <div className="min-h-screen w-full px-4 bg-brand-background py-8 mt-20"> 
      <div className="w-full space-y-8"> 
        <p className="mb-5 justify-start w-full text-bold text-base">Clientes selecionados</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 min-w-full">
          {
            selectedUsers.length == 0  ? (
               <p>Não há clientes selecionados </p>
            ) : (
              selectedUsers.map((user) =>  (
                <ClientCard 
                  user={user}
                />
              ))
            )
          }
        </div>
        <div className="flex w-full justify-center items-center mt-8">
          <Button
            label="Limpar clientes selecionados"
            onClick={clearAll}
          />
        </div>
      </div>
    </div>
  )
}
