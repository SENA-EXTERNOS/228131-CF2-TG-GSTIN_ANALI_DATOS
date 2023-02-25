<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
      
    .p-3.mb-5  
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-2
          img(src='@/assets/curso/temas/introduccion/img-1.svg')
        .col
          .row.justify-content-between.align-items-center
            .bloque-texto-q.color-acento-contenido.p-4
              .bloque-texto-b__texto.d-flex.flex-column
                p.mb-3 Estimado aprendiz, bienvenido a este componente formativo, donde se profundizan los elementos más importantes para la comprensión, asimilación y aplicación de la estadística básica, en la dinámica de las empresas y organizaciones, en general.
                p Conviértase en experto y aplique los conceptos fundamentales que configuran la temática, identifique los elementos constitutivos de la misma, aprópiese del concepto y de las acciones de medición, recolección de información, diseño de instrumentos para recolectarla, verificación de la calidad, entre otros.
                p En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.

    .row.mt-5.mb-5
      .col-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
