import React from "react";
import { Machine } from "../machine";
import { MachineModel } from "../../models/machineModel";

import './styles.css';

/**Renderiza lista de Maquinas recibidas por parametros */
interface ListOfMachinesProps {
    machines: MachineModel[];
}

export const ListOfMachines: React.FC<ListOfMachinesProps> = ({ machines }) => {
    return (
        <>
            <section className="list_machines-container">
                {machines.map((machine) => (
                    <Machine key={machine.id} machine={machine as MachineModel} />
                ))}
            </section>
        </>
    );
};

