const { createApp } = Vue;

createApp({
  data() {
    return {
      // dischi: [
      //   {
      //     img: './src/img/Rosso relativo.jpg',
      //     name: 'Rosso Relativo',
      //     autore: 'Tiziano Ferro',
      //     anno: '2001',
      //   },
      //   {
      //     img: './src/img/amore.jpg',
      //     name: "L'amore è una cosa semplice",
      //     autore: 'Tiziano Ferro',
      //     anno: '2011',
      //   },
      //   {
      //     img: './src/img/vado al massimo.jpg',
      //     name: 'Vado al massimo',
      //     autore: 'Vasco Rossi',
      //     anno: '1982',
      //   },
      //   {
      //     img: './src/img/peter.jpg',
      //     name: 'Peter Pan',
      //     autore: 'Ultimo',
      //     anno: '2018',
      //   },
      //   {
      //     img: './src/img/made.jpg',
      //     name: 'Made in Italy',
      //     autore: 'Luciano Ligabue',
      //     anno: '2016',
      //   },
      //   {
      //     img: './src/img/Solo.jpg',
      //     name: 'Solo',
      //     autore: 'Ultimo',
      //     anno: '2021',
      //   },
      // ],
      dischi: [],
    };
  },
  methods: {
    getDischi() {
      axios.get('server.php').then((response) => {
        console.log({ response });
        this.dischi = response.data;
      });
    },
  },
  created() {
    this.getDischi();
  },
}).mount('#app');
