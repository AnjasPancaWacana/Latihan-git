// Latihan
function PenentuanNilai(nilai){
    if (nilai >= 80) {
        grade = "A";
    } else if (70 >= nilai <= 79) {
        grade = "B";
    } else if (60 >= nilai <= 69) {
        grade = "C";
    } else if (50 >= nilai <= 59) {
        grade = "D";
    } else {
        grade = "E";
    }
    return grade
    // Pemanggilan kembali
}
console.log(PenentuanNilai(80));