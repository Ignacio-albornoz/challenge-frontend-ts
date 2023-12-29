import { IndicatorsCosechadora } from "./indicators";

export interface MachineModel {
    id: number;
    description: string;
    working: boolean;
    moving: boolean;
    type: string;
    company: string;
    chassis: number;
    indicadores: IndicatorsCosechadora | IndicatorsCosechadora;
}
