import { URL_API, URL_API_QUERY } from "../environment/api"
import toast from "react-hot-toast"

/**Servicio que se encarga de hacer los llamados al API y manejar algunos errores en el llamado */

export const getAllMachines = async () => {

    try {
        const response = await fetch(URL_API_QUERY);
        const machines = await response.json();

        return machines?.map( machine => ({
            id: machine.id,
            description: machine.description,
            working: machine.working,
            moving: machine.moving,
            type: machine.type,
            company: machine.company,
            chassis: machine.chassis,
            indicadores: machine.indicadores,
        }))

    }
    catch (e){
        toast.error(e.message);
    }
}

export const getMachines = async ( search ) => {

    try {
        
        const response = await fetch(`${URL_API_QUERY}${search}`);

        if (response.status === 400) {
            toast.error(`No se encontró la máquina con nombre: ${search}`);
            return null;
        }

        if (!response.ok) {
            toast.error(`Ocurrió un error al procesar la solicitud. Por favor, inténtelo de nuevo más tarde.`);
            return null;
        }
        
        const machines = await response.json();

        if(machines.length > 0){

        
            return machines?.map( machine => ({
                id: machine.id,
                description: machine.description,
                working: machine.working,
                moving: machine.moving,
                type: machine.type,
                company: machine.company,
                chassis: machine.chassis,
                indicadores: machine.indicadores,
            }))

        }

        return;

        /* const filterMachines = await machinesJson.filter( items => {
            return(
                items.description.toLowerCase().includes(search.toLowerCase())
            )
        })

        return {filterMachines} */
    }
    catch (e){
        toast.error(e.message) 
    }

}

export const getMachineById = async ( search ) => {

    try {

        const response = await fetch(`${URL_API}/${search}`);

        const machine = await response.json();
    
        if (response.status === 404) {
            toast.error(`No se encontró la máquina con id: ${search}`);
            return null;
        }
    
        if (response.status === 409) {
            toast.error(`La solicitud no puede ser procesada debido a un conflicto con el estado actual del recurso.`);
            return null;
        }

        if(!response.ok){
            toast.error(`No se encontro maquina con id: ${search} `)
            return null; 
        }

        return machine;
    }
    catch (e){
        toast.error(e.message)
    }
}