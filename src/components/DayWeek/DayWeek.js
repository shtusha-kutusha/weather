import WeatherConditionIcon from '../WeatherConditionIcon/WeatherConditionIcon';
import Temperature from '../Temperature/Temperature';
import WeatherCondition from '../WeatherCondition/WeatherCondition';

function DayWeek({ day, temp, condition, activeTemperature, cond }) {
    return (
        <div className='dayWeek'>
            {day}
            <WeatherConditionIcon cond={cond} />
            <Temperature temp={temp}  activeTemperature={activeTemperature} />
            <WeatherCondition condition={condition} />
        </div>
    );
}

export default DayWeek;