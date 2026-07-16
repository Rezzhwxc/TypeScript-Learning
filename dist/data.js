"use strict";
var VocaloidId;
(function (VocaloidId) {
    VocaloidId[VocaloidId["Miku"] = 1] = "Miku";
    VocaloidId[VocaloidId["Teto"] = 2] = "Teto";
    VocaloidId[VocaloidId["Duo"] = 3] = "Duo";
})(VocaloidId || (VocaloidId = {}));
// 
console.log(VocaloidId[1]);
console.log(VocaloidId.Miku);
