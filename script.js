//superhero generator 


//to generate a random number
function randomNumber(num) {
    return Math.floor(Math.random() * num)
}


//all of the possible answers
const possibleAnswers = {
    heroFirstName: ['Bat', 'Wonder', 'Super', 'Martian', 'Flash', 'Green', 'Man', 'Woman', 'Manhunter', 'Lantern'],
    heroLastName: ['Bat', 'Wonder', 'Super', 'Martian', 'Flash', 'Green', 'Man', 'Woman', 'Manhunter', 'Lantern'],
    power: ['being rich', 'super strength', 'x-ray vision', 'super speed', 'magic ring', 'telepathy', 'martial arts expert'],
    specialAbility: ['time travel', 'heat vision', 'super butler', 'fly', 'shape-shift', 'invisibility', 'high tech', 'heat vision'],
    weakness: ['Martha', 'kryptonite', 'fire', 'cold', 'tummy aches', 'not being rich', 'poison', 'meteorites', 'hot sauce']
}

//store the set of your superhero
let superHero = [];


for(let prop in possibleAnswers) {
    let optionIndex = randomNumber(possibleAnswers[prop].length)


    switch (prop) {
        case 'heroFirstName':
            superHero.push(`Your Superhero first name is "${possibleAnswers[prop][optionIndex]}"`)
            break
        case 'heroLastName':
            superHero.push(`Your Superhero last name is "${possibleAnswers[prop][optionIndex]}"`)
            break
        case 'power':
            superHero.push(`Your superpower is "${possibleAnswers[prop][optionIndex]}"`)
            break
        case 'specialAbility':
            superHero.push(`Your special ability is "${possibleAnswers[prop][optionIndex]}"`)
            break
        case 'weakness':
            superHero.push(`Your weakness is "${possibleAnswers[prop][optionIndex]}"`)
            break
    
        default:
            superHero.push('There is not enough info')
            
    }
    
}

function formatText(text) {
    let formatted = superHero.join('\n')
    console.log(formatted)
}

formatText(superHero);