<template>
  <div class="locationselection">
    <div>
      <div class="jumbotron">
        <h2><span class="glyphicon glyphicon-list-alt"></span>&nbsp;Badminton Club List</h2>
        <h4>Select Location</h4>
        <select class="form-control" v-on:change="locationChanged">
          <option value="">Please select location ...</option>
          <option v-for="location in locations" v-bind:value="location.id">{{location.name}}</option>
        </select>
        <!-- <div v-if="source">
          <h6>{{source.description}}</h6>
          <a v-bind:href="source.url" class="btn btn-primary" target="_blank">Go To {{source.name}} Website</a>
        </div> -->
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'locationselection',
  data () {
    return {
      // sources: [],
      locations: [
      { id: 'Markham', name: 'Markham' },
      { id: 'Richmond Hill', name: 'Richmond Hill' },
      { id: 'Scarbough', name: 'Scarbough' }
    ],
      location: ''
    }
  },
  methods: {
    locationChanged: function(e) {
     for (var i=0; i<this.location.length; i++) {
       if (this.locations[i].id == e.target.value) {
         this.location = this.locations[i];
       }
     }
     this.$emit('locationChanged', e.target.value);
    }
  },
  // created: function () {
  //   this.$http.get('https://newsapi.org/v1/sources?language=en')
  //     .then(response => {
  //       this.sources = response.data.sources;
  //     });
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>