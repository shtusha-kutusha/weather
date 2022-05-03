import Temperature from '../Temperature/Temperature';
import WeatherConditionIcon from '../WeatherConditionIcon/WeatherConditionIcon';
import WeatherCondition from '../WeatherCondition/WeatherCondition';

function Today({ temp, condition, activeTemperature, cond }) {
    return (
        <div className='today'>
            <WeatherConditionIcon cond={cond} />
            <Temperature temp={temp} activeTemperature={activeTemperature} />
            <WeatherCondition condition={condition} />
        </div>
    );
}

export default Today;