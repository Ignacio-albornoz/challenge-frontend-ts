import './styles.css';
import { IndicatorsCosechadora, IndicatorsPulverziadora } from "../../models/indicators";
import { Indicator } from "../indicator";

/**Mapea y renderiza objeto de indicadores recibidos por parametros */

interface ListOfIndicatorsProps {
    indicators: IndicatorsCosechadora | IndicatorsPulverziadora;
    className?: string;
}

export const ListOfIndicators: React.FC<ListOfIndicatorsProps> = ({ indicators }) => {
    
    return(
    <>
        <ul className="list_indicators-container">  
            {Object.entries(indicators).map(([key, value]) => (
                <li key={key}>
                    <Indicator description={key} content={value} />
                </li>
            ))}
        </ul>
    </>

    )
}
