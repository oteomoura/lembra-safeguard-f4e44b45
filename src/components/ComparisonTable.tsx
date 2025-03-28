
import React from 'react';
import { Check, X } from 'lucide-react';

const ComparisonTable = () => {
  return (
    <div className="w-full overflow-x-auto">
      <div className="lembras-card">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left p-3 border-b border-lembras-light-purple">Funcionalidade</th>
              <th className="p-3 border-b border-lembras-light-purple">
                <div className="flex flex-col items-center">
                  <img 
                    src="/lovable-uploads/b55627bb-11da-4a3a-8d37-eae357c51683.png" 
                    alt="Lembras Logo" 
                    className="h-8 mb-2"
                  />
                  <span>Lembras</span>
                </div>
              </th>
              <th className="p-3 border-b border-lembras-light-purple">
                <div className="flex flex-col items-center">
                  <span className="text-4xl">☁️</span>
                  <span>iCloud</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border-b border-lembras-light-purple">Backup exclusivo de favoritos</td>
              <td className="p-3 border-b border-lembras-light-purple text-center"><Check className="mx-auto text-green-500" /></td>
              <td className="p-3 border-b border-lembras-light-purple text-center"><X className="mx-auto text-red-500" /></td>
            </tr>
            <tr>
              <td className="p-3 border-b border-lembras-light-purple">Preservação de longo prazo</td>
              <td className="p-3 border-b border-lembras-light-purple text-center"><Check className="mx-auto text-green-500" /></td>
              <td className="p-3 border-b border-lembras-light-purple text-center"><X className="mx-auto text-red-500" /></td>
            </tr>
            <tr>
              <td className="p-3 border-b border-lembras-light-purple">Recuperação mesmo após exclusão local</td>
              <td className="p-3 border-b border-lembras-light-purple text-center"><Check className="mx-auto text-green-500" /></td>
              <td className="p-3 border-b border-lembras-light-purple text-center"><X className="mx-auto text-red-500" /></td>
            </tr>
            <tr>
              <td className="p-3 border-b border-lembras-light-purple">Foco em memórias importantes</td>
              <td className="p-3 border-b border-lembras-light-purple text-center"><Check className="mx-auto text-green-500" /></td>
              <td className="p-3 border-b border-lembras-light-purple text-center"><X className="mx-auto text-red-500" /></td>
            </tr>
            <tr>
              <td className="p-3">Sem limite de armazenamento para favoritos</td>
              <td className="p-3 text-center"><Check className="mx-auto text-green-500" /></td>
              <td className="p-3 text-center"><X className="mx-auto text-red-500" /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComparisonTable;
