const kelvin = 274 // today's temp at kelvin

let celsius = kelvin - 273; // converting kelvin to celsius

let fahrenheit = celsius * (9/5) + 32; //converting celsius to fahrenheit

if (fahrenheit - Math.floor(fahrenheit) > 0.5){
  fahrenheit = Math.ceil(fahrenheit) 
} else {
  fahrenheit = Math.floor(fahrenheit)
} //new fahrenheit is the closest integer

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`)






