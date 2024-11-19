var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
console.log("eksekusi");
setTimeout(function () {
    console.log("eksekusi setelah 3 detik");
}, 0);
function buy(money, spend, cb) {
    var left = money - spend;
    cb(left);
}
function buyPromise(money, spend) {
    return new Promise(function (resolve, reject) {
        //let left = money - spend
        if (money >= spend) {
            var left = money - spend;
            resolve(left);
        }
        else {
            reject("gak ngadong hepeng");
        }
    });
}
var myMoney = 90000;
// buy(myMoney,10000,(money1) => {
//     console.log(" left : ",money1)
//     buy(money1, 20000, (money1) => {
//         console.log(" left : ", money1)
//         buy(money1, 20000, (money1) => {
//             console.log(" left : ", money1)
//             buy(money1, 20000, (money1) => {
//                 console.log(" left : ", money1)
//                 buy(money1, 20000, (money1) => {
//                     console.log(" left : ", money1)
//                 })
//             })
//         })
//     })
// })
function runAsynAwait() {
    return __awaiter(this, void 0, void 0, function () {
        var left, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("satu");
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, buyPromise(myMoney, 10000)];
                case 2:
                    left = _a.sent();
                    console.log("left : ", left);
                    return [4 /*yield*/, buyPromise(left, 20000)];
                case 3:
                    left = _a.sent();
                    console.log("left : ", left);
                    return [3 /*break*/, 5];
                case 4:
                    err_1 = _a.sent();
                    console.log(err_1);
                    return [3 /*break*/, 5];
                case 5:
                    console.log("dua");
                    return [2 /*return*/];
            }
        });
    });
}
function runSynchronous() {
    console.log("satu");
    buyPromise(myMoney, 10000)
        .then(function (res) {
        console.log(" left : ", res);
        return buyPromise(res, 20000);
    })
        .then(function (res) {
        console.log(" left : ", res);
        return buyPromise(res, 40000);
    })
        .then(function (res) {
        console.log(" left : ", res);
        return buyPromise(res, 40000);
    })
        .then(function (res) {
        console.log(" left : ", res);
    })
        .catch(function (err) {
        console.log("err : ", err);
    });
    console.log("dua");
}
// runSynchronous()
runAsynAwait();
for (var i = 0; i <= 10; i++) {
    console.log(i);
}
console.log(i);