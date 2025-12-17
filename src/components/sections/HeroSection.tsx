"use client";

import { MoveDown, Code2, Sparkles } from "lucide-react";
import StatCard from "../ui/StatCard";
import { totalProjects, totalStack } from "@/data/portfolioPT";
import InformationTerminal from "../ui/InformationsTerminal";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Grid pattern de fundo */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"></div>

      {/* Efeitos luminosos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Coluna Esquerda - Texto */}
          <div className="space-y-8 animate-slide-in-left">
            {/* Badge com ícone */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Open to work</span>
            </div>

            {/* Título */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                Olá! Eu sou
                <span className="block mt-2 bg-linear-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Luciano
                </span>
              </h1>

              <div className="flex items-center gap-3 text-xl sm:text-2xl text-foreground/70">
                <Code2 className="w-6 h-6 text-primary" />
                <p>Desenvolvedor Full Stack</p>
              </div>
            </div>

            {/* Descrição */}
            <p className="text-lg text-foreground/60 leading-relaxed max-w-xl">
              Estudante de Engenharia de Software no 5° semestre, transformando
              <span className="text-primary font-medium"> ideias </span> em
              <span className="text-primary font-medium"> experiências digitais</span> através
              de código limpo e criativo
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#projetos"
                className="group relative px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-primary/50 hover:-translate-y-0.5"
              >
                <span className="flex items-center gap-2">
                  Explorar Projetos
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </a>

              <a
                href="#contato"
                className="px-6 py-3 bg-transparent border-2 border-border hover:border-primary text-foreground rounded-lg font-medium transition-all hover:-translate-y-0.5"
              >
                Entrar em Contato
              </a>
            </div>

            {/* Stats rápidas */}
            <div className="flex gap-8 pt-8 border-t border-border/50">
              <StatCard data={totalStack} type="Tecnologias" color={1} reference="#tecnologias"></StatCard>
              <StatCard data={totalProjects} type="Projetos" color={2} reference="#projetos"></StatCard>
              <StatCard value={2024} type="Ano de Inicio" color={1}></StatCard>
            </div>
          </div>

          <InformationTerminal/>
        </div>

        {/* Indicador de scroll */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <MoveDown className="w-6 h-6 text-foreground/60" />
        </div>
      </div>
    </section>
  );
}
