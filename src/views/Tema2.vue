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
