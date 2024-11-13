function checkAnagram(str, str1) {
    var strLetter = str.toLowerCase();
    var str1Letter = str1.toLowerCase();
    var strLetterSplit = strLetter.split('');
    var str1LetterSplit = str1Letter.split('');
    var strSort = strLetterSplit.sort();
    var str1Sort = str1LetterSplit.sort();
    var strJoin = strSort.join("");
    var str1Join = str1Sort.join("");
    if (strJoin == str1Join) {
        return true;
    }
    return false;
}
console.log(checkAnagram("Aries", "Seira"));
console.log(checkAnagram("Ann", "Ana"));
