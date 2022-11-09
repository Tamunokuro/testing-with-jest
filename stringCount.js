const stringLength = (str) => {
    if (str.length >= 1 && str.length <=10){
        return true;
    } else {
        return false;
    } 
}

const reverseStr = (str) => {
    return str.split('').reverse().join('');
}

module.exports = { stringLength, reverseStr };
