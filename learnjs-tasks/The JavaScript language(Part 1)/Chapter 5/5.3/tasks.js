//Task 1:
function ucFirst(str) {
    let firstLetter = str[0].toUpperCase();
    return firstLetter + str.slice(1);
};

//Task 2:
function checkSpam(str) {
    if (str.toLowerCase().includes('viagra') || str.toUpperCase().includes('XXX')) {
        return true;
    }
    return false;
};

//Task 3:
function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return str.substr(0, maxlength - 1) + '...';
    }
    return str;
};

//Task 4:
function extractCurrencyValue(str) {
    return +str.slice(1);
};
