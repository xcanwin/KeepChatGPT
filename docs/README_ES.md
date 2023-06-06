<br><br>

<center><div align="center">

<img src="/assets/KeepChatGPT.png" width="750"></img>

<br>

<a href="https://github.com/xcanwin/KeepChatGPT/blob/main/README.md">中文</a> | <a href="https://github.com/xcanwin/KeepChatGPT/blob/main/docs/README_EN.md">English</a> | <a href="https://github.com/xcanwin/KeepChatGPT/blob/main/docs/README_ES.md">Español</a>

</div></center>

<br>

## Descripción del proyecto

- Si te gusta este script, por favor apoya mi proyecto en GitHub KeepChatGPT dándole una ⭐️.
- Este es un código abierto, gratuito y eficiente script de extensión de usuario para ChatGPT, que puede hacer que tus chats sean extremadamente fluidos y eliminar de una vez por todas varios errores y advertencias. Ahorrarás 10 pasos adicionales completos y te liberarás de la constante necesidad de actualizar la página. Los autores continúan añadiendo más mejoras, incluyendo la cancelación de auditorías, la clonación de conversaciones, la purificación de la página, la visualización en pantallas grandes, la visualización a pantalla completa, entre otras.
- No hay financiación para la investigación y el desarrollo, esto se realiza puramente con el poder del amor. ¡Eres bienvenido/a a hacer una donación! Gracias por tu apoyo Patrocinadores.

## Introducción a las características

