// capitalize(): hello world -> Hello world
console.log('Challenge 1- capitalize()') 
function capitalize(str){
    console.log('Original - '+str)
    str= str[0].toUpperCase() + str.slice(1)
    console.log('New - '+str)
}
capitalize('ayush jain')
console.log('------')

// allCaps(): foo bar -> FOO BAR
console.log('Challenge 2- allCaps()')
function allCaps(str){
    console.log('Original - '+ str)
    str = str.toUpperCase();
    console.log('New - '+ str)
}
allCaps('ayush jain')
console.log('------')

// capitalizeWords(): do all the things -> Do All The Things
console.log('Challenge 3- capitalizeWords()')
function capitalizeWords(str){
    console.log('Original - '+str)
    str= str.replace(str[0], str[0].toUpperCase())
    length= str.length
    for(i=0; i<=length; i= i+1){
        if(str[i]== " "){
            str = str.replace(str[i+1], str[i+1].toUpperCase())
        }
    }
    console.log('New - '+str)
}
capitalizeWords('do all the things')