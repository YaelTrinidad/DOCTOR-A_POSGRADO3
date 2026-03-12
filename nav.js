document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.nav-dropdown > a').forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            var parent = this.parentElement;
            var isOpen = parent.classList.contains('open');
            // Cerrar todos los dropdowns abiertos
            document.querySelectorAll('.nav-dropdown.open').forEach(function (el) {
                el.classList.remove('open');
            });
            // Abrir el actual si estaba cerrado
            if (!isOpen) {
                parent.classList.add('open');
            }
        });
    });

    // Cerrar al hacer clic fuera
    document.addEventListener('click', function (e) {
        if (!e.target.closest('.nav-dropdown')) {
            document.querySelectorAll('.nav-dropdown.open').forEach(function (el) {
                el.classList.remove('open');
            });
        }
    });
});
