function mediaNotas() {
    areas.innerHTML = ""
    rtres.innerHTML = `
    <p>Qual a média na sua escola? <input type="number" class="medba" name="medscola" id="medscola"></p>
    <hr>
    <p>Média bimestral: <input type="text" name="medbi" readonly="true" id="medbi"></p> 
    <p>Notas: <input type="number" placeholder="1º" class="medba" name="nota1" id="nota1"> + <input type="number" placeholder="2º" class="medba" name="nota2" id="nota2"> + <input type="number" placeholder="3º" class="medba" name="nota3" id="nota3"> <input type="button" id="but1" value="Calcular" onclick="notaBimestral()"></p>
    <hr>
    <p>Média anual: <input type="text" name="medanu" readonly="true" id="medanu"></p>
    <p>Notas: <input type="number" placeholder="1º" class="medba" name="nota11" id="nota11"> + <input type="number" placeholder="2º"name="nota12" class="medba" id="nota12"> + <input type="number" placeholder="3º" class="medba" name="nota13" id="nota13"> + <input type="number" placeholder="4º" name="nota14" class="medba" id="nota14"> <input type="button" id="but1" value="Calcular" onclick="notaAnual()"></p>
    <p><input type="button" id="but1" value="&#x021A9 Página inicial" onclick="inicial()"></p>`
} // MEDIA FUNCTION

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function notaBimestral() {
let nota1 = document.getElementById('nota1')
let not1 = Number(nota1.value)
let nota2 = document.getElementById('nota2')
let not2 = Number(nota2.value)
let nota3 = document.getElementById('nota3')
let not3 = Number(nota3.value)
let medscol = document.getElementById('medscola')
let medscola = Number(medscol.value)

let mediaFina = (not1 + not2 + not3) / 3
if(not3 === 0) {
mediaFina = (not1 + not2) / 2
}
let mediaFinal = mediaFina.toFixed(1)

if (medscola < 5 || medscola > 7) {
window.alert('Insira a média da escola corretamente.')
} else if (not1 < 0 || not2 < 0 || not3 < 0) {
window.alert('Insira valores entre 0 e 10.')
} else if (not1 <= 10 && not2 <= 10 && not3 <= 10 && mediaFinal < medscola) {
document.getElementById('medbi').value = `Sua média é ${mediaFinal}, portanto você está reprovado.`
} else if (not1 <= 10 && not2 <= 10 && not3 <= 10 && mediaFinal >= medscola) {
document.getElementById('medbi').value = `Sua média é ${mediaFinal}, portanto você está aprovado.`
}
} // CALCULA A MEDIA BIMESTRAL

function notaAnual() {
let nota11 = document.getElementById('nota11')
let not11 = Number(nota11.value)
let nota12 = document.getElementById('nota12')
let not12 = Number(nota12.value)
let nota13 = document.getElementById('nota13')
let not13 = Number(nota13.value)
let nota14 = document.getElementById('nota14')
let not14 = Number(nota14.value)
let medscol = document.getElementById('medscola')
let medscola = Number(medscol.value)

let mediaFina = (not11 + not12 + not13 + not14) / 4
let mediaFinal = mediaFina.toFixed(1)

if (medscola < 5 || medscola > 7) {
window.alert('Insira a média da escola corretamente.')
} else if (not11 < 0 || not12 < 0 || not13 < 0 || not14 < 0) {
window.alert('Insira valores entre 0 e 10.')
} else if (not11 <= 10 && not12 <= 10 && not13 <= 10 && not14 <= 10 && mediaFinal < medscola) {
document.getElementById('medanu').value = `Sua média é ${mediaFinal}, portanto você está reprovado.`
} else if (not11 <= 10 && not12 <= 10 && not13 <= 10 && not14 <= 10 && mediaFinal >= medscola) {
document.getElementById('medanu').value = `Sua média é ${mediaFinal}, portanto você está aprovado.`
}
} // CALCULA A MEDIA ANUAL

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

function vdt() {
areas.innerHTML = ""
let tit = document.getElementById('titulo')
tit.innerHTML = `Velocidade, deslocamento e tempo`
rtres.innerHTML = `
<p>O que você deseja encontrar?</p>
<p>
    <input type="button" id="but1" value="Velocidade" onclick="vel()">
    <input type="button" id="but1" value="Deslocamento" onclick="des()">
    <input type="button" id="but1" value="Tempo" onclick="tem()">
</p>
<p><input type="button" id="but1" value="&#x021A9 Página inicial" onclick="inicial()"></p>
`
} // VELOCIDADE FUNCTION

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var enu = document.getElementsByName('radbo')
function tem() {
rtres.innerHTML = `
<p>
<input type="number" placeholder="V" name="vel1" id="vel1"> = <input type="number" placeholder="&#x00394s"  name="des1" id="des1"> /&#x00394t.
</p>
<p>Qual a unidade de medida? <input type="radio" name="radbo" id="radbo1" checked>
<label for="radbo1">h</label>
<input type="radio" name="radbo" id="radbo2">
<label for="radbo2">s</label>
</p>
<p><input type="button" id="but1" value="&#x021A9 Página inicial" onclick="inicial()"><input type="button" id="but1" value="Calcular" onclick="temca()"></p>
`
} // CHAMA O CALCULO DO TEMPO

