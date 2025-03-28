import React from 'react';
import Navbar from "@/components/Navbar";
import EmailForm from "@/components/EmailForm";
import ComparisonTable from "@/components/ComparisonTable";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";
import { Heart, BookOpen, Smartphone, CloudUpload, Image, Check } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section with enhanced background */}
      <section className="lembras-section pt-8 md:pt-16 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-lembras-lavender to-white z-0"></div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-lembras-light-purple rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
          <div className="absolute top-1/3 -left-24 w-72 h-72 bg-lembras-purple rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-lembras-navy rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '4s' }}></div>
          <div className="absolute w-full h-full bg-[url('/pattern.svg')] bg-repeat opacity-5"></div>
        </div>
        
        <div className="lembras-container relative z-10">
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
                
                <div className="relative lembras-card overflow-hidden backdrop-blur-sm bg-white/90 border border-white/40 shadow-lg">
                  <div className="flex flex-col items-center justify-center pt-8 pb-12 px-4">
                    {/* Flow illustration */}
                    <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-2xl mb-6">
                      {/* Step 1: Phone with heart */}
                      <div className="flex flex-col items-center mb-6 md:mb-0">
                        <div className="bg-lembras-lavender p-4 rounded-full mb-3">
                          <Smartphone className="h-10 w-10 text-lembras-navy" />
                        </div>
                        <p className="text-sm text-gray-600">Favorite no iPhone</p>
                      </div>
                      
                      {/* Arrow */}
                      <div className="hidden md:block">
                        <div className="w-16 h-0.5 bg-lembras-purple relative">
                          <div className="absolute -right-1 -top-1.5 border-t-[6px] border-r-[6px] border-b-[6px] border-t-transparent border-r-lembras-purple border-b-transparent"></div>
                        </div>
                      </div>
                      <div className="block md:hidden mb-3">
                        <div className="h-6 w-0.5 bg-lembras-purple relative">
                          <div className="absolute -bottom-1 -left-1.5 border-l-[6px] border-b-[6px] border-r-[6px] border-l-transparent border-b-lembras-purple border-r-transparent"></div>
                        </div>
                      </div>
                      
                      {/* Step 2: Cloud upload */}
                      <div className="flex flex-col items-center mb-6 md:mb-0">
                        <div className="bg-lembras-lavender p-4 rounded-full mb-3">
                          <CloudUpload className="h-10 w-10 text-lembras-purple" />
                        </div>
                        <p className="text-sm text-gray-600">Backup automático</p>
                      </div>
                      
                      {/* Arrow */}
                      <div className="hidden md:block">
                        <div className="w-16 h-0.5 bg-lembras-purple relative">
                          <div className="absolute -right-1 -top-1.5 border-t-[6px] border-r-[6px] border-b-[6px] border-t-transparent border-r-lembras-purple border-b-transparent"></div>
                        </div>
                      </div>
                      <div className="block md:hidden mb-3">
                        <div className="h-6 w-0.5 bg-lembras-purple relative">
                          <div className="absolute -bottom-1 -left-1.5 border-l-[6px] border-b-[6px] border-r-[6px] border-l-transparent border-b-lembras-purple border-r-transparent"></div>
                        </div>
                      </div>
                      
                      {/* Step 3: Permanent storage */}
                      <div className="flex flex-col items-center">
                        <div className="bg-lembras-lavender p-4 rounded-full mb-3">
                          <Check className="h-10 w-10 text-lembras-navy" />
                        </div>
                        <p className="text-sm text-gray-600">Armazenamento seguro</p>
                      </div>
                    </div>
                    
                    {/* Photo examples */}
                    <div className="grid grid-cols-4 gap-4">
                      <div className="bg-lembras-lavender p-3 rounded-lg transform rotate-2 shadow-sm">
                        <div className="bg-lembras-light-purple h-24 w-24 md:h-32 md:w-32 rounded-md flex items-center justify-center relative">
                          <Image className="h-10 w-10 text-lembras-purple opacity-40" />
                          <Heart className="h-6 w-6 text-lembras-purple absolute top-2 right-2" />
                        </div>
                      </div>
                      <div className="bg-lembras-lavender p-3 rounded-lg transform -rotate-3 shadow-sm">
                        <div className="bg-white h-24 w-24 md:h-32 md:w-32 rounded-md flex items-center justify-center relative">
                          <Image className="h-10 w-10 text-lembras-light-purple opacity-40" />
                          <Heart className="h-6 w-6 text-lembras-purple absolute top-2 right-2" />
                        </div>
                      </div>
                      <div className="bg-lembras-lavender p-3 rounded-lg transform rotate-1 shadow-sm">
                        <div className="bg-white h-24 w-24 md:h-32 md:w-32 rounded-md flex items-center justify-center relative">
                          <Image className="h-10 w-10 text-lembras-light-purple opacity-40" />
                          <Heart className="h-6 w-6 text-lembras-purple absolute top-2 right-2" />
                        </div>
                      </div>
                      <div className="bg-lembras-lavender p-3 rounded-lg transform -rotate-2 shadow-sm">
                        <div className="bg-white h-24 w-24 md:h-32 md:w-32 rounded-md flex items-center justify-center relative">
                          <Image className="h-10 w-10 text-lembras-light-purple opacity-40" />
                          <Heart className="h-6 w-6 text-lembras-purple absolute top-2 right-2" />
                        </div>
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
