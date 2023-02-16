const word = document.querySelector("#random-word");

const letters = "ABCDEFJKLMNOPQRSTUVWXYZ";
const origWord = "RANDOM";

word.onmouseover = (e) => {
    let iterations = 0;
    myInterval = setInterval(function() {
        e.target.innerText = e.target.innerText.split("")
        .map((letter, index) => {
            if (index < iterations) {
                return e.target.dataset.value[index];
            }
            return letters.toLowerCase()[Math.floor(Math.random() * letters.length)]
        }).join("");
        if (iterations >= e.target.dataset.value.length) clearInterval(myInterval);

        iterations += 1 / 4;
    }, 50)
}
