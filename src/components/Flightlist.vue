<template>
  <div class="flightlist">
    <div class="container">

      <ul class="media-list">
        <li class="media" v-for="flight in flights">
          <div class="media-left">
            <a v-bind:href="flight.url" target="_blank">
              <img class="media-object" v-bind:src="flight.urlToImage">
            </a>
          </div>
          <div class="media-body">
            <h4 class="media-heading"><a v-bind:href="flight.url" target="_blank">{{flight.title}}</a></h4>
            <h5><i>by {{flight.author}}</i></h5>
            <p>{{flight.description}}</p>
          </div>
        </li>
      </ul>

    </div>
  </div>
</template>

<script>
export default {
  name: 'flightlist',
  props: ['budget'],
  data () {
    return {
      flights: []
    }
  },
  methods: {
    updateSource: function (budget) {
      this.$http.get('https://newsapi.org/v1/articles?source=' + source + '&apiKey=ced1f4a2ba034d779c669d1ad3a16e17')
       .then(response => {
         this.articles = response.data.articles;
       });   
    }
  },
  created: function () {
    this.updateBudget(this.budget);
  },
  watch: {
    budget: function (val) {
      this.updateBudget(val);
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