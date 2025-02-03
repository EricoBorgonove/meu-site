let outros = document.getElementById("outros");
let genero = document.getElementsByName("genero");
let estados = document.querySelector("#estados");
let pais = document.getElementById("pais");
let senha1 = document.getElementById("senha1");
let senha2 = document.getElementById("senha2");
let btnver = document.getElementById("btnver");
let btnicone = document.getElementById("btnicone");
let iconebtn = document.getElementById("iconebtn");
let erroSenha = document.getElementById("erroSenha");
let cep = document.getElementById("cep")

const estadosDoBrasil = [
  { nome: "Acre", sigla: "AC" },
  { nome: "Alagoas", sigla: "AL" },
  { nome: "Amapá", sigla: "AP" },
  { nome: "Amazonas", sigla: "AM" },
  { nome: "Bahia", sigla: "BA" },
  { nome: "Ceará", sigla: "CE" },
  { nome: "Distrito Federal", sigla: "DF" },
  { nome: "Espírito Santo", sigla: "ES" },
  { nome: "Goiás", sigla: "GO" },
  { nome: "Maranhão", sigla: "MA" },
  { nome: "Mato Grosso", sigla: "MT" },
  { nome: "Mato Grosso do Sul", sigla: "MS" },
  { nome: "Minas Gerais", sigla: "MG" },
  { nome: "Pará", sigla: "PA" },
  { nome: "Paraíba", sigla: "PB" },
  { nome: "Paraná", sigla: "PR" },
  { nome: "Pernambuco", sigla: "PE" },
  { nome: "Piauí", sigla: "PI" },
  { nome: "Rio de Janeiro", sigla: "RJ" },
  { nome: "Rio Grande do Norte", sigla: "RN" },
  { nome: "Rio Grande do Sul", sigla: "RS" },
  { nome: "Rondônia", sigla: "RO" },
  { nome: "Roraima", sigla: "RR" },
  { nome: "Santa Catarina", sigla: "SC" },
  { nome: "São Paulo", sigla: "SP" },
  { nome: "Sergipe", sigla: "SE" },
  { nome: "Tocantins", sigla: "TO" },
];

function abrirOutros() {
  if (genero[2].checked) {
    outros.disabled = false;
  } else {
    outros.disabled = true;
    outros.value = "";
  }
}
function verEstados() {
  if (pais.value == "BR") {
    if (!estados[1]) {
      for (let i = 1; i < estadosDoBrasil.length; i++) {
        let option = document.createElement("option");
        option.textContent = estadosDoBrasil[i].nome;
        option.value = estadosDoBrasil[i].sigla;
        estados.appendChild(option);
      }
    }

    estados.hidden = false;
    document.getElementById("labelEstados").hidden = false;
  } else {
    estados.hidden = true;
    document.getElementById("labelEstados").hidden = true;
  }
}

function togglePass() {
  if (senha1.type == "password") {
    senha1.type = "text";
    senha2.type = "text";
    btnver.textContent = "Desver";
    btnver.classList.remove("btn-primary");
    btnver.classList.add("btn-warning");
    btnicone.classList.remove("btn-primary");
    btnicone.classList.add("btn-warning");
    iconebtn.classList.remove("bi-eye");
    iconebtn.classList.add("bi-eye-slash");
  } else {
    senha1.type = "password";
    senha2.type = "password";
    btnver.textContent = "Ver";
    btnver.classList.remove("btn-warning");
    btnver.classList.add("btn-primary");
    btnicone.classList.remove("btn-warning");
    btnicone.classList.add("btn-primary");
    iconebtn.classList.remove("bi-eye-slash");
    iconebtn.classList.add("bi-eye");
  }
}

function compararSenha() {
  if (senha2.value !== "") {
    if (senha1.value !== senha2.value) {
      erroSenha.innerHTML = "senha não confere";
      senha1.classList.add('is-invalid')
      senha2.classList.add('is-invalid')
    }else{
      erroSenha.innerHTML = "";
      senha1.classList.remove('is-invalid')
      senha2.classList.remove('is-invalid')
    }
  }
  if (senha1.value == "" && senha2.value == ""){
    erroSenha.innerHTML = "";
    senha1.classList.remove('is-invalid')
    senha2.classList.remove('is-invalid')
  }
}
function validarCep(){
    if (cep.value == "" || cep.value.length !=8 ){
      cep.classList.add('is-invalid')
      alert("cep inválido")
    }else{
      viaCep()
      console.log (cep.value)
    }
}
function limparCep(){
  cep.classList.remove('is-invalid')
  cep.value = ""
  document.getElementById("logradouro").value = ""
  document.getElementById("uf").value = ""
  document.getElementById("localidade").value = ""
  document.getElementById("bairro").value = ""
  document.getElementById("complemento").value = ""
  document.getElementById("numero").disabled = true
}
function viaCep(){
  document.getElementById("logradouro").disabled = true
  document.getElementById("uf").disabled = true
  document.getElementById("localidade").disabled = true
  document.getElementById("bairro").disabled = true
  document.getElementById("complemento").disabled = true
  document.getElementById("numero").disabled = true
     fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
        .then(response => response.json())
        .then (response =>{
          document.getElementById("logradouro").value = response.logradouro
          document.getElementById("uf").value = response.uf
          document.getElementById("localidade").value = response.localidade
          document.getElementById("bairro").value = response.bairro
          document.getElementById("complemento").value = response.complemento
          document.getElementById("numero").disabled = false
})
}

 function digitarCep(){
  limparCampos()
  document.getElementById("logradouro").disabled = false
  document.getElementById("uf").disabled = false
  document.getElementById("localidade").disabled = false
  document.getElementById("bairro").disabled = false
  document.getElementById("complemento").disabled = false
  document.getElementById("numero").disabled = false
 }
function limparCampos(){
          document.getElementById("logradouro").value = ""
          document.getElementById("uf").value = ""
          document.getElementById("localidade").value = ""
          document.getElementById("bairro").value = ""
          document.getElementById("complemento").value = ""
          document.getElementById("numero").value = ""
}


