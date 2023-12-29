export const IndicatorCultivoRender = ({content}: {content: string}) => {

    /*Se encarga de renderizar el indicador Cultivo*/

    const titleCultivoToRender = 'Tipo Cultivo'

    return(
        <>
            <div className="indicator-container breakpoint-default" >
                <h5 className="indicator-description indicator-text">
                    {titleCultivoToRender}
                </h5>
                <h2 className="indicator-content indicator-text">
                    {content}
                </h2>
            </div>
        </>
    )
}