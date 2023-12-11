document.addEventListener('DOMContentLoaded', function () {
    const pesoInput = document.querySelector('input');
    const calcularButton = document.querySelector('button');
    const errorMensaje = document.getElementById('error');
    const resultsContainer = document.querySelector('.results');

    calcularButton.addEventListener('click', function () {
        errorMensaje.style.display = 'none';
        resultsContainer.style.display = 'none';

        const peso = parseFloat(pesoInput.value);

        if (isNaN(peso) || peso <= 0) {
            errorMensaje.style.display = 'block';
        } else {
            if (peso <= 30) {
                let hidratacion_diaria;
                if (peso <= 10) {
                    hidratacion_diaria = peso * 100;
                } else if (peso <= 20) {
                    hidratacion_diaria = 10 * 100 + (peso - 10) * 50;
                } else {
                    hidratacion_diaria = 10 * 100 + 10 * 50 + (peso - 20) * 20;
                }

                const flujo_horario = hidratacion_diaria / 24;
                const m_mas_m2 = flujo_horario * 1.5;

                resultsContainer.innerHTML = `
                    <h3>Método utilizado: Holliday-Segar</h3>
                    <p>Volumen diario = ${hidratacion_diaria} cc</p>
                    <p>Mantenimiento = ${flujo_horario} cc/hr</p>
                    <p>m+m/2 = ${m_mas_m2} cc/hr</p>
                `;
            } else {
                const superficie_corporal = ((peso * 4) + 7) / (peso + 90);
                const hidratacion_diaria_1500 = superficie_corporal * 1500;
                const hidratacion_diaria_2000 = superficie_corporal * 2000;

                resultsContainer.innerHTML = `
                    <h3>Método utilizado: Superficie corporal</h3>
                    <p>SC * 1500 = ${hidratacion_diaria_1500} cc</p>
                    <p>SC * 2000 = ${hidratacion_diaria_2000} cc</p>
                `;
            }

            resultsContainer.style.display = 'block';
        }
    });
});
