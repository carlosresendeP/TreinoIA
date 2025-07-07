//header do site

import {Barbell} from "@phosphor-icons/react";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-lg shadow-cyan-100/50 w-full gap-4">
      <div className="flex items-center gap-2 p-4 max-w-7xl mx-auto">
        <Barbell className="bg-teal-600 text-white text-7xl p-4 border-none rounded-2xl" />
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold font-Poppings text-gray-700">FitnessAI</h1>
          <p className="font-Poppings text-sm text-gray-600">Seu asssitente de treinos personalizados</p>
          <p className="text-xs text-gray-400">gpt4o-mini</p>
        </div>

        
      </div>
    </header>
  );
};

export default Header;

