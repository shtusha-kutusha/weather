export function convertsCelsiusFahrenheit(temp) {
    return Math.round(temp * 1.8 + 32);
}

export function convertsFahrenheitCelsius(temp) {
    return Math.round((temp - 32) / 1.8);
}