// Code your solution here
function findMatching(array, string) {
    return array.filter(e => e.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch(array, string) {
    const stringLength = string.length
    return array.filter(e => e.substr(0, stringLength).toLowerCase() === string.toLowerCase())
}

function matchName(obj, string) {
    const result = []
    for (let e of obj) {
        if(e.name === string) {
            result.push(e)
        }
    }
    return result
}