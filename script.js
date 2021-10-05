function mediaNotas() {
    let tit = document.getElementById('titulo')
    tit.innerHTML = `Média ponderada`
    areas.innerHTML = ""
    rtres.innerHTML = `
    <p>Calcule a média ponderada</p>
    <p>Insira os valores para calcular a média <input type="number" class="mepd" name="medp" id="medp"> <input type="button" value="Adicionar" id="but1" onclick="admed()"></p>
    <div id="medias"></div> 
    <p>e seus respectivos pesos/frequências <input type="number" class="mepd" name="medp1" id="medp1"> <input type="button" value="Adicionar" id="but1" onclick="adpes()"></p>
    <div id="pesoss"></div>
    <p><input type="button" value="Calcular" id="but1" onclick="calmp()">
    <div id="mepo"></div>
    <div id="mepocalcu"></div>
    `
    res.innerHTML = `<center><input type="button" id="but1" value="&#x021A9 Página inicial" onclick="inicial()"></center>`
} // MEDIA FUNCTION

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var valoresMedia = []
function admed() {
    let valores = document.getElementById("medp")
    let valor = Number(valores.value)

   if (valores.value == '') {
       window.alert('Insira um valor diferente de vazio.')
       document.getElementById('medp').value = "" 
   } else {
      valoresMedia.push(valor)

    medias.innerHTML = `Com os valores: ${valoresMedia}`
    document.getElementById('medp').value = "" 
   }
    
}

var pesosFrequências = []
function adpes() {
    let pesosAdd = document.getElementById('medp1')
    let pesos = Number(pesosAdd.value)

    if (pesosAdd.value <= 0 || pesosAdd.value == '') {
        window.alert('Insira um valor diferente de vazio e não negativo.')
        document.getElementById('medp1').value = ""
    } else {
        pesosFrequências.push(pesos)

    pesoss.innerHTML = `Temos o peso/frequência respectivamente: ${pesosFrequências}`
    document.getElementById('medp1').value = ""
    }
    
}

function calmp() {

    

    var c = 0
    
    var mult = []

    while (c < pesosFrequências.length) {
        mult.push(valoresMedia[c]*pesosFrequências[c])
        c++
    }

    let m = 0

    for(var i = 0; i < mult.length; i++) { // para somar todos os valores da array
        m += mult[i]
    }
    
    let mu = 0

    for(var o = 0; o < pesosFrequências.length; o++) { // para somar todos os valores da array
        mu += pesosFrequências[o]
    }

    let mediaPonderad = m/mu
    let mediaPonderada = mediaPonderad.toFixed(1)

    if (pesosFrequências.length == '' || valoresMedia == '') {
        window.alert('Insira os valores para realizar o calculo.')
    }else if (valoresMedia.length != pesosFrequências.length) {
        window.alert('Você tem mais valores do que pesos/frequências, ou vice versa. Reveja!')
    } else {
        mepocalcu.innerHTML = `A média ponderada entre os valores inseridos e seus respectivos pesos/frequências é ${mediaPonderada}. <input type="button" value="Limpar" id="but1" onclick="limpadamdp()">`
    }

    
    console.log(mult)
}

