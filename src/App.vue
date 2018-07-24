<template>
  <div class="container" id="app">
    
    <LocationSelection v-on:locationChanged="locationChanged"></LocationSelection>
    <Clublist v-bind:location="location"></Clublist>
    <!-- <BudgetSelection v-on:budgetChanged="budgetChanged"></BudgetSelection> -->
    <!-- <Budget></Budget> -->
    
    <div class="footer">
      <p>&copy <a href="https://www.linkedin.com/in/wu-jionghui-28844459/" target="_blank">Wu Jionghui</a> | <a href="https://www.linkedin.com/in/wu-jionghui-28844459/" target="_blank">Imprint</a></p>
    </div>
  </div>
</template>

<script>
import Clublist from './components/Clublist'
import LocationSelection from './components/LocationSelection'
import BudgetSelection from './components/BudgetSelection'
import Budget from './components/Budget'

export default {
  name: 'app',
  components: {
    Clublist,
    LocationSelection,
    BudgetSelection,
    Budget
  },
  data () {
    return {
      location: "",
      budget: ""
    }
  },
  methods: {
    locationChanged: function (location) {
      this.location = location;
    },
    budgetChanged: function (budget) {
      this.budget = budget;
    }
  }
}
</script>

<style>
  #app {
    padding-top: 20px
  }
</style>