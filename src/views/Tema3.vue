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
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0
            p.mb-3 Texto

          .col-md-6
            figure
              .titulo-sexto.color-acento-botones
                p.mb-0 
                  p.mb-1 <b>Figura #</b>
                  p Titulo figura
              img(src='@/assets/curso/temas/T3/img-2.png', alt='Texto que describa la imagen')
              figcaption <b>Nota.</b> Muestra las columnas de los créditos de consumo otorgados. 

        .row
          .col-md-6.mb-4.mb-md-0
            p.mb-3 Texto

          .col-md-6
            figure
              .titulo-sexto.color-acento-botones
                p.mb-0 
                  p.mb-1 <b>Figura #</b>
                  p Titulo figura
              img(src='@/assets/curso/temas/T3/img-3.png', alt='Texto que describa la imagen')
              figcaption <b>Nota.</b> Muestra las columnas de los créditos de consumo otorgados.

        .row
          .col-md-6.mb-4.mb-md-0
            p.mb-3 Texto

          .col-md-6
            figure
              .titulo-sexto.color-acento-botones
                p.mb-0 
                  p.mb-1 <b>Figura #</b>
                  p Titulo figura
              img(src='@/assets/curso/temas/T3/img-4.png', alt='Texto que describa la imagen')
              figcaption <b>Nota.</b> Muestra las columnas de los créditos de consumo otorgados. 

        .row
          .col-md-6.mb-4.mb-md-0
            p.mb-3 Texto

          .col-md-6
            figure
              .titulo-sexto.color-acento-botones
                p.mb-0 
                  p.mb-1 <b>Figura #</b>
                  p Titulo figura
              img(src='@/assets/curso/temas/T3/img-5.png', alt='Texto que describa la imagen')
              figcaption <b>Nota.</b> Muestra las columnas de los créditos de consumo otorgados. 

        .row
          .col-md-6.mb-4.mb-md-0
            p.mb-3 Texto

          .col-md-6
            figure
              .titulo-sexto.color-acento-botones
                p.mb-0 
                  p.mb-1 <b>Figura #</b>
                  p Titulo figura
              img(src='@/assets/curso/temas/T3/img-6.png', alt='Texto que describa la imagen')
              figcaption <b>Nota.</b> Muestra las columnas de los créditos de consumo otorgados. 

        .row
          .col-md-6.mb-4.mb-md-0
            p.mb-3 Texto

          .col-md-6
            figure
              .titulo-sexto.color-acento-botones
                p.mb-0 
                  p.mb-1 <b>Figura #</b>
                  p Titulo figura
              img(src='@/assets/curso/temas/T3/img-7.png', alt='Texto que describa la imagen')
              figcaption <b>Nota.</b> Muestra las columnas de los créditos de consumo otorgados. 

        .row
          .col-md-6.mb-4.mb-md-0
            p.mb-3 Texto

          .col-md-6
            figure
              .titulo-sexto.color-acento-botones
                p.mb-0 
                  p.mb-1 <b>Figura #</b>
                  p Titulo figura
              img(src='@/assets/curso/temas/T3/img-8.png', alt='Texto que describa la imagen')
              figcaption <b>Nota.</b> Muestra las columnas de los créditos de consumo otorgados. 

        .row
          .col-md-6.mb-4.mb-md-0
            p.mb-3 Texto

          .col-md-6
            figure
              .titulo-sexto.color-acento-botones
                p.mb-0 
                  p.mb-1 <b>Figura #</b>
                  p Titulo figura
              img(src='@/assets/curso/temas/T3/img-9.png', alt='Texto que describa la imagen')
              figcaption <b>Nota.</b> Muestra las columnas de los créditos de consumo otorgados. 

        .row
          .col-md-6.mb-4.mb-md-0
            p.mb-3 Texto

          .col-md-6
            figure
              .titulo-sexto.color-acento-botones
                p.mb-0 
                  p.mb-1 <b>Figura #</b>
                  p Titulo figura
              img(src='@/assets/curso/temas/T3/img-10.png', alt='Texto que describa la imagen')
              figcaption <b>Nota.</b> Muestra las columnas de los créditos de consumo otorgados.

        .row
          .col-md-6.mb-4.mb-md-0
            p.mb-3 Texto

          .col-md-6
            figure
              .titulo-sexto.color-acento-botones
                p.mb-0 
                  p.mb-1 <b>Figura #</b>
                  p Titulo figura
              img(src='@/assets/curso/temas/T3/img-11.png', alt='Texto que describa la imagen')
              figcaption <b>Nota.</b> Muestra las columnas de los créditos de consumo otorgados.  



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
