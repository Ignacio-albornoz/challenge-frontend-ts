import { indicatorRindeHumeSecoBreakpointsColors } from "../validations/breakpoints/indicatorRindeHumeSecoBreakpointsColors";
import'./styles.css'

/*Se encarga de renderizar el indicador rendimiento grano y formatea el titulo*/

interface IndicatorRindeHumedoSecoRenderProps {
    content: string;
    description: string;
}

export const IndicatorRindeHumedoSecoRender: React.FC<IndicatorRindeHumedoSecoRenderProps> = ({content, description}) => {

    function convertDescriptionToRender(description: string) {
        const words = description.split("_");
        const descriptionToRender = words.map((word: string) => word.toLowerCase());
        return descriptionToRender.join(" ");
    }

    const descriptionToRender = convertDescriptionToRender(description);

    const breakpointColor = indicatorRindeHumeSecoBreakpointsColors(description);

    return(
        <>
            <div className={`indicator-container ${breakpointColor}`} >
                <h5 className="indicator-description indicator-text">
                    {descriptionToRender.charAt(0).toUpperCase() + descriptionToRender.slice(1)}
                </h5>
                <h2 className="indicator-content indicator-text indicator-text-sm">
                    {content} kg/ha
                </h2>
            </div>
        </>
    )
}