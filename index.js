// capitalize(): hello world -> Hello world
function capitalize(str){
    console.log('Original - '+str)
    str= str[0].toUpperCase() + str.slice(1)
    console.log('New - '+str)
}
capitalize('ayush')