"use client";

import { TerminalLanguages, TerminalLanguage } from "@/data/terminalLangueges";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Terminal({ archiveName, content, nameLanguage, badge: BadgeIcon, color }: TerminalLanguage) {
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
                        <span className="text-xs text-foreground/50 ml-2">{archiveName}</span>
                    </div>

                    <div className="font-mono text-sm space-y-2">
                        {content}
                    </div>
                </div>

                {/* Botões de navegação */}
                <button
                    className="absolute -left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-secondary border border-border hover:border-primary hover:bg-muted flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-lg cursor-pointer"
                    aria-label="Anterior"
                >
                    <ChevronLeft className="w-5 h-5 text-foreground hover:text-primary" />
                </button>

                <button
                    className="absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-secondary border border-border hover:border-primary hover:bg-muted flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-lg cursor-pointer"
                    aria-label="Próximo"
                >
                    <ChevronRight className="w-5 h-5 text-foreground hover:text-primary" />
                </button>

                {/* Badge flutuante */}
                <div 
                    className="absolute -top-4 right-8 backdrop-blur-sm rounded-xl p-3 shadow-lg animate-pulse"
                    style={{ 
                        backgroundColor: `${color}20`, 
                        borderColor: `${color}50`,
                        borderWidth: '1px',
                        borderStyle: 'solid'
                    }}
                >
                    <BadgeIcon 
                        className="w-6 h-6" 
                        style={{ color }}
                    />
                </div>

                <div 
                    className="absolute -bottom-4 left-8 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg animate-pulse"
                    style={{ 
                        backgroundColor: `${color}20`, 
                        borderColor: `${color}50`,
                        borderWidth: '1px',
                        borderStyle: 'solid'
                    }}
                >
                    <span 
                        className="text-sm font-medium" 
                        style={{ color }}
                    >{nameLanguage}</span>
                </div>
            </div>
        </div>
    )
}

export default function InformationTerminal() {
    return (
        <Terminal {...TerminalLanguages[0]}/>
    )
}