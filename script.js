function shuffleArray(array) {
    let shuffled = array.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function generateCard() {
    const bingoCard = document.getElementById("bingo-card");
    bingoCard.innerHTML = "";

    // Escoge 25 canciones aleatorias sin repetir
    const selectedSongs = shuffleArray(songs).slice(0, 25);

    selectedSongs.forEach(song => {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.textContent = song;
        cell.addEventListener("click", () => {
            cell.classList.toggle("marked");
        });
        bingoCard.appendChild(cell);
    });
}

document.getElementById("generate").addEventListener("click", generateCard);
