function WeatherConditionIcon({ cond }) {
    return (
        <img className="weatherConditionIcon" src={`${process.env.PUBLIC_URL}/img/${cond}.png`}/>
    )
}

export default WeatherConditionIcon;