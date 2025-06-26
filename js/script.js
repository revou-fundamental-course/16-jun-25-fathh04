// Toggle tampilan form
function tampilkanForm(form) {
    document.getElementById("formLuas").style.display = form === "luas" ? "block" : "none";
    document.getElementById("formKeliling").style.display = form === "keliling" ? "block" : "none";
}

// Luas segitiga
const formLuas = document.getElementById("formHitungLuas");
const hasilLuas = document.getElementById("hasilLuas");

formLuas.addEventListener("submit", function (e) {
    e.preventDefault();
    const alas = parseFloat(document.getElementById("alas").value);
    const tinggi = parseFloat(document.getElementById("tinggi").value);

    if (isNaN(alas) || isNaN(tinggi)) {
        hasilLuas.textContent = "Masukkan nilai yang valid.";
        return;
    }

    const luas = 0.5 * alas * tinggi;
    hasilLuas.textContent = `L = 1/2 × ${alas} × ${tinggi} = ${luas}`;
});

// Reset hasil luas jika form di-reset
formLuas.addEventListener("reset", function () {
    hasilLuas.textContent = "";
});

// Keliling segitiga
const formKeliling = document.getElementById("formHitungKeliling");
const hasilKeliling = document.getElementById("hasilKeliling");

formKeliling.addEventListener("submit", function (e) {
    e.preventDefault();
    const a = parseFloat(document.getElementById("sisiA").value);
    const b = parseFloat(document.getElementById("sisiB").value);
    const c = parseFloat(document.getElementById("sisiC").value);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        hasilKeliling.textContent = "Masukkan semua nilai sisi dengan benar.";
        return;
    }

    const keliling = a + b + c;
    hasilKeliling.textContent = `K = ${a} + ${b} + ${c} = ${keliling}`;
});

// Reset hasil keliling jika form di-reset
formKeliling.addEventListener("reset", function () {
    hasilKeliling.textContent = "";
});
