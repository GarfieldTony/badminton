<template>
  <div class="clublist">
    <div class="container">

      <ul class="media-list">
        <li class="media" v-for="club in clubs">
          <div class="media-left">
            <a v-bind:href="club.url" target="_blank">
              <img class="media-object" v-bind:src="club.urlToImage">
            </a>
          </div>
          <div class="media-body">
            <h4 class="media-heading"><a v-bind:href="club.url" target="_blank">{{club.title}}</a></h4>
            <h5><i>address:  {{club.address}}</i></h5>
            <p>charge: {{club.charge}}</p>
          </div>
        </li>
      </ul>

    </div>
  </div>
</template>

<script>
export default {
  name: 'clublist',
  props: ['location'],
  data () {
    return {
      clubs: []
    }
  },
  methods: {
    updateLocation: function (location) {
      // this.$http.get('https://newsapi.org/v1/articles?source=' + source + '&apiKey=ced1f4a2ba034d779c669d1ad3a16e17')
      //  .then(response => {
      //    this.articles = response.data.articles;
      //  });   

      if (location==='Scarbough'){
      this.clubs= [
      { url: 'http://www.badmintonto.com/', urlToImage: '../assets/logo.png', title: 'Progress Badminton Club' , address: '291 Progress Ave', charge: '$16-18 per hour per court' },
      { url: 'http://cmdbadminton.com/#/', title: 'Ji You Badminton Club' , address: '115 Commander Blvd', charge: '$18 per hour per court' },
      { url: 'http://www.agincourtopen.com/', title: 'AOBC Sports' , address: '1510 Birchmount Rd', charge: '$16 per hour per court' }
    ];
      } 
      else if (location==='Markham'){
      this.clubs= [
      { url: 'https://subadmintonclub.com/', title: 'Su Badminton Club' , address: '170 Shields Ct, Markham', charge: '$20 per hour per court' },
      { url: 'http://thebadmintoncoaching.ca/badminton-club/', title: 'C2 Badminton Club' , address: '1300 Rodick Rd, Markham', charge: '$20 per hour per court' },
      { url: 'https://www.leesbadminton.ca/', title: 'Lees Bamdinton' , address: '80 Centurian Dr, Markham', charge: '$20 per hour per court' }, 
      { url: 'https://www.rwbadmintonclub.com/', title: 'Lees Bamdinton' , address: '7880 Woodbine Avenue,Unit D', charge: '$20 per hour per court' }, 

    ];
      }
      else if (location==='Richmond Hill'){
      this.clubs= [
      { url: 'https://www.kcbadmintonclub.com', title: 'K.C. Badminton Club' , address: '30 Vogell Rd #3, Richmond Hill Markham', charge: '$20 per hour per court' },
      { url: 'https://www.facebook.com/KCBCRH/?rf=155323281168622', title: 'Flying Dragon Badminton Club' , address: 'Unit3, 30 Vogell Rd', charge: '$20 per hour per court' },
    ];
      }
    }
  },
  created: function () {
    this.updateLocation(this.location);
  },
  watch: {
    location: function (val) {
      this.updateLocation(val);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .media-object {
    width: 128px;
    padding: 10px;
  }
  .media {
    border-top: 1px solid lightgray;
    padding-top: 20px;
  }
</style>