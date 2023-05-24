var GiornoSettimana;
(function (GiornoSettimana) {
    GiornoSettimana[GiornoSettimana["DOMENICA"] = 0] = "DOMENICA";
    GiornoSettimana[GiornoSettimana["LUNEDI"] = 1] = "LUNEDI";
    GiornoSettimana[GiornoSettimana["MARTEDI"] = 2] = "MARTEDI";
    GiornoSettimana[GiornoSettimana["MERCOLEDI"] = 3] = "MERCOLEDI";
    GiornoSettimana[GiornoSettimana["GIOVEDI"] = 4] = "GIOVEDI";
    GiornoSettimana[GiornoSettimana["VENERDI"] = 5] = "VENERDI";
    GiornoSettimana[GiornoSettimana["SABATO"] = 6] = "SABATO";
})(GiornoSettimana || (GiornoSettimana = {}));
console.log(GiornoSettimana);
console.log(GiornoSettimana[0]); //DOMENICA
console.log(GiornoSettimana.DOMENICA); //0
