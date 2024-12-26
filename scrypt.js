document.addEventListener('DOMContentLoaded', () => {
    const pages = document.querySelectorAll('.page'); // Todas las páginas
    let currentPage = 0; // Página inicial

    const prevButton = document.getElementById('prev-page');
    const nextButton = document.getElementById('next-page');

    // Actualizar la visibilidad de las páginas
    function updatePage() {
        pages.forEach((page, index) => {
            page.classList.toggle('active', index === currentPage);
        });
    }

    // Botón Anterior
    prevButton.addEventListener('click', () => {
        if (currentPage > 0) {
            currentPage--;
            updatePage();
        }
    });

    // Botón Siguiente
    nextButton.addEventListener('click', () => {
        if (currentPage < pages.length - 1) {
            currentPage++;
            updatePage();
        }
    });

    // Mostrar la página inicial
    updatePage();
});
