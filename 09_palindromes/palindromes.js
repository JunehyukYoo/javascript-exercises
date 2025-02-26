const isalphanumeric = function (char) {
    const alphnum = "abcdefghijklmnopqrstuvwxyz1234567890";
    return alphnum.includes(char);
}


const palindromes = function (string) {
    const processedString = string
                                .toLowerCase()
                                .split("")
                                .filter(isalphanumeric)
                                .join("");

    let a = 0;
    let b = processedString.length-1;
    while (a <= b) {
        if (processedString[a] != processedString[b]) return false;
        a++;
        b--;
    }
    //console.table(processedString);
    return true;
};

// Do not edit below this line
module.exports = palindromes;