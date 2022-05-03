function TemperatureSwitch({ activeTemperature, setActiveTemperature }) {
    return (
        <div className='temperatureSwitch'>
            <button className='temperatureSwitchButton' disabled={activeTemperature === 'C'}
                onClick={() => { setActiveTemperature('C'); }}>C</button>
            <button className='temperatureSwitchButton' disabled={activeTemperature === 'F'}
                onClick={() => { setActiveTemperature('F'); }}>F</button>
        </div>    
    )
}

export default TemperatureSwitch;