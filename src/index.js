module.exports = function toReadable(number) {
    let zeroToTwelve = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];
    let twelveTwenty = ['ten', 'eleven', 'twen', 'thir', 'four', 'fif', 'six', 'seven', 'eigh', 'nine'];
    let rootWord = ['ten', 'eleven', 'twen', 'thir', 'for', 'fif', 'six', 'seven', 'eigh', 'nine'];

    let oneHundred = function(numberOneHundred) {
        if (numberOneHundred < 13) {
            return (zeroToTwelve[numberOneHundred])
        } else if (numberOneHundred < 20) {
            return (twelveTwenty[numberOneHundred - 10] + "teen")
        } else if (numberOneHundred < 100) {
            let ost = numberOneHundred % 10;
            if (ost == 0) {
                return (rootWord[numberOneHundred / 10] + "ty");
            } else {
                return (rootWord[(numberOneHundred - ost) / 10] + "ty" + " " + zeroToTwelve[ost]);
            }
        }
    }
    if (number < 100) {
        return (oneHundred(number))
    } else if (number < 1000) {
        let units = number % 10;
        let dozens = (number % 100 - units) / 10;
        let hund = (number - (dozens * 10) - units) / 100;
        if (units == 0 && dozens == 0) {
            return (zeroToTwelve[hund] + " " + 'hundred');
        } else {
            return (zeroToTwelve[hund] + " " + 'hundred' + ' ' + oneHundred(number % 100));
        }
    }

}