import React from "react";
import { Machine } from "../machine";

import './styles.css';

/**Renderiza lista de Maquinas recibidas por parametros */

export function ListOfMachines( {machines} ) {

    return(
    <>
        <section className="list_machines-container">
            {
                machines.map((machine) => (
                    <Machine key={machine.id} data={machine}/>
            ))}
        </section>
    </>

    )
}

