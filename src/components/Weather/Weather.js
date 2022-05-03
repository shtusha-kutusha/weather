import City from '../City/City';
import Today from '../Today/Today';
import TemperatureSwitch from '../TemperatureSwitch/TemperatureSwitch';
import Week from '../Week/Week';
import { useState } from 'react';

function Weather({ data }) {
  const [activeTemperature, setActiveTemperature] = useState('C');

  return (
    <div className='weatherApp'>
      <City city={data.city} />
      <Today temp={data.days[0].temp}  cond={data.days[1].cond} condition={data.days[0].cond} activeTemperature={activeTemperature} />
      <TemperatureSwitch temp={data.days[0].temp} activeTemperature={activeTemperature} setActiveTemperature={setActiveTemperature} />
      <Week days={data.days} activeTemperature={activeTemperature} />
    </div>
  );
}

export default Weather;
