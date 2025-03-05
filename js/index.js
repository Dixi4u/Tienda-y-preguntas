function calcularDescuento() {
    let precio = parseFloat(document.getElementById("floatingInputGroup1").value);
    let mensaje = document.querySelector(".Descuento");
    let descuento = 0;

    if (isNaN(precio) || precio <= 0) {
        mensaje.textContent = "Ingrese un precio válido.";
        return;
    }

    if (precio >= 1000) {
        descuento = precio * 0.15;
    } else if (precio >= 500 && precio < 1000) {
        descuento = precio * 0.10;
    } else {
        descuento = precio * 0.05;
    }

    let precioFinal = precio - descuento;
    mensaje.textContent = `Precio final: $${precioFinal.toFixed(2)}  Descuento: $${descuento.toFixed(2)}`;
}