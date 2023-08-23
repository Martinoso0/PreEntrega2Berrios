document.getElementById("calcularBtn").addEventListener("click", function () {
    calcularTotal();
});

function calcularTotal() {
    const item = prompt("Selecciona un artículo:\n1. Coca Cola - $10\n2. Pepsi - $20\n3. Papas Lays - $30");
    const quantity = parseInt(prompt("Ingresa la cantidad deseada:"));

    let price = 0;

    switch (item) {
        case "1":
            price = 10;
            break;
        case "2":
            price = 20;
            break;
        case "3":
            price = 30;
            break;
        default:
            alert("Opción inválida. Selecciona una opción válida.");
            return; // Salir de la función si la opción es inválida.
    }

    const total = price * quantity;

    alert(`Total a pagar: $${total}`);
}
