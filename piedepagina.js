getMenu('piedepagina');
function getMenu(_id) {
    const piedepagina = document.getElementById(_id);
    piedepagina.innerHTML = `
    <footer class="bg-info bg-gradient text-center text-lg-start mt-4">
        <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
            <div class="container">
                <h2 class="mb-4">Información del Casino</h2>
                <p>Bienvenido a nuestro casino en línea, donde la emoción y la diversión nunca terminan. Ofrecemos
                    una amplia variedad de juegos, desde tragamonedas hasta póker, para que puedas disfrutar de la
                    mejor experiencia de juego desde la comodidad de tu hogar.</p>
                <p>Nuestro compromiso es brindarte un entorno seguro y justo para que puedas jugar con confianza.
                    ¡Únete a nosotros y comienza a ganar hoy mismo!</p>

                © 2025 Copyright:
                <a class="text-white" href="https://Fucasino.com/">Fucasino.com</a>
            </div>
    </footer>
    `; // fin del footer
}