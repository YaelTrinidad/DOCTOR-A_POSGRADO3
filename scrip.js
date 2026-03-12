// Toggle de convocatorias
function toggleConvocatoria(id) {
    var body = document.getElementById(id);
    var btn = document.getElementById('btn-' + id);

    if (body.classList.contains('open')) {
        body.classList.remove('open');
        btn.textContent = 'Ver mas';
    } else {
        body.classList.add('open');
        btn.textContent = 'Ver menos';
    }
}