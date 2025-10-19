import { useContext } from "react";
import { SelectedClientsContext } from "../context/selectedClients.context";

export function useSelectedClients() {
  const ctx = useContext(SelectedClientsContext);
  if (!ctx) throw new Error("useSelectedClients deve ser utilizado com um SelectedClientsProvider");
  return ctx;
}
