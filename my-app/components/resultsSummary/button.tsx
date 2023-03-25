type buttonProps = {
  text: string;
};

export const Button = ({ text }: buttonProps) => {
  return (
    <button className="h-12 w-full rounded-full text-white transition-all duration-500 bg-indigo-900 hover:bg-indigo-700">
      {text}
    </button>
  );
};
