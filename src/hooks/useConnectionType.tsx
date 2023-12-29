/* import { useState } from "react";

export function useConnectionType(){

    const [connectionType, setConnectionType] = useState();

    const getConnectionType = () => {
        const connection =
        navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        if (connection) {
            console.log(connection.effectiveType);
            setConnectionType(connection.effectiveType)
        }
    }

    return { getConnectionType, connectionType }
}
 */