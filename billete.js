// La clase billete
class Billete {
    constructor(valor, cantidad) {
        this.imagen = new Image();
        this.valor = valor;
        this.cantidad = cantidad;
        this.imagen.src = imagenes[this.valor];
    }
}

// Las funciones a utilizar
function entregarDinero() {
    var t = document.getElementById("dinero");
    var dinero = parseInt(t.value);

    for (let i of caja) {
        if (dinero > 0) {
            div = Math.floor(dinero / i.valor);
            papeles = (div > i.cantidad) ? i.cantidad : div;
            entregado.push(new Billete(i.valor, papeles));

            dinero -= (i.valor * papeles);
        }
    }

    validar(dinero);
}

function validar(dinero) {
    if (dinero > 0) {
        resultado.innerHTML = `No hay suficietes fondos`;
    } else {
        for (var e of entregado) {
            if (e.cantidad > 0) {
                resultado.innerHTML += `<br>${e.cantidad} de billetes $${e.valor}<br>`;
                for (let i = 0; i < e.cantidad; i++) {
                    resultado.innerHTML += `<img src="${e.imagen.src}" width="150">`;
                }
            }
        }
    }
}

function resetear() {
    let dinero = document.getElementById('dinero');
    dinero.value = '';
    resultado.innerHTML = '';

    for(let i = 0; i < entregado.length; i++) {
        entregado[i] = '';
    }

    console.log(dinero);

    dinero.setAttribute("autofocus", "");
}
