/* Render de indicador default, en caso que no exista una descripcion del indicador*/ 

export const DefaultIndicator = () => {

    return(
        <>
            <div className="indicator-container breakpoint-default" >
                <h5 className="indicator-description indicator-text">
                Indicador
                </h5>
                <h2 className="indicator-content indicator-text">
                    -
                </h2>
            </div>
        </>
    )
}