// capitalize(): hello world -> Hello world
console.log('Challenge 1- capitalize()') 
function capitalize(str){
    console.log('Original - '+str)
    str= str[0].toUpperCase() + str.slice(1)
    console.log('New - '+str)
    return str
}
capitalize('ayush jain')
console.log('------')

// allCaps(): foo bar -> FOO BAR
console.log('Challenge 2- allCaps()')
function allCaps(str){
    console.log('Original - '+ str)
    str = str.toUpperCase();
    console.log('New - '+ str)
    return str
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
    return str
}
capitalizeWords('do all the things')
console.log('------')

// removeExtraSpaces(): "   Hello    world!   " -> "Hello world!"
console.log('Challenge 4- removeExtraSpaces()')
function removeExtraSpaces(str){
    console.log('Original - '+str)
    str= str.trim();
    length= str.length
    new_str= ''
    for(i=0; i<=length; i++){
        if(str[i]==" "){
            if(str[i+1]==" "){
                continue
            }
            else{
                
                new_str+= str.substring(i,i+1)
            }
        }
        else{
            new_str+= str.substring(i,i+1)
        }
    }
    console.log('New - '+ new_str)
    return new_str
}
removeExtraSpaces("   Hello    world!   ")
console.log('------')

// kebobCase(): " Hello world " -> "hello-world"
console.log('Challenge 5- kebobCase()')
function kebobCase(str){
    console.log('Original - '+str)
    str = str.toLowerCase()
    str= str.trim();
    length= str.length
    new_str= ''
    for(i=0; i<=length; i++){
        if(str[i]==" "){
            if(str[i+1]==" "){
                continue
            }
            else{
                new_str+= str.substring(i,i+1)
            }
        }
        else{
            new_str+= str.substring(i,i+1)
        }
    }
    new_str = new_str.replaceAll(" ", "-")
    console.log('New - '+ new_str)
    return new_str
}
kebobCase("   Hello    world    ")
console.log('------')

// snakeCase(): " what the heck " -> "what_the_heck"
console.log('Challenge 6- snakeCase()')
function snakeCase(str){
    console.log('Original - '+str)
    str = str.toLowerCase()
    str= str.trim();
    length= str.length
    new_str= ''
    for(i=0; i<=length; i++){
        if(str[i]==" "){
            if(str[i+1]==" "){
                continue
            }
            else{
                new_str+= str.substring(i,i+1)
            }
        }
        else{
            new_str+= str.substring(i,i+1)
        }
    }
    new_str = new_str.replaceAll(" ", "_")
    console.log('New - '+ new_str)
    return new_str
}
snakeCase("   Hello    world   ")
console.log('------')

// camelCase(): Hello world -> helloWorld
console.log('Challenge 7- camelCase()')
function camelCase(str){
    console.log('Original - '+str)
    str = str.toLowerCase()
    str= str.trim();
    length= str.length
    new_str= ''
    for(i=0; i<=length; i++){
        if(str[i]==" "){
            str = str.replace(str[i+1], str[i+1].toUpperCase())
        }
        else{
            new_str+= str.substring(i,i+1)
        }
    }
    console.log('New - '+ new_str)
    return new_str
}
camelCase("   Hello world ")
console.log('------')

// shift(): Hello World -> ello WorldH
console.log('Challenge 8- shift()')
function shift(str){
    console.log('Original - '+str)
    char = str[0]
    str= str.slice(1)
    str+= char
    console.log('New - '+ str)
    return str
}
shift("Hello world")
console.log('------')

// makeHashTag(): "Amazing bongo drums for sale" -> ['#amazing', '#bongo', '#drums']
console.log('Challenge 9- makeHashTag()')
function makeHashTag(str){
    console.log('Original - '+str)
    list = str.split(" ")
    const sort = list.sort((a,b) => b.length - a.length);
    for(var i=0 ; i < sort.length ;i++){
        sort[i]= "#" + sort[i];
    }
    sort.splice(3, sort.length)
    console.log(sort)
    return sort
}
makeHashTag("Amazing bongo drums for sale")
console.log('------')

// isEmpty(): "Abc def" -> isEmpty("Abc def") // false
console.log('Challenge 10- isEmpty()')
function isEmpty(str){
    console.log('Original - '+str)
    str= str.trim();
    if( str= ""){
        return false
    }

    console.log('New - '+ str)
    return str
}
isEmpty("  ")
console.log('------')

module.exports.capitalize = capitalize
module.exports.allCaps = allCaps
module.exports.capitalizeWords = capitalizeWords
module.exports.removeExtraSpaces = removeExtraSpaces
module.exports.kebobCase = kebobCase
module.exports.snakeCase = snakeCase
module.exports.camelCase = camelCase
module.exports.shift = shift
module.exports.makeHashTag = makeHashTag
module.exports.isEmpty = isEmpty
