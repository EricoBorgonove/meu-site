function limpar (){
    document.getElementById('cep').value = ""

    let tabela = document.getElementById('linha')
    while (tabela.firstChild) {
        tabela.removeChild(tabela.firstChild)
    }
}
function buscar(){
    let cep = document.getElementById('cep').value
    if (cep == ""){
        alert ("Digite o CEP")
    } else if (cep.length != 8){
        alert("CEP deve ter 8 dígitos.")
    } else{
        pesquisarCep(cep)
    }
}
function pesquisarCep(cep) {
    let linha = document.getElementById('linha');
    document.querySelector("#spinner").style.display = "block";

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => {
        if (response.ok) {
            return response.json();
        }else if (!response.ok){
            throw new Error('CEP inválido');
        } else {
            throw new Error('Falha ao buscar dados');
        }
    })
        .then(response => {
            console.log (response)
            let tr = document.createElement('tr');

            let tdCep = document.createElement('td');
            tdCep.innerText = response.cep  || '-'
            tr.appendChild(tdCep) 

            let tdLogradouro = document.createElement('td');
            tdLogradouro.innerText = response.logradouro || '-';
            tr.appendChild(tdLogradouro);

            let tdBairro = document.createElement('td');
            tdBairro.innerText = response.bairro || '-';
            tr.appendChild(tdBairro);

            let tdLocalidade = document.createElement('td');
            tdLocalidade.innerText = response.localidade || '-';
            tr.appendChild(tdLocalidade);

            let tdUf = document.createElement('td');
            tdUf.innerText = response.uf || '-';
            tr.appendChild(tdUf);

            let tdddd = document.createElement('td');
            tdddd.innerText = response.ddd || '-';
            tr.appendChild(tdddd);


            linha.appendChild(tr);
            document.getElementById('cep').value = ""
        })
        .catch(error => {
            alert('Erro:', error.message);
        })
        .finally(() => {
            document.querySelector("#spinner").style.display = "none";
        });
}
