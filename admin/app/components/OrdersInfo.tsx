import { Truck } from "lucide-react";
import { ModeToggle } from "./ToggleTheme";

const OrdersInfo = () => {
  return (
    <div>
      <section className="flex justify-end p-4">
        <ModeToggle />
      </section>
    </div>
  );
};

export default OrdersInfo;

export const NomNomLogo = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-teal-500/10 border border-orange-500/30 flex items-center justify-center">
        <Truck className="w-5 h-5 text-red-400" />
      </div>
      <span className="text-2xl font-bold tracking-tight text-white">
        Nom
        <span className="text-2xl font-bold tracking-tight text-red-500">
          Nom
        </span>
      </span>
    </div>
  );
};
