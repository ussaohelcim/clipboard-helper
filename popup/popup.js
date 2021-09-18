let contador;
let firulas = []
if(localStorage.length>0)
{
    contador = localStorage.length;
    for (let index = 1; index <= contador; index++) {
        firulas.push(localStorage.getItem("k"+index))
    }
    EscreverFirulas()
}
else
{
    contador = 1;
}

document.querySelector("#input").addEventListener("keydown",function(a){
    if(a.code == "Enter" || a.code == "NumpadEnter")
    {
        document.querySelector("#firulas").innerHTML+= `<p id='k${contador}'>${document.querySelector("#input").value}</p>`;
        localStorage.setItem("k"+contador,document.querySelector("#input").value)
        contador++;
        document.querySelector("#input").value = "";
    }
});
function EscreverFirulas()
{
    firulas.forEach(function(a) {
        document.querySelector("#firulas").innerHTML+= `<p id="k">${a}</p>`;
    });
}

document.querySelector("#btnapagar").addEventListener("click",function(){
    localStorage.clear()
    contador = 1
    document.querySelector("#firulas").innerHTML = ""
})