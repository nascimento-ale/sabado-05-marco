var valorum = 8;
var valordois = 2;
var valortres = 8;
var valorquatro = 7;
var notafinal;
var media =4
notafinal = (valorum + valordois + valortres + valorquatro) / media;
console.log("media final: "+notafinal);
if (notafinal >= 7){
    console.log("status: aprovado");
}else if(notafinal >=5) {
    console.log("status: recuperaçao");
} else {

    console.log("status: reprovado");
}