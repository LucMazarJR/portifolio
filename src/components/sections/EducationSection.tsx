"use client";

import { education, courses, awards } from '@/data/portfolioPT';

const EducationCard = ({ item }: { item: typeof education[0] }) => (
  <div className="bg-card border border-border rounded-xl p-6 hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/10">
    <div className="space-y-3">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h4 className="text-xl font-bold">{item.degree} em {item.field}</h4>
          <p className="text-lg text-primary">{item.institution}</p>
        </div>
        <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full whitespace-nowrap">
          {item.period}
        </span>
      </div>
      {item.description && (
        <p className="text-muted-foreground">{item.description}</p>
      )}
    </div>
  </div>
);

const CourseCard = ({ course }: { course: typeof courses[0] }) => (
  <div className="bg-card border border-border rounded-lg p-4 hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/10">
    <div className="space-y-2">
      <h5 className="font-semibold">{course.name}</h5>
      <p className="text-sm text-muted-foreground">{course.institution}</p>
      <div className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground">{course.date}</span>
        {course.certificate && (
          <a
            href={course.certificate}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-primary hover:underline flex items-center gap-1"
          >
            Ver certificado
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        )}
      </div>
    </div>
  </div>
);

const AwardCard = ({ award }: { award: any }) => (
  <div className="bg-card border border-border rounded-lg p-4 hover:border-accent transition-all hover:shadow-lg hover:shadow-accent/10">
    <div className="space-y-2">
      <div className="flex items-start justify-between gap-4">
        <h5 className="font-semibold text-accent">{award.title}</h5>
        <span className="text-xs text-muted-foreground whitespace-nowrap">{award.date}</span>
      </div>
      <p className="text-sm text-muted-foreground">{award.issuer}</p>
      {award.description && (
        <p className="text-sm text-muted-foreground">{award.description}</p>
      )}
    </div>
  </div>
);

export default function EducationSection() {
  return (
    <section id="formacao" className="py-20 lg:py-32 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider">
            Educação
          </h2>
          <h3 className="text-4xl lg:text-5xl font-bold">
            Formação &{" "}
            <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
              Aprendizado
            </span>
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Minha jornada acadêmica e desenvolvimento contínuo
          </p>
        </div>

        <div className="space-y-12">
          {/* Formação Acadêmica */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-linear-to-br from-primary to-accent flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold">Formação Acadêmica</h4>
            </div>
            <div className="space-y-4">
              {education.map((item) => (
                <EducationCard key={item.id} item={item} />
              ))}
            </div>
          </div>

          {/* Cursos e Certificações */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-linear-to-br from-accent to-primary flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold">Cursos & Certificações</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {courses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>

          {/* Reconhecimentos */}
          {awards.length > 0 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-linear-to-br from-yellow-500 to-orange-500 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold">Reconhecimentos</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {awards.map((award) => (
                  <AwardCard key={award.id} award={award} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
