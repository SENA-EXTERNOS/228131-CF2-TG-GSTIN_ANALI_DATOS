<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Tipos de variables
  
    .p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-2
          img(src='@/assets/curso/temas/T2/img-1.svg')
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.mb-3 En este apartado se abordan los diferentes tipos de variables: cualitativa o categóricas, cuantitativas, entre las cuantitativas o numéricas las discretas y las continuas. Es importante seguir explorando el contenido para fortalecer el aprendizaje en los tipos de variables.
              p A continuación, se explican los diferentes tipos de variables mediante la teoría y la práctica, a través un ejemplo real, con gráficos generados dentro de <i>Google Colab</i>, utilizando el lenguaje <i>Python</i>. 


    LineaTiempoC.tarjeta.fci.color-acento-botones(text-small).mb-5
      .row(titulo="Obtener los datos")
        .col-md-6.mb-4.mb-md-0
          p Para estos gráficos se tomaron unos datos de créditos de consumo, otorgados en Medellín, obtenidos de la página de datos abiertos de la alcaldía de Medellín en formato CSV.
      
        .col-md-6
          figure
            img(src='@/assets/curso/temas/T2/img-2.png', alt='Texto que describa la imagen')
          
      .row(titulo="Importar librería")
        .col-md-6.mb-4.mb-md-0
          p Se realiza dentro de <i>Google Colab</i>, importando la librería panda, mediante <i>import</i> pandas as pd, que es la abreviación de pandas.
      
        .col-md-6
          figure
            img(src='@/assets/curso/temas/T2/img-3.png', alt='Texto que describa la imagen')

      .row(titulo="Lectura del archivo CSV")
        .col-md-6.mb-4.mb-md-0
          ul.lista-ul
            li 
              i.fas.fa-angle-right
              | Para leer el archivo se utiliza pd.read_csv(‘nombre del archivo’, sep=’;’). En este caso el nombre del archivo es créditos_de_consumo_otorgados.csv’ y está separado por;
            li 
              i.fas.fa-angle-right
              | Un archivo CSV (valores separados por comas). Es un archivo de texto que tiene un formato específico, que permite guardar los datos en un formato de tabla estructurada.
            li 
              i.fas.fa-angle-right
              | Un archivo CSV puede tener diferentes separadores, distintos a la coma (,) como:  
            li 
              i.fas.fa-angle-right
              | Punto y coma (;), barra  oblicua  ( / ), guión del medio (-), guion de piso (_), etc.
      
        .col-md-6
          figure
            img(src='@/assets/curso/temas/T2/img-4.png', alt='Texto que describa la imagen')

      .row(titulo="Obtener las primeras cinco filas")
        .col-md-6.mb-4.mb-md-0
          p La sentencia df.head (5) nos permite ver las primeras 5 filas del <i>data frame</i>, en este caso se llamó df puede tener cualquier nombre.
      
        .col-md-6
          figure
            img(src='@/assets/curso/temas/T2/img-5.png', alt='Texto que describa la imagen')
    
    p.mb-5 Un <i>data frame</i> es una estructura de datos con dos dimensiones (filas y columnas), se pueden guardar datos de distintos tipos (caracteres, enteros, valores de punto flotante, etc.) en columnas. Es similar a una hoja de cálculo o una tabla de SQL. Continuando con el ejemplo de créditos otorgados, se deben observar los gráficos que ilustran las operaciones realizadas sobre la data.

    .tarjeta.tarjeta--azul.p-4.mb-5
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0
            p.mb-3 El data frame se observa en el (Figura 1). Contiene las primeras filas del data frame, con un total de 12 columnas. 
            p.mb-3 Las columnas son:
            p.mb-0 ['edad', 'sexo', 'cabeza_de_hogar', 'caracterizacion_ciudadano', 'estrato', 
            p.mb-0 'barrio_vereda', 'comuna', 'zona', 
            p.mb-0 'fecha_de_beneficio_dia','fecha_de_beneficio_mes', 
            p.mb-3 'fecha_de_beneficio_año', 'monto_prestado'.

            h4.mb-2 ¡Importante!
            p.mb-3 Estos nombres los colocó la persona que subió el archivo en formato CSV a (Metada alcaldía de Medellín, 2022). Generalmente hay datos faltantes, los nombres y valores de las columnas tienen errores de digitación, ortográficos, etc. Por esto, <b>siempre se debe hacer una limpieza y depuración de los datos.</b>
                   
            
          .col-md-6
            figure
              .titulo-sexto.color-acento-contenido
                p.mb-0 
                  p.mb-1 <b>Figura 1</b>
                  p <i>Créditos de consumo</i>
              img(src='@/assets/curso/temas/T2/img-6.png', alt='Texto que describa la imagen')
              figcaption <b>Nota.</b> Muestra las columnas de los créditos de consumo otorgados. 

        .row
          .col-md-6.mb-4.mb-md-0
            p Los datos faltantes tienen diferentes tratamientos dependiendo de: los datos, la cantidad de valores faltantes y el tipo de problema a resolver. Se debe utilizar un criterio para tratarlos. Por ejemplo, sustituirlos por el promedio de la columna, sustituirlo por el valor de la columna que está por encima o por debajo (dependiendo de la cantidad de datos faltantes se debe analizar con detalle), sustituirlo por el valor que más se repite (moda), sustituirlo por la mediana; si son pocos se podría eliminar previo a un análisis riguroso.
        
          .col-md-6
            figure
              .titulo-sexto.color-acento-contenido
                p.mb-0 
                  p.mb-1 <b>Figura 1</b>
                  p <i>Créditos de consumo</i>
              img(src='@/assets/curso/temas/T2/img-6.png', alt='Texto que describa la imagen')
              figcaption <b>Nota.</b> Muestra las columnas de los créditos de consumo otorgados. 
            
        .row
          .col-md-6.mb-4.mb-md-0
            p Las columnas del archivo créditos de consumo, tienen diferentes tipos de datos. 
        
          .col-md-6
            figure
              .titulo-sexto.color-acento-contenido
                p.mb-0 
                  p.mb-1 <b>Figura 2</b>
                  p <i>Tipos de datos</i>
              img(src='@/assets/curso/temas/T2/img-7.png', alt='Texto que describa la imagen')
              figcaption <b>Nota.</b> Muestra información sobre los tipos de datos de las columnas.

    p.mb-5 Hasta ahora se han estudiado los conceptos básicos de estadística y los tipos de datos. A continuación, se abordan las escalas de medición.



</template>

<script>
export default {
  name: 'Tema2',
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
