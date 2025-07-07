const questions = [
   { clue: "Buah ini berwarna kuning dan rasanya manis", answer: "pisang" },
    { clue: "Buah ini kecil, merah, dan biasa dipakai di kue tart", answer: "stroberi" },
    { clue: "Buah ini berduri dan bau menyengat", answer: "durian" },
    { clue: "Buah ini berwarna merah,besar,punya biji kecil,dan manis", answer: "semangka" },
    { clue: "Buah ini luarnya berwarna hijau,dalamnya warna putih,berserat,dan punya biji kecil", answer: "sirsak" }
];

let currentQuestion =0;

const clueElement = document.getElementById("clue");
const inputElement = document.getElementById("answerInput");
const submitBtn = document.getElementById("submitBtn");
const nextBtn = document.getElementById("nextBtn");
const resultElement = document.getElementById("result");

function showQuestion(index) {
    clueElement.textContent = `Clue: ${questions[index].clue}`;
    inputElement.value = "";
    resultElement.textContent = "";
}

submitBtn.addEventListener("click", () => {
    const userAnswer = inputElement.value.toLowerCase().trim();
    const correctAnswer = questions[currentQuestion].answer;

    if (userAnswer === correctAnswer) {
        resultElement.textContent = " Jawaban Benar!";
        resultElement.style.color = "lightgreen";
    } else {
        resultElement.textContent =  ` Salah! Jawaban yang benar: ${correctAnswer} `;
        resultElement.style.color = "red";
    }
});

nextBtn.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion >= questions.length) {
        clueElement.textContent = "Permainan selesai! Refresh halaman untuk mengulang.";
        inputElement.style.display = "none";
        submitBtn.style.display = "none";
        nextBtn.style.display = "none";
        resultElement.textContent = "";
    } else {
        showQuestion(currentQuestion);
    }
});





