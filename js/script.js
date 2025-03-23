// Fonction pour injecter le header
function injectHeader() {
    fetch('../FooterHeader/header.html')
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('afterbegin', data);
        });
}

// Fonction pour injecter le footer
function injectFooter() {
    fetch('../FooterHeader/footer.html')
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('beforeend', data);
        });
}

// Appel des fonctions
injectHeader();
injectFooter();