import type { User } from "../types/user";
import EditIcon from "../assets/icons/EditIcon";
import PlusIcon from "../assets/icons/PlusIcon";
import TrashIcon from "../assets/icons/TrashIcon";
import RemoveIcon from "../assets/icons/RemoveIcon";
import { useSelectedClients } from "../hooks/useSelectedClients";

type ClientCardProps = {
  user: User,
  onClick?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
};

export default function ClientCard ({ user, onClick, onDelete, onEdit }: ClientCardProps) {
  const { addToSelected, removeFromSelected, isSelectedClient } = useSelectedClients();

  const selectedCard = isSelectedClient(user.id!);

  const togleSelected = () => {
    if (selectedCard) {
      removeFromSelected(user.id!)
    } else {
      addToSelected(user!)
    }
  }
   return (
    <div
      data-testid="client-card"
      onClick={onClick}
      className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer bg-white
      sm:max-w-[400px] md:max-w-[521px] lg:max-w-[535px] w-full
      "
    >
      <h3 className="text-xl font-bold text-gray-900 text-center">{user.name}</h3>
      <div className="mt-4 space-y-2 justify-center text-center">
        <p className="text-black">Salário: R$ {user.salary.toLocaleString()}</p>
        <p className="text-black">Empresa: R$ {user.companyValuation.toLocaleString()}</p>
      </div>
      {selectedCard ? (
        <div>
          <button
            className="cursor-pointer bg-transparent"
            onClick={togleSelected}
          >
           <RemoveIcon/>
          </button>
        </div>
      ) : (
        <div 
        className="flex justify-between items-center w-full mt-5"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="cursor-pointer bg-transparent"
          onClick={togleSelected}
        >
          <PlusIcon/>
        </button>
        <button 
          className="cursor-pointer bg-transparent"
          onClick={onEdit}
          >
          <EditIcon/> 
        </button>
        <button
          data-test="delete-btn"
          className="cursor-pointer bg-transparent"
          onClick={onDelete}
          >
          <TrashIcon/>
        </button>
      </div>
      )}
    </div>
  )
 
};