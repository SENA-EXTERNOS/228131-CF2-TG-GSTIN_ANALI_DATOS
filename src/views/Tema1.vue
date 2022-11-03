<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Estadística básica
    
    p.mb-5 En este componente se trabajarán términos estadísticos como: población, muestra, submuestra censo, parámetros, estadísticos, tipos de muestreo: aleatorio simple, estratificado, sistemático (Martínez, 2019), (Lind et al. 2019) y (Vladimirovna et al. 2016). 

    .row.justify-content-around.align-items-center.mb-5
      .col-lg-7.mb-4
        TabsA.color-acento-botones.mb-5
          .tarjeta.fca.p-4(titulo="Población")
            h3.mb-3 Población
            p Una población en estadística está relacionada con el número de individuos o elementos que se van a estudiar o analizar, estos individuos pueden ser personas y características.
            h3.mb-3 Ejemplos: 
            ul.lista-ul.mb-5
              li 
                i.fas.fa-angle-right
                | La población de estudiantes de la Universidad Colombiana.
              li 
                i.fas.fa-angle-right
                | La población de los beneficiarios del subsidio para el adulto mayor.
              li 
                i.fas.fa-angle-right
                | La población de estudiantes del Sena en Colombia.
          
          .tarjeta.fca.p-4(titulo="Muestra")
            h3.mb-3 Muestra y submuestra
            p.mb-3 Una muestra se obtiene de una población cuando se saca un subconjunto de esa población. Por ejemplo: de la población de estudiantes Sena, los que pertenecen al Sena Regional Antioquia.
            p Una submuestra es tomar una muestra a la muestra. Por ejemplo: de la muestra Sena Regional Antioquia tomar el Sena Antioquia del Municipio de Bello.

          .tarjeta.fca.p-4(titulo="Censo")
            h3.mb-3 El censo
            p En estadística es el conteo de individuos que conforman una población. Por ejemplo: el censo del DANE, que consiste en ir casa por casa, para contar y caracterizar a los individuos que viven en Colombia.

          .tarjeta.fca.p-4(titulo="Estadístico")
            h3.mb-3 Estadísticos
            p.mb-3 Un estadístico es un valor que se calcula a partir de los datos de una muestra. La finalidad es representar una característica de la muestra e inferir la misma característica sobre la población.
            p Ejemplo: de la población de estudiantes del Sena se obtiene una muestra de la regional Valle y se calcula el promedio de edad de los estudiantes regional Valle. Los cuartiles (Q1, Q2, Q3) de la edad de los estudiantes regional Valle.
            

          .tarjeta.fca.p-4(titulo="Parámetro")
            h3.mb-3 Parámetro
            p.mb-3 Es un valor numérico constante, el cual describe una característica de la población.
            h3.mb-3 Ejemplos: 
            p.mb-3 El promedio de edad de estudiantes del Sena, la desviación del peso de los estudiantes del Sena Regional Antioquia, la moda del sueldo mensual de los docentes del Sena Regional Cundinamarca.
            p.mb-3 Es importante tener en cuenta que el parámetro describe una característica de la población, mientras que el estadístico describe una característica de la muestra. Además, el estadístico se utiliza para aproximar un parámetro.

            
      .col-lg-5.md-5
        figure(data-aos='fade-right')
          img(src='@/assets/curso/temas/T1/img-1.png', alt='')

    h3.mb-5 Tipos de muestreo

    p.mb-5 El muestreo es un proceso o conjunto de métodos, para obtener una muestra finita de una población finita o infinita para estimar valores. A continuación, se pueden conocer los tipos de muestreo.

    .row.justify-content-around.align-items-center
      .col-3 
        figure
          img(src='@/assets/curso/temas/T1/img-2.svg')
      .col-9
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta fcb")
          .row.justify-content-around.align-items-center(titulo="Muestreo aleatorio simple")
            .col-md-10.mb-4.mb-md-0
              p.mb-5 Es una técnica de muestreo donde todos los individuos que conforman la muestra tienen la misma probabilidad de ser elegidos. Si el individuo puede ser seleccionado más de una vez estamos en presencia de un muestreo aleatorio simple con reposición, en caso contrario, sería muestreo aleatorio simple sin reposición.
              h3.mb-3 Ejemplo:
              p.mb-5 Se tiene una población de 500 personas, se quiere sacar una muestra de 50 personas. Se asigna a las 500 personas un número y, de la misma forma que un sorteo de lotería, selecciona 50 números al azar. Es así como, la totalidad de estos números al azar sería la muestra de 50 personas.

              
          .row.justify-content-around.align-items-center(titulo="Muestreo aleatorio estratificado")
            .col-md-10.mb-4.mb-md-0
              p.mb-5 Este tipo de muestreo se utiliza cuando se quiere saber la relación entre los subgrupos o estratos por alguna característica o múltiples características en común. Por ejemplo: el año cuando fue otorgado un crédito, la edad de la persona que recibe el crédito, etc.
              h3.mb-3 Ejemplo:
              p.mb-5 Se puede dividir la muestra de las personas a quienes les fue otorgado un crédito de consumo, en 7 subgrupos por edad, cada letra corresponde a un grupo: a) 18-27 años, b) 28-37 años, c) 38-47 años, d) 48-57 años, e) 58-67 años, f) 68-77 años, g) 78-88 años.

          .row.justify-content-around.align-items-center(titulo="Muestreo sistemático")
            .col-md-10.mb-4.mb-md-0
              p.mb-5 Se utiliza cuando el muestreo aleatorio simple no se puede llevar a cabo por algún motivo.
              h3.mb-3 Ejemplo:
              p.mb-5 De la población que se tiene 12152 se quiere una muestra de 500 elementos, para ello se divide el total de la población en 50 pedazos o fragmentos aleatorios de 10 individuos. Luego se selecciona un número al azar entre 1 y 10.
              p.mb-5 Elegir de forma aleatoria el primer individuo, después definir el tamaño de un intervalo para seleccionar los otros individuos que hacen parte de la muestra. Este tamaño del intervalo lo define la persona a cargo de la investigación.
              h3.mb-3 Ejemplo:
              p.mb-5 Se va a extraer una muestra de 10 personas de una muestra de 50 personas. El primer individuo seleccionado para la muestra es el número 5 con un tamaño o intervalo de 4, decidido por el investigador.


    

    .tarjeta.fcb.p-4.p-md-5.mb-5
      .row.justify-content-around.align-items-center
        .col-4.col-sm-6.col-md-2.mb-2.mb-md-0
          img(src="@/assets/curso/temas/T1/img-3.svg")

        .col-md.col-lg-8
          p.mb-4 Para reforzar los conceptos sobre este tema, se invita a leer el libro digital Estadística de Mario Triolla de 2018, que se encuentra en el material complementario y puede ser consultado en la biblioteca digital SENA.


      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
