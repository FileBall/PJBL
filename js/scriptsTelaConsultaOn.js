var listaConsultas = [];
var consultasMarcadas = [];
var x = 0;

window.onload = function(){
    montarCardsConsultas();
}

function montarCardsConsultas(){
    document.getElementById("divConsultas").innerHTML = "";
    for(var i = 0; i < listaConsultas.length; i++){
        var conteudo = "";
        conteudo += '<div class="divCard">';
        conteudo += '<div class="divCardPsicologo">';
        conteudo += listaConsultas[i][1];
        conteudo += '</div>';
        conteudo += '<div class="divCardEmail">';
        conteudo += listaConsultas[i][2];
        conteudo += '</div>';
        conteudo += '<div class="divCardHorario">';
        conteudo += listaConsultas[i][3];            
        conteudo += '</div>';
        conteudo += '<div class="divCardPreco">';
        conteudo += listaConsultas[i][4];            
        conteudo += '</div>';
        if(listaConsultas[i][5] == false){
            conteudo += '<div class="divMarcar" onclick="marcar('+listaConsultas[i][0]+')">';
            conteudo += '<label>Marcar Consulta</label>';
            conteudo += '</div>';
        }else{
            conteudo += '<div class="divMarcar consultaMarcada"';
            conteudo += '<label>Consulta Marcada</label>';
            conteudo += '</div>';
        }
        conteudo += '</div>';

        document.getElementById("divConsultas").innerHTML += conteudo
    }
}

function marcar(id){
    listaConsultas [id][5]= true;
    consultasMarcadas.push(listaConsultas[id]);
    window.localStorage.setItem("consultasMarcadas", JSON.stringify(consultasMarcadas));
    montarCardsConsultas()
}

function CriarConsulta(){
    nome = document.getElementById('inputNome').value;
    email = document.getElementById('inputEmail').value;
    horario = document.getElementById('inputHorario').value;
    preco = document.getElementById('inputPreco').value;

    if(nome.length <= 5){
        document.getElementById("divPsicologo").classList.add('inputErro');
    }else{
        document.getElementById("divPsicologo").classList.remove('inputErro');
    }
    if(email.includes("@")){
        document.getElementById("divEmail").classList.remove('inputErro');
    }else{
        document.getElementById("divEmail").classList.add('inputErro');
    }
    if(horario.length != 16){
        document.getElementById("divHorario").classList.add('inputErro');
    }else{
        document.getElementById("divHorario").classList.remove('inputErro');
    }
    if(preco.includes("R$")){
        document.getElementById("divPreco").classList.remove('inputErro');
    }else{
        document.getElementById("divPreco").classList.add('inputErro');
    }
    if(nome.length > 5 && email.includes("@") && horario.length == 16 && preco.includes("R$")){
        listaConsultas.push([x, nome, email, horario, preco, false]);
        montarCardsConsultas(); 
        x++;
        document.getElementById('inputNome').value = "";
        document.getElementById('inputEmail').value = "";
        document.getElementById('inputHorario').value = "";
        document.getElementById('inputPreco').value = "";
    }
}
