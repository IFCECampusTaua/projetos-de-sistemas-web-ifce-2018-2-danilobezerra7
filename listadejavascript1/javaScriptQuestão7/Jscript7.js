
var nume="2";
function muTitulo() {
        if (nume >0 && nume<9) {
            document.getElementById("num").innerHTML = "Insuficiente";
        }
    if (nume >10 && nume<14) {
        document.getElementById("num").innerHTML = "Bom";
    }
    if (nume >14) {
        document.getElementById("num").innerHTML = " Muito Bom";
    }
}