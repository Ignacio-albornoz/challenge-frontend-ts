
interface MachineInfo extends Machine {
    id: number;
    description: string;
    class: string;
    company: string;
    chassis: number;
    working: boolean;
    moving: boolean;
    last_update: string;
    data: {
        general: {
            "batería interna": string;
            "batería vehiculo": string;
            cosechando: string;
            "uso combustible": string;
            digitales: string;
            ancho: string;
        };
        operación: {
            ancho: string;
            velocidad: string;
        };
        cosecha: {
            "flujo granos": string;
            "flujo granos neto": string;
            "humedad grano": string;
            "tipo cultivo": string;
            "harv. flags": string;
            "flujo granos seco": string;
            rinde: string;
            "rinde seco": string;
        };
        indicadores: {
            cultivo: string;
            humedad_grano: number;
            rinde_humedo: number;
            rinde_seco: number;
        };
        "clima": {
            "temperatura": "16.91 °C",
            "humedad": "53.0 %",
            "direccion viento": "316.0 °",
            "velocidad viento": "7.72 km/h",
            "humedad raw": "53.0 %"
        }
    };
}
