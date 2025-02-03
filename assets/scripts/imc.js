function limpar (){
    document.getElementById('alturaSlider').value = 1
    document.getElementById('pesoSlider').value = 100
    document.getElementById('alturaValor').innerHTML = 1
    document.getElementById('pesoValor').innerHTML = 100

    let tabela = document.getElementById('linha')
    while (tabela.firstChild) {
        tabela.removeChild(tabela.firstChild)
    }
}
function calcular(){
    const altura = Number( document.getElementById("alturaSlider").value)
    const peso = Number( document.getElementById("pesoSlider").value)

    const imc =  peso / (altura * altura)

    let tr = document.createElement('tr')

    let tdPeso = document.createElement('td')
    tdPeso.innerText = peso + " kg" || '-'
    tr.appendChild(tdPeso) 

    let tdaltura = document.createElement('td')
    tdaltura.innerText = altura + " m" || '-'
    tr.appendChild(tdaltura)

    let tdimc = document.createElement('td')
    tdimc.innerText = imc.toFixed(3) || '-'
    tr.appendChild(tdimc)

    let tdFaixa = document.createElement('td')
    let tdSituacao = document.createElement('td')

    if (imc >=0 && imc<18.5){
        tdFaixa.innerText = 'I - abaixo de 18,5'  || '-'
        tdSituacao.innerText = 'magreza grave'  || '-'
        tr.classList.add('azul')
    } else if (imc>=18.5 && imc <25){
        tdFaixa.innerText = 'II - entre 18,5 e 25'  || '-'
        tdSituacao.innerText = 'saudável'  || '-'    
        tr.classList.add('verde')       
    }else if (imc >=25 && imc<30){
        tdFaixa.innerText = 'III - entre 25 e 30'  || '-'
        tdSituacao.innerText = 'sobrepeso'  || '-'     
        tr.classList.add('amarelo')     
    }else if (imc >=30 && imc<35){
        tdFaixa.innerText = 'IV - entre 30 e 35'  || '-'
        tdSituacao.innerText = 'obesidade grau I'  || '-' 
        tr.classList.add('laranja')         
    }else if (imc >=35 && imc<40){
        tdFaixa.innerText = 'V - entre 35 e 40'  || '-'
        tdSituacao.innerText = 'obesidade grau II'  || '-' 
        tr.classList.add('vermelhoI')         
    }else if (imc >=40 && imc<45){
        tdFaixa.innerText = 'VI - entre 40 e 45'  || '-'
        tdSituacao.innerText = 'obesidade grau III'  || '-'  
        tr.classList.add('vermelhoII')        
    }else if (imc >=45){
        tdFaixa.innerText = 'VII - acima de 45'  || '-'
        tdSituacao.innerText = 'obesidade grau IV'  || '-'
        tr.classList.add('vermelhoIII')          
    }
    tr.appendChild(tdFaixa)
    tr.appendChild(tdSituacao)
    linha.appendChild(tr)
    
}

