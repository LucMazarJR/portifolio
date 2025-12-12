"use client";

import { experiences } from "@/data/portfolioPT";
import ScrollReveal from "@/components/ui/ScrollReveal";

const ExperienceCard = ({ experience }: { experience: typeof experiences[0] }) => (
  <div className="relative pl-8 pb-12 last:pb-0">
    {/* Linha vertical */}
    <div className="absolute left-0 top-0 bottom-0 w-px bg-border"></div>
    
    {/* Ponto na timeline */}
    <div className="absolute left-0 top-2 w-3 h-3 -translate-x-1/2 rounded-full bg-primary border-2 border-background shadow-lg shadow-primary/50"></div>

    <div className="group">
      <div className="space-y-3">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <h4 className="text-xl font-bold group-hover:text-primary transition-colors">
              {experience.position}
            </h4>
            <p className="text-lg text-muted-foreground">{experience.company}</p>
          </div>
          <span className="text-sm text-muted-foreground bg-card border border-border px-3 py-1 rounded-full w-fit">
            {experience.period}
          </span>
        </div>

        {/* Descrição */}
        <p className="text-muted-foreground leading-relaxed">
          {experience.description}
        </p>

        {/* Tecnologias */}
        <div className="flex flex-wrap gap-2 pt-2">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium bg-secondary/50 border border-border rounded-full text-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default function ExperienceSection() {
  return (
    <section id="experiencia" className="py-20 lg:py-32 bg-secondary/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider">
              Trajetória
            </h2>
          <h3 className="text-4xl lg:text-5xl font-bold">
            Experiência{" "}
            <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
              Profissional
            </span>
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Minha jornada profissional no desenvolvimento de software
          </p>
          </div>
        </ScrollReveal>

        <div className="relative">
          {experiences.map((experience, index) => (
            <ScrollReveal key={experience.id} animation="fade-up" delay={index * 150}>
              <ExperienceCard experience={experience} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
