function LoginTelaPrincipal(){
    var loginUsuario = document.getElementById("loginUsuario").value;
    var loginSenha = document.getElementById("loginSenha").value; 

    if(loginUsuario.length <= 5){
        document.getElementById("loginUsuario").style.borderColor = "red";
        document.getElementById("mensagemLoginUsuario").style.opacity = "1";
    }else{
        document.getElementById("loginUsuario").style.borderColor = "black";
        document.getElementById("mensagemLoginUsuario").style.opacity = "0";
    }

    if(loginSenha.length <= 12){
        document.getElementById("loginSenha").style.borderColor = "red";
        document.getElementById("mensagemLoginSenha").style.opacity = "1";
    }else{
        document.getElementById("loginSenha").style.borderColor = "black";
        document.getElementById("mensagemLoginSenha").style.opacity = "0";
    }

    if(loginUsuario.length >= 5 && loginSenha.length >= 12){
        window.location.pathname = "pjbl/paginas/telaPrincipal.html";
    }else{
        document.getElementById("loginSenha").value = "";
    }
}
