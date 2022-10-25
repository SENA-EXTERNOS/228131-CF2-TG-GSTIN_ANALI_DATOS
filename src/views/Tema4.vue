<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Diseño de instrumentos, recolección de datos, verificación de la calidad

    .p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-2
          img(src='@/assets/curso/temas/T4/img-1.svg')
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.mb-3 En el diseño de instrumentos de recolección de datos, los métodos de recopilación de estos, se definen como un conjunto de procedimientos y herramientas para recopilar, validar y analizar la información necesaria para lograr los objetivos.
              p.mb-3 A continuación, conocerá algunos instrumentos que se utilizan en la estadística básica pata cumplir con este propósito. (Martínez, 2019, cap. 7), (Lind et al. 2019) y (Vladimirovna, et al. 2016).

      .row.justify-content-around.align-items-center
        .col-3 
          figure
            img(src='@/assets/curso/temas/T4/img-2.png')
        .col-9
          AcordionA.mb-5(tipo="a" clase-tarjeta="fcb")
            .row.justify-content-around.align-items-center(titulo="Diseño de instrumentos")
              .col-8.col-sm-6.col-md-2.mb-4.mb-md-0
                img(src="@/assets/curso/temas/T4/img-3.svg")

              .col-md.col-lg-6
                p.mb-4 En la construcción formal de recolección de datos, generalmente se utiliza un cuestionario.
                p.mb-4 La elaboración del instrumento consta de dos etapas: la primera una etapa cualitativa, donde están las preguntas o ítems y la segunda etapa, es la evaluación o medición de las métricas de las preguntas o ítems.

                
            .row.justify-content-around.align-items-center(titulo="Recolección de datos")
              .col-8.col-sm-6.col-md-2.mb-4.mb-md-0
                img(src="@/assets/curso/temas/T4/img-4.svg")

              .col-md.col-lg-6
                p.mb-4 Puede ser mediante entrevista, encuesta, cuestionario, observación, diagrama de flujo, diccionario de datos.

            .row.justify-content-around.align-items-center(titulo="La encuesta")
              .col-8.col-sm-6.col-md-2.mb-4.mb-md-0
                img(src="@/assets/curso/temas/T4/img-5.svg")

              .col-md.col-lg-6
                p.mb-4 Consiste en aplicar un cuestionario a un grupo de personas, con la finalidad de sacar información sobre un tópico en particular. Hay dos tipos de encuesta: la analítica y la descriptiva.
                ul.lista-ul
                  li 
                    i.fas.fa-angle-right
                    | #[strong La encuesta analítica:] busca describir y explicar una situación en particular.
                  li 
                    i.fas.fa-angle-right
                    | #[strong La encuesta descriptiva:] busca documentar una situación en particular.
              
            .row.justify-content-around.align-items-center(titulo="Cuestionario")
              .col-8.col-sm-6.col-md-2.mb-4.mb-md-0
                img(src="@/assets/curso/temas/T4/img-6.svg")

              .col-md.col-lg-6
                p.mb-4 Un cuestionario es un documento, con un conjunto de preguntas que deben estar organizadas, secuenciadas y estructuradas para sacar la mayor información de las respuestas.


    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Ejemplo de cuestionario" :icono="require('@/assets/curso/temas/T4/img-7.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Ejemplo de cuestionario:
            p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta
                  span 1
                | Pueden ser con preguntas abiertas, como: 
              p ¿Qué opinión le merece la participación de los ciclistas colombianos en los diferentes tours internacionales?
              
              li 
                .lista-ol--cuadro__vineta
                  span 2
                | Preguntas cerradas:
              p De selección única
              p ¿Tiene apartamento propio? Las respuestas: Si o No. 
              p Pregunta con escala de valores: 
              p En una escala del 1 a 10 siendo 1 el mínimo recomendarías nuestro producto.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/T4/img-10.png', alt='Texto que describa la imagen')

      .py-4.py-md-5(titulo="Ejemplo de recolección de datos" :icono="require('@/assets/curso/temas/T4/img-8.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Ejemplo de recolección de datos:
            p.mb-4 Se quiere vender un producto conocido en un negocio de la localidad se necesita saber:
            p.mb-4 Se debe averiguar la edad de la persona a encuestar, el género, si consume el producto, con qué frecuencia consume el producto, si tiene hora fija para consumir el producto, si los miembros de la familia consumen el producto, si el hábito de compra del producto ha sido influenciado por las promociones en redes sociales. Además, indagar sobre el promedio mensual (cuánto gasta en el producto), la condición de salud del entrevistado. Asimismo, se plantea una pregunta abierta sobre el producto, qué necesitaría para cambiar de marca y el orden de importancia de otros productos referente al del estudio, etc.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/T4/img-11.png', alt='Texto que describa la imagen')

      .py-4.py-md-5(titulo="Ejemplo de preguntas para un cuestionario" :icono="require('@/assets/curso/temas/T4/img-9.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Ejemplo de preguntas para un cuestionario:
            p.mb-4 Se quiere hacer una encuesta para un negocio de venta online posibles preguntas:
            p.mb-4 En una escala del 1 al 10 recomendaría nuestro comercio a un amigo o familiar.
            p.mb-4 En una escala del 1 al 10 con base a su experiencia de usuario, ¿qué tan satisfecho se siente?
            ul.lista-ul
              li 
                i.fas.fa-angle-right
                | ¿Cómo se enteró de nuestro negocio?
              li 
                i.fas.fa-angle-right
                | ¿Compra para otra persona?
              li 
                i.fas.fa-angle-right
                | ¿Regresaría a nuestro comercio?
              li 
                i.fas.fa-angle-right
                | ¿Es fácil navegar en el sitio?
              li 
                i.fas.fa-angle-right
                | Experiencia en la compra.
              li 
                i.fas.fa-angle-right
                | Experiencia en la llegada del producto.
              li 
                i.fas.fa-angle-right
                | ¿Los productos están bien explicados y detallados?
              li 
                i.fas.fa-angle-right
                | ¿Los productos tienen fotos de buena calidad?
              li 
                i.fas.fa-angle-right
                | ¿Los precios de los productos son similares a los del mercado?

          .col-md-6
            figure
              img(src='@/assets/curso/temas/T4/img-12.png', alt='Texto que describa la imagen')

    h3.mb-5 Verificación de la calidad: 
    p.mb-5 Medir el nivel de confiablidad, validez y calidad de los datos, permite encontrar e identificar errores que pueden corregirse y, valorar si estos son adecuados para la finalidad requerida. 
    .row.justify-content-center(data-aos="fade-down").mt-5
      .col-10.col-lg-4
        .row.px-2.pt-2.h-100
          .col-12.m-0.nav-holder2.align-items-center.rounded-15.box-shadow.px-0
            figure
              img(src="@/assets/curso/temas/T4/img-13.png", alt="Texto que describa la imagen")
            .text.p-lg-3.p-4
              .row.text-center.px-1.pt-1.mt-md-4.pt-md-0.mt-lg-3.mt-xl-4
                .h4.small-text.mt-sm-3.mt-md-0 Confiabilidad y validez
                p.mt-3.small-text Para la verificación de la calidad se debe tener confiabilidad y validez. La confiabilidad indica que la aplicación repetida del instrumento al mismo individuo, arroje resultados idénticos. La validez se refiere al grado en el cual un instrumento mide aquello para lo cual fue creado.

      .col-10.col-lg-4
        .row.px-2.pt-2.h-100
          .col-12.m-0.nav-holder2.align-items-center.rounded-15.box-shadow.px-0
            figure
              img(src="@/assets/curso/temas/T4/img-14.png", alt="Texto que describa la imagen")
            .text.p-lg-3.p-4
              .row.text-center.px-1.pt-1.mt-1.mt-md-4.mt-lg-3.mt-xl-4.pt-md-0
                .h4.small-text.mt-1.mt-md-0 Evitar preguntas ambiguas 
                p.mt-3.small-text Para la confiabilidad se deben evitar preguntas ambiguas, el instrumento debe abordar las variables de estudio y la medición podría cambiar a lo largo del tiempo.
      .col-10.col-lg-4
        .row.px-2.pt-2.h-100
          .col-12.m-0.nav-holder2.align-items-center.rounded-15.box-shadow.px-0
            figure
              img(src="@/assets/curso/temas/T4/img-15.png", alt="Texto que describa la imagen")
            .text.p-lg-3.p-4
              .row.text-center.px-1.pt-1.mt-1.mt-md-4.mt-lg-3.mt-xl-4.pt-md-0
                .h4.small-text.mt-1.mt-md-0 Medir la confiabilidad 
                p.mt-3.small-text El Alfa de Cronbach es un índice que se utiliza para medir la confiabilidad, para saber que tanto están relacionados los ítems en un instrumento. Está basado en el promedio de las correlaciones de los ítems.
               
            
    h2.mb-5 Ejemplo encuesta Invamer
    p.mb-5 Para ampliar y consolidar los aprendizajes, se muestra a continuación un ejemplo que ilustra el uso de los instrumentos de recolección estadístico, mediante una empresa colombiana dedicada a la investigación y asesoría de mercado.

    AcordionA.mb-5(tipo="a" clase-tarjeta="fcf")
      .row(titulo="Encuesta Invamer resultó")
        .col-md-12.mb-4.mb-md-0
          p.mb-3 el 34 % de los colombianos consideran que el desempleo y la economía, son los mayores problemas del país (Infobae, 2022) y (El espectador, 2022).
          p.mb-1 Empresa que realizó la encuesta: Invamer S.A.S.
          p.mb-1 Fuente de financiamiento: recursos propios de Invamer S.A.S.
          p.mb-3 Pregunta la encuesta Invamer Poll, le preguntó a los entrevistados ¿Cuál es el mayor problema que tiene el país?
          p A continuación, se observa una <b>ficha técnica</b> de una encuesta Invamer.

      .row(titulo="Universo")
        .col-md-12.mb-4.mb-md-0
          p Hombres y mujeres de 18 o más años, de todos los niveles socioeconómicos, residentes en: Bogotá (5 479 011), Medellín (1.813.155), Cali (1.374.126), Barranquilla (810.019) y Bucaramanga (390.351), para un total de 9.866.662 personas, según Censo 2018.

      .row(titulo="Marco muestral")
        .col-md-12.mb-4.mb-md-0
          p Cartografía de las ciudades para seleccionar a las personas. El cubrimiento de la cartografía en las 5 grandes ciudades es del 95 %. La cantidad de manzanas en la cartografía son: Bogotá 39.103, Medellín 13.329, Cali 13.707, Barranquilla 7.783 y Bucaramanga 4.716 para un total de 78.638.

      .row(titulo="Tamaño y distribución de la muestra")
        .col-md-12.mb-4.mb-md-0
          p 1200 encuestas personales distribuidas de la siguiente manera: Bogotá 400 encuestas, Medellín 200 encuestas, Cali 200 encuestas, Barranquilla 200 encuestas y Bucaramanga 200 encuestas. Para ajustar la muestra total al tamaño real del universo de cada ciudad, se aplican factores de ponderación.

      .row(titulo="Sistema de muestreo")
        .col-md-12.mb-4.mb-md-0
          p Se llevó a cabo un muestreo probabilístico por etapas, primero se realizó una selección aleatoria sistemática de hogares y posteriormente, una selección aleatoria simple de una persona de 18 años o más.

      .row(titulo="Margen de error")
        .col-md-12.mb-4.mb-md-0
          p Los márgenes de error dentro de unos límites de confianza de un 95 %, son: para el total de la muestra de las 5 ciudades +/- 2,83 %; para el total de la muestra de Bogotá +/- 4,90 %; para los totales de las muestras de Medellín, Cali, Barranquilla y Bucaramanga +/-6,93 %.

      .row(titulo="Técnica de recolección de datos")
        .col-md-12.mb-4.mb-md-0
          p.mb-3 Encuestas personales en el hogar de los encuestados (CAPI).
          ul.lista-ul
            li 
              i.fas.fa-angle-right
              | Fecha de recolección de los datos: julio de 2022.
            li 
              i.fas.fa-angle-right
              | Número de encuestadores: 25

      .row(titulo="Método de validación")
        .col-md-12.mb-4.mb-md-0
          p Se revisó el 100 % de las encuestas realizadas y se supervisó el 15% de las mismas.
        
      .row(titulo="Temas a los que se refiere")
        .col-md-12.mb-4.mb-md-0
          p Opinión pública sobre gobernantes, personajes, instituciones y hechos de actualidad.

      .row(titulo="Factor de ponderación")
        .col-md-12.mb-4.mb-md-0
          p Se calculó dividiendo el porcentaje del universo de las variables, rango de edad y nivel socioeconómico, sobre el porcentaje de la muestra para las mismas variables.


    .p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-2
          img(src='@/assets/curso/temas/T4/img-16.svg')
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.mb-4 Los documentos técnicos son documentos que contienen métodos y procesos para realizar estudios sociales o de mercado. La ficha técnica es un elemento muy útil de un estudio, debido a que, sirve para presentar la información requerida para poder interpretar los resultados de forma correcta.
              p.mb-3 Siguiendo con el caso de la encuesta Invamer, a continuación, se presenta un ejemplo de análisis de ficha técnica que servirá de guía para la aplicación como analista de datos. 

    .tarjeta.fcg.p-4.mb-5
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0
            p Trabajan con cinco ciudades grandes Bogotá, Medellín, Cali, Barranquilla y Bucaramanga. Tamaño de la muestra 1200 personas, 400 en Bogotá por ser más grande, el resto 200. Límite del intervalo de confianza de 95 %, significa que hay un error tipo 1 ( α ) del 5 %. Muestreo probabilístico por etapas. Encuestas personales en el hogar.
          
          .col-md-6
            figure
              img(src='@/assets/curso/temas/T4/img-17.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            p Al utilizar la calculadora para obtener el tamaño de la muestra con un intervalo de confianza del 95 % (QuestionPro, 2022). Se obtiene un tamaño de 384 para valores superiores a una población 90000 y menores a 220 999. Para valores de una población mayores a 220 999 se obtiene un tamaño de la muestra de 385.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/T4/img-18.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            p Según el DANE, Bogotá tiene al año 2022 una población aproximada de 7,9 millones de personas, si se pone esa cifra en la calculadora para obtener el tamaño de la muestra, arroja para un 5 % de error (en la casilla margen de error se escribe el número 5) y un intervalo de confianza del 95 %, un tamaño de muestra de 385. Se puede obtener el mismo tamaño de muestra para diferentes tamaños de población. En Invamer en Bogotá aproxima el tamaño de la muestra a 400.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/T4/img-19.png', alt='Texto que describa la imagen')

    .p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-2
          img(src='@/assets/curso/temas/T4/img-20.svg')
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.mb-3 En <i>Google Colab</i> se tienen máquinas virtuales con tarjetas gráficas que Google facilita. Además, permite ejecutar código en el lenguaje <i>Python</i>, dentro de la nube, con el formato de <i>Jupyter notebook</i> extensión ipynb.
              p.mb-3 <i>Jupyter notebook</i> se puede utilizar localmente o en la nube con <i>Google Colab</i>. Para usarlo localmente se debe tener instalado en el computador (Google Colab, 2022).

    .tarjeta.tarjeta--azul.p-4.mb-5
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0
            p.mb-5 Dentro de <i>Google Colab</i> se está en un entorno interactivo denominado <i>Notebook</i> de <i>Colab</i>, que permite escribir y ejecutar código celda por celda o todo de una vez, se obtiene en la pestaña Código.
            p.mb-5 Escribe en un lenguaje etiquetado especial llamado <i>Markdown</i>, se obtiene en la pestaña de nombre Texto. 
          .col-md-6
            figure
              .titulo-sexto.color-acento-contenido
                  p.mb-0 
                    p.mb-1 <b>Figura 12</b>
                    p Pantalla de inicio Google Colab
              img(src='@/assets/curso/temas/T4/img-21.png', alt='Texto que describa la imagen')
              figcaption Nota.  Pantalla de inicio de Google Colab

        .row
          .col-md-6.mb-4.mb-md-0
            p En la figura, en el menú vertical de la izquierda se observa un ícono o figura de una carpeta, haciendo <i>click</i> allí, se pueden observar los documentos que se tienen y subir documentos a <i>Google Colab</i>, haciendo <i>click</i> a una flecha de subida de documentos.
        
          .col-md-6
            figure
              .titulo-sexto.color-acento-contenido
                  p.mb-0 
                    p.mb-1 <b>Figura 12</b>
                    p Pantalla de inicio Google Colab
              img(src='@/assets/curso/temas/T4/img-21.png', alt='Texto que describa la imagen')
              figcaption Nota.  Pantalla de inicio de Google Colab

        .row
          .col-md-6.mb-4.mb-md-0
            h3.mb-3 Instalar una librería o paquete
            p.mb-4 <b>Ejemplo:</b>
            p.mb-0 <i>pip install</i> pandas
            p.mb-4  Instalaría la librería de nombre pandas, si ya está instalada lo dirá.
            h3.mb-3 Importar librería con un alias(as)
            p.mb-4 <b>Ejemplo:</b>
            p.mb-0 <i>import</i> pandas as pd 
            p.mb-0 Cargar la librería pandas con el alias o abreviación pd.
        
          .col-md-6
            figure
              .titulo-sexto.color-acento-contenido
                  p.mb-0 
                    p.mb-1 <b>Figura 13</b>
                    p Pantalla de inicio GC
              img(src='@/assets/curso/temas/T4/img-22.png', alt='Texto que describa la imagen')
              figcaption Nota. Importar la librería math y utiliza la función potencia: pow().

        .row
          .col-md-6.mb-4.mb-md-0
            h3.mb-4 Ejemplo: 
            p.mb-4 <i>import math</i>
            p.mb-4 Cargar la librería de nombre <i>math</i> referente a matemática.
            p.mb-4 <i>print(dir(math))</i>
            p.mb-4 Muestra las funciones que están dentro de la librería <i>math</i>
            p.mb-4 <i>pow</i>(2,3) una de las funciones que están en la librería <i>math</i>, es la función potencia en inglés <i>Power</i>, <i>pow</i>(2,3) significa que eleva el número 2 a la 3 da como resultado 8.
        
          .col-md-6
            figure
              .titulo-sexto.color-acento-contenido
                  p.mb-0 
                    p.mb-1 <b>Figura 13</b>
                    p Pantalla de inicio GC
              img(src='@/assets/curso/temas/T4/img-22.png', alt='Texto que describa la imagen')
              figcaption Nota. Importar la librería math y utiliza la función potencia: pow().

        .row
          .col-md-6.mb-4.mb-md-0
            p Un <i>Data frame</i> es una estructura de datos con dos dimensiones (filas y columnas), se pueden guardar datos de distintos tipos (caracteres, enteros, valores de punto flotante, etc.) en columnas. Es similar a una hoja de cálculo o una tabla de SQL.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/T4/img-23.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            p.mb-3 Un archivo CSV (valores separados por comas) es un archivo de texto que tiene un formato específico, que permite guardar los datos en un formato de tabla estructurada.
            p.mb-3 Un archivo CSV puede tener diferentes separadores, distintos de la coma ( , ) como: punto y coma ( ; ), barra oblicua  ( / ), guión del medio( - ), guion de piso( _ ), etc.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/T4/img-24.png', alt='Texto que describa la imagen')
            
        .row
          .col-md-6.mb-4.mb-md-0
            h3.mb-3 Leer un archivo CSV
            p.mb-3 Para leer un archivo en formato CSV se utiliza el comando pd.read_csv('nombre del archivo.csv'), pd es la abreviación de la librería pandas.
            p.mb-3 En la parte nombre del archivo, se debe escribir la ruta o dirección donde está el archivo, al final de esa ruta el nombre con extensión.csv.
        
          .col-md-6
            figure
              .titulo-sexto.color-acento-contenido
                  p.mb-0 
                    p.mb-1 <b>Figura 14</b>
                    p Primeras cinco filas del Data Frame
              img(src='@/assets/curso/temas/T4/img-25.png', alt='Texto que describa la imagen')
              figcaption Nota. Muestra las primeras 5 filas del data frame de créditos de consumo otorgados. 

        .row
          .col-md-6.mb-4.mb-md-0
            h3.mb-3 Ubicación del archivo CSV
            p.mb-3 Se puede utilizar el comando pwd, para saber la ruta donde se está ubicado.
            p.mb-3 Para cambiar el directorio o ruta se utiliza el comando cd.
            p.mb-3 <b>Ejemplo:</b>
            p.mb-3 <b>cd ruta</b> del directorio
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/T4/img-26.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            p.mb-3 <b>Ejemplo:</b>
            p.mb-3 leer un archivo csv, utilizando el alias de pandas pd, nombrarlo df y visualizarlo con el nombre df, separados por punto y coma ( ; ) y ver las primeras 5 filas.
            p.mb-0 <i>import</i> pandas as pd
            p.mb-0 <i>df = pd.read_csv('creditos_de_consumo_otorgados.csv',sep=’;’)</i>
            p.mb-5 <i>df.head()</i>
            p.mb-0  Muestra las últimas 5 filas del <i>data frame</i>, de créditos de consumo otorgados.
        
          .col-md-6
            figure
              .titulo-sexto.color-acento-contenido
                  p.mb-0 
                    p.mb-1 <b>Figura 15</b>
                    p Últimas cinco filas
              img(src='@/assets/curso/temas/T4/img-27.png', alt='Texto que describa la imagen')
              figcaption Nota. Muestra las últimas 5 filas del data frame de créditos de consumo otorgados. 

        .row
          .col-md-6.mb-4.mb-md-0
            p.mb-3 Se puede saber información sobre las variables, utilizando en la sentencia el nombre del <i>data frame</i> seguido de .info(), también si las variables tienen valores  únicos y cuántos son, utilizando el nombre del <i>data frame</i> seguido de .nuinque() 
            p.mb-4 <b>Ejemplo:</b>
            p.mb-0 <i>df.info()</i>
            p.mb-0 <i>df.nunique() </i>
          .col-md-6
            figure
              .titulo-sexto.color-acento-contenido
                  p.mb-0 
                    p.mb-1 <b>Figura 16</b>
                    p Tipos de datos
              img(src='@/assets/curso/temas/T4/img-28.png', alt='Texto que describa la imagen')
              figcaption Nota.  Muestra los tipos de datos y valores únicos del  data frame de créditos de consumo otorgados. 
            
        .row
          .col-md-6.mb-4.mb-md-0
            h3.mb-3 Estadísticas de una columna numérica
            p.mb-3 Se puede obtener el valor mínimo, valor máximo, número de elementos de las filas, cuartil 1(Q1), cuartil 2(Q2), cuartil 3 (Q3), la media (mean), desviación estándar (std).
            p.mb-3 Se coloca el nombre de la columna, seguido de un punto y la palabra describe()
            p.mb-3 <b>Ejemplo:</b>
            p.mb-3 <i>df['edad'].describe()</i>
        
          .col-md-6
            figure
              .titulo-sexto.color-acento-contenido
                  p.mb-0 
                    p.mb-1 <b>Figura 17</b>
                    p Estadísticas básicas columna edad
              img(src='@/assets/curso/temas/T4/img-29.png', alt='Texto que describa la imagen')
              figcaption Nota. Muestra las estadísticas básicas de la columna edad del  data frame de créditos de consumo otorgados.

        .row
          .col-md-6.mb-4.mb-md-0
            h3.mb-3 Reemplazar el valor de una columna
            p.mb-4 Se puede reemplazar masculino, por ejemplo, con la letra M. Femenino, por ejemplo, con la letra F.
            p.mb-5 <b>Ejemplo:</b>
            p.mb-0 <i>df['sexo']=df['sexo'].replace('masculino','M')</i>
            p.mb-0 <i>df['sexo']=df['sexo'].replace('femenino','F')</i>
        
          .col-md-6
            figure
              .titulo-sexto.color-acento-contenido
                  p.mb-0 
                    p.mb-1 <b>Figura 18</b>
                    p Reemplazar en la columna sexo
              img(src='@/assets/curso/temas/T4/img-30.png', alt='Texto que describa la imagen')
              figcaption Nota. Muestra como remplazar en la columna sexo masculino por M y femenino por F del data frame de créditos de consumo otorgados. 

        .row
          .col-md-6.mb-4.mb-md-0
            p.mb-3 Selección aleatoria del 10 % de la población 
            p.mb-3 Para extraer una muestra aleatoria el 10 % se importa la librería random, se utiliza el nombre del dataframe punto sample(frac=0.1), 0.1 significa el 10 %
            p.mb-3 En la figura se puede observar de la población 12152 el 10 % del tamaño de la muestra tomados de forma aleatoria con sus respectivos índices: 4172, 11471.El tamaño de la muestra es 1215.
            p.mb-3 <b>Ejemplo:</b>
            p.mb-3 <b>Importar la librería</b>
            p.mb-3 <i>import random</i>
            p.mb-0 <i>pob_10 = df.sample(frac =.1)</i>
            p.mb-0 <i>pob_10.head()</i>
        
          .col-md-6
            figure
              .titulo-sexto.color-acento-contenido
                  p.mb-0 
                    p.mb-1 <b>Figura 19</b>
                    p Muestra aleatoria 10 %
              img(src='@/assets/curso/temas/T4/img-31.png', alt='Texto que describa la imagen')
              figcaption Nota.  Muestra una muestra aleatoria con el 10% de la población del data frame de créditos de consumo otorgados. 

        .row
          .col-md-6.mb-4.mb-md-0
            p.mb-3 Para extraer una muestra de tamaño 10, se importa la librería random y se utiliza el nombre de la data frame seguido .sample(n=10)
            p.mb-3 <b>Ejemplo:</b>
            p.mb-3 <b>Importar librería</b>
            p.mb-3 <i>import random</i>
            p.mb-3 muestreo10 = df.sample(n=10)
            p.mb-3 En la figura se puede observar de la población 12152 los 10 elementos de la muestra tomados de forma aleatoria con sus respectivos índices: 9263, 1335, 10100, 6998.
        
          .col-md-6
            figure
              .titulo-sexto.color-acento-contenido
                  p.mb-0 
                    p.mb-1 <b>Figura 20</b>
                    p Muestra aleatoria
              img(src='@/assets/curso/temas/T4/img-32.png', alt='Texto que describa la imagen')
              figcaption Nota. Muestra una muestra aleatoria de 10 elementos de la población 12152 del data frame de créditos de consumo otorgados. 

        .row
          .col-md-6.mb-4.mb-md-0
            p.mb-3 El formato de <i>Jupyter</i> notebook tiene extensión. ipynb. Dentro de <i>Google Colab</i>, se puede descargar con esa extensión o con la extensión del lenguaje python .py
            p.mb-3 En la figura haciendo <i>click</i> en el menú horizontal superior, en la pestaña archivo, se baja hasta la pestaña descargar, allí se obtienen dos opciones: descargar en formato. ipynb de <i>Jupyter Notebook</i> y en formato .py corresponde al lenguaje <i>Python</i>.

          .col-md-6
            figure
              .titulo-sexto.color-acento-contenido
                  p.mb-0 
                    p.mb-1 <b>Figura 21</b>
                    p Forma de descarga documento
              img(src='@/assets/curso/temas/T4/img-33.png', alt='Texto que describa la imagen')
              figcaption Nota. Muestra la forma de descargar el documento jupyter note book con extesion .ipynb o .py

    .row.justify-content-around.align-items-centermb-5
      .col-md-2.mb-4.mb-md-0
        figure
          img(src='@/assets/curso/temas/T4/img-34.svg', alt='Texto que describa la imagen')
        
      .col-md-10
        p.mb-3 Para obtener más información sobre el tema, se puede acceder a los siguientes enlaces TOOMEY, D. (2018). <i>Learning Jupyter 5: Explore Interactive Computing Using Python, Java, JavaScript, R, Julia, and JupyterLab, 2nd Edition. Birmingham, UK: Packt Publishing.</i>
        a.anexo.mb-4.mb-lg-0(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p.mb-0 <b>Enlace web.</b> SENA Sistema de Bibliotecas.
            p.mb-0 <i>Learning Jupyter 5.</i>

      
        p.mb-3 TOOMEY, D. (2017) <i>Jupyter for Data Science: Your One.stop Guide to Building an Efficient Data Science Pipeline Using Jupyter. Birmingham: Packt Publishing. </i> 
        a.anexo.mb-4.mb-lg-0(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p.mb-0 <b>Enlace web.</b> SENA Sistema de Bibliotecas.
            p.mb-0 <i>Jupyter for Data Science.</i>
        p.mb-3 Que encuentran en material complementario.

    p.mb-3 Para afianzar los conocimientos en los fundamentos de estadística básica. Se invita a observar el siguiente video donde puede profundizarse en algunos conceptos. 
    .row.mt-5.mb-5
      .col-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


    p.mb-5 Para una mejor comprensión del video, el manejo de <i>Google Colab</i>, es importante descargar los 3 archivos adjuntos:

   
    .tabla-a.color-acento-botones.mb-5 
      table
        thead
          tr
            th Tema
            th Tipo de archivo
            th Nombre de archivo
            th Enlace/botón de descarga
        tbody
          tr
            td Manejo de Google Colab 
            td .PDF
            td Manejo de Google Colab.pdf
            td Celda 4
          tr
            td Créditos de consumo 
            td .CSV
            td Creditos_de_consumo_otorgados.csv
            td Celda 4
          tr
            td Graficos Ploty
            td .IPYNB
            td Estadística_básica.ipynb
            td Celda 4

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
