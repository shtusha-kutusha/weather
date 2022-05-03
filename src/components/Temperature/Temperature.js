import { convertsFahrenheitCelsius } from '../../utils';

function Temperature({ temp, activeTemperature }) {
    const updatedTemp = activeTemperature === 'C' ? convertsFahrenheitCelsius(temp) : temp;  
    return (
        <div className='temp'>
            {updatedTemp}°
        </div>
    );
}

export default Temperature;