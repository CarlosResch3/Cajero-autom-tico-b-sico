//Arreglo de las cuentas 
const cuentas = [
    {nombre: "Charly", saldo: 380, password: "1234"},
    {nombre: "Betty", saldo: 830, password: "5678"},
    {nombre: "Eddy", saldo: 65, password: "abcd"},

];

let cuentaSeleccionada = null;
let tipoTransaccion = "";

//Funcion para el login

function login() {
    const cuentaIndex = document.getElementById("accountSelect").value;
    const password = document.getElementById("passwordInput").value;

    if (cuentas[cuentaIndex].password === password) {
        cuentaSeleccionada = cuentas[cuentaIndex];

        document.getElementById("login").style.display = "none";
        document.getElementById("options").style.display = "block";
        document.getElementById("message").innerText = `¡Bienvenido/a ${cuentaSeleccionada.nombre}!`;
    } else {
        alert("Contraseña incorrecta, intenta de nuevo.");
    }
}

//Conssulta de saldo
function consultarSaldo() {
    document.getElementById("message").innerText = `Tu saldo actual es $${cuentaSeleccionada.saldo}.`;
}

//Seccion de ingreso de monto

function mostrarIngreso() {
    tipoTransaccion = "ingreso";

    document.getElementById("transactionType").innerText = "Ingresar Monto";
    document.getElementById("options").style.display = "none";
    document.getElementById("transaction").style.display = "block";
}

//Sección retiro de monto 

function mostrarRetiro() {
    tipoTransaccion = "retiro";

    docoument.getElementById("transactionType").innerText = "Retirar monto";
    document.getElementById("options").style.display = "none";
    document.getElementById("transaction").style.display = "block";
}

//Funcion para realizar ingreso retiro

function realizarTransaccion() {
    const monto = parseFloat(document.getElementById("transactionAmount").value);
    if (isNaN(monto) || monto <= 0)
    {
        alert("Por favor ingresa un monto válido.");
        return;
    }

    if (tipoTransaccion === "ingreso"){
        if (cuentaSeleccionada.saldo + monto > 990){
            alert("No puedes tener más de $990 en tu cuenta.");
        } else {
            cuentaSeleccionada.saldo += monto;
            document.getElementById("message").innerText = `Ingresaste $${monto}. Tu nuevo saldo es $${cuentaSeleccionada.saldo}.`;
        }
    } else if (tipoTransaccion === "retiro"){
        if (cuentaSeleccionada.saldo - monto < 10){
            alert("No puedes tener menos de $10 en tu cuenta.");
        } else {
            cuentaSeleccionada.saldo -= monto;
            document.getElementById("message").innerText = `Retiraste $${monto}. Tu nuevo saldo es $${cuentaSeleccionada.saldo}.`;
        }
    }

    document.getElementById("transaction").style.display = "none";
    document.getElementById("options").style.display = "block";
    document.getElementById("transactionAmount").value = "";
    
}

//Funcion para cerrar sesión 

function cerrarSesion() {
    cuentaSeleccionada = null;
    tipoTransaccion = ""

    document.getElementById("login").style.display = "block";
    document.getElementById("options").style.display = "none";
    document.getElementById("transaction").style.display = "none";
    document.getElementById("message").innerText = "";
    document.getElementById("transactionAmount").value = "";
    document.getElementById("passwordInput").value = "";
}


