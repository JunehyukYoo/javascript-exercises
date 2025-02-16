const reverseString = function(string) {
    let reversed = "";
    let length = string.length;
    for (let i = length - 1; i >= 0; i--) {
        reversed += string[i];
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
