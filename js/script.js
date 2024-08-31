function loadContent(page, event) {
    if (event) {
        event.preventDefault(); // Impede o comportamento padrão do link
    }
    document.getElementById('content').src = page;
}