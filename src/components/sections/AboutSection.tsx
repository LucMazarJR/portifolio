"use client";

import { profileData } from "@/data/portfolioPT";
import Image from "next/image";
import ScrollReveal from "../ui/ScrollReveal";

export default function AboutSection() {
  return (
    <section id="sobre" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Imagem */}
          <ScrollReveal animation="fade-left">
            <div className="relative w-full max-w-md mx-auto lg:mx-0">
              <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-border">
                <Image 
                  src="/images/perfilImage.png" 
                  alt="Perfil" 
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Efeito de borda animado */}
              <div className="absolute -inset-4 bg-linear-to-r from-primary to-accent rounded-2xl blur-2xl opacity-20 -z-10"></div>
            </div>
          </ScrollReveal>

          {/* Conteúdo */}
          <ScrollReveal animation="fade-right">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-sm font-semibold text-primary uppercase tracking-wider">
                  Sobre Mim
                </h2>
                <h3 className="text-4xl lg:text-5xl font-bold text-accent">
                  Desenvolvedor Full Stack
                </h3>
              </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {profileData.bio}
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Construo aplicações completas - desde interfaces responsivas e intuitivas no 
              frontend até APIs robustas e bancos de dados no backend. Trabalho com tecnologias como
              <span className="text-primary font-medium"> TypeScript</span>, 
              <span className="text-primary font-medium"> React/Next.js</span>, 
              <span className="text-primary font-medium"> Node.js</span>, 
              <span className="text-primary font-medium"> Python</span> e 
              <span className="text-primary font-medium"> Java</span>.
            </p>

              {/* O que faço diferente */}
              <div className="space-y-3 pt-4">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                  <p className="text-muted-foreground">
                    <span className="text-foreground font-medium">Resolvo problemas reais:</span> Não apenas codar, mas entender o contexto e entregar valor
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                  <p className="text-muted-foreground">
                    <span className="text-foreground font-medium">Código com propósito:</span> Priorizo legibilidade, performance e manutenibilidade
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                  <p className="text-muted-foreground">
                    <span className="text-foreground font-medium">Sempre aprendendo:</span> Atualizado com novas tecnologias e boas práticas do mercado
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
