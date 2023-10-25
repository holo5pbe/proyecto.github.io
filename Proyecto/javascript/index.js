document.addEventListener('DOMContentLoaded', function () {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(function (dropdown) {
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');

        dropdown.addEventListener('click', function (event) {
            event.stopPropagation(); // Evita que el evento llegue al documento y cierre el menú.

            // Alternar la visibilidad del menú
            dropdownMenu.classList.toggle('show');
        });

        // Evento de clic en el documento para cerrar el menú
        document.addEventListener('click', function () {
            dropdownMenu.classList.remove('show');
        });
    });
});
