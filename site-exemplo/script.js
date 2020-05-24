var text = document.getElementById("num")

function verificar(){
   var n = Number(text.value)
    alert(n)
    if(n % 2 == 0){
        alert("Esse número é par!")
    } else{
        alert("Esse número é ímpar!")
    }
}