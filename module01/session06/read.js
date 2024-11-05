var strAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
function read01(height) {
    var counter = 0;
    for (var i = 0; i < height; i++) {
        var row = "";
        for (var j = 0; j < height; j++) {
            row += strAlphabet[counter];
            counter++;
            if (counter == 26) {
                counter = 0;
            }
        }
        console.log(row);
    }
}
/*
ABCDEF
GHIJKL
MNOPQR
STUVWX
YZABCD
EFGHIJ
*/
read01(6);
function graduationDecision(score) {
    if (score >= 85) {
        return "LULUS";
    }
    else {
        return "TIDAK LULUS";
    }
}
function studentDataProcessing(data) {
    var result = [];
    for (var i = 0; i < data.length; i++) {
        var decision = graduationDecision(data[i]);
        result.push(decision);
    }
    return result;
}
function read02() {
    console.log(strAlphabet);
    var dataStudent = [83, 78, 86, 67, 80, 85, 90, 100, 94, 84, 89];
    var res = studentDataProcessing(dataStudent);
    console.log(res);
}
// read02()
function read03(arr) {
    for (var i = 0; i < Math.floor(arr.length / 2); i++) {
        var temp = 0;
        temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}
console.log(read03([1, 2, 3, 4, 5]));
