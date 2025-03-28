
import React, { useState } from 'react';
import { toast } from '@/components/ui/use-toast';

const EmailForm = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "E-mail inválido",
        description: "Por favor, insira um endereço de e-mail válido.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulating form submission to Formspree - in a real implementation replace with actual API call
    try {
      // For demonstration, we're just delaying
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Obrigado pelo interesse!",
        description: "Entraremos em contato quando o produto estiver disponível.",
      });
      
      setEmail('');
    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description: "Ocorreu um problema ao enviar seu e-mail. Tente novamente.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto" id="email-form">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          placeholder="Seu melhor e-mail"
          className="lembras-input flex-grow"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button 
          type="submit" 
          className="lembras-button-primary whitespace-nowrap"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Enviando...' : 'Quero testar primeiro'}
        </button>
      </div>
    </form>
  );
};

export default EmailForm;
