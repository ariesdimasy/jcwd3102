/*
    ======================
    String to Multidimensi
    ======================

    [INSTRUKSI]
    diberikan sebuah string yang jumlah characternya bisa di akar pangkat
    (4, 9, 16, 25 , ... )
    ubahlah karakter - karakter itu menjadi array multidimensi
    dimana hasil akar pangkat jumlah karakternya menjadi row dan col

    [EXAMPLE]

    stringToMultidimensi("0120194124213712")
    jumlah char : 16
    row dan col = akat 16
    row dan col = 4
    output:
    [
         1 2 3 4
        [0,1,2,0], 1
        [1,9,4,1], 2
        [2,4,2,1], 3
        [3,7,1,2]  4
    ]

 */
function stringToMultidimensi(str) {
    var myLength = Math.sqrt(str.length);
    var result = [];
    var counter = 0;
    for (var i = 0; i < myLength; i++) {
        var row = [];
        for (var j = 0; j < myLength; j++) {
            row.push(Number(str[counter]));
            counter++;
        }
        result.push(row);
    }
    return result;
}
console.log(stringToMultidimensi("0120194124213712"));
/*
   [
       [0,1,2,0],
       [1,9,4,1],
       [2,4,2,1],
       [3,7,1,2]
   ]
*/
console.log(stringToMultidimensi("0120194124213712"));
/*
   // char count invalid
*/
var matriks = stringToMultidimensi("0120194124213712256984568");
console.log(matriks);
var x = 1;
var y = 1;
console.log(matriks[x][y]); //
console.log(matriks[x - 1][y]); // 1
if (matriks[x][y + 1] == 2) {
    console.log(" angka 2 ");
}
else {
    console.log("bukan angka 2, tapi " + matriks[x][y + 1]);
}
var cor = [2, 3]; // [y,x]
console.log(matriks[cor[0]][cor[1]]);
var cor2 = [4, 1];
console.log(matriks[cor2[0]][cor2[1]]);
var a2 = 2;
var b2 = 1;
console.log(matriks[a2][b2]);
function studyCase01(arr, num) {
    // let res: Array<number> = []
    // your code here
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
            if (arr[i][j] == num) {
                // res.push(i,j)
                return [i, j];
            }
        }
    }
    return -1;
}
console.log(studyCase01([
    [0, 0, 0],
    [0, 0, 4],
    [0, 0, 0]
], 4)); // [1,2]
