
import React from 'react';
import { Star, CloudUpload, Image } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Star className="h-8 w-8 text-lembras-purple" />,
      title: "Favorite suas fotos",
      description: "Use o recurso de favoritos do seu celular para marcar as fotos especiais que deseja preservar."
    },
    {
      icon: <CloudUpload className="h-8 w-8 text-lembras-purple" />,
      title: "Backup automático",
      description: "A Lembras detecta e faz backup apenas das fotos que você favoritou, poupando espaço."
    },
    {
      icon: <Image className="h-8 w-8 text-lembras-purple" />,
      title: "Acesse quando quiser",
      description: "Mesmo que apague do celular, suas memórias favoritas estarão sempre acessíveis na Lembras."
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {steps.map((step, index) => (
        <div key={index} className="lembras-card flex flex-col items-center text-center">
          <div className="mb-4 rounded-full bg-lembras-light-purple p-4">
            {step.icon}
          </div>
          <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
          <p className="text-gray-600">{step.description}</p>
          <div className="mt-4 font-bold text-lembras-navy">
            Passo {index + 1}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HowItWorks;
