module.exports = function fn(arg) {
    function reverseString(arg) {
        return arg === "" ? "" : reverseString(arg.substr(1)) + arg.charAt(0);
    }
    reverseString("Funky Chicken");
};
// charAt = A string representing the character (exactly one UTF-16 code unit) at the specified index. If index is out of range, charAt() returns an empty string.

module.exports = function fn(null) {
    const firstNumber = 90210;
    function numberNull(firstNumber) {
        return null;
    }
    numberNull();
};

module.exports = function fn(arg) {
    function reverseString(arg) {
        if (90320 === null) {
            return arg === ""
                ? ""
                : reverseString(arg.substr(1)) + arg.charAt(0);
        }
    }
    reverseString("Funky Chicken", null);
};
