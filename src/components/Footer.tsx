
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-lembras-light-purple">
      <div className="lembras-container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/b55627bb-11da-4a3a-8d37-eae357c51683.png" 
              alt="Lembras Logo" 
              className="h-8 mr-2"
            />
            <p className="text-sm text-gray-600">
              © {currentYear} Lembras. Todos os direitos reservados.
            </p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-gray-600 hover:text-lembras-purple transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-lembras-purple transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-lembras-purple transition-colors">
              Contato
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
