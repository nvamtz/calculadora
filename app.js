let boton=document.getElementById('sumar');
let respuesta=document.getElementById('respuesta');


boton.addEventListener('click', hacersuma);

//resta
let boton1=document.getElementById('restar');
boton1.addEventListener('click', hacerresta);

//dividir
let boton2=document.getElementById('dividir');
boton2.addEventListener('click', hacerdivision);

//multiplicar
let boton3=document.getElementById('multiplicar');
boton3.addEventListener('click', hacermultiplicacion);


// funion suma
//parseFloat sirve para cambiar el valor a un numero
function hacersuma(){
    let n1=parseFloat(document.getElementById('n1').value);
    let n2=parseFloat(document.getElementById('n2').value);
    let n3=n1+n2;
    respuesta.innerHTML=`El resultado de la suma es:  ${n3}`;
}

//funcion resta
function hacerresta(){
    let n1=parseFloat(document.getElementById('n1').value);
    let n2=parseFloat(document.getElementById('n2').value);
    let n3=n1-n2;
    respuesta.innerHTML=`El resultado de la resta es:  ${n3}`;
}

//funcion division
function hacerdivision(){
    let n1=parseFloat(document.getElementById('n1').value);
    let n2=parseFloat(document.getElementById('n2').value);
    let n3=n1/n2;
    respuesta.innerHTML=`El resultado de la division es:  ${n3}`;
}

//funcion multiplicacion
function hacermultiplicacion(){
    let n1=parseFloat(document.getElementById('n1').value);
    let n2=parseFloat(document.getElementById('n2').value);
    let n3=n1*n2;
    respuesta.innerHTML=`El resultado de la multiplicacion es:  ${n3}`;
}