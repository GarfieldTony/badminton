<template>
<div class="budgetselection">
  <div class="jumbotron">
  <v-layout row wrap>
        <h3>
          <span  v-if="this.budget.value"><span v-if="this.from"><span v-if="this.to">
            <span  class="glyphicon glyphicon-heart"></span>
               Bear wiht me, you vocation from {{ this.from }} to {{this.to}} within {{this.budget.text}} is being taken care of ...
          </span></span></span>
        </h3>
  </v-layout>
  <v-layout row wrap>
    <v-flex xs12 sm6>
    <h4>I want to get away From</h4>
    </v-flex>
    <v-flex xs12 sm6>
    <h4>To</h4>
    </v-flex>
  </v-layout>
  <v-layout row wrap>
    <v-flex xs12 sm6>
      <v-date-picker v-model="from" color="green lighten-1"></v-date-picker>
    </v-flex>
    <v-flex xs12 sm6>
      <v-date-picker v-model="to" color="red lighten-1"></v-date-picker>
    </v-flex>
  </v-layout>
  </div>
<div class="jumbotron">
  <v-layout row wrap>
        <!-- <v-flex xs12 sm6>
        <h4>I am in ... </h4>
        <select class="form-control">
          <option value="1000">Toronto</option>
          <option value="800">Montrol</option>
        </select>
        </v-flex> -->
        <v-flex xs12 sm6>
        <h4>I have ... </h4>
        <select class="form-control" v-on:change="budgetChanged">
          <option value="">Please select budget ...</option>
          <option v-for="budget in budgets" v-bind:value="budget.value">{{budget.text}}</option>
        </select>
        </v-flex>
  </v-layout>
</div>
  <!-- <v-layout row wrap>
    <v-flex xs12 sm6>
    <v-btn small color="green" v-on:click="searchFlight">Try my luck</v-btn>
    </v-flex>
  </v-layout> -->
</div>
</template>

<script>
  export default {
  name: 'budgetselection',
  data () {
    return {
      budgets: [
      { text: '$1000', value: 1000 },
      { text: '$500', value: 500 },
      { text: '$800', value: 800 }
    ],
      budget: '',
      from: null,
      to: null
    }
  },
  methods: {
    budgetChanged: function(e) {
     for (var i=0; i<this.budgets.length; i++) {
       if (this.budgets[i].value == e.target.value) {
         this.budget = this.budgets[i];
       }
     }
     console.log(this.budget.value);
     this.$emit('budgetChanged', e.target.value);
    }

  }

  }
</script>