

function datos(xsuario,xclave){
    if (xsuario=="admin" && xclave==="1234") {
        alert("Correcto");
        document.getElementById("txtusuario").value = "";
        document.getElementById("txtclave").value = "";
    } else {
        alert("Incorrecto");
        document.getElementById("txtusuario").value = "";
        document.getElementById("txtclave").value = "";
    }
}