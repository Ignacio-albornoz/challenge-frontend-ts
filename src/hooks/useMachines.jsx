import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { getMachines, getAllMachines, getMachineById } from '../services/machines'
import toast from "react-hot-toast"

/*Custom hook que se encarga de proveer los datos que trae el servicio a los componentes */

export function useMachines (search) {

    const [ listMachines, setMachines ] = useState([])
    const [ machine, setMachine ] = useState(false)
    const [ loading, setLoading ] = useState(false)

    const navigate = useNavigate()

    //Trae todos las maquinas y las asigna al estado listMachine
    const getListMachines = async () => {
        try{

            setLoading(true)
            const machines = await getAllMachines();
            setMachines(machines);
            
        }
        catch(e){

            toast.error(e.message)

        }
        finally{

            setLoading(false)
        }
    }

    //Siempre que search no sea un numero, llama a al servicio getMachine
    const searchMachines = async () => {
        try{
            setLoading(true)
            const query = search;
        
            if(!query.match(/^\d+$/)){
                const queryMachines = await getMachines(query)

                setMachines(queryMachines);
            }

        }
        catch(e){

            toast.error(e.message)

        }
        finally{

            setLoading(false)

        }
    }


    //Llama a la funcion encargada de buscar una maquina por id y le pasa el parametro, de no existir nos redirige al home
    const searchMachineById = async () => {
        try{
            setLoading(true)
            const machine = await getMachineById(search)

            setMachine(machine);
            
            if(machine === null){
                navigate("/home")
            }

        }
        catch(e){
            
            toast.error(e.message)
            
        }
        finally{
            setLoading(false)
        }

    }

    return { machine,   machines: listMachines, loading, searchMachines, getListMachines, searchMachineById }
}