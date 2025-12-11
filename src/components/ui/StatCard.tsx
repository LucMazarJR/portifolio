"use client";

interface StatCardProps {
    type: string;
    data?: number;
    value?: number;
    reference?: string
    color: 1 | 2
}

const colorValues = {
    1: "text-primary",
    2: "text-accent"
}

const getQuantity = (data: number | undefined) => {
    if(!data) return 0;
    if(data < 5) return data
    return ( Math.trunc(data / 5) ) * 5 + "+"
}

export default function StatCard({data, value, type, color = 1, reference}: StatCardProps) {
    return(
        <a href={reference}>
            <div className={`text-2xl font-bold ${colorValues[color]}`}>{!!value ? value : `${getQuantity(data)}`}</div>
            <div className="text-sm text-foreground/50">{type}</div>
        </a>
    )
}