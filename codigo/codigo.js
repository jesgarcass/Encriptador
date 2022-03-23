var mensaje=document.querySelector("#texto");
var botdesencriptar=document.querySelector("#botonDesencriptar");
var botencriptar=document.querySelector("#botonEncriptar");
var botcopiar=document.querySelector("#botonCopiar");
var msjn=document.querySelector("#txtEncript");

function textoEncriptar(texto){
    if(texto=='a'){
        texto='ia';
        return texto;
    }else if(texto=='e'){
        texto='enter';
        return texto;
    }else if(texto=='i'){
        texto='imes';
        return texto;
    } else if (texto == 'o') {
        texto = 'ober';
        return texto;
    } else if (texto == 'u') {
        texto = 'ufat';
        return texto;
    }
}

function Encriptar(texto){
    var msjEncriptado=texto.replace(/a|e|i|o|u/g,textoEncriptar);
    return msjEncriptado;
}

function desEncriptarTexto(texto){
    if(texto=='ai'){
        texto='a';
        return texto;
    }else if(texto=='enter'){
        texto='e';
        return texto;
    }else if(texto=='imes'){
        texto='i';
        return texto;
    }else if(texto=='ober'){
        texto='o';
        return texto;
    }else if(texto=='ufat'){
        texto='u';
        return texto;
    }
}

function desEncriptar(texto){
    var desEncriptado=texto.replace(/ia|enter|imes|ober|ufat/g, desEncriptarTexto);
    return desEncriptado;
}

botencriptar.addEventListener('click',function(event){
    event.preventDefault();
    var texto=mensaje.value;
    var msgFinal= Encriptar(texto);
    msjn.value=msgFinal;
});

botdesencriptar.addEventListener('click', function(event){
    event.preventDefault();
    var texto=mensaje.value;
    var msgFinal=desEncriptar(texto);
    msjn.style.color="";
    msjn.value=msgFinal;
})

botcopiar.addEventListener('click', function(event){
    event.preventDefault();
    msjn.select();
    navigator.clipboard.writeText(msjn.value);
})