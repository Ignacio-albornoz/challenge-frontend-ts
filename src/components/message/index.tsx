import { Toaster } from "react-hot-toast"

/**Componente necesario para realizar notificaciones */

export function Message( ){

    return(
        <>
            <Toaster 
                position="bottom-center"
                duration={6000}
            />
        </>
    )
}