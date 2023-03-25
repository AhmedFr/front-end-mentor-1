import { FiShoppingCart } from "react-icons/fi";

type buttonProps = {
  text: string;
};

export const ProductButton = ({ text }: buttonProps) => {
  return (
    <button className="ease flex w-full items-center justify-center space-x-2 rounded-lg bg-emerald-600 p-4 font-montserrat text-sm font-bold text-white transition hover:bg-emerald-900 hover:ease-in">
      <FiShoppingCart />
      <label>{text}</label>
    </button>
  );
};
