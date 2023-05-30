const userName = '' //enter your name here

userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!')

const userQuestion = '' //enter your question here

console.log(`${userName} asked ${userQuestion}`)

let randomNumber = Math.floor(Math.random() * 8)

let eightBall = ''

switch (randomNumber) {
    case 0:
        eightBall = 'It is certain'
        break
    
    case 1:
        eightBall = 'It is decidedly so'
        break
    
    case 2:
        eightBall = 'Reply hazy try again'

    case 3:
        eightBall = 'My sources say no'
        break
    
    case 4:
        eightBall = 'Signs point to yes'
        break

    case 5:
        eightBall = 'Cannot predict now'
        break

    case 6:
        eightBall = 'Outlook not so good'
        break

    case 7:
        eightBall = 'Do not count on it'
        break

}

console.log (eightBall)