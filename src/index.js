module.exports = function toReadable (number) {
    const nFrom0To19 = [
        'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
    ]
    const dec = ['', '', 'twenty ', 'thirty ', 'forty ', 'fifty ', 'sixty ', 'seventy ', 'eighty ', 'ninety ']
    const hun = []
    
    if  (number >=0 && number <=19) {
        return nFrom0To19[number]
    }

    digits = number.toString().split('').map((n)=> Number(n))
    if (digits.length == 2) {
        digits.unshift(0)
    }

    hund = ((digits[0] > 0)?nFrom0To19[digits[0]]+" hundred ": "")
    decs = ""
    if ((digits[1]*10+digits[2]) < 20) {
        if ((digits[1]*10+digits[2]) > 0) {
            decs = nFrom0To19[(digits[1]*10+digits[2])]       
        }
    }
    else {
        decs = dec[digits[1]] + ((digits[2] > 0)?nFrom0To19[digits[2]]: "")
    }
    return (hund + decs).trim()
}

console.log(module.exports(998))
