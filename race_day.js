let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = false;
let runnerAge = 16;

if (runnerAge > 18 && registeredEarly) {
    raceNumber += 1000
}

if (runnerAge > 18 && registeredEarly){
    console.log(`your race starts at 9:30 am, your race number is ${raceNumber}`)
}

else if (runnerAge > 18 && registeredEarly == false){
    console.log(`Your race starts at 11:30 am, your race number is ${raceNumber}`)
}

else if (runnerAge < 18){
    console.log(`Your race starts at 12:30 pm, your race number is ${raceNumber}`)
}

else {
    console.log('Go see registration desk')
}