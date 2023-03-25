import { Score } from "@/components/resultsSummary/score";
import { Category } from "@/components/resultsSummary/category";
import { Button } from "@/components/resultsSummary/button";
import { BiBrain, BiBoltCircle, BiChat, BiShow } from "react-icons/bi";

const categories = [
  {
    name: "Reaction",
    icon: <BiBoltCircle size={24} />,
    score: 80,
    total: 100,
    color: "red",
  },
  {
    name: "Memory",
    icon: <BiBrain size={24} />,
    score: 92,
    total: 100,
    color: "yellow",
  },
  {
    name: "Verbal",
    icon: <BiChat size={24} />,
    score: 61,
    total: 100,
    color: "green",
  },
  {
    name: "Visual",
    icon: <BiShow size={24} />,
    score: 72,
    total: 100,
    color: "blue",
  },
];

export const ResultsCard = () => {
  return (
    <div className="flex w-[700px] rounded-2xl shadow-2xl shadow-blue-100">
      <div className="flex w-1/2 flex-col items-center space-y-4 rounded-2xl bg-gradient-to-b from-indigo-600 to-blue-700 p-8 text-center text-white">
        <h2 className="text-xl font-bold capitalize">Your Result</h2>
        <Score />
        <h1 className="text-2xl font-bold">Great</h1>
        <p className="text-sm">
          You scored higher than XX% of the people who have taken these tests.
        </p>
      </div>
      <div className="w-1/2 space-y-8 p-8 ">
        <h2 className="text-xl font-bold">Summary</h2>
        <div className="space-y-3">
          {categories.map((category) => (
            <Category
              key={category.name}
              name={category.name}
              icon={category.icon}
              score={category.score}
              total={category.total}
              color={category.color}
            />
          ))}
        </div>
        <Button text="Continue" />
      </div>
    </div>
  );
};
