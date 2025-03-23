// Fonction pour injecter le header
function injectHeader() {
    fetch('/FooterHeader/header.html')  // Utilisation d'un chemin absolu
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            document.body.insertAdjacentHTML('afterbegin', data);
        })
        .catch(error => {
            console.error('Erreur lors du chargement du header:', error);
        });
}

// Fonction pour injecter le footer
function injectFooter() {
    fetch('/FooterHeader/footer.html')  // Utilisation d'un chemin absolu
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            document.body.insertAdjacentHTML('beforeend', data);
        })
        .catch(error => {
            console.error('Erreur lors du chargement du footer:', error);
        });
}

// Appel des fonctions
document.addEventListener('DOMContentLoaded', (event) => {
    injectHeader();
    injectFooter();
});