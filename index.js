let gastos = [50, 120, 30, 200, 80]

for (let i = 0; i < gastos.length; i++) {
    if (gastos[i] > 100) {
        console.log("Gasto alto: " + gastos[i])
    } else {
        console.log("Gasto normal: " + gastos[i])
    }
}