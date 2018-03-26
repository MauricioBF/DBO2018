function split(texto, retira) {
    let c = 0;
    let resp = [];
    let i = 0;
    let branco = "";
    let a=0;
    while (c <= texto.length-1){
        if ((texto[c]) !== retira){
            branco += texto[c];
            //console.log(branco);
        }
        if (((texto[c] === retira)&&(c !== 0))||(c === texto.length-1)){
            resp[i] = branco;
            branco = "";
            i++;
            a = c;
            //console.log(i);
        }
        if((a === texto.length-1)&&(texto[c] === retira)){
            resp[i] = ""
        }
        c++;
    }
    //console.log(resp);
    return resp;
}
document.querySelector(".click").addEventListener('click', function () {
    let texto = document.querySelector (".split").value;
    let retira = document.querySelector (".separador").value;
    let c = 0;
    let i = 0;
    let stringvazia = "";
    let branco = "";
    let a = 0;
    while (c <= texto.length-1){
        if ((texto[c]) !== retira){
            if(i === 2){
                //console.log("oi");
            }
            branco += texto[c];
            //console.log(branco);
        }
        if ((texto[c] === retira)&&(c !== 0)){
            stringvazia += "<li>" + branco + "</li>";
            branco = "";
            i++;
            a = c;
            //console.log(i);
        }
        if(a === texto.length-1){
            stringvazia += "<li>" + '' + "</li>";
        }
        c++;
    }
    //console.log(resp);
    document.querySelector(".algo").innerHTML = stringvazia;
    return true;
})

const parts = split('the:matrix:revisited', ':');
console.log(parts.length === 3);
console.log(parts[0] === 'the');
console.log(parts[1] === 'matrix');
console.log(parts[2] === 'revisited');
console.log(parts[3] === undefined);
 
console.log(split('banana', 'a')[0] === 'b');
console.log(split('banana', 'a')[1] === 'n');
console.log(split('banana', 'a')[2] === 'n');
console.log(split('banana', 'a')[3] === '');
 
const dbo = split('desenvolvimento baseado em objetos', ' ');
console.log(dbo.length === 4);
console.log(dbo[0] === 'desenvolvimento');
console.log(dbo[1] === 'baseado');
console.log(dbo[2] === 'em');
console.log(dbo[3] === 'objetos');