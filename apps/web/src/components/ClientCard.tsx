import EditIcon from "../assets/icons/EditIcon";
import PlusIcon from "../assets/icons/PlusIcon";
import TrashIcon from "../assets/icons/TrashIcon";

type ClientCardProps = {
  user: any,
  onClick?: () => void;
};

export default function ClientCard ({ user: {name, salary, companyValuation}, onClick }: ClientCardProps) {
  return (
    <div 
      onClick={onClick}
      className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer
      sm:max-w-[400px] md:max-w-[521px] lg:max-w-[535px] w-full
      "
    >
      <h3 className="text-xl font-bold text-gray-900 text-center">{name}</h3>
      <div className="mt-4 space-y-2 justify-center text-center">
        <p className="text-black">Salário: R$ {salary.toLocaleString()}</p>
        <p className="text-black">Empresa: R$ {companyValuation.toLocaleString()}</p>
      </div>
      <div className="flex justify-between items-center w-full mt-5"
      >
        <button className="cursor-pointer bg-transparent"
        >
          <PlusIcon/>
        </button>
        <button className="cursor-pointer bg-transparent">
          <EditIcon/> 
        </button>
        <button className="cursor-pointer bg-transparent">
          <TrashIcon/>
        </button>
      </div>
    </div>
  )
 
};