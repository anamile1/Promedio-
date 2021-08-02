const nombre = document.getElementById("txt-nombre");
const nota1 = document.getElementById("txt-nota1");
const nota2 = document.getElementById("txt-nota2");
const nota3 = document.getElementById("txt-nota3");
const nota4 = document.getElementById("txt-nota4");
const nota5 = document.getElementById("txt-nota5");
const btnPromedio = document.getElementById("btn-promedio");
btnPromedio.addEventListener("click", calculoPromedio);
var not1, not2, not3, not4, not5;

function operacionPorcentajes() {
    not1 = Number(nota1.value * 0.1);
    not2 = Number(nota2.value * 0.1);
    not3 = Number(nota3.value * 0.15);
    not4 = Number(nota4.value * 0.2);
    not5 = Number(nota5.value * 0.45);
}

function calculoPromedio() {
    operacionPorcentajes();

    if (
        nota1.value >= 0 && nota1.value <= 5 &&
        nota2.value >= 0 && nota2.value <= 5 &&
        nota3.value >= 0 && nota3.value <= 5 &&
        nota4.value >= 0 && nota4.value <= 5 &&
        nota5.value >= 0 && nota5.value <= 5) {

        var mensaje = "";

        promedio = (not1 + not2 + not3 + not4 + not5) / 5;
        if (promedio >= 3.5) {
            mensaje = "Sr(a) " + nombre.value + " aprobo el curso, su promedio es: " + promedio;
        } else {
            mensaje = "Sr(a) " + nombre.value + " reprobo el curso, su promedio es: " + promedio;
        }
        var anuncio = document.getElementById("msg");
        anuncio.innerHTML = "<h4>" + mensaje + "</h4>";
    } else {
        console.log('Ingrese la nota del 0 al 5');
    }

}


