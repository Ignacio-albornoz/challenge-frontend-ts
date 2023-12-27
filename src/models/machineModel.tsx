interface Machine {
    id: number;
    description: string;
    working: boolean;
    moving: boolean;
    type: string;
    company: string;
    chassis: number;
    indicadores: Record<string, number>;
}
