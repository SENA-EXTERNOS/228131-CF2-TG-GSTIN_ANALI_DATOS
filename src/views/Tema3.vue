<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Escalas de medición 

    .p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-2
          img(src='@/assets/curso/temas/T3/img-1.svg')
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.mb-3 Uno de los elementos básicos en la definición de una variable es el tipo de escala utilizada para medirla. En función de la escala seleccionada, se decide sobre su codificación, tratamiento informático y estadístico.
              p.mb-3 Hay varios tipos de escalas de medición, que a continuación se desarrollan y ejemplifican (Martinez,2019), (Lind et al. 2019), (Vladimirovna et al. 2016).


    .tarjeta.fcd.p-4.mb-5
      SlyderA(tipo="b").p-4
        .row
          .col-md-6.mb-4.mb-md-0
            h3.mb-3 Categóricos
            p.mb-3 #[i object y booleano] (booleanos o lógicos, verdadero o falso, #[i true, false]).
            h3.mb-3 Numéricos
            p.mb-3 #[i int64], significa valores enteros o discretos, representa un entero de 64 bits.
            h3.mb-3 Numéricos
            p.mb-3 #[i float64] (continuos), significa que toman valores reales de 64 bits.
            p.mb-3 En 64 bits, el rango es de -9.223.372.036.854.775.808 hasta 9.223.372.036.854.775.807.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/T3/img-2.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h3.mb-5 Edad es una variable numérica 
            p.mb-3 En tanto variable numérica, puede ser entera o discreta, tomando, por ejemplo, valores como: 70, 55, 53, 45, 28, etc.
            p.mb-3 #[i dtype:int] 64, significa el tipo de dato, en este caso toma valores enteros de 64 bits.
            p.mb-3 En la figura se observa la edad, con su frecuencia en orden descendente; es decir, desde la mayor frecuencia en edad y, en este caso, para 70 años tiene una frecuencia de 514 individuos o datos. Le sigue una edad de 55 años con una frecuencia de 290 individuos o datos, y así sucesivamente.


          .col-md-6
            figure
              .titulo-sexto.color-acento-contenido
                p.mb-0 Frecuencia de edades en orden descendente.

              img(src='@/assets/curso/temas/T3/img-3.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h3.mb-3 Categórico ordinal
            p.mb-3 Valores que representan categorías con alguna clasificación intrínseca, tienen características de orden. Por ejemplo: malo, bueno, excelente.
            h3.mb-3 Categórico nominal 
            p.mb-3 Representan categorías sin clasificación intrínseca. Por ejemplo, las marcas de zapatos, género, raza, etnia.
            p La edad (en años) puede ser tratada así:
            ul.lista-ul
              li 
                i.fas.fa-angle-right
                | Nivel ordinal: (niño/adolescente/joven).
              li 
                i.fas.fa-angle-right
                | Nominal: (adulto/no adulto). 

          .col-md-6
            figure
              img(src='@/assets/curso/temas/T3/img-4.png', alt='Texto que describa la imagen').p-1

        .row
          .col-md-6.mb-4.mb-md-0
            h3.mb-3 Caracterización del ciudadano: 
            p.mb-3 Es un dato categórico nominal, toma valores como: otro, independiente, emprendedor, empresario, etc.
            p.mb-3 En la figura se observa la caracterización del ciudadano con su frecuencia en orden descendente. Es decir, desde la mayor frecuencia la caracterización del ciudadano y, en este caso, para otros, tiene una frecuencia de 3525 individuos o datos, le sigue independiente con una frecuencia de 2885 individuos o datos, y así sucesivamente.

          .col-md-6
            figure
              .titulo-sexto.color-acento-contenido
                p.mb-0 Caracterización del ciudadano con frecuencia en orden descendente.

              img(src='@/assets/curso/temas/T3/img-5.png', alt='Texto que describa la imagen')
              

        .row
          .col-md-6.mb-4.mb-md-0
            h3.mb-3 Cabeza de hogar
            p.mb-3 Es un dato categórico nominal, toma los valores: no, sí, aporta económicamente, 0, solidaria.
            p.mb-3 En la figura se observa la columna cabeza de hogar con su frecuencia en orden descendente. Es decir, desde la mayor frecuencia cabeza de hogar y, en este caso, para el valor “no” tiene una frecuencia de 6413 individuos o datos, le sigue el valor “sí” con una frecuencia de 3987 individuos o datos, y así sucesivamente.

          .col-md-6
            figure
              .titulo-sexto.color-acento-contenido
                p.mb-0 Frecuencias cabeza de hogar.
              img(src='@/assets/curso/temas/T3/img-6.png', alt='Texto que describa la imagen')
              

        .row
          .col-md-6.mb-4.mb-md-0
            h3.mb-3 La columna sexo
            p.mb-3 Correspondiente al género, es una variable categórica nominal, toma los valores: femenino y masculino.
            p.mb-3 En la figura se observa que, para el valor femenino, se tiene una frecuencia de 8069, casi el doble, del valor masculino, que tiene una frecuencia de 4083.

          .col-md-6
            figure
              .titulo-sexto.color-acento-contenido
                p.mb-0 Valores de columnas nombre y sexo, correspondiente al género.
              img(src='@/assets/curso/temas/T3/img-7.png', alt='Texto que describa la imagen')
              

        .row
          .col-md-6.mb-4.mb-md-0
            h3.mb-3 La fecha del beneficio
            p.mb-3 La fecha de beneficio del mes es un valor numérico entero o discreto, toma valores 1, 2, 3,12 correspondientes al número del mes: 1 es enero, 2 es febrero y así sucesivamente.
            p.mb-3 En la figura se observa la columna, fecha de beneficio mes, con su frecuencia en orden descendente. Es decir, desde la mayor frecuencia en la columna fecha de beneficio mes; en este caso, para el mes 5 (mayo), tiene una frecuencia de 2490 individuos o datos y les fueron otorgados el crédito de consumo; le sigue el valor para el mes 6 (junio) con una frecuencia de 1950 individuos o datos y así sucesivamente.

          .col-md-6
            figure
              .titulo-sexto.color-acento-contenido
                p.mb-0 Mes de beneficio del préstamo, con frecuencia descendente.

              img(src='@/assets/curso/temas/T3/img-8.png', alt='Texto que describa la imagen').p-1
              

        .row
          .col-md-7.mb-4.mb-md-0
            h3.mb-3 Otras escalas de medición son la dicotómica y la cronológica
            ul.lista-ul
              li 
                i.fas.fa-angle-right
                | #[b La escala de medición dicotómica]: consta de dos categorías excluyentes.
            p #[b Ejemplo]: si el paciente posee una enfermedad, las respuestas son 2: sí o no.

            ul.lista-ul
              li 
                i.fas.fa-angle-right
                | #[b La escala de medición cronológica]: los sucesos se ubican en una línea de tiempo. 
            p #[b Ejemplo]: las acciones de Ecopetrol en la bolsa de valores de New York, durante el mes de octubre 2022.            


          .col-md-5
            figure
              img(src='@/assets/curso/temas/T3/img-9.png', alt='Texto que describa la imagen').p-1

        .row
          .col-md-6.mb-4.mb-md-0
            h3.mb-3 Últimos datos de la población
            p.mb-3 Se tiene una población de 12152 con 12 columnas.
            p.mb-3 En la figura se pueden observar las últimas 5 filas del data frame con sus respectivos índices: 12147, 12148, 12419, 12150, 12151.
            

          .col-md-6
            .titulo-sexto.color-acento-contenido
              p.mb-0 Últimos datos de la población.
            figure
              img(src='@/assets/curso/temas/T3/img-10.png', alt='Texto que describa la imagen')
              

        .row
          .col-md-6.mb-4.mb-md-0
            h3.mb-3 Muestra aleatoria
            p.mb-3 Se puede tomar una muestra aleatoria de un tamaño predefinido. Por ejemplo: 15 elementos del total de la población de 12152.
            p.mb-3 En la figura se pueden observar, los 15 elementos de la muestra tomados de forma aleatoria, con sus respectivos índices: 1104, 5844, 517, 10560, 11598, 1406, etc.

          .col-md-6
            figure
              .titulo-sexto.color-acento-contenido
                p.mb-0 Muestra aleatoria de 15 elementos de la población de 12152.

              img(src='@/assets/curso/temas/T3/img-11.png', alt='Texto que describa la imagen')
                

    p.mb-5 A continuación, analice la muestra aleatoria de un tamaño predefinido de 15 elementos:


    ImagenInfografica.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/T3/img-12.png', alt='Texto que describa la imagen')

      .tarjeta.color-acento-botones.p-3(x="35%" y="30%" numero="P1")
        p Muestra aleatoria de la población de un tamaño de 15 elementos.

      .tarjeta.color-acento-botones.p-3(x="12%" y="53%" numero="P2")
        p Cada uno de los 15 elementos escogidos al azar, enumerados por los índices 1104, 5844 ,517 de una población de 12152 individuos o elementos.

    p.mb-5 Ahora, observe la muestra aleatoria de un 10 % de la población:


    ImagenInfografica.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/T3/img-13.png', alt='Texto que describa la imagen')

      .tarjeta.color-acento-botones.p-3(x="45%" y="50%" numero="P1")
        p Muestra aleatoria de un 10% de la población.

      .tarjeta.color-acento-botones.p-3(x="12%" y="69%" numero="P2")
        p Cada uno de los 12152 elementos escogidos al azar, correspondientes al 10 % de la población de 12150. Enumerados por los índices 4172, 11471, 10863.

    
    h2.mb-5 Muestreo aleatorio estratificado

    p.mb-5 Este tipo de muestreo se utiliza cuando se quiere saber la relación entre los subgrupos o estratos, por alguna característica o múltiples características en común. Por ejemplo: el año en que fue otorgado el crédito, la edad de la persona que recibe el crédito, etc.

    .row
      .col-lg-6
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/T3/img-14.png' alt='AvatarTop')
          .tarjeta.fce
            .p-4
              p De esta población de 12152, podemos dividirlo por estratos según el año 2017, 2018, 2019. La característica o estrato sería el año del préstamo. Tomando un subgrupo o subpoblación por año. Decidir el tamaño de la muestra de acuerdo a cada estrato.

      .col-lg-6
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/T3/img-15.png' alt='AvatarTop')
          .tarjeta.fce
            .p-4
              p Se debe realizar el muestreo aleatorio en cada estrato. Por ejemplo, tomar los que fueron beneficiados en el 2018, que son 8765 y, de allí tomar la muestra aleatoria con un tamaño representativo determinado.
              p Analice la siguiente tabla: 

    
    .row.justify-content-center.mt-5
      .col-7.offset-1  
        .titulo-sexto.color-acento-contenido
          h4.mb-0 Tabla 1
          i.mb-1 Años vs beneficiarios del crédito
        .tabla-a.color-acento-contenido.mb-5 
          table
            
            thead
              tr
                th Años de los beneficiarios del crédito
                th Número de beneficiarios del crédito
            tbody.text-center
              tr.color-tablas
                td 2017
                td 1921
              tr
                td 2018
                td 8765
              tr.color-tablas
                td 2019
                td 1466
    
    
      

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
