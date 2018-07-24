<template>
<div class="jumbotron">
    <v-layout row wrap>
        <!-- <v-flex xs12 sm6>
        <h4>I am in ... </h4>
        <select class="form-control">
          <option value="1000">Toronto</option>
          <option value="800">Montrol</option>
          <!-- <option v-for="source in sources" v-bind:value="source.id">{{source.name}}</option> -->
        </select>
        </v-flex> -->
        <v-flex xs12 sm6>
        <h4>I have ... </h4>
        <select class="form-control" v-on:change="sourceChanged">
          <option value="1000">$1000</option>
          <option value="800">$800</option>
          <option value="500">$500</option>
          <option value="2000">$2000</option>
          <!-- <option v-for="source in sources" v-bind:value="source.id">{{source.name}}</option> -->
        </select>
        </v-flex>
  </v-layout>
</div>
</template>

<script>
  export default {
    data () {
      return {
        picker: null,
        picker2: null
      }
    }
  }
</script>