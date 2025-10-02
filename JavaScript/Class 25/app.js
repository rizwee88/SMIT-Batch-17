function fillCity() {
    var zip = document.getElementById("zip");
    var city = document.getElementById("city");

    switch (Number(zip.value)) {
        case 1:
            city.value = "Karachi"
            break
        case 2:
            city.value = "Lahore"
            break
        case 3:
            city.value = "Islamabad"
            break
        default:
            console.log("Koi Value Nhi")
    }
}