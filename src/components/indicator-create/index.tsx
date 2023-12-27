
import { IndicatorData } from './IndicatorData';
import { IndicatorRindeHumedoSecoRender } from './indicatorRindeHumedoSecoRender';
import { IndicatorCalidadRender } from './IndicatorCalidadRender';
import { IndicatorCultivoRender } from './IndicatorCultivoRender';
import { IndicatorHumedadGrano } from './indicatorHumedadGrano';
import { DefaultIndicator } from './defaultIndicator';
import { IndicatorPulverizadoraRender } from './indicatorPulverizadoraRender';

export class IndicatorFactory {
    static createIndicator(indicatorData: IndicatorData) {
        const { description, content } = indicatorData;

        switch (description) {
            case 'Rinde Humedo/Seco':
                return new IndicatorRindeHumedoSecoRender(content);
            case 'Calidad':
                return new IndicatorCalidadRender(content);
            case 'Cultivo':
                return new IndicatorCultivoRender(content);
            case 'Humedad de Grano':
                return new IndicatorHumedadGrano(content);
            case 'Pulverizadora':
                return new IndicatorPulverizadoraRender(content);
            default:
                return new DefaultIndicator(content);
        }
    }
}
