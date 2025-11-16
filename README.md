# Problema 16/11/25 (1)
La navbar es la misma tanto en movil como en desktop por lo que cuando se oculta la pestaña tambien se oculta en la version de desktop pero en este caso no se puede hacer visible dado que ese boton solo esta disponible en la version de movil.
-Pensamientos: Utilizar useState para manejar el estado de la navbar y useEffect para manejar el evento de cambio de tamaño de la ventana pero no se como implementarlo.
-Solucion: Se establece una constante que representa el ancho de la pantalla del dispositivo en pixeles.Despues mediante un useState se establece el valor inicial del estado de la navbar mediante una funcion que devuelve dos valores un boleano(true) para decir que la pantalla es de desktop y un return true por si acaso no se cumpla la condicion.
Tambien se usa un useEffect para manejar el evento de cambio de tamaño de la ventana y actualizar el estado de la navbar.
Esto se logra primero con un condicional que cambia el estado de la navbar a true si la pantalla es de desktop y false si es de movil para despues llamar a la funcion del useEffect cada que la pantalla cambie de tamaño.
Tambien se utilizo un "one-line-if" para condicionar la clase de css de la navbar en funcion del estado de la navbar.
# Problema 16/11/25 (2)
En el header de movil hay una imagen que cuando se presiona se muestra un menu desplegable con las opciones de la navbar. El problema es que se debe presionar mas de una vez para que se muestre el menu.
-Pensamientos: Pienso que el problema es que deberia usar un boton envuelto en la imagen o simplemente un boton.
-Solucion: Funciona mejor.
# Problema 16/11/25 (3)
La navbar se guarda y se muestra correctamente en la version de movil y la version de desktop cuando se presiona el boton de menu pero no puedo cambiar su disposicion en el header porque como se compila el css a modo de cascada los cambios se sobreescriben por lo que no se pueden aplicar estilos adicionales.
-Pensamientos: Como habia planteado la primera vez que vi esto <<Habria que usar dos elementos para la version movil y desktop aunque significara escribir el doble de codigo>>.
La otra idea es usar tanto flexbox como el mediaquery para cambiar la disposicion de la navbar en el header en funcion del tamaño de la pantalla pero a decir verdad es mucho mas complicado usar los estados y funciones de react para esto.En pocas palabras lo que habia pensado es mucho mas facil que lo que dice github copilot.
-Solucion: Mi solucion es usar dos elementos para la version movil y desktop combinado con dos funciones que abran o cierren la navbar en funcion del boton ademas de hacer correciones con flexbox y mediaquery.En otras palabras planeo que hayan dos elementos distintos pero con el mismo contenido excepto el boton el cual uno sera de abrir y otro de cerrar entonces de tal manera seria inutil recurir al useState para manejar el estado de la navbar.
