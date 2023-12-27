/**Valida la descripcion recibida por parametros y devuelve un string, que en este caso pertenece a las clases que determinan el color de los indicadores */


import { INDICATOR_TITLE_RINDE_HUMEDO, INDICATOR_TITLE_RINDE_SECO } from "../../../environment/indicatorsTitles";

export function indicatorRindeHumeSecoBreakpointsColors(description) {

    const TITLE_RINDE_SECO = INDICATOR_TITLE_RINDE_SECO;
    const TITLE_RINDE_HUMEDO = INDICATOR_TITLE_RINDE_HUMEDO;

    if(description === TITLE_RINDE_SECO){
        return 'rinde-seco-color'
    }


    if(description === TITLE_RINDE_HUMEDO){
        return 'rinde-humedo-color'
    }

    return 'breakpoint-default'
}
