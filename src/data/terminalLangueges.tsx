import { ReactNode } from "react"
import { IconType } from "react-icons"
import { SiTypescript } from "react-icons/si"

export interface TerminalLanguage {
    archiveName: string
    content: ReactNode
    nameLanguage: string
    badge: IconType
    color: string
}

export const TerminalLanguages: TerminalLanguage[] = [
    {
        archiveName: "portfolio.tsx",
        content: (
            <>
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
            </>
        ),
        nameLanguage: "TypeScript",
        badge: SiTypescript,
        color: "#3178c6"
    }
]

