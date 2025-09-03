// Navbar usando javascript
getMenu('navbar');
function getMenu(_id){

const elemento = document.getElementById(_id);
elemento.innerHTML = `<!-- Navbar -->
    <nav class="navbar navbar-expand-lg bg-info bg-gradient sticky-top">
        <!-- Recuerda cambiar sticky-top a fixed-top -->
        <div class="container-fluid"> <!-- Aca no -->
            <a class="navbar-brand" href="landing.html" target="_parent"><img src="C:\Users\kille\Downloads\Fucasino logo.png" style="height:50px; width:80px;"><\img></img></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav justify-content-center w-100"> <!-- Aca cambiamos el margen-->
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#Pie de pagina"><i
                                class="bi bi-file-person-fill"></i> Información</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false"><i class="bi bi-dice-6-fill"></i></i> Juegos
                        </a>
                        <ul class="dropdown-menu">
                            <li>
                                <a class="dropdown-item" href="#ruleta.html"><i class="bi bi-bullseye"></i> Ruleta</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#blackjack.html"><i class="bi bi-suit-spade"></i> Blackjack</a>
                            </li>
                            <a class="dropdown-item" href="#slots.html"></i>🎰 Slots</a>
                    </li>
                    <li>
                        <hr class="dropdown-divider" />
                    </li>
                    <li>
                        <a class="dropdown-item" data-bs-toggle="modal" data-bs-target="#TyC"><i class="bi bi-bricks"></i>
                        </i> Términos</a> <!-- Esto abre un modal, no una pagina -->
                    </li>
                </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link " aria-disabled="false" href="#sobrenosotros.html"><i class="bi bi-info-circle-fill"></i></i> Sobre Nosotros</a>
                </li>
                
            </div>
            <button class="btn btn-outline-light me-2" type="button"><i class="fa-regular fa-address-card"></i></i> Usuario</button> <!-- boton de usuario, necesario para login-->
        </div>
    </nav>

    <!-- Modal -->
    <div class="modal fade" id="TyC" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5 text-black" id="staticBackdropLabel">Terminos y Condiciones</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body"> <!-- Aca van los terminos y condiciones -->
                    <pre class="overflow-y-scroll" style="height: 400px;">
Ultima fecha de modificación: 31 de Agosto de 2025


1. Aceptación de los Términos

Al registrar una cuenta, acceder a nuestro sitio web o utilizar cualquiera de nuestros servicios, aceptas y te comprometes a cumplir con estos Términos y Condiciones, nuestra Política de Privacidad y las reglas de cada juego. Si no estás de acuerdo, no debes usar el sitio web.

2. Elegibilidad y Restricciones

Mayoría de Edad: Solo las personas mayores de 18 años (o la edad legal para apostar en su jurisdicción, la que sea mayor) pueden registrarse y jugar. Nos reservamos el derecho de solicitar prueba de edad.

Jurisdicción: Es tu responsabilidad asegurarte de que el juego en línea es legal en tu país de residencia. No ofrecemos servicios en países donde el juego online está prohibido.

Una Cuenta por Persona: Solo puedes tener una cuenta de usuario. Múltiples cuentas están prohibidas y nos reservamos el derecho de cerrarlas y anular cualquier ganancia.

3. Registro y Cuentas de Usuario

Información Veraz: Debes proporcionar información de registro completa y precisa.

Verificación de Identidad: Nos reservamos el derecho de verificar tu identidad en cualquier momento. El no hacerlo puede resultar en la suspensión o cierre de tu cuenta y la retención de tus fondos.

Seguridad de la Cuenta: Eres responsable de mantener la confidencialidad de tu nombre de usuario y contraseña. No debes compartir tu cuenta con nadie. Cualquier actividad realizada en tu cuenta se considera hecha por ti.

4. Depósitos y Retiros

Métodos de Pago: Solo se aceptan los métodos de pago listados en nuestro sitio.

Retiros: Los retiros están sujetos a límites, tiempos de procesamiento y a la verificación de tu identidad.

5. Reglas de Juego

Reglas Específicas: Cada juego tiene sus propias reglas. Es tu responsabilidad leer y entender estas reglas antes de jugar.

Anulación de Apuestas: Nos reservamos el derecho de anular cualquier apuesta en caso de fallos técnicos, errores de software, o sospecha de fraude o colusión. Las ganancias de apuestas anuladas serán retiradas.

6. Comportamiento Prohibido

Fraude y Colusión: Está estrictamente prohibido el fraude, el uso de software externo para obtener ventaja (bots), y cualquier forma de colusión con otros jugadores.

Conducta Apropiada: El uso de lenguaje abusivo, ofensivo o amenazante en el chat o con nuestro personal de soporte está prohibido.

7. Limitación de Responsabilidad

Pérdida de Fondos: Jugar en un casino implica un riesgo de pérdida. No somos responsables de ninguna pérdida económica en la que incurras.

Fallas Técnicas: No somos responsables de fallas del sistema o errores técnicos que puedan resultar en la pérdida de apuestas o el funcionamiento incorrecto del juego.

Enlaces Externos: No somos responsables del contenido de sitios web de terceros a los que se acceda a través de enlaces en nuestro sitio.

8. Propiedad Intelectual

Todo el contenido del sitio web, incluyendo textos, gráficos, logotipos y juegos, es propiedad de Fucasino y está protegido por las leyes de derechos de autor.

9. Cambios en los Términos

Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. Te notificaremos sobre cambios importantes. El uso continuado del sitio después de dichas modificaciones constituye tu aceptación de los nuevos términos.

10. Ley Aplicable y Jurisdicción

Estos términos se rigen por las leyes de Chile y cualquier disputa se resolverá en los tribunales de Chile/Region Metropolitana.</pre>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Acepto los Terminos y Condiciones</button>
                </div>
            </div>
        </div>
    </div> `; }
