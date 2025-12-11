"use client";

import { MoveDown, Code2, Sparkles } from "lucide-react";

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
              de código limpo e criativo.
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
              <div>
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-foreground/50">Tecnologias</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">10+</div>
                <div className="text-sm text-foreground/50">Projetos</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">2024</div>
                <div className="text-sm text-foreground/50">Ano de Início</div>
              </div>
            </div>
          </div>

          {/* Coluna Direita - Visual */}
          <div className="relative lg:h-[600px] animate-slide-in-right">
            {/* Card flutuante com código */}
            <div className="relative mx-auto max-w-lg">
              {/* Card principal */}
              <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-xs text-foreground/50 ml-2">portfolio.tsx</span>
                </div>

                <div className="font-mono text-sm space-y-2">
                  <div>
                    <span className="text-accent">const</span>
                    <span className="text-foreground/80">  <span className="text-primary">developer</span> = {"{"}</span>
                  </div>
                  <div className="space-y-1 pl-6">
                    <div className="text-foreground/80">name: <span className="text-green-400">&quot;Luciano&quot;</span>,</div>
                    <div className="text-foreground/80">role: <span className="text-green-400">&quot;Full Stack&quot;</span>,</div>
                    <div className="text-foreground/80">passion: <span className="text-green-400">&quot;Code&quot;</span>,</div>
                    <div className="text-foreground/80">status: <span className="text-green-400">&quot;Learning&quot;</span></div>
                  </div>
                  <div className="text-foreground/80">  {"}"}</div>
                </div>
              </div>

              {/* Badge flutuante 1 */}
              <div className="absolute -top-4 -right-4 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-xl px-4 py-2 shadow-lg animate-pulse">
                <span className="text-sm font-medium text-primary">React</span>
              </div>

              {/* Badge flutuante 2 */}
              <div className="absolute -bottom-4 -left-4 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-xl px-4 py-2 shadow-lg animate-pulse delay-500">
                <span className="text-sm font-medium text-accent">TypeScript</span>
              </div>
            </div>
          </div>
        </div>

        {/* Indicador de scroll */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <MoveDown className="w-6 h-6 text-foreground/60" />
        </div>
      </div>
    </section>
  );
}
