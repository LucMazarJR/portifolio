import { ReactNode } from "react"
import { IconType } from "react-icons"
import { FaJava, FaPython } from "react-icons/fa"
import { SiTypescript } from "react-icons/si"
import { TbBrandCSharp } from "react-icons/tb"

export interface TerminalLanguage {
    archiveName: string
    content: ReactNode
    nameLanguage: string
    badge: IconType
    color: string
}

export const TerminalLanguages: TerminalLanguage[] = [
    {
        archiveName: "portfolio.ts",
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
    },
    {
        archiveName: "portfolio.py",
        content: (
            <>
                <div className="text-foreground/80">
                    <span ><span className="text-primary">developer</span> = {"{"}</span>
                </div>
                <div className="space-y-1 pl-6">
                    <div className="text-foreground/80"><span className="text-green-400">&quot;name&quot;</span>:<span className="text-green-400">&quot;Luciano Mazarão Jr&quot;</span>,</div>
                    <div className="text-foreground/80"><span className="text-green-400">&quot;role&quot;</span>: <span className="text-green-400">&quot;Full Stack&quot;</span>,</div>
                    <div className="text-foreground/80"><span className="text-green-400">&quot;passion&quot;</span>: <span className="text-green-400">&quot;Code&quot;</span>,</div>
                    <div className="text-foreground/80"><span className="text-green-400">&quot;status&quot;</span>: <span className="text-green-400">&quot;Learning&quot;</span></div>
                </div>
                <div className="text-foreground/80">  {"}"}</div>
            </>
        ),
        nameLanguage: "Python",
        badge: FaPython,
        color: "#FFE873"
    },
    {
        archiveName: "portfolio.jar",
        content: (
            <>
                <div className="text-foreground/80">
                    <span className="text-primary">Developer</span> <span className="text-accent">developer</span> = <span className="text-accent">new</span> <span className="text-primary">Developer</span>(
                </div>
                <div className="space-y-1 pl-6">
                    <div className="text-foreground/80"><span className="text-green-400">&quot;Luciano Mazarão Jr&quot;</span>,</div>
                    <div className="text-foreground/80"><span className="text-green-400">&quot;Full Stack&quot;</span>,</div>
                    <div className="text-foreground/80"><span className="text-green-400">&quot;Code&quot;</span>,</div>
                    <div className="text-foreground/80"><span className="text-green-400">&quot;Learning&quot;</span></div>
                </div>
                <div className="text-foreground/80">);</div>
            </>
        ),
        nameLanguage: "Java",
        badge: FaJava,
        color: "#f5493d"
    },
    {
        archiveName: "portfolio.cs",
        content: (
            <>
                <div className="text-foreground/80">
                    <span className="text-accent">var</span> <span className="text-primary">developer</span> = <span className="text-accent">new</span>
                </div>
                <div className="text-foreground/80">{"{"}</div>
                <div className="space-y-1 pl-6">
                    <div className="text-foreground/80">Name = <span className="text-green-400">&quot;Luciano Mazarão Jr&quot;</span>,</div>
                    <div className="text-foreground/80">Role = <span className="text-green-400">&quot;Full Stack&quot;</span>,</div>
                    <div className="text-foreground/80">Passion = <span className="text-green-400">&quot;Code&quot;</span>,</div>
                    <div className="text-foreground/80">Status = <span className="text-green-400">&quot;Learning&quot;</span></div>
                </div>
                <div className="text-foreground/80">{"}"};</div>
            </>
        ),
        nameLanguage: "C#",
        badge: TbBrandCSharp,
        color: "#8e3aa6"
    }
]

