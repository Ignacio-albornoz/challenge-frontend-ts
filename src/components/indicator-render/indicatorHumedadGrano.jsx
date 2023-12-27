export const IndicatorHumedadGrano = ({content, description}) => {

    function convertDescriptionToRender(description) {
        const words = description.split("_");
        const descriptionToRender = words.map(word => word.toLowerCase());
        return descriptionToRender.join(" ");
    }

    return(
        <>
            <div className="indicator-container breakpoint-default" >
                <h5 className="indicator-description indicator-text">
                    {convertDescriptionToRender(description)}
                </h5>
                <h2 className="indicator-content indicator-text">
                    {parseInt(content)} %
                </h2>
            </div>
        </>
    )
}