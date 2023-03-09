import React from 'react'
import { SvgCanvas } from './canvas';
import type { IRenderableElement, IElementDimensions } from './interfaces';
import './css/svg-chart.scss';

type ISvgChart = IRenderableElement & IElementDimensions

export const SvgChart: React.FC<ISvgChart> = ({testid, ...rest }) => {
    return (
        <div data-testid={testid} className={'svg-chart-layout'}>
            <SvgCanvas {...rest}/>
        </div>
    )    
}