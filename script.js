// Fonction pour inclure le header
function includeHeader() {
    fetch('/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
        });
}

// Fonction pour inclure le footer
function includeFooter() {
    fetch('/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        });
}

// Appeler les fonctions pour inclure le header et le footer
includeHeader();
includeFooter();