1.  Se ha resuelto el error:`NetworkError when attempting to fetch resource.`
2.  Se ha resuelto el error:`Something went wrong. If this issue persists please contact us through our help center at help.OpenAI.com.`
3.  Se ha resuelto el error:`Conversation not found`
4.  Se ha resuelto el error:`This content may violate our content policy. If you believe this to be in error, please submit your feedback — your input will aid our research in this area.`
5.  Se resolvieron las interrupciones frecuentes durante la comunicación
6.  Se resolvió la actualización frecuente de páginas web
7.  Soporte multilingüe
8.  Resuelto el error oficial de que el nombre de usuario en el diálogo se copiaría por error
9.  Soporte gratuito [Cancelar la auditoría de supervisión de backend](#about-cancel-audit-function)
10. Compatible con dispositivos móviles ([HarmonyOS](#usage-harmonyos-system), [Androide](#usage-android-system), [Ios](#usage-apple-system))
11. Soporte libre [Ajustar intervalo de tiempo](#about-adjust-interval-feature)
12. Apoyo [Fácil clonación y edición no destructiva de diálogos especificados](#about-clone-dialogue-function)
13. Apoyo [Purificar la página](#about-purify-page-features)
14. Soporte de visualización de pantalla grande
15. Soporte de visualización de pantalla completa

Lo anterior es una breve descripción de las funciones, la descripción detallada de las funciones al final de este artículo.

Y al final de este artículo [Otras instrucciones](#other-instructions), el autor analiza brevemente [Por qué se producen errores de red a gran escala](#about-why-large-scale-network-errors-occur), soluciones comunes de mensajes de error

| Num | Después de usar `KeepChatGPT`, la siguiente escena nunca volverá a aparecer |
| --- | --- |
| 1 | <img src="/assets/error_network.png" width="750"></img> |
| 2 | <img src="/assets/wrong_somthing.png" width="750"></img> |
| 3 | <img src="/assets/wrong_audit.png" width="750"></img> |
| 4 | <img src="/assets/error_conversation_not_found.png" width="750"></img> |

## Comentarios de los usuarios

*   Hay buenos y malos
*   Gracias por sus elogios
*   Seguirá actualizándose para los malos

<img src="/assets/user_feedback_4.png" width="750"></img> <img src="/assets/user_feedback_3.png" width="750"></img> <img src="/assets/user_feedback_2.png" width="750"></img> <img src="/assets/user_feedback_1.png" width="750"></img>

## Comparación

| Entorno experimental |               Sin usar `KeepChatGPT`                |                   Usando `KeepChatGPT`                    |
| :----------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
|        Fenómeno | Cuadros de advertencia rojos frecuentes NetworkError en el chat, que aparecen cada diez minutos más o menos, que requieren que la página web se actualice | Nunca más habrá errores de red y no es necesario actualizar la página web |
|          Paso 1 |                       Emitir el mensaje |                       Emitir el mensaje |
|          Paso 2 |                     Espera el resultado |                     Espera el resultado |
|          Paso 3 |                  Encontrar un error de red |                      Obtener el resultado |
|          Paso 4 |                  Intentar hacer clic para reenviar |                                                              |
|          Paso 5 |              Volver a encontrar el error de red |                                                              |
|          Paso 6 |                   Copiar el mensaje anterior |                                                              |
|          Paso 7 |                     Actualizar la página web |                                                              |
|          Paso 8 |            Espere a que la página web termine de cargarse |                                                              |
|          Paso 9 |                Abrir la sesión de chat anterior |                                                              |
|         Paso 10 |                  Pegue el mensaje anterior |                                                              |
|         Paso 11 |                    Vuelva a emitir el mensaje |                                                              |
|         Paso 12 |                  Espera el resultado de nuevo |                                                              |
|         Paso 13 |                      Obtener el resultado |                                                              |

*   En comparación, se puede ver que ahorra más de 10 pasos innecesarios y permite un chat fluido.

## Mostrar

*   Disfrute de la "Etiqueta de oro exclusiva" gratuita, que representa un cambio dramático en su experiencia de IA:
*   <img src="/assets/index_light_en.png" width="750"></img>
*   Para los amigos a los que les gustan los tonos oscuros, puede pasar el cursor sobre la "Etiqueta dorada exclusiva" con el mouse y seleccionar "Tema" para cambiarla a "Etiqueta azul exclusiva":
*   <img src="/assets/index_dark.png" width="750"></img>
*   Moblie:
*   <img src="/assets/index_mobile.png" width="280"></img>

## Explicación

*   Omita la verificación de araña de Cloudflare durante la apertura de la página usando Headless.
*   Omita la verificación aleatoria de la máquina de Cloudflare sin hacer clic.
*   Mantener el principio de minimizar el tráfico.
*   Mover el ratón sobre `Exclusive Gold Label` y seleccione `Show Debugging` para ver el proceso de omisión.

## Uso

Los navegadores recomendados son `Chrome`, `Firefox`, `Edge` y otros navegadores compatibles con estos tres.

1. Instala la extensión del navegador `Tampermonkey` desde el sitio web de [Tampermonkey](https://www.tampermonkey.net/).
2. Instala `KeepChatGPT` seleccionando uno de los repositorios de [Instalación de repositorios](#install).
3. Abre [ChatGPT](https://chat.OpenAI.com/chat) y disfruta de una experiencia sin problemas.
4. Además, hay una forma más inteligente de hacerlo, que es preguntarle a ChatGPT: "¿Cómo instalar la extensión Tampermonkey? ¿Cómo instalar el script de usuario desde Greasy Fork?"

## Uso del sistema HarmonyOS

1.  El navegador preferido es `Firefox`;
2.  Instalar `Firefox` Aplicación del navegador, puede descargarla desde [Galería de aplicaciones de Huawei](https://appgallery.huawei.com/app/C31765)、[Sitio web oficial de Firefox](https://www.mozilla.org/firefox/browsers/mobile/android/)；
3.  Abrir `Firefox` Aplicación del navegador > esquina inferior derecha `...` > Complementos > Administrador de complementos > `+` a la derecha de `Tampermonkey`;
4.  Instalar `KeepChatGPT` userscript, puede elegir un canal para instalar [Canal de instalación](#installation-channel);

## Uso del sistema Android

1.  El navegador preferido es `Firefox`;
2.  Instalar `Firefox` Aplicación del navegador, puede descargarla desde [Tienda de juegos](https://play.google.com/store/apps/details?id=org.mozilla.firefox)、[Sitio web oficial de Firefox](https://www.mozilla.org/firefox/browsers/mobile/android/)；
3.  Abrir `Firefox` Aplicación del navegador > esquina inferior derecha `...` > Complementos > Administrador de complementos > `+` a la derecha de `Tampermonkey`;
4.  Instalar `KeepChatGPT` userscript, puede elegir un canal para instalar [Canal de instalación](#installation-channel);

## Uso del sistema Apple

1.  El navegador preferido es `Safari`, otros navegadores están limitados por la política de Apple y rara vez admiten complementos JS;
2.  Instale el `Stay` Aplicación de extensión del navegador, que se puede instalar desde [Tienda de aplicaciones](https://apps.apple.com/app/id1591620171)；
3.  Consulte \[Sitio web oficial de la estancia] (<https://github.com/shenruisi/Stay>) para instrucciones;
4.  Instalar `KeepChatGPT` plugin, puede elegir un canal para instalar [Canal de instalación](#installation-channel)；

## Canal de instalación

|  | Origen UserScript |
| --- | --- |
| 1 | [Github](https://raw.githubusercontent.com/xcanwin/KeepChatGPT/main/KeepChatGPT.user.js) |
| 2 | [GreasyFork](https://greasyfork.org/zh-CN/scripts/462804-keepchatgpt) |

*   El autor solo proporciona el método de instalación del script de usuario, y las fuentes oficiales son solo las dos anteriores, busque las fuentes oficiales.
*   El autor piensa que los scripts de usuario son mejores que las extensiones. Todos pueden auditar la seguridad en cualquier momento, y todos pueden averiguar si hay datos cargados en secreto.
*   ⚠️[Google App Store](https://chrome.google.com/webstore/category/extensions) y ⚠️[Tienda de aplicaciones de Microsoft](https://microsoftedge.microsoft.com/) no son proporcionados por el autor. Y plagió este proyecto, pero también cobró a los usuarios.

## Otras instrucciones

### Acerca de por qué se producen errores de red a gran escala

1.  Ha habido una escasez de potencia informática en el mundo debido a la crisis global de chips, y OpenAI también existe.
2.  OpenAI se convirtió en un éxito instantáneo, y el número de usuarios, el tiempo en línea del usuario y la frecuencia del usuario aumentaron considerablemente al mismo tiempo, lo que agravó la escasez de recursos.
3.  Se ha derivado una gran cantidad de productos de IA y bots de IA, todos llamando a la API de ChatGPT y a la versión web de ChatGPT de forma privada, incluso con mucha más frecuencia que la suma de todos los usuarios reales.
4.  OpenAI se conecta a `Cloudflare`Permite `strong protection rules`e intercepta productos de IA y bots de IA que están conectados de forma privada a OpenAI.
5.  Al igual que el CAPTCHA gráfico, la intención era interceptar bots, pero una vez que existía el riesgo de que el CAPTCHA fuera reconocido, los webmasters desarrollaron el CAPTCHA gráfico para que fuera más complejo, afectando a usuarios reales, pero de hecho interceptando bots de manera efectiva.
6.  `Cloudflare` es un servicio público, sirve a todos los sitios web, y sus reglas de protección y estrategias de control de riesgos son comunes. Muchos sitios web que no desean ser accedidos por rastreadores, bots, piratas informáticos o tráfico pesado se conectarán a Cloudflare, por lo que Cloudflare tiene una gran cantidad de estrategias de control de riesgos.
7.  Un gran número de usuarios extranjeros son redes domésticas, y Cloudflare juzga que sus redes no están en riesgo, por lo que apenas informan de errores.
8.  Un gran número de usuarios domésticos en China utilizan diversas técnicas mágicas de desplazamiento (denominadas `666`). Sin embargo, muchos `666` Las IP han sido o están actualmente incluidas en Cloudflare `strong protection rules` Lista de vigilancia prioritaria. Esta situación puede no ser necesariamente causada por los propios usuarios. Podría ser el resultado de acciones previas que afectan a usuarios posteriores, o la activación frecuente de controles de riesgo por parte de muchas IP en el mismo segmento C. También es posible que los propios usuarios no sepan que están utilizando un `666` IP, que activa los controles de riesgo. En consecuencia, Cloudflare identifica un riesgo potencial en su red, lo que lleva a mensajes de error y la necesidad de verificar la autenticidad de los usuarios reales.
9.  Esto es solo la punta del iceberg, y podría haber varias otras razones subyacentes.

### Razones y soluciones para los errores de red incluso cuando se usa este complemento

1.  Motivo: Consulte [*Con respecto a la función Ajustar intervalo*](#about-adjust-interval-feature). Solución: Ajuste el intervalo de mantenimiento moderadamente.
2.  Motivo: Consulte [*Por qué se producen errores de red masiva*](#about-why-large-scale-network-errors-occur). Solución: cambie la IP, el centro de datos, el proveedor de servicios de Internet y el canal del `666`; La configuración más óptima para una sola `666`.

### Razones y soluciones para el mensaje de error 429 - Demasiadas solicitudes en 1 hora. Inténtalo de nuevo más tarde

1.  En primer lugar, hay muchos tipos de errores 429. Confirme si no se menciona en [*Con respecto a otros errores*](#about-other-errors-causes-and-solutions). Si no es así, considere las siguientes posibilidades:
2.  Motivo: Para los usuarios recién registrados o los usuarios que se registraron con el mismo teléfono, OpenAI no proporciona créditos gratuitos. Compruebe la [Página de uso del sitio web oficial de OpenAI](https://platform.OpenAI.com/account/usage) para más detalles. Solución: Regístrese con un correo electrónico y un número de teléfono diferentes.
3.  Motivo: El uso del crédito se ha agotado. Compruebe la [Página de uso del sitio web oficial de OpenAI](https://platform.OpenAI.com/account/usage) para más detalles. Solución: Recarga para obtener más créditos.
4.  Motivo: Error en Cloudflare. Solución: Utilice el modo de privacidad de un navegador o una instancia de ChatGPT. Si el modo de privacidad funciona normalmente, borre todas las cookies y el almacenamiento local relacionados con el dominio y los subdominios de OpenAI.com en el modo de navegación normal.
5.  Motivo: es posible que no sepas que estás usando un `666` IP. Hay un grupo de "vecinos en línea con la misma salida de IP" que constantemente hacen solicitudes frecuentes para diversos fines. Aunque su tráfico es alto, logran mantenerse por debajo del umbral para evitar desencadenar el error 429. Sin embargo, cuando comienzas a usar este complemento, los arrastra hacia abajo y se quedan perplejos por encontrarse repentinamente con el error 429. Solución: cambie la IP, el centro de datos, el proveedor de servicios de Internet y el canal del `666`; La configuración más óptima para una sola `666`.

### Acerca de la función Cancelar auditoría

1.  De forma predeterminada, todas sus conversaciones son auditadas automáticamente por el oficial de OpenAI. [moderación](https://platform.OpenAI.com/docs/guides/moderation/overview) sistema. Si el sistema de moderación de OpenAI detecta violaciones excesivas o violaciones de la [Políticas de uso de OpenAI](https://OpenAI.com/policies/usage-policies) En sus conversaciones, su cuenta corre el riesgo de ser restringida o incluso prohibida.
2.  Por **habilitante** la función "Cancelar auditoría" de este complemento junto con su inteligente elección de palabras, puede minimizar el impacto en gran medida.

### Con respecto a la función Ajustar intervalo

1.  El valor hace referencia al intervalo de tiempo para *guardar* (manteniendo viva la conexión), medido en *sobras*.
2.  Un intervalo de tiempo más grande significa una velocidad de mantenimiento más lenta, menos impacto en el sitio web y una cuenta más segura.
3.  Un intervalo de tiempo más pequeño significa una velocidad de mantenimiento más rápida y menos ocurrencia de errores de red.
4.  Se recomienda tener un intervalo de *30* segundos o más.
5.  El autor generalmente lo establece en *150* sobras.

### Acerca de la función Clonar conversación

1.  ChatGPT pertenece al proyecto AI prompt.
2.  Una de las cosas que más hace la ingeniería rápida es ajustar repetidamente las palabras rápidas hasta que se descubre que el robot realmente entiende y el resultado cumple con sus requisitos.
3.  Una de las cosas más comunes que hace es ajustar repetidamente la redacción del mensaje antes de estar satisfecho con los resultados copiando y pegando lo que ya ha publicado.
4.  Después de comprobar `Clone dialog`, puede hacer clic en el avatar delante del cuadro de diálogo que desea volver a optimizar, y el cuadro de diálogo aparecerá inmediatamente.

### Acerca de las características de la página Purify

1.  Para los usuarios regulares (no Plus), a menudo se ve que la página de inicio de ChatGPT `https://chat.OpenAI.com/` está lleno de indicaciones inútiles.
2.  Después de comprobar `Purify page`, puede hacer que la página de inicio se vea nueva, disfrutar del estándar de oro similar a los usuarios PLUS y mejorar la experiencia.

### Causas y soluciones para otros errores

Si se produce el siguiente mensaje de error, consulte la solución oficial: [Código de error del documento oficial de OpenAI](https://OpenAI.com/policies/usage-policies)
401 - Autenticación no válida
401 - Clave API incorrecta proporcionada
401 - Debe ser miembro de una organización para usar la API
429 - Límite de tarifa alcanzado para solicitudes
429 - Excedió su cuota actual, verifique su plan y los detalles de facturación
429 - El motor está sobrecargado, inténtelo de nuevo más tarde
500 - El servidor tuvo un error al procesar su solicitud

### Acerca de los usuarios de PLUS no reportarán errores

*   Los usuarios PLUS están condenados al igual que los usuarios comunes.

## El patrocinador

* ¡Si lo encuentras útil, increíble, suave o agradable!
* Si deseas que el pequeño gato del autor pueda tener una mejor comida para gatos y comida enlatada.
* Si este proyecto te ha sido útil.
* Si este proyecto ha mejorado la eficiencia de tu trabajo.
* Si deseas que este proyecto se mantenga continuamente para evitar una nueva ronda de mensajes de error de OpenAI.
* Si deseas que este proyecto continúe actualizándose con más funciones.
* Crear no es fácil, mantener un proyecto requiere tiempo, energía y habilidades técnicas. Se agradece el aprecio y el apoyo.
* Puedes dejar tu DNI en la nota, gracias.

| Desde | Gracias |
| --- | --- |
| Mi gato | <img src="/assets/appreciate_mycat.jpg" width="300"></img> |
| Buymeacoffee | [<img src="/assets/appreciate_buycoffee.png" width="300"></img>](https://www.buymeacoffee.com/xcanwin) |
| Afdian<br>(Soporte wechat y alipay) | [<img src="/assets/appreciate_afdian.png" width="300"></img>](https://afdian.net/a/xcanwin/plan) |
| Wechat<br>(A veces no funciona) | <img src="/assets/appreciate_wechat.png" width="300"></img> |
