import { useSelectedClients } from "../context/SelectedClientsContext";
import ClientCard from "../components/ClientCard";
import { Button } from "@teddy/ui";


export default function SelectedClient(){
  const { selectedUsers, clearAll } = useSelectedClients();
  

  return (
    <main className="min-h-screen w-full px-4 bg-brand-background py-8 mt-20"> 
      <div className="max-w-md mx-auto space-y-8"> 
        <p>Clientes selecionados</p>
        <div className="flex flex-col gap-5">
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
        <Button
          label="Limpar clientes selecionados"
          onClick={clearAll}
        />
      </div>
    </main>
  )
}
