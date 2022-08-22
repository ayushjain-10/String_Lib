// capitalize(): hello world -> Hello world
console.log('Challenge 1- capitalize()') 
function capitalize(str){
    console.log('Original - '+str)
    str= str[0].toUpperCase() + str.slice(1)
    console.log('New - '+str)
}
capitalize('ayush')
console.log('------')

// allCaps(): foo bar -> FOO BAR
console.log('Challenge 2- allCaps()')

function allCaps(str){
    console.log('Original - '+ str)
    str = str.toUpperCase();
    console.log('New - '+ str)
}
allCaps('ayush')
console.log('------')

// capitalizeWords(): do all the things -> Do All The Things
console.log('Challenge 2- capitalizeWords()')