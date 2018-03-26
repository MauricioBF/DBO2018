function downcase(texto){
    let resul = "";
    let i = 0; 
    while(i <= (texto.length-1)){
        if(((texto.charCodeAt(i) > 64) && (texto.charCodeAt(i) < 91))||((texto.charCodeAt(i) > 191) && (texto.charCodeAt(i) < 220))){
            resul += String.fromCharCode(texto.charCodeAt(i)+32);
        }
        else{
            resul += String.fromCharCode(texto.charCodeAt(i));
        }
        i++;
    }
    return resul;
}

document.querySelector(".click").addEventListener('click', function() {
    let texto = document.querySelector(".downcase").value;
    let resul = "";
    let i = 0; 
    while(i <= texto.length-1){
        if(((texto.charCodeAt(i) > 64) && (texto.charCodeAt(i) < 91))||((texto.charCodeAt(i) > 191) && (texto.charCodeAt(i) < 220))){
            resul += String.fromCharCode(texto.charCodeAt(i)+32);
        }
        else{
            resul += String.fromCharCode(texto.charCodeAt(i));
        }
        i++;
    }
    document.querySelector('output').innerHTML = resul;
    return resul;
});

console.log(downcase('TESTE') === 'teste');
console.log(downcase('Teste') === 'teste');
console.log(downcase('T$% 12TR') === 't$% 12tr');
console.log(downcase('CURSO TÉCNICO EM INFORMÁTICA PARA INTERNET') === 'curso técnico em informática para internet');
console.log(downcase('Grande Área: CIÊNCIA DA COMPUTAÇÃO') === 'grande área: ciência da computação');