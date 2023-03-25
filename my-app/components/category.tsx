import { ReactElement } from "react";

type cateogryProps = {
  name: string;
  icon: ReactElement;
  score: number;
  total: number;
  color: string;
};

type colors = {
  [key: string]: string;
}

const bgColors: colors = {
  blue: "bg-blue-100",
  red: "bg-red-100",
  green: "bg-green-100",
  yellow: "bg-yellow-100",
};

const textColors: colors = {
  blue: "text-blue-600",
  red: "text-red-600",
  green: "text-green-600",
  yellow: "text-yellow-600",
};

export const Category = ({
  name,
  icon,
  score,
  total,
  color,
}: cateogryProps) => {
  let bgColor = bgColors[color];
  let textColor = textColors[color];

  return (
    <div
      className={`flex h-12 items-center justify-between rounded-lg ${bgColor} p-3`}
    >
      <div className={`flex items-center ${textColor} space-x-2`}>
        <>{icon}</>
        <h3 className=" text-lg font-bold">{name}</h3>
      </div>
      <div className="flex">
        <p className="text-lg font-bold">{score}&nbsp;</p>
        <p className="text-lg font-bold text-gray-500"> / {total}</p>
      </div>
    </div>
  );
};
