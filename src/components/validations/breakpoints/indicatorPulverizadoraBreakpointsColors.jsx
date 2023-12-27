/**Valida el numero recibido por parametros y devuelve un string.(que en este caso pertenece a las clases que determinan el color de los breakpoints)*/ 

export function indicatorPulverizadoraBreakpointsColors(porcentaje) {  


      if(porcentaje === 1.00) return 'breakpoint-0-color'

      if(porcentaje >= 0.80) return 'breakpoint-1-color'

      if(porcentaje >= 0.50) return 'breakpoint-2-color'

      if(porcentaje >= 0.35) return 'breakpoint-35-color'

      if(porcentaje >= 0.20) return 'breakpoint-5-color'

      if(porcentaje >= 0.10) return 'breakpoint-8-color'

      if(porcentaje >= 0.00) return 'breakpoint-10-color'

      if(!porcentaje || porcentaje < 0){
        return 'breakpoint-default'
      } 
}