
import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full py-4 md:py-6">
      <div className="lembras-container flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/b55627bb-11da-4a3a-8d37-eae357c51683.png" 
            alt="Lembras Logo" 
            className="h-8 md:h-10"
          />
        </div>
        <a 
          href="#email-form" 
          className="text-sm md:text-base font-medium text-lembras-navy hover:text-lembras-purple transition-colors"
        >
          Quero testar primeiro
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
