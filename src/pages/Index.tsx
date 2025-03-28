
import React from 'react';
import Navbar from "@/components/Navbar";
import EmailForm from "@/components/EmailForm";
import ComparisonTable from "@/components/ComparisonTable";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";
import { Heart, BookOpen, Smartphone, CloudUpload, Check } from 'lucide-react';

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
                  <div className="flex flex-col items-center justify-center p-4 md:p-8">
                    {/* App visualization mockup */}
                    <div className="flex flex-col md:flex-row items-center justify-between w-full gap-6 md:gap-12">
                      {/* Phone mockup */}
                      <div className="relative w-48 h-96 bg-lembras-navy rounded-3xl p-3 shadow-lg">
                        {/* Phone screen */}
                        <div className="bg-white h-full w-full rounded-2xl overflow-hidden flex flex-col">
                          {/* Phone status bar */}
                          <div className="h-6 bg-lembras-lavender flex items-center justify-between px-4">
                            <div className="text-xs font-medium text-lembras-navy">9:41</div>
                            <div className="flex space-x-1">
                              <div className="w-3 h-3 rounded-full bg-lembras-navy"></div>
                              <div className="w-3 h-3 rounded-full bg-lembras-navy"></div>
                              <div className="w-3 h-3 rounded-full bg-lembras-navy"></div>
                            </div>
                          </div>
                          
                          {/* Photo gallery mockup */}
                          <div className="flex-1 p-2 grid grid-cols-2 gap-2 overflow-y-auto">
                            {[...Array(10)].map((_, i) => (
                              <div key={i} className="relative bg-lembras-lavender aspect-square rounded-lg shadow-sm overflow-hidden">
                                <div className={`absolute inset-0 bg-gradient-to-br ${i % 3 === 0 ? 'from-pink-200 to-purple-300' : i % 3 === 1 ? 'from-blue-200 to-green-200' : 'from-yellow-200 to-red-200'}`}></div>
                                {i % 3 === 0 && (
                                  <Heart className="absolute top-1 right-1 h-4 w-4 text-lembras-purple fill-lembras-purple" />
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        {/* Phone home button */}
                        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-white/60 rounded-full"></div>
                      </div>
                      
                      {/* Process arrows */}
                      <div className="flex md:flex-col items-center justify-center">
                        <div className="hidden md:flex h-24 items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-lembras-light-purple flex items-center justify-center shadow-md">
                            <CloudUpload className="h-6 w-6 text-lembras-purple" />
                          </div>
                        </div>
                        <div className="block md:hidden">
                          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-lembras-light-purple shadow-md my-4">
                            <CloudUpload className="h-6 w-6 text-lembras-purple" />
                          </div>
                        </div>
                      </div>
                      
                      {/* Cloud storage visualization */}
                      <div className="bg-gradient-to-br from-lembras-light-purple to-white p-4 rounded-xl shadow-lg w-48 flex flex-col">
                        <div className="flex items-center space-x-2 mb-4">
                          <div className="h-8 w-8 rounded-full bg-lembras-purple flex items-center justify-center">
                            <Check className="h-4 w-4 text-white" />
                          </div>
                          <h4 className="text-lembras-navy text-sm font-bold">Lembras Backup</h4>
                        </div>
                        
                        {/* Photo grid of backed up images */}
                        <div className="grid grid-cols-2 gap-2">
                          {[...Array(4)].map((_, i) => (
                            <div key={i} className="relative aspect-square rounded-lg overflow-hidden shadow-sm bg-white p-1">
                              <div className={`absolute inset-0 m-1 rounded-md bg-gradient-to-br ${i % 3 === 0 ? 'from-pink-200 to-purple-300' : i % 3 === 1 ? 'from-blue-200 to-green-200' : 'from-yellow-200 to-red-200'}`}></div>
                              <Heart className="absolute top-2 right-2 h-3 w-3 text-lembras-purple fill-lembras-purple" />
                            </div>
                          ))}
                        </div>
                        
                        <div className="mt-3 p-2 bg-white rounded-lg text-xs text-center text-lembras-navy font-medium">
                          Favoritos salvos para sempre
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
