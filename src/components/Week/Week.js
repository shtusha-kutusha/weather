import DayWeek from '../DayWeek/DayWeek';

function Week({ days, activeTemperature }) {
    return (
        <div className='week'>
            {days.map((day, index) => <DayWeek day={day.day} cond={day.cond} activeTemperature={activeTemperature} temp={day.temp} condition={day.cond} key={index} />)}
        </div>
    );
}

export default Week;