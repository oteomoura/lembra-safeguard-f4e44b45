
import React from 'react';
import Navbar from "@/components/Navbar";
import EmailForm from "@/components/EmailForm";
import ComparisonTable from "@/components/ComparisonTable";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";
import { Heart, BookOpen } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="lembras-section pt-8 md:pt-16">
        <div className="lembras-container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="animate-fade-in">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 hero-text-gradient">
                Nunca mais perca suas fotos favoritas.
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8">
                Backup automático e de longo prazo só das fotos que você favoritou. 
                Mesmo que apague do celular, a Lembras ainda lembra.
              </p>
            </div>
            
            <div className="mb-10 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <EmailForm />
            </div>
            
            <div className="flex justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="relative w-full max-w-2xl">
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-lembras-light-purple rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-lembras-purple rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
                
                <div className="relative lembras-card overflow-hidden">
                  <div className="flex items-center justify-center pt-8 pb-12 px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="bg-lembras-lavender p-3 rounded-lg transform rotate-2 shadow-sm">
                        <div className="bg-lembras-light-purple h-24 w-24 md:h-32 md:w-32 rounded-md flex items-center justify-center">
                          <Heart className="h-10 w-10 text-lembras-purple" />
                        </div>
                      </div>
                      <div className="bg-lembras-lavender p-3 rounded-lg transform -rotate-3 shadow-sm">
                        <div className="bg-white h-24 w-24 md:h-32 md:w-32 rounded-md"></div>
                      </div>
                      <div className="bg-lembras-lavender p-3 rounded-lg transform rotate-1 shadow-sm">
                        <div className="bg-white h-24 w-24 md:h-32 md:w-32 rounded-md"></div>
                      </div>
                      <div className="bg-lembras-lavender p-3 rounded-lg transform -rotate-2 shadow-sm">
                        <div className="bg-white h-24 w-24 md:h-32 md:w-32 rounded-md"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Comparison Section */}
      <section className="lembras-section bg-white">
        <div className="lembras-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Por que não confiar só no iCloud?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                O iCloud guarda tudo, mas a Lembras é especialista em preservar suas memórias mais preciosas.
              </p>
            </div>
            
            <ComparisonTable />
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="lembras-section">
        <div className="lembras-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Como funciona?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Três passos simples para preservar o que realmente importa para você.
              </p>
            </div>
            
            <HowItWorks />
          </div>
        </div>
      </section>
      
      {/* Emotional Section */}
      <section className="lembras-section bg-white">
        <div className="lembras-container">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
            <div className="flex-1 order-2 md:order-1">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-lembras-light-purple rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
                <div className="lembras-card">
                  <div className="flex items-center justify-center">
                    <BookOpen className="h-32 w-32 text-lembras-purple opacity-40" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex-1 order-1 md:order-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 hero-text-gradient">
                Suas favoritas não são só fotos. São lembranças. E merecem um lugar especial.
              </h2>
              <p className="text-gray-600 mb-6">
                Cada foto favoritada conta uma história que vale a pena preservar. Com a Lembras, 
                suas memórias mais queridas nunca serão perdidas.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Final CTA Section */}
      <section className="lembras-section bg-gradient-to-r from-lembras-navy to-lembras-royal-blue text-white">
        <div className="lembras-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
              Seja o primeiro a testar a Lembras
            </h2>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Entre para nossa lista de espera e receba acesso antecipado assim que lançarmos.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-10">
              <EmailForm />
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
