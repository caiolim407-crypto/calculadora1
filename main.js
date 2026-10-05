const f = document.getElementById("formulario")

f.addEventListener("submit", function(e){
    e.preventDefault();

    const v1 = Number(document.getElementById("num1").value)
    const v2 = Number(document.getElementById("num2").value)
    const v3 = Number(document.getElementById("num3").value)
    const v4 = Number(document.getElementById("num4").value)


    const soma = v1+v2
    const vezes = v3*v4 

    document.getElementById("resultado1").textContent=soma
    document.getElementById("resultado2").textContent=vezes
})