function limpadamdp() {
    pesosFrequências = ''
    valoresMedia = ''
    pesoss.innerHTML = ''
    medias.innerHTML = ''
    mepocalcu.innerHTML = ''
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function conv() {
areas.innerHTML = ""
let tit = document.getElementById('titulo')
tit.innerHTML = `Conversor de unidades`
rtres.innerHTML = `
<p>Distância:</p>
<select name="primeiro" id="primeiro">
<option value="metros">m</option>
<option value="quilometros" selected>km</option>
<option value="centimetros">cm</option>
</select> <input type="number" name="distan1" id="distan1"> <input type="text" value="&#x021D2" name="distan3" readonly="true" id="distan3"> <input type="number" readonly="true" name="distan2" id="distan2"> 
<select name="segundo" id="segundo">
<option value="metros" selected>m</option>
<option value="quilometros">km</option>
<option value="centimetros">cm</option>
</select> <input type="button" value="Converter" id="but1" onclick="distanca()">
<p>Tempo:</p>
<select name="terceiro" id="terceiro">
<option value="horas" selected>h</option>
<option value="minutos">min</option>
<option value="segundos">s</option>
</select> <input type="number" name="temp1" id="temp1"> <input type="text" value="&#x021D2" name="temp3" readonly="true" id="temp3"> <input type="number" readonly="true" name="temp2" id="temp2"> 
<select name="quarto" id="quarto">
<option value="horas">h</option>
<option value="minutos" selected>min</option>
<option value="segundos">s</option>
</select> <input type="button" value="Converter" id="but1" onclick="tempca()">
<p>Velocidade:</p>
<select name="quinto" id="quinto">
<option value="kmh" selected>km/h</option>
<option value="ms">m/s</option>
</select> <input type="number" name="velo1" id="velo1"> <input type="text" value="&#x021D2" name="velo3" readonly="true" id="velo3"> <input type="number" readonly="true" name="velo2" id="velo2"> 
<select name="sexto" id="sexto">
<option value="kmh">km/h</option>
<option value="ms" selected>m/s</option>
</select> <input type="button" value="Converter" id="but1" onclick="veloca()">
<p><input type="button" id="but1" value="&#x021A9 Página inicial" onclick="inicial()"></p>
`
} // CONVERSOR FUNCTION

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function distanca() {
let select1 = document.getElementById("primeiro")
let value1 = select1.options[select1.selectedIndex].value;
let select2 = document.getElementById("segundo")
let value2 = select2.options[select2.selectedIndex].value;
let distan1 = document.getElementById('distan1').value
let distan2 = document.getElementById('distan2').value

if (value1 === "quilometros" && value2 === "metros") {
document.getElementById('distan2').value = distan1 * 1000
document.getElementById('distan3').value = '*1000'
} else if (value1 === "metros" && value2 === "quilometros") {
document.getElementById('distan2').value = distan1 / 1000
document.getElementById('distan3').value = '/1000'
} else if (value1 === "quilometros" && value2 === "centimetros") {
document.getElementById('distan2').value = distan1 * 100000
document.getElementById('distan3').value = '*100000'
distan3.style.width = '80px'
} else if (value1 === "centimetros" && value2 === "quilometros") {
document.getElementById('distan2').value = distan1 / 100000
document.getElementById('distan3').value = '/100000'
distan3.style.width = '80px'
} else if (value1 === "centimetros" && value2 === "metros") {
document.getElementById('distan2').value = distan1 / 100
document.getElementById('distan3').value = '/100'
} else if (value1 === "metros" && value2 === "centimetros") {
document.getElementById('distan2').value = distan1 * 100
document.getElementById('distan3').value = '*100'
} else if (value1 === "metros" && value2 === "metros") {
document.getElementById('distan2').value = distan1
document.getElementById('distan3').value = '='
} else if (value1 === "centimetros" && value2 === "centimetros"){
document.getElementById('distan2').value = distan1
document.getElementById('distan3').value = '='
} else if (value1 === "quilometros" && value2 === "quilometros"){
document.getElementById('distan2').value = distan1
document.getElementById('distan3').value = '='
}

if (distan1 === "") {
window.alert('Insira valores para calcular.')
document.getElementById('distan2').value = ""
}
} // CONVERTE A DISTÂNCIA

function tempca() {
let select1 = document.getElementById("terceiro")
let value1 = select1.options[select1.selectedIndex].value;
let select2 = document.getElementById("quarto")
let value2 = select2.options[select2.selectedIndex].value;
let distan1 = document.getElementById('temp1').value
let distan2 = document.getElementById('temp2').value

if (value1 === "horas" && value2 === "minutos") {
document.getElementById('temp2').value = distan1 * 60
document.getElementById('temp3').value = '*60'
} else if (value1 === "horas" && value2 === "segundos") {
document.getElementById('temp2').value = distan1 * 3600
document.getElementById('temp3').value = '*3600'
} else if (value1 === "minutos" && value2 === "segundos") {
document.getElementById('temp2').value = distan1 * 60
document.getElementById('temp3').value = '*60'
} else if (value1 === "minutos" && value2 === "horas") {
document.getElementById('temp2').value = distan1 / 60
document.getElementById('temp3').value = '/60'
} else if (value1 === "segundos" && value2 === "minutos") {
document.getElementById('temp2').value = distan1 / 60
document.getElementById('temp3').value = '/60'
} else if (value1 === "segundos" && value2 === "horas") {
document.getElementById('temp2').value = distan1 / 3600
document.getElementById('temp3').value = '/3600'
} else if (value1 === "segundos" && value2 === "segundos") {
document.getElementById('temp2').value = distan1
document.getElementById('temp3').value = '='
} else if (value1 === "horas" && value2 === "horas"){
document.getElementById('temp2').value = distan1
document.getElementById('temp3').value = '='
} else if (value1 === "minutos" && value2 === "minutos"){
document.getElementById('temp2').value = distan1
document.getElementById('temp3').value = '='
}

if (distan1 === "") {
window.alert('Insira valores para calcular.')
document.getElementById('temp2').value = ""
}
} // CONVERTE O TEMPO

function veloca() {
let select1 = document.getElementById("quinto")
let value1 = select1.options[select1.selectedIndex].value;
let select2 = document.getElementById("sexto")
let value2 = select2.options[select2.selectedIndex].value;
let distan1 = document.getElementById('velo1').value
let distan2 = document.getElementById('velo2').value

if (value1 === "kmh" && value2 === "ms") {
document.getElementById('velo2').value = distan1 / 3.6
document.getElementById('velo3').value = '/3.6'
} else if (value1 === "kmh" && value2 === "kmh") {
document.getElementById('velo2').value = distan1
document.getElementById('velo3').value = '='
} else if (value1 === "ms" && value2 === "kmh") {
document.getElementById('velo2').value = distan1 * 3.6
document.getElementById('velo3').value = '*3.6'
} else if (value1 === "ms" && value2 === "ms") {
document.getElementById('velo2').value = distan1
document.getElementById('velo3').value = '='
}

if (distan1 === "") {
window.alert('Insira valores para calcular.')
document.getElementById('velo2').value = ""
}
} // CONVERTE A VELOCIDADE

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function calcu1() {
areas.innerHTML = ""
let tit = document.getElementById('titulo')
tit.innerHTML = `Calculadora`
document.getElementById('sec').style.display = "none";
let later = document.getElementById('later')
later.innerHTML = `
<div class="calculadora">
    <p id="resultado"></p>
    <table>
        <tr>
             <td><button class="botao" onclick="clean()">C</button></td>
            <td><button class="botao" onclick="back()"><</button></td>
            <td><button class="botao" onclick="insert('/')">/</button></td>
            <td><button class="botao" onclick="insert('*')">x</button></td>
        </tr>
        <tr>
            <td><button class="botao" onclick="insert('7')">7</button></td>
            <td><button class="botao" onclick="insert('8')">8</button></td>
            <td><button class="botao" onclick="insert('9')">9</button></td>
            <td><button class="botao" onclick="insert('-')">-</button></td>
        </tr>
        <tr>
            <td><button class="botao" onclick="insert('4')">4</button></td>
            <td><button class="botao" onclick="insert('5')">5</button></td>
            <td><button class="botao" onclick="insert('6')">6</button></td>
            <td><button class="botao" onclick="insert('+')">+</button></td>
        </tr>
        <tr>
            <td><button class="botao" onclick="insert('1')">1</button></td>
            <td><button class="botao" onclick="insert('2')">2</button></td>
            <td><button class="botao" onclick="insert('3')">3</button></td>
            <td rowspan="2"><button class="botao" style='height: 106px;' onclick="calculador()">=</button></td> <!-Colocar duas linhas->
        </tr>
        <tr>
            <td colspan="2"><button class="botao" style="width: 106px;" onclick="insert('0')">0</button></td> <!-Colocar duas colunas->
            <td><button class="botao" onclick="insert('.')">.</button></td>
        </tr>
    </table>
    <input type="button" id="but1" value="&#x021A9 Página inicial" onclick="inicial()">
</div>
`
} // BOTOES DA CALCULADORA

function insert(num) {
var numero = document.getElementById('resultado').innerHTML;
document.getElementById('resultado').innerHTML = numero + num
}
function clean() {
document.getElementById('resultado').innerHTML = "";
}
function back() {
var resultado = document.getElementById('resultado').innerHTML;
document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}
function calculador() {
var resultado = document.getElementById('resultado').innerHTML;

if(resultado) {
document.getElementById('resultado').innerHTML = eval(resultado);
} else{
document.getElementById('resultado').innerHTML = "";
}
} // CALCULADORA EM SI

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function pga() {
    areas.innerHTML = ""
    rtres.innerHTML = `
        <p>Qual progressão você deseja?</p>
        <p><input type="button" value="Progressão Aritimética" id="but1" onclick="pa()"> <input type="button" value="Progressão Geométrica" id="but1" onclick="pg()"></p>
        <p><input type="button" id="but1" value="&#x021A9 Página inicial" onclick="inicial()"></p>
    `
} // FUNCTION PA E PG

function pa() {
    rtres.innerHTML = `
        <p>Descubra a razão da PA.</p> 
        <p>Insira os termos da PA: <input type="number" class="papg" name="pa1" id="pa1"> <input type="button" value="Adicionar" id="but1" onclick="adpa1()"></p>
        <div id="addga" class="padivs"></div>
        <hr>
        <p>Termo geral de uma PA:</p>
        <p>Insira o(s) termo(s) da PA: <input type="number" class="papg" name="pa2" id="pa2"> <input type="button" value="Adicionar" id="but1" onclick="adpa2()">.</p> <p>Esse é o termo <input type="number" class="papg" name="pa4" id="pa4"> e a razão é <input type="number" class="papg" name="pa3" id="pa3"></p>
        <div id="termgepa" class="padivs"></div>
        <hr>
        <p>Soma dos termos de uma PA:</p>
        <p>Insira o primeiro termo da PA <input type="number" class="papg" name="pa5" id="pa5"> e o seu enésimo termo <input type="number" class="papg" name="pa6" id="pa6"></p>
        <p>A posição do enésimo termo: <input type="number" class="papg" name="pa7" id="pa7"> <input type="button" value="Calcular" id="but1" onclick="adpa3()">.</p>
        <div id="somapa" class="padivs"></div>
        <p><input type="button" id="but1" value="&#x021A9 Página inicial" onclick="inicial()"></p>
    `
} // FUNCTION PA

var nump = []
function adpa1() {
    let numpa = document.getElementById('pa1')
    let numero = Number(numpa.value)
    let razaopa1 = nump[1] - nump[0]
    if (numpa.value == "") {
        window.alert('Insira os valores para realizar o calculo.')
    } else if (nump.length > 1) {
        nump.push(numero)
        addga.innerHTML = `<p>Temos a PA (${nump}), onde a diferença entre os termos é de ${razaopa1}, portanto a PA tem razão ${razaopa1}.</p>
        <p><input type="button" value="Limpar" id="but1" onclick="limpadapa1()"></p>`
        document.getElementById('pa1').value = ''
    } else {
        nump.push(numero)
        addga.innerHTML = `Temos a PA: (${nump})`
        document.getElementById('pa1').value = ''
    }
} // RAZÃO DA PA

function limpadapa1() {
    addga.innerHTML = ""
    nump = []
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function adpa2() {
    let numpa = document.getElementById('pa2')
    let numero = Number(numpa.value)
    let raz = document.getElementById("pa3")
    let razao = Number(raz.value)
    let nump1 = numero

    let termat = document.getElementById('pa4')
    let terma = Number(termat.value)

    if (numpa.value == "" || raz.value == "") {
        window.alert('Insira os valores para realizar o calculo.')
    } else {
        termgepa.innerHTML = `Temos que o ${terma}º termo da PA é ${nump1}, e a razão ${razao}. Qual termo você deseja calcular? <input type="number" class="papg" name="term1" id="term1"> <input type="button" value="Calcular" id="but1" onclick="termca1()"> <p><div  id="termogerapa1"></div></p>`
    }
}// TERMO GERAL DA PA

function termca1() {
    let numpa = document.getElementById('pa2')
    let numero = Number(numpa.value)
    let nump1 = numero

    let a1 = nump1
    let raz = document.getElementById("pa3")
    let razao = Number(raz.value) 
    let term1 = document.getElementById("term1")
    let terme1 = Number(term1.value)
    let term = terme1-1
    let termat = document.getElementById('pa4')
    let termoi = Number(termat.value)
    let terma = termoi-1

    let mult = razao*term
    let termo = a1+mult

    let multe = razao*terma
    let termo1 = termo-multe

    if (termat.value < term1.value) {
        termogerapa1.innerHTML = `
        <p>Temos que a fórmula para calcular o termo geral da PA é
        <br><center><img src="imagens/termpa.png"></center>
        <br>assim, se a<sub>1</sub> = ${a1}, n = ${term} e r = ${razao}, para calcular a<sub>n</sub> basta substituir na fórmula.</p>
        <p>Então temos que o ${term}º termo dessa PA é ${termo}.</p>
        <p><input type="button" value="Limpar" id="but1" onclick="limpadapa2()"></p>
        `
    } else {
        termogerapa1.innerHTML = `
        <p>Temos que a fórmula para calcular o termo geral da PA é
        <br><center><img src="imagens/termpa.png"></center>
        <br>assim, se a<sub>n</sub> = ${a1}, n = ${terma} e r = ${razao}, para calcular a<sub>n</sub> basta substituir na fórmula.</p>
        <p>Então temos que o ${terme1}º termo dessa PA é ${termo1}.</p>
        <p><input type="button" value="Limpar" id="but1" onclick="limpadapa2()"></p>
        `
    }
    
}

function limpadapa2() {
    termgepa.innerHTML = ''
    nump1 = []
    document.getElementById("pa3").value = ''
    document.getElementById("pa4").value = ''
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function adpa3() {
    let pa5 = document.getElementById('pa5')
    let primeiroTermo = Number(pa5.value)
    let pa6 = document.getElementById('pa6')
    let enesimoTermo = Number(pa6.value)
    let pa7 = document.getElementById('pa7')
    let posiçãoTermo = Number(pa7.value)

    let som = (primeiroTermo+enesimoTermo)*posiçãoTermo
    let soma = som/2

    if (pa5.value == '' || pa6.value == '' || pa7.value == '') {
        window.alert('Insira os valores para realizar o calculo.')
    } else {
        somapa.innerHTML = `<p>Temos que a fórmula da soma de uma PA é
                        <br><center><img src="imagens/sompa.png"></center>
                        <br>assim, se a<sub>1</sub> = ${primeiroTermo}, a<sub>n</sub> = ${enesimoTermo} e n = ${posiçãoTermo}, para calcularmos S<sub>n</sub>, basta substituir na fórmula, obtendo que a soma dos n termos dessa PA é igual a S<sub>n</sub> = ${soma}.</p>
                        <p><input type="button" value="Limpar" id="but1" onclick="limpadapa3()"></p>
                        `
    }
} // SOMA DA PA

function limpadapa3() {
    somapa.innerHTML = ''
    document.getElementById("pa5").value = ''
    document.getElementById("pa6").value = ''
    document.getElementById("pa7").value = ''
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function pg() {
    rtres.innerHTML = `
        <p>Descubra a razão da PG.</p> 
        <p>Insira os termos da PG <input type="number" class="papg" name="pa1" id="pa1"> <input type="button" value="Adicionar" id="but1" onclick="adpg1()"></p>
        <div id="addgg" class="padivs"></div>
        <hr>
        <p>Termo geral de uma PG:</p>
        <p>Insira um termo da PG: <input type="number" class="papg" name="pa2" id="pa2"> <input type="button" value="Adicionar" id="but1" onclick="adpg2()">.</p> <p>Esse é o termo <input type="number" class="papg" name="pa4" id="pa4"> e a razão é <input type="number" class="papg" name="pa3" id="pa3"></p>
        <div id="termgepg" class="padivs"></div>
        <hr>
        <p>Soma dos termos de uma PG:</p>
        <p>Insira o primeiro termo da PG <input type="number" class="papg" name="pa5" id="pa5"> a posição do seu enésimo termo <input type="number" class="papg" name="pa6" id="pa6"></p>
        <p>e a razão da PG: <input type="number" class="papg" name="pa7" id="pa7"> <input type="button" value="Calcular" id="but1" onclick="adpg3()">.</p>
        <div id="somapg" class="padivs"></div>
        <p><input type="button" id="but1" value="&#x021A9 Página inicial" onclick="inicial()"></p>
    `
} // FUNCTION PG

var nume = []
function adpg1() {
    let numpa = document.getElementById('pa1')
    let numero = Number(numpa.value)
    let razaopa1 = nume[1] / nume[0]
    if (numpa.value == "") {
        window.alert('Insira os valores para realizar o calculo.')
    } else if (nume.length > 1) {
        nume.push(numero)
        addgg.innerHTML = `<p>Temos a PG (${nume}), onde a divisão entre a<sub>n</sub> e a<sub>n-1</sub> é de ${razaopa1}, portanto a PG tem razão ${razaopa1}.</p>
        <p><input type="button" value="Limpar" id="but1" onclick="limpadapg1()"></p>`
        document.getElementById('pa1').value = ''
    } else {
        nume.push(numero)
        addgg.innerHTML = `Temos a PG: (${nume})`
        document.getElementById('pa1').value = ''
    }
}

function limpadapg1() {
    addgg.innerHTML = ""
    nume = []
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function adpg2() {
    let numpa = document.getElementById('pa2')
    let numero = Number(numpa.value)
    let raz = document.getElementById("pa3")
    let razao = Number(raz.value)
    let nump1 = numero

    let termat = document.getElementById('pa4')
    let terma = Number(termat.value)

    if (numpa.value == "" || raz.value == "") {
        window.alert('Insira os valores para realizar o calculo.')
    } else {
        termgepg.innerHTML = `Temos que o ${terma}º termo da PG é ${nump1}, e a razão ${razao}. Qual termo você deseja calcular? <input type="number" class="papg" name="term1" id="term1"> <input type="button" value="Calcular" id="but1" onclick="termcg1()"> <p><div  id="termogerapg1"></div></p>`
    }
}

function termcg1() {
    let numpa = document.getElementById('pa2')
    let numero = Number(numpa.value)
    let nump1 = numero

    let a1 = nump1
    let raz = document.getElementById("pa3")
    let razao = Number(raz.value) 
    let term1 = document.getElementById("term1")
    let terme1 = Number(term1.value)
    let term = terme1-1
    let termat = document.getElementById('pa4')
    let terma = Number(termat.value)
    let termr = terma-terme1
    let terms = Math.pow(razao, term)

    let termo = a1*terms
    let termet = Math.pow(razao, termr)

    let termo1 = a1/termet
    console.log(termo1)
    if (termat.value < term1.value) {
        termogerapg1.innerHTML = `
        <p>Temos que a fórmula para calcular o termo geral da PG é
        <br><center><img src="imagens/termpg.png"></center>
        <br>assim, se a<sub>1</sub> = ${a1}, n = ${term} e r = ${razao}, para calcular a<sub>n</sub> basta substituir na fórmula.</p>
        <p>Então temos que o ${terme1}º termo dessa PG é ${termo}.</p>
        <p><input type="button" value="Limpar" id="but1" onclick="limpadapg2()"></p>
        `
    } else {
        termogerapg1.innerHTML = `
        <p>Temos que a fórmula para calcular o termo geral da PG é
        <br><center><img src="imagens/termpg.png"></center>
        <br>assim, se a<sub>n</sub> = ${a1}, n = ${terma} e r = ${razao}, para calcular a<sub>n</sub> basta substituir na fórmula.</p>
        <p>Então temos que o ${terme1}º termo dessa PG é ${termo1}.</p>
        <p><input type="button" value="Limpar" id="but1" onclick="limpadapg2()"></p>
        `
    }
}

function limpadapg2() {
    termgepg.innerHTML = ''
    document.getElementById("pa3").value = ''
    document.getElementById("pa4").value = ''
    document.getElementById('pa2').value = ''
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function adpg3() {
    let pa5 = document.getElementById('pa5')
    let primeiroTermo = Number(pa5.value)
    let pa6 = document.getElementById('pa6')
    let enesimoTermo = Number(pa6.value)
    let pa7 = document.getElementById('pa7')
    let razãoDaPG = Number(pa7.value)

    let potencia = Math.pow(razãoDaPG, enesimoTermo)
    let som = primeiroTermo*(potencia-1)
    let some = razãoDaPG-1
    let soma = som/some

    if (pa5.value == '' || pa6.value == '' || pa7.value == '') {
        window.alert('Insira os valores para realizar o calculo.')
    } else {
        somapg.innerHTML = `<p>Temos que a fórmula da soma de uma PA é
                        <br><center><img src="imagens/sompg.png"></center>
                        <br>assim, se a<sub>1</sub> = ${primeiroTermo}, n = ${enesimoTermo} e q = ${razãoDaPG}, para calcularmos S<sub>n</sub>, basta substituir na fórmula, obtendo que a soma dos n termos dessa PA é igual a S<sub>n</sub> = ${soma}.</p>
                        <p><input type="button" value="Limpar" id="but1" onclick="limpadapg3()"></p>
                        `
    }
}

function limpadapg3() {
    somapg.innerHTML = ''
    document.getElementById("pa5").value = ''
    document.getElementById("pa6").value = ''
    document.getElementById("pa7").value = ''
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function rd3() {
areas.innerHTML = ""
let tit = document.getElementById('titulo')
tit.innerHTML = `Regra de três`
rtres.innerHTML= `
<p>O que você deseja encontrar?</p>
<p>
    <input type="button" id="but1" value="Total %" onclick="totp()">
    <input type="button" id="but1" value="Parte %" onclick="partp()">
    <input type="button" id="but1" value="Total R$" onclick="totr()">
    <input type="button" id="but1" value="Parte R$" onclick="partr()">
</p>
<p><input type="button" id="but1" value="&#x021A9 Página inicial" onclick="inicial()"></p>
`
} // REGRA DE TRÊS FUNCTION

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function calcula() {

let a = document.getElementById('cx4')
let c1 = Number(a.value)
let b = document.getElementById('cx2')
let c2 = Number(b.value)
let c = document.getElementById('cx3')
let c3 = Number(c.value)
let d = document.getElementById('cx1')
if (d.value === "X" && c2 > c1) {
let mu = c2*c3
let fim = mu/c1
res.innerHTML = `
<p>Queremos descobrir o total em % que R$ ${c2} vale.</p>
<p>Primeiramente multiplicamos os meios pelos extremos, pegamos a parte em R$ e multiplicamos por x, depois igualamos ao valor total em R$ que é R$ ${c2} multiplicado pela parte em % que é ${c3}%.</p> 
<p>E obtemos a equação: ${c1} . x = ${c2} . ${c3}</p>
<p>Executando a multiplicação, a equação fica ${c1}x = ${mu},</p>
<p>por fim, passamos dividindo o ${c1} e temos agora que x = ${mu}/${c1},</p>
<p>e o resultado final é: x = ${fim}%.
`  
} else {
window.alert('Não altere o valor de X ou coloque parte maior que seus respectivos totais.')
totp();
res.innerHTML = ''
}
} // TOTAL EM %

function calcul() {

let a = document.getElementById('cx1')
let c1 = Number(a.value)
let b = document.getElementById('cx2')
let c2 = Number(b.value)
let c = document.getElementById('cx4')
let c3 = Number(c.value)
let d = document.getElementById('cx3')
if (d.value === "X" && c2 > c3) {
let mu = c1*c3
let fim = mu/c2
res.innerHTML = `
<p>Queremos descobrir a parte em % que R$ ${c3} vale.</p>
<p>Primeiramente multiplicamos os meios pelos extremos, pegamos a parte em R$ e multiplicamos por x, depois igualamos ao valor total em R$ que é R$ ${c2} multiplicado pela parte em % que é ${c3}%.</p> 
<p>E obtemos a equação: ${c2} . x = ${c1} . ${c3}</p>
<p>Executando a multiplicação, a equação fica ${c2}x = ${mu},</p>
<p>por fim, passamos dividindo o ${c2} e temos agora que x = ${mu}/${c2},</p>
<p>e o resultado final é: x = ${fim}%.
`  
} else {
window.alert('Não altere o valor de X ou coloque parte maior que seus respectivos totais.')
partp();
res.innerHTML = ''
}
} // PARTE EM %

function calcu() { 
let a = document.getElementById('cx1')
let c1 = Number(a.value)
let b = document.getElementById('cx4')
let c2 = Number(b.value)
let c = document.getElementById('cx3')
let c3 = Number(c.value)
let d = document.getElementById('cx2')
if (d.value === "X") {
let mu = c1*c2
let fim = mu/c3
let fi = fim.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
res.innerHTML = `
<p>Queremos descobrir o total em R$ que ${c1}% respresenta.</p>
<p>Primeiramente multiplicamos os meios pelos extremos, pegamos o valor total em % e multiplicamos por x, depois igualamos ao valor total em R$ que é R$ ${c2} multiplicado pela parte em % que é ${c3}%.</p> 
<p>E obtemos a equação: ${c3} . x = ${c1} . ${c2}</p>
<p>Executando a multiplicação, a equação fica ${c3}x = ${mu},</p>
<p>por fim, passamos dividindo o ${c3} e temos agora que x = ${mu}/${c3},</p>
<p>e o resultado final é: x = ${fi}.
`  
} else {
window.alert('Não altere o valor de X ou coloque parte maior que seus respectivos totais.')
totr();
res.innerHTML = ''
}
} // TOTAL EM R$

function calcular() {

let a = document.getElementById('cx1')
let c1 = Number(a.value)
let b = document.getElementById('cx2')
let c2 = Number(b.value)
let c = document.getElementById('cx3')
let c3 = Number(c.value)
let d = document.getElementById('cx4')
if (d.value === "X") {
let mu = c2*c3
let fim = mu/c1
let fi = fim.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
res.innerHTML = `
<p>Queremos descobrir a parte em R$ que ${c3}% representa.</p>
<p>Primeiramente multiplicamos os meios pelos extremos, pegamos o valor total em % e multiplicamos por x, depois igualamos ao valor total em R$ que é R$ ${c2} multiplicado pela parte em % que é ${c3}%.</p> 
<p>E obtemos a equação: ${c1} . x = ${c2} . ${c3}</p>
<p>Executando a multiplicação, a equação fica ${c1}x = ${mu},</p>
<p>por fim, passamos dividindo o ${c1} e temos agora que x = ${mu}/100,</p>
<p>e o resultado final é: x = ${fi}.
`  
} else {
window.alert('Não altere o valor de X ou coloque parte maior que seus respectivos totais.')
partr();
res.innerHTML = ''
}
} // PARTE EM R$

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function totp() {
rtres.innerHTML = `
    Total em %  <input type="text" name="cx1" id="cx1" value="X"> — <input type="number" name="cx2" id="cx2"> Total em R$
    <p>Parte em % <input type="number" name="cx3" id="cx3"> — <input type="number" name="cx4" id="cx4"> Parte em R$</p>
    <p><input type="button" id="but1" value="&#x021A9 Página inicial" onclick="inicial()"><input type="button" id="cacl" value="Calcular" onclick="calcula()"></p>
`
} // TOTAL EM %

function partp () {
rtres.innerHTML = `
    Total em %  <input type="number" name="cx1" id="cx1" value="100"> — <input type="number" name="cx2" id="cx2"> Total em R$
    <p>Parte em % <input type="text" name="cx3" id="cx3" value="X"> — <input type="number" name="cx4" id="cx4"> Parte em R$</p>
    <p><input type="button" id="but1" value="&#x021A9 Página inicial" onclick="inicial()"><input type="button" id="cacl" value="Calcular" onclick="calcul()"></p>
`
} // PARTE EM %

function totr() {
rtres.innerHTML = `
    Total em %  <input type="number" name="cx1" id="cx1" value="100"> — <input type="text" name="cx2" id="cx2" value="X"> Total em R$
    <p>Parte em % <input type="number" name="cx3" id="cx3"> — <input type="number" name="cx4" id="cx4"> Parte em R$</p>
    <p><input type="button" id="but1" value="&#x021A9 Página inicial" onclick="inicial()"><input type="button" id="cacl" value="Calcular" onclick="calcu()"></p>
`
} // TOTAL EM R$

function partr () {
rtres.innerHTML = `
    Total em %  <input type="number" name="cx1" id="cx1" value="100"> — <input type="number" name="cx2" id="cx2"> Total em R$
    <p>Parte em % <input type="number" name="cx3" id="cx3"> — <input type="text" name="cx4" id="cx4" value="X"> Parte em R$</p>
    <p><input type="button" id="but1" value="&#x021A9 Página inicial" onclick="inicial()"><input type="button" id="cacl" value="Calcular" onclick="calcular()"></p>
`
} // PARTE EM R$

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function carregar() {

var ho = new Date();
var h = ho.getHours();
var m = ho.getMinutes();
var d = ho.getDate();
var y = ho.getFullYear();
var me = ho.getMonth();
var s = ho.getSeconds();

switch(m) {
case 0:
    m = `0${m}`
    break
case 1:
    m = `0${m}`
    break
case 2:
    m = `0${m}`
    break
case 3:
    m = `0${m}`
    break
case 4:
    m = `0${m}`
    break
case 5:
    m = `0${m}`
    break
case 6:
    m = `0${m}`
    break
case 7:
    m = `0${m}`
    break
case 8: 
    m = `0${m}`
    break
case 9:
    m = `0${m}`
    break
};

switch(s) {
case 0:
    s = `0${s}`
    break
case 1:
    s = `0${s}`
    break
case 2:
    s = `0${s}`
    break
case 3:
    s = `0${s}`
    break
case 4:
    s = `0${s}`
    break
case 5:
    s = `0${s}`
    break
case 6:
    s = `0${s}`
    break
case 7:
    s = `0${s}`
    break
case 8: 
    s = `0${s}`
    break
case 9:
    s = `0${s}`
    break
};

switch(me) {
case 0:
    hora.innerHTML = `Agora são ${h}:${m}:${s} do dia ${d} de janeiro de ${y}.`
    break
case 1:
    hora.innerHTML = `Agora são ${h}:${m}:${s} do dia ${d} de fevereiro de ${y}.`
    break
case 2:
    hora.innerHTML = `Agora são ${h}:${m}:${s} do dia ${d} de março de ${y}.`
    break
case 3:
    hora.innerHTML = `Agora são ${h}:${m}:${s} do dia ${d} de abril de ${y}.`
    break
case 4:
    hora.innerHTML = `Agora são ${h}:${m}:${s} do dia ${d} de maio de ${y}.`
    break
case 5:
    hora.innerHTML = `Agora são ${h}:${m}:${s} do dia ${d} de junho de ${y}.`
    break
case 6:
    hora.innerHTML = `Agora são ${h}:${m}:${s} do dia ${d} de julho de ${y}.`
    break
case 7:
    hora.innerHTML = `Agora são ${h}:${m}:${s} do dia ${d} de agosto de ${y}.`
    break
case 8: 
    hora.innerHTML = `Agora são ${h}:${m}:${s} do dia ${d} de setembro de ${y}.`
    break
case 9:
    hora.innerHTML = `Agora são ${h}:${m}:${s} do dia ${d} de outubro de ${y}.`
    break
case 10:
    hora.innerHTML = `Agora são ${h}:${m}:${s} do dia ${d} de novembro de ${y}.`
    break
case 11: 
    hora.innerHTML = `Agora são ${h}:${m}:${s} do dia ${d} de dezembro de ${y}.`
    break
};


}; const createClock = setInterval(carregar, 1000);  // FUNCTION DO HORARIO  

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//window.alert('Sejam muito bem-vindos ao nosso site, aqui você encontra das mais diversas ferramentas para lhe auxiliar.')
function inicial(){
let tit = document.getElementById('titulo')
tit.innerHTML = `Ferramentas de aprendizado`
later.innerHTML = ''
res.innerHTML = ""
document.getElementById('sec').style.display = 'block'
rtres.innerHTML = `
<p>Qual ferramenta você deseja usar?</p> `
areas.innerHTML = `
<div class="area" onclick="rd3()" id="enter1" onmouseenter="enter1()" onmouseout="exit1()">
            <i class='bx bx-coin-stack' ></i>
        </div>
        <div class="area" onclick="conv()" id="enter2" onmouseenter="enter2()" onmouseout="exit2()">
            <i class='bx bx-slider'></i>
        </div> 
        <div class="area" onclick="calcu1()" id="enter3" onmouseenter="enter3()" onmouseout="exit3()">
            <i class='bx bxs-calculator'></i>
        </div>
        <div class="area" onclick="pga()" id="enter4" onmouseenter="enter4()" onmouseout="exit4()">
            <i class='bx bx-car'></i>
        </div>
        <div class="area" onclick="mediaNotas()" id="enter5" onmouseenter="enter5()" onmouseout="exit5()">
            <i class='bx bx-slider-alt'></i>
        </div>
        <div class="area2"></div>
`
} // CHAMA PARA A PÁGINA INICIAL

function enter1() {
document.getElementById('enter1').style.fontSize = '12pt'
let enter1 = document.getElementById('enter1')
enter1.innerHTML = `Regra de três`
}

function exit1() {
document.getElementById('enter1').style.fontSize = '20pt'
let enter1 = document.getElementById('enter1')
enter1.innerHTML = `<i class='bx bx-coin-stack' ></i>`
}

function enter2() {
document.getElementById('enter2').style.fontSize = '12pt'
let enter1 = document.getElementById('enter2')
enter1.innerHTML = `Conversor`
}

function exit2() {
document.getElementById('enter2').style.fontSize = '20pt'
let enter1 = document.getElementById('enter2')
enter1.innerHTML = `<i class='bx bx-slider'></i>`
}

function enter3() {
document.getElementById('enter3').style.fontSize = '12pt'
let enter1 = document.getElementById('enter3')
enter1.innerHTML = `Calculadora`
}

function exit3() {
document.getElementById('enter3').style.fontSize = '20pt'
let enter1 = document.getElementById('enter3')
enter1.innerHTML = `<i class='bx bxs-calculator'></i>`
}

function enter4() {
document.getElementById('enter4').style.fontSize = '12pt'
let enter1 = document.getElementById('enter4')
enter1.innerHTML = `PA e PG`
}

function exit4() {
document.getElementById('enter4').style.fontSize = '20pt'
let enter1 = document.getElementById('enter4')
enter1.innerHTML = `<i class='bx bx-bar-chart-alt'></i>`
}

function enter5() {
document.getElementById('enter5').style.fontSize = '9pt'
let enter1 = document.getElementById('enter5')
enter1.innerHTML = `Média ponderada`
}

function exit5() {
document.getElementById('enter5').style.fontSize = '20pt'
let enter1 = document.getElementById('enter5')
enter1.innerHTML = `<i class='bx bx-slider-alt'></i>`
}