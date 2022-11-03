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
                p.mb-3 En este componente se aprenderán las bases de la estadística básica y se utilizarán conceptos fundamentales como población, muestra, submuestra, censo, tipos de muestreo, estadísticos, variables cualitativas y cuantitativas; todo, en un conjunto de datos con la finalidad de obtener la fundamentación teórica para la compresión del análisis estadístico. Antes de continuar, se sugiere ver el video introductorio para ampliar el contexto de aprendizaje. 
                p <b>¡Éxitos en su aprendizaje!</b>

    .row.mt-5.mb-5
      .col-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    h3.mb-3 Desarrollo de contenidos
    p Se invita a desarrollar todo el contenido, al igual que a realizar las actividades de aprendizaje; de esa forma, al finalizar el estudio de desarrollo temático, se habrán alcanzado las competencias en estadística básica y se estará en capacidad de recopilar datos de acuerdo con la metodología estadística.
    
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
