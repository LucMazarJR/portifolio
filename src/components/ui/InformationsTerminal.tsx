"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

export default function InformationTerminal() {
    return (
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
                            <div className="text-foreground/80">name: <span className="text-green-400">&quot;Luciano Mazarão Jr&quot;</span>,</div>
                            <div className="text-foreground/80">role: <span className="text-green-400">&quot;Full Stack&quot;</span>,</div>
                            <div className="text-foreground/80">passion: <span className="text-green-400">&quot;Code&quot;</span>,</div>
                            <div className="text-foreground/80">status: <span className="text-green-400">&quot;Learning&quot;</span></div>
                        </div>
                        <div className="text-foreground/80">  {"}"}</div>
                    </div>
                </div>
                
                {/* Botões de navegação */}
                <button 
                    className="absolute -left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-secondary border border-border hover:border-primary hover:bg-muted flex items-center justify-center transition-all hover:scale-110 shadow-lg"
                    aria-label="Anterior"
                >
                    <ChevronLeft className="w-5 h-5 text-foreground hover:text-primary" />
                </button>

                <button 
                    className="absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-secondary border border-border hover:border-primary hover:bg-muted flex items-center justify-center transition-all hover:scale-110 shadow-lg"
                    aria-label="Próximo"
                >
                    <ChevronRight className="w-5 h-5 text-foreground hover:text-primary" />
                </button>

                {/* Badges flutuantes */}
                <div className="absolute -top-4 right-8 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-xl px-4 py-2 shadow-lg animate-pulse">
                    <span className="text-sm font-medium text-primary">React</span>
                </div>

                <div className="absolute -bottom-4 left-8 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-xl px-4 py-2 shadow-lg animate-pulse">
                    <span className="text-sm font-medium text-accent">TypeScript</span>
                </div>
            </div>
        </div>
    )
}