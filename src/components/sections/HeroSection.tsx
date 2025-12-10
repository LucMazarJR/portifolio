"use client";

import { profileData } from "@/data/portfolio";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-background via-background to-secondary">
      {/* Efeitos de fundo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Badge de boas-vindas */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-sm text-muted-foreground">Disponível para novos projetos</span>
          </div>

          {/* Nome e título */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              Olá, eu sou{" "}
              <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                {profileData.name}
              </span>
            </h1>
            <p className="text-2xl sm:text-3xl lg:text-4xl text-muted-foreground font-light">
              {profileData.title}
            </p>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              {profileData.subtitle}
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <a
              href="#projetos"
              className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/50"
            >
              <span className="relative z-10">Ver Projetos</span>
              <div className="absolute inset-0 bg-linear-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
            <a
              href="#contato"
              className="px-8 py-4 bg-card border-2 border-border text-foreground rounded-lg font-medium text-lg transition-all hover:scale-105 hover:border-primary hover:bg-card/80"
            >
              Entre em Contato
            </a>
          </div>

          {/* Indicador de scroll */}
          <div className="pt-16 animate-bounce">
            <svg
              className="w-6 h-6 mx-auto text-muted-foreground"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
