import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { DetailsMachine } from "../../components/details-machine";
import { InformationMachine } from "../../components/infomation-machine";
import { useMachines } from "../../hooks/useMachines"
import { Loader } from "../../components/loader";

import "./styles.css"


export function MachinePage(){

    const { id } = useParams();

    const { searchMachineById, machine, loading} = useMachines(id);

    useEffect(() => {
     
        searchMachineById();

    }, [id])

    return(

        <main className="machine-page-container">
            { !loading && machine ?
            <section className="machine-details-card-container">
                <hgroup className="machine-page-header">
                    <h2 className="machine-page-description">{machine.description}</h2>
                    <h2 className="machine-page-chassis">{machine.chassis}</h2>
                </hgroup>
                <article className="machine-page-details-container">
                    <DetailsMachine machine={machine}/>
                    <ul className="machine-page-information-container">  
                        {Object.entries(machine.data).map(([key, value]) => (
                            <li className="information-table" key={key}>
                                <InformationMachine title={key} data={value} />
                            </li>
                        ))}
                    </ul>
                </article>
            </section> 
            : 
                <Loader loading={!loading} />
            } 
        </main>
    )
}