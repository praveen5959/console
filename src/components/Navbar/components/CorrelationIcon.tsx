import { forwardRef } from 'react';

export const CorrelationIcon = forwardRef<
	SVGSVGElement,
	{
		stroke?: string;
		strokeWidth?: number;
		height?: string;
		width?: string;
	}
>(({ stroke, strokeWidth, height, width }, ref) => (
	<svg ref={ref} height={height} width={width} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M13.3333 17.3333L14.6667 18.6667C15.0203 19.0203 15.4999 19.219 16 19.219C16.5001 19.219 16.9797 19.0203 17.3333 18.6667L22.6667 13.3333C23.0203 12.9797 23.219 12.5001 23.219 12C23.219 11.4999 23.0203 11.0203 22.6667 10.6667L17.3333 5.33333C16.9797 4.97971 16.5001 4.78105 16 4.78105C15.4999 4.78105 15.0203 4.97971 14.6667 5.33333L9.33333 10.6667C8.97971 11.0203 8.78105 11.4999 8.78105 12C8.78105 12.5001 8.97971 12.9797 9.33333 13.3333L10.6667 14.6667"
			stroke={stroke}
			strokeWidth={strokeWidth}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M10.6667 6.66667L9.33333 5.33333C8.97971 4.97971 8.5001 4.78105 8 4.78105C7.4999 4.78105 7.02029 4.97971 6.66667 5.33333L1.33333 10.6667C0.979711 11.0203 0.781049 11.4999 0.781049 12C0.781049 12.5001 0.979711 12.9797 1.33333 13.3333L6.66667 18.6667C7.02029 19.0203 7.4999 19.219 8 19.219C8.5001 19.219 8.97971 19.0203 9.33333 18.6667L14.6667 13.3333C15.0203 12.9797 15.219 12.5001 15.219 12C15.219 11.4999 15.0203 11.0203 14.6667 10.6667L13.3333 9.33333"
			stroke={stroke}
			strokeWidth={strokeWidth}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
));

CorrelationIcon.displayName = 'CorrelationIcon';