function vel() {
rtres.innerHTML = `
<p>
V = <input type="number" placeholder="&#x00394s"  name="des1" id="des1"> / <input type="number" placeholder="&#x00394t"  name="tem1" id="tem1">.
</p>
<p>Qual a unidade de medida? <input type="radio" name="radbo" id="radbo1" checked>
<label for="radbo1">km/h</label>
<input type="radio" name="radbo" id="radbo2">
<label for="radbo2">m/s</label>
</p>
<p><input type="button" id="but1" value="&#x021A9 Página inicial" onclick="inicial()"><input type="button" id="but1" value="Calcular" onclick="velca()"></p>
`
} // CHAMA O CALCULO DA VELOCIDADE

function des() {
rtres.innerHTML = `
<p>
<input type="number" placeholder="V" name="vel1" id="vel1"> = &#x00394s / <input type="number" placeholder="&#x00394t"  name="tem1" id="tem1">.
</p>
<p>Qual a unidade de medida? <input type="radio" name="radbo" id="radbo1" checked>
<label for="radbo1">km</label>
<input type="radio" name="radbo" id="radbo2">
<label for="radbo2">m</label>
</p>
<p><input type="button" id="but1" value="&#x021A9 Página inicial" onclick="inicial()"><input type="button" id="but1" value="Calcular" onclick="desca()"></p>
`
} // CHAMA O CALCULO DO DESLOCAMENTO

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function temca() {
let v1 = document.getElementById("vel1")
let v = Number(v1.value)
let d1 = document.getElementById("des1")
let d = Number(d1.value)
let resu = d/v

if (enu[0].checked) {
res.innerHTML = `
<p>Queremos descobrir o tempo em horas e temos que a formula é dada acima.</p>
<p>Diante disso, como &#x00394t está dividindo ${d}km, vamos passar ele para o outro lado da igualdade, multiplicando por ${v}km/h, então teremos:</p>
<p>${v}&#x00394t = ${d},</p>
<p>passando agora o ${v} dividindo, teremos: &#x00394t = ${d}/${v}.
<p>Resolvendo a divisão, temos então que &#x00394t = ${resu}h.
`
} else {

res.innerHTML = `
    <p>Queremos descobrir o tempo em segundos e temos que a formula é dada acima.</p>
    <p>Diante disso, como &#x00394t está dividindo ${d}m, vamos passar ele para o outro lado da igualdade, multiplicando por ${v}m/s, então teremos:</p>
    <p>${v}&#x00394t = ${d},</p>
    <p>passando agora o ${v} dividindo, teremos: &#x00394t = ${d}/${v}.
    <p>Resolvendo a divisão, temos então que &#x00394t = ${resu}s.
`
}

} // CALCULAR O TEMPO

function velca() {
let t1 = document.getElementById("tem1")
let t = Number(t1.value)
let d1 = document.getElementById("des1")
let d = Number(d1.value)
let resu = d/t

if (enu[0].checked) {
res.innerHTML = `
<p>Queremos descobrir a velocidade média em km/h e temos que a formula é dada acima.</p>
<p>Diante disso, basta dividir ${d}km por ${t}h, então teremos:</p>
<p>V = ${resu}km/h</p>
`
} else {

res.innerHTML = `
    <p>Queremos descobrir a velocidade média em m/s e temos que a formula é dada acima.</p>
    <p>Diante disso, basta dividir ${d}m por ${t}s, então teremos:</p>
    <p>V = ${resu}m/s,</p>
`
}
} // CALCULAR A VELOCIDADE

function desca() {
let t1 = document.getElementById("tem1")
let t = Number(t1.value)
let v1 = document.getElementById("vel1")
let v = Number(v1.value)
let resu = t*v

if (enu[0].checked) {
res.innerHTML = `
<p>Queremos descobrir o deslocamento em km e temos que a formula é dada acima.</p>
<p>Diante disso, como ${t}h está dividindo &#x00394s, vamos passar ele para o outro lado da igualdade, multiplicando por ${v}km/h, então teremos:</p>
<p>&#x00394s = ${resu}km.</p>
`
} else {

res.innerHTML = `
    <p>Queremos descobrir o deslocamento em m e temos que a formula é dada acima.</p>
    <p>Diante disso, como ${t}s está dividindo &#x00394s, vamos passar ele para o outro lado da igualdade, multiplicando por ${v}m/s, então teremos:</p>
    <p>&#x00394s = ${resu}m.</p>
`
}
} // CALCULA O DESLOCAMENTO

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
        <div class="area" onclick="vdt()" id="enter4" onmouseenter="enter4()" onmouseout="exit4()">
            <i class='bx bx-car'></i>
        </div>
        <div class="area" onclick="mediaNotas()" id="enter5" onmouseenter="enter5()" onmouseout="exit5()">
            <i class='bx bxs-graduation'></i>
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
enter1.innerHTML = `Velocidade`
}

function exit4() {
document.getElementById('enter4').style.fontSize = '20pt'
let enter1 = document.getElementById('enter4')
enter1.innerHTML = `<i class='bx bx-car'></i>`
}

function enter5() {
document.getElementById('enter5').style.fontSize = '12pt'
let enter1 = document.getElementById('enter5')
enter1.innerHTML = `Média escolar`
}

function exit5() {
document.getElementById('enter5').style.fontSize = '20pt'
let enter1 = document.getElementById('enter5')
enter1.innerHTML = `<i class='bx bxs-graduation'></i>`
}