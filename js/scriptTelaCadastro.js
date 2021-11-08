function Cadastrar(){
    var nome = document.getElementById("cadastroNome").value;
    var sobrenome = document.getElementById("cadastroSobrenome").value;
    var email = document.getElementById("cadastroEmail").value;
    var ususario = document.getElementById("cadastroUsuario").value;
    var senha = document.getElementById("cadastroSenha").value;
    var confSenha = document.getElementById("cadastroConfirmarSenha").value;
    
    if(nome.length <= 2){
        document.getElementById("cadastroNome").style.borderColor = "red";
        document.getElementById("mensagemNome").style.opacity = "1";
    }else{
        document.getElementById("cadastroNome").style.borderColor = "black";
        document.getElementById("mensagemNome").style.opacity = "0";
    }
    
    if(sobrenome.length <= 2){
        document.getElementById("cadastroSobrenome").style.borderColor = "red";
        document.getElementById("mensagemSobrenome").style.opacity = "1";
    }else{
        document.getElementById("cadastroSobrenome").style.borderColor = "black";
        document.getElementById("mensagemSobrenome").style.opacity = "0";
    }
    
    if(email.includes("@")){
        document.getElementById("cadastroEmail").style.borderColor = "black";
        document.getElementById("mensagemEmail").style.opacity = "0";
    }else{
        document.getElementById("cadastroEmail").style.borderColor = "red";
        document.getElementById("mensagemEmail").style.opacity = "1";
    }
    
    if(ususario.length <= 5){
        document.getElementById("cadastroUsuario").style.borderColor = "red";
        document.getElementById("mensagemUsuario").style.opacity = "1";
    }else{
        document.getElementById("cadastroUsuario").style.borderColor = "black";
        document.getElementById("mensagemUsuario").style.opacity = "0";
    }
    
    if(senha.length <= 12){
        document.getElementById("cadastroSenha").style.borderColor = "red";
        document.getElementById("mensagemSenha").style.opacity = "1";
        document.getElementById("cadastroSenha").value = "";
        document.getElementById("cadastroConfirmarSenha").value = "";
    }else{
        document.getElementById("cadastroSenha").style.borderColor = "black";
        document.getElementById("mensagemSenha").style.opacity = "0";
    }
    
    if(confSenha===senha){
        document.getElementById("cadastroConfirmarSenha").style.borderColor = "black";
        document.getElementById("mensagemConfirmarSenha").style.opacity = "0";
        
    }else{
        document.getElementById("cadastroConfirmarSenha").style.borderColor = "red";
        document.getElementById("mensagemConfirmarSenha").style.opacity = "1";
        document.getElementById("cadastroSenha").value = "";
        document.getElementById("cadastroConfirmarSenha").value = "";
    }

    if(confSenha===senha && senha.length >= 12 && ususario.length >= 5 && 
        email.includes("@") && sobrenome.length >= 2 && nome.length >= 2){
            document.getElementById("cadastroNome").value = "";
            document.getElementById("cadastroSobrenome").value = "";
            document.getElementById("cadastroEmail").value = "";
            document.getElementById("cadastroUsuario").value = "";
            document.getElementById("cadastroSenha").value = "";
            document.getElementById("cadastroConfirmarSenha").value = "";
            alert("Sua conta foi cadastrada !");
    }
}
