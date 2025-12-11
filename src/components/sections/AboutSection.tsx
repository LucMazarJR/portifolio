"use client";

import { profileData } from "@/data/portfolio";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function AboutSection() {
  const imageAnimation = useScrollAnimation();
  const contentAnimation = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="sobre" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Imagem */}
          <div
            ref={imageAnimation.ref}
            className={`relative scroll-animate scroll-fade-left ${
              imageAnimation.isVisible ? "is-visible" : ""
            }`}
          >
            <div className="relative w-full max-w-md mx-auto lg:mx-0">
              {/* Placeholder para imagem */}
              <div className="aspect-square rounded-2xl bg-linear-to-br from-primary/20 to-accent/20 border-2 border-border overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  <svg
                    className="w-32 h-32"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
              </div>
              {/* Efeito de borda animado */}
              <div className="absolute -inset-4 bg-linear-to-r from-primary to-accent rounded-2xl blur-2xl opacity-20 -z-10"></div>
            </div>
          </div>

          {/* Conteúdo */}
          <div
            ref={contentAnimation.ref}
            className={`space-y-6 scroll-animate scroll-fade-right ${
              contentAnimation.isVisible ? "is-visible" : ""
            }`}
          >
            <div className="space-y-4">
              <h2 className="text-sm font-semibold text-primary uppercase tracking-wider">
                Sobre Mim
              </h2>
              <h3 className="text-4xl lg:text-5xl font-bold">
                Criando experiências
                <span className="block bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                  digitais incríveis
                </span>
              </h3>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {profileData.bio}
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Busco sempre estar atualizado com as melhores práticas e tecnologias
              do mercado, focando em escrever código limpo, testável e de fácil
              manutenção.
            </p>

            {/* Estatísticas */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="space-y-1">
                <div className="text-3xl lg:text-4xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                  3+
                </div>
                <div className="text-sm text-muted-foreground">
                  Anos de Experiência
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl lg:text-4xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                  20+
                </div>
                <div className="text-sm text-muted-foreground">
                  Projetos Concluídos
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl lg:text-4xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                  10+
                </div>
                <div className="text-sm text-muted-foreground">
                  Tecnologias
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
