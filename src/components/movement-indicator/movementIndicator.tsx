import './styles.css';

/**Componente que indica si una maquina se encuentra en movimiento */

export function MovementIndicator({moving} : {moving: boolean}) {

    const isMoving = moving ? 'machine-stopped' : 'machine-moving';

    return(
        <div className={`machine-icon-state ${isMoving}`}></div>
    )
}