// capitalize(): hello world -> Hello world
var i = 0;
console.log('Challenge 1- capitalize()');
function capitalize(str) {
    console.log("Original - ".concat(str));
    var ntr = str[0].toUpperCase() + str.slice(1);
    console.log("New - ".concat(ntr));
    return ntr;
}
capitalize('ayush jain');
console.log('------');
// allCaps(): foo bar -> FOO BAR
console.log('Challenge 2- allCaps()');
function allCaps(str) {
    console.log("Original - ".concat(str));
    var ntr = str.toUpperCase();
    console.log("New - ".concat(ntr));
    return ntr;
}
allCaps('ayush jain');
console.log('------');
// capitalizeWords(): do all the things -> Do All The Things
console.log('Challenge 3- capitalizeWords()');
function capitalizeWords(str) {
    console.log("Original - ".concat(str));
    var newStr = str.replace(str[0], str[0].toUpperCase());
    var len = str.length;
    for (i = 0; i <= len; i += 1) {
        if (str[i] === ' ') {
            newStr = newStr.replace(newStr[i + 1], newStr[i + 1].toUpperCase());
        }
    }
    console.log("New - ".concat(newStr));
    return newStr;
}
capitalizeWords('do all the things');
console.log('------');
// removeExtraSpaces(): "   Hello    world!   " -> "Hello world!"
console.log('Challenge 4- removeExtraSpaces()');
function removeExtraSpaces(str) {
    console.log("Original - ".concat(str));
    var Str = str.trim();
    var len = str.length;
    var newStr = '';
    for (i = 0; i <= len; i += 1) {
        if (Str[i] === ' ') {
            if (Str[i + 1] === ' ') {
                // eslint-disable-next-line no-continue
                continue;
            }
            else {
                newStr += Str.substring(i, i + 1);
            }
        }
        else {
            newStr += Str.substring(i, i + 1);
        }
    }
    console.log("New - ".concat(newStr));
    return newStr;
}
removeExtraSpaces('   Hello    world!   ');
console.log('------');
// kebobCase(): " Hello world " -> "hello-world"
console.log('Challenge 5- kebobCase()');
function kebobCase(str) {
    console.log("Original - ".concat(str));
    var Str = str.toLowerCase();
    Str = Str.trim();
    var len = Str.length;
    var newStr = '';
    for (i = 0; i <= len; i += 1) {
        if (Str[i] === ' ') {
            if (Str[i + 1] === ' ') {
                // eslint-disable-next-line no-continue
                continue;
            }
            else {
                newStr += Str.substring(i, i + 1);
            }
        }
        else {
            newStr += Str.substring(i, i + 1);
        }
    }
    newStr = newStr.replaceAll(' ', '-');
    console.log("New - ".concat(newStr));
    return newStr;
}
kebobCase('   Hello    world    ');
console.log('------');
// snakeCase(): " what the heck " -> "what_the_heck"
console.log('Challenge 6- snakeCase()');
function snakeCase(str) {
    console.log("Original - ".concat(str));
    var Str = str.toLowerCase();
    Str = Str.trim();
    var len = Str.length;
    var newStr = '';
    for (i = 0; i <= len; i += 1) {
        if (Str[i] === ' ') {
            if (Str[i + 1] === ' ') {
                // eslint-disable-next-line no-continue
                continue;
            }
            else {
                newStr += Str.substring(i, i + 1);
            }
        }
        else {
            newStr += Str.substring(i, i + 1);
        }
    }
    newStr = newStr.replaceAll(' ', '_');
    console.log("New - ".concat(newStr));
    return newStr;
}
snakeCase('   Hello    world   ');
console.log('------');
// camelCase(): Hello world -> helloWorld
console.log('Challenge 7- camelCase()');
function camelCase(str) {
    console.log("Original - ".concat(str));
    var Str = str.toLowerCase();
    Str = Str.trim();
    var len = Str.length;
    var newStr = '';
    for (i = 0; i <= len; i += 1) {
        if (Str[i] === ' ') {
            Str = Str.replace(Str[i + 1], Str[i + 1].toUpperCase());
        }
        else {
            newStr += Str.substring(i, i + 1);
        }
    }
    console.log("New - ".concat(newStr));
    return newStr;
}
camelCase('   Hello world ');
console.log('------');
// shift(): Hello World -> ello WorldH
console.log('Challenge 8- shift()');
function shift(str) {
    console.log("Original - ".concat(str));
    var char = str[0];
    var Str = str.slice(1);
    Str += char;
    console.log("New - ".concat(Str));
    return Str;
}
shift('Hello world');
console.log('------');
// makeHashTag(): "Amazing bongo drums for sale" -> ['#amazing', '#bongo', '#drums']
console.log('Challenge 9- makeHashTag()');
function makeHashTag(str) {
    console.log("Original - ".concat(str));
    var list = str.split(' ');
    var sort = list.sort(function (a, b) { return b.length - a.length; });
    for (i = 0; i < sort.length; i += 1) {
        sort[i] = "#".concat(sort[i]);
    }
    sort.splice(3, sort.length);
    console.log(sort);
    return sort;
}
makeHashTag('Amazing bongo drums for sale');
console.log('------');
// isEmpty(): "Abc def" -> isEmpty("Abc def") // false
console.log('Challenge 10- isEmpty()');
function isEmpty(str) {
    var allowed = [' ', '\n', '\r', '\t'];
    for (i = 0; i < str.length; i += 1) {
        if (!allowed.includes(str[i])) {
            console.log(str[i]);
            return false;
        }
    }
    return true;
}
isEmpty('  ');
console.log('------');
module.exports.capitalize = capitalize;
module.exports.allCaps = allCaps;
module.exports.capitalizeWords = capitalizeWords;
module.exports.removeExtraSpaces = removeExtraSpaces;
module.exports.kebobCase = kebobCase;
module.exports.snakeCase = snakeCase;
module.exports.camelCase = camelCase;
module.exports.shift = shift;
module.exports.makeHashTag = makeHashTag;
module.exports.isEmpty = isEmpty;
