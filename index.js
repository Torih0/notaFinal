
function calcular(){
    var estudante = document.querySelector("#estudante")
    var nota1 = parseFloat(document.querySelector("#nota1").value)
    var nota2 = parseFloat(document.querySelector("#nota2").value)
    var nota3 = parseFloat(document.querySelector("#nota3").value)
    var media = (nota1 + nota2 + nota3)/3
    document.querySelector("#resultado").value = media.toFixed(1)
}

