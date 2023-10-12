export default {
  global: {
    componenteFormativo: 'Estadística básica',
    descripcionCurso:
      'Este componente formativo, aborda generalidades y aspectos claves de la estadística básica. Se utilizan conceptos fundamentales como: población, muestra, submuestra, censo, tipos de muestreo, variables cualitativas, variables cuantitativas. Con el estudio de este componente, el aprendiz se afianzará en todo lo relacionado con datos, análisis estadístico, diseño de instrumentos, recolección de datos y verificación de la calidad.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Estadística básica',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Tipos de variables',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Escalas de medición',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo:
          'Diseño de instrumentos, recolección de datos, verificación de la calidad	',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Estadística básica',
      referencia:
        'Aguilar, J. (2021). <em>Estadística Descriptiva regresión y probabilidades con aplicaciones</em>. Ediciones de la U.',
      tipo: 'Libro digital',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=15156&pg=202',
    },
    {
      tema:
        'Diseño de instrumentos, recolección de datos, verificación de la calidad',
      referencia:
        'Moreno, A. & Corcoles, S. (2020). <em>Python práctico</em>. Ediciones de la U.',
      tipo: 'Libro digital',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=10285&pg=1',
    },
    {
      tema: 'Estadística básica',
      referencia:
        'Triolla, M. (2018). <em>Estadística</em> (12 ed.) Pearson Education.',
      tipo: 'Libro digital',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=7386&pg=149',
    },
    {
      tema:
        'Diseño de instrumentos, recolección de datos, verificación de la calidad',
      referencia:
        'Toomey, D. (2018). <em>Learning Jupyter 5: Explore Interactive Computing Using Python, Java, JavaScript, R, Julia, and JupyterLab</em> (2nd Edition). Packt Publishing.',
      tipo: 'Libro digital',
      link:
        'https://search-ebscohost-com.bdigital.sena.edu.co/login.aspx?direct=true&db=e000xww&AN=1881491&lang=es&site=ehost-live',
    },
    {
      tema:
        'Diseño de instrumentos, recolección de datos, verificación de la calidad',
      referencia:
        'Toomey, D. (2017) <em>Jupyter for Data Science: Your One-stop Guide to Building an Efficient Data Science Pipeline Using Jupyter</em>. Packt Publishing.',
      tipo: 'Libro digital',
      link:
        'https://search-ebscohost-com.bdigital.sena.edu.co/login.aspx?direct=true&db=e000xww&AN=1637911&lang=es&site=ehost-live.',
    },
  ],
  glosario: [
    {
      termino: 'Censo',
      significado:
        'Un conjunto de actividades destinadas a recoger, recopilar, el padrón o lista de la población de una nación o pueblo en un momento determinado, la información demográfica social y económica, para luego evaluar, analizar y publicar o divulgar.',
    },
    {
      termino: 'Continua',
      significado:
        'Una variable continua es aquella que puede tomar un número infinito de valores entre dos valores cualesquiera de una característica. La altura de las 5 personas: 1.85, 1.89, 1.93, 1.59, 1.65. En la práctica medimos la altura con dos decimales, pero también se podría dar con tres decimales o más.',
    },
    {
      termino: 'Cualitativa',
      significado:
        'Son aquellas en las que los resultados posibles no son valores numéricos. Por ejemplo: color del pelo, tipo de ropa preferida, lugar de veraneo, etc.',
    },
    {
      termino: 'Cuantitativa',
      significado:
        'Se trata de características cuyas variaciones pueden ser expresadas de forma numérica. Por ejemplo: edad, peso, estatura, número de hijos, años de servicio, etc.',
    },
    {
      termino: 'Cuartiles',
      significado:
        'son 4, divide un conjunto de datos ordenados en cuatro partes iguales. Cuartil 1 (Q1) 25 %, la mediana es el Cuartil 2 (Q2) 50 %, Cuartil 3 (Q3) 75 %, Cuartil 4 (Q4) 100 %; se trabaja principalmente con los Q1, Q2, Q3.',
    },
    {
      termino: 'Dato atípico',
      significado: 'Es un valor mayor a 1.5 veces el rango intercuartil.',
    },
    {
      termino: 'Desviación estándar',
      significado:
        'Mide la dispersión de una distribución de datos. Entre más dispersa está una distribución de datos, más grande es su desviación estándar.',
    },
    {
      termino: 'Discreta',
      significado:
        'Una variable es discreta cuando no puede tomar ningún valor entre dos consecutivos, y que es continua cuando puede tomar cualquier valor dentro de un intervalo. Ejemplos de variable discreta: número de empleados de una fábrica; número de hijos; número de cuentas en un banco.',
    },
    {
      termino: 'Escala Cronológica',
      significado:
        'El orden cronológico de los sucesos es la ubicación de estos en una línea temporal.',
    },
    {
      termino: 'Escala nominal',
      significado:
        'Es una escala de medición en la cual los números sirven como “etiquetas” solamente para identificar o clasificar un objeto. Una escala de medición nominal normalmente trata sólo con variables no numéricas (no cuantitativas).',
    },
    {
      termino: 'Escala ordinal',
      significado:
        'Una escala ordinal u “ordenada” permite evaluar la actitud de un encuestado con respecto a un tema utilizando, un conjunto de respuestas ordenadas. Por ejemplo, las respuestas pueden incluir: “Muy satisfecho”, “Satisfecho”, “Insatisfecho” y “Muy insatisfecho”.',
    },
    {
      termino: 'Media',
      significado:
        'Resultado que se obtiene al dividir la suma de varias cantidades por el número de sumandos.',
    },
    {
      termino: 'Muestreo',
      significado:
        'Selección de un conjunto de personas o cosas, que se consideran representativos del grupo al que pertenecen, con la finalidad de estudiar o determinar las características del grupo.',
    },
    {
      termino: 'Rango intercuartil',
      significado:
        'Es una medida de dispersión. Se obtiene restando el cuartil 3 (Q3) menos el cuartil 1(Q1); Q3-Q1 en ese rango está el 50 % de los datos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Altair. (2022). <em>Vega-Altair: Visualización declarativa en Python</em>.',
      link: 'https://altair-viz.github.io/',
    },
    {
      referencia:
        '<em>Google Colaboratory</em>. (s. f.). <em>Te damos la bienvenida a Colab</em.',
      link: 'https://colab.research.google.com/?hl=es',
    },
    {
      referencia:
        'Infobae. (022). <em>Encuesta Invamer: el 34 % de los colombianos considera que el desempleo y la economía son los mayores problemas del país</em>.',
      link: 'https://acortar.link/UzYzDT',
    },
    {
      referencia:
        'Lind, D. & Marchal, W. (2019). <em>Estadística Aplicada a los negocios y la economía</em> (17 ed.). Mc Graw Hill.',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=9246&pg=315',
    },
    {
      referencia:
        'Matplotlib. (2022). <em>Matplotlib: visualización con Python</em>.',
      link: 'https://matplotlib.org/',
    },
    {
      referencia:
        'Martínez, C. (2019). <em>Estadística y muestreo</em> (14 ed.). Ecoe ediciones.',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=9278&pg=387',
    },
    {
      referencia:
        'Martínez, C. (2019). <em>Estadística básica aplicada</em> (5ta ed.). Ecoe ediciones.',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=8975&pg=82',
    },
    {
      referencia: 'Metadata Alcaldía de Medellín. (2022).',
      link: 'https://acortar.link/zGU2gK',
    },
    {
      referencia:
        'Seaborn. (2022). <em>Seaborn: visualización de datos estadísticos</em>.',
      link: 'https://seaborn.pydata.org/',
    },
    {
      referencia:
        'Plotly. (2022). <em>Plotly Biblioteca de gráficos de código abierto para Python.</em>',
      link: 'https://plotly.com/python/',
    },
    {
      referencia: 'Questionpro. (2022). <em>Calculadora de Muestras</em>.',
      link: 'https://www.questionpro.com/es/calculadora-de-muestra.html',
    },
    {
      referencia:
        'Vladimirovna, O. & Gutiérrez, E. (2016). <em>Estadística inferencial 1 para ingeniería y ciencias</em>. Grupo Editorial Patria. Recuperado de:',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/40474?page=69',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
