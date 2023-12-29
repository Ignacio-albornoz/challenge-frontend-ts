import React, { useEffect, useContext } from "react";
import { SearchContext } from "../../context/search";
import { ListOfMachines } from "../../components/list-of-machines";
import { useMachines } from "../../hooks/api/useMachines"
import { Loader } from "../../components/loader";
import { SearchContextType } from "../../models/searchContextModel";

import response from '../../mocks/response.json';

import './styles.css';
import { MachineModel } from "../../models/machineModel";

//import { useConnectionType } from "../../hooks/useConnectionType";

/**Pagina home, renderiza la lista de maquinas, recibe la busqueda del usuario por contexto y renderiza la respuesta de la */

export function Home() {    

    const { search } = useContext<SearchContextType>(SearchContext)

    //const { searchMachines, machines } = useMachines(search)

    //const { getConnectionType } = useConnectionType();

    const machines = response as unknown as MachineModel[];

    console.log(machines);

    const hasMachines = machines?.length > 0;

    useEffect(() => {

        /* getConnectionType();

        searchMachines();
        const interval = setInterval(() => {
            searchMachines()
        }, 40000); 

        return () => clearInterval(interval);*/

        console.log(response);
        

    }, [search])


    return (
        <>
            <main>
                {
                    hasMachines ? <ListOfMachines machines={machines} /> : <Loader />
                }
            </main>
        </>

    )
}

