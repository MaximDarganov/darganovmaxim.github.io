window.addEventListener('DOMContentLoaded', function(event) {
    console.log('DOM fully loaded and parsed');
})





function calculate() {
    let firstProduct = Number(document.getElementById("firstProduct").value);
    let firstLot = Number(document.getElementById("firstLot").value);

    function inputSomeValue() {
        if (isNaN(firstProduct && firstLot)) {
            alert("Это не цифра , попробуйте снова.")
            firstProduct = "";
            firstLot = "";
        }

    }
    inputSomeValue();
    if (firstProduct == "") {
        alert("Вы не указали цену");
    } else if (firstLot == "") {
        alert("вы не указали количество");

    } else {
        const cost = firstProduct * firstLot;
        document.getElementById("cost").innerHTML = "Стоимость заказа= " + cost + " Руб" + " или " + (cost / 80) + "$";

    }
}