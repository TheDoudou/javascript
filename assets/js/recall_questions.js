var selectElementsStartingWithA = function(array) {
    let retour = []
    for(let i = 0; i < array.length; i++) {
        //if(array[i].startsWith('a'))
        //    retour.push(array[i])
        if(/^a/i.test(array[i])) // Case inssensitive ;)
            retour.push(array[i])
    }   
    return retour;
}

var selectElementsStartingWithVowel = function(array) {
    let retour = []
    for(let i = 0; i < array.length; i++) {
        if(/^omar|idris|angela$/i.test(array[i]))
            retour.push(array[i])
    }
    return retour
}

var removeNullElements = function(array) {
    let retour = []
    for(let i = 0; i < array.length; i++) {
        if(array[i] !== null)
            retour.push(array[i])
    }
    return retour
}

var removeNullAndFalseElements = function(array) {
    let retour = []
    for(let i = 0; i < array.length; i++) {
        if((array[i] !== null) && (array[i] !== false))
            retour.push(array[i])
    }
    return retour
}

var reverseWordsInArray = function(array) {
    let retour = []
    for(let i = 0; i < array.length; i++) {
        retour.push(array[i].split('').reverse().join(''))
    }
    return retour
}

var everyPossiblePair = function(array) {
    let retour = []
    function pair(arr) {
        arr.sort() // Juju
        let res = [],
        l = arr.length;
        for(var i=0; i<l; ++i)
            for(var j=i+1; j<l; ++j)
                res.push([arr[i], arr[j]]);
        return res;
    }
    
    return pair(array).sort()
}

var allElementsExceptFirstThree = function(array) {
    array.shift()
    array.shift()
    array.shift()
    return array
}

var addElementToBeginning = function(array, element) {
    array.unshift(element)
    return array
}

var sortByLastLetter = function(array) {
    return array.sort((a, b) => a.charCodeAt(a.length-1)-b.charCodeAt(b.length-1))
}

var getFirstHalf = function(string) {
    return string.slice(0, Math.round(string.length/2))
}

var makeNegative = function(number) {
    return -Math.abs(number) // number*-1 don't work ?
}

var numberOfPalindromes = function(array) {
    let count = 0
    function check(str) {
        return (str == str.split('').reverse().join('')) ? true : false
    }
    for(let i = 0; i < array.length; i++) {
        if (check(array[i]))
            count++
    }
    return count
}

var shortestWord = function(array) {
    let size = 9000
    let id = 0
    for(let i = 0; i<array.length; i++) {
        if(array[i].length < size) {
            size = array[i].length
            id = i
        }
    }
    return array[id]
}

var longestWord = function(array) {
    let size = 0
    let id = 0
    for(let i = 0; i<array.length; i++) {
        if(array[i].length > size) {
            size = array[i].length
            id = i
        }
    }
    return array[id]
}

var sumNumbers = function(array) {
    return array.reduce((a, b) => a+b, 0)
}

var repeatElements = function(array) {
    return array.concat(array)
}

var stringToNumber = function(string) {
    return parseInt(string)
}

var calculateAverage = function(array) {
    return (array.reduce((a, b) => a+b, 0))/array.length
}

var getElementsUntilGreaterThanFive = function(array) {
    let retour = []
    for(let i=0; i <= 5; i++) {
        retour.push(array[i])
    }
    return retour
}

var convertArrayToObject = function(array) {
    let retour = {}
    for(let i = 0; i < array.length; i=i+2) {
        retour = Object.assign({[array[i]]:array[i+1]}, retour)
    }
    return retour
}

var getAllLetters = function(array) {
    let retour = []
    for(let i = 0; i < array.length; i++) {
        retour[i] = array[i].split('')
    }
    
    return Array.from(new Set(retour.flat().sort()))
}

var swapKeysAndValues = function(object) {
    let retour = {}
    for (let key in object) {
        retour[object[key]] = key
    }
    return retour
}

var sumKeysAndValues = function(object) {
    let retour = 0
    for (let key in object) {
        retour = retour + parseInt(object[key]) + parseInt(key)
    }
    return retour
}

var removeCapitals = function(string) {
    return string.replace(/[A-Z]/g, '')
}

var roundUp = function(number) {
    return Math.ceil(number)
}

var formatDateNicely = function(date) {
    let retour = new Date(date)
    retour =  ('0' + retour.getDate()).slice(-2) + '/'
            + ('0' + (retour.getMonth()+1)).slice(-2) + '/'
            + retour.getFullYear()
    return retour
}

var getDomainName = function(string) {
    let retour = string.substr(string.indexOf("@")+1).replace('.com','')
    return retour
}

var titleize = function(string) {
    function titleize(val) {
        let test = val.split(' ')
        let retour = ''
        retour += test[0].charAt(0).toUpperCase() + test[0].substring(1)+' '
        for(let i = 1; i < test.length; i++) {
            if(test[i].length > 3) {
                if(i != test.length-1)
                    retour += test[i].charAt(0).toUpperCase() + test[i].substring(1)+' '
                else
                    retour += test[i].charAt(0).toUpperCase() + test[i].substring(1)
            }
            else
                retour += test[i]+' '
        }
        return retour.replace(/\. [a-z]/i, String.call.bind(retour.toUpperCase))
    }

    return titleize(string)
}

var checkForSpecialCharacters = function(string) {
    return (/[a-z][0-9]/i.test(string)) ? false : true
}

var squareRoot = function(number) {
    return Math.sqrt(number)
}

var factorial = function(number) {
    function fact(num) {
        if (num === 0)
            return 1
        else
            return num * fact(num - 1)
    }
    return fact(number)
}

var findAnagrams = function(string) {
    string = string.split(",")
    var allAna = function(arr) {
        var anagrams = {}
        arr.forEach(function(str) {
            var recurse = function(ana, str) {
                if (str === '') 
                    anagrams[ana] = 1
                for (var i = 0; i < str.length; i++)
                    recurse(ana + str[i], str.slice(0, i) + str.slice(i + 1))
            }
            recurse('', str)
        })
        return Object.keys(anagrams)
    }
    return allAna(string)
}

var convertToCelsius = function(number) {
    return Math.ceil((number - 32) * 5/9)
}

var letterPosition = function(array) {
    let retour = []
    for(let i = 0; i<array.length; i++) {
        if (array[i] == array[i].toUpperCase())
            retour.push(array[i].charCodeAt(0)-64)
        else
            retour.push(array[i].charCodeAt(0)-96)
    }
    return retour
}
