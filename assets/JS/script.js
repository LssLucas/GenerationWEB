/*
    var - escopo global
    let - escopo local
    cons - escopo global - variavel contante
*/

/*
    ACESSO AO DOM

getElementsById()
getElementByTagName()
getElementsByName()
getElementsByClassName()
querySelector() seleciona por id

*/

let nome = document.querySelector('#nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false;
let emailOk = false;
let assuntoOk = false;
let mapa = document.querySelector('#mapa')
let main = document.querySelector('#main')
let mySidebar = document.querySelector('#mySidebar')
let mySidebar = document.querySelector('#mySidebar')
let openNav = document.querySelector('#openNav')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = 'red'
            //alert('Nome inválido!')
    } else {
        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'Email Inválido'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = 'Válido Válido'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

function limiteTextArea(valor) {
    quant = 100;
    total = valor.length;
    if (total <= quant) {
        resto = quant - total;
        document.getElementById('cont').innerHTML = resto;
    } else {
        document.getElementById('texto').value = valor.substr(0, quant);
        assuntoOk = true
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {} else {}
}

function zoomMapa() {
    mapa.style.width = '800px'
    mapa.style.width = '600px'
}

function mapaNormal() {
    mapa.style.width = '400px'
    mapa.style.width = '250px'
}

/*function w3_open() {
    let txtMail = document.querySelector('#txtMain')
    let txtMySidebar = document.querySelector('#txtSidebar')
    let txtOpenNav = document.querySelector('#txtOpenNav')
    txtMail.document.getElementById("main").style.marginLeft = "25%";
    txtMySidebar.document.getElementById("mySidebar").style.width = "25%";
    txtMySidebar.document.getElementById("mySidebar").style.display = "block";
    txtOpenNav.document.getElementById("openNav").style.display = 'none';
}

function w3_close() {
    document.getElementById("main").style.marginLeft = "0%";
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("openNav").style.display = "inline-block";
}*/