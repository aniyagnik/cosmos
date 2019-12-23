<template>
  <div class="solarSystem">
    <br>
    <h1>Our Solar System</h1>
    <b-container>
      <cards-container-component v-bind:objArr='celestialBodies.slice(0,3)'></cards-container-component>
      <cards-container-component v-bind:objArr='celestialBodies.slice(3,6)'></cards-container-component>
      <cards-container-component v-bind:objArr='celestialBodies.slice(6,9)'></cards-container-component>
    </b-container>
  </div>
</template>

<script>
import cardsContainer from '@/components/cardsContainer.vue'
import celestialBodies from '@/data/solarSystem.js'

export default {
  components: {
    'cards-container-component': cardsContainer
  },
  data () {
    return {
      celestialBodies
    }
  }
}
</script>

<style>
.solarSystem{
  color: white;
  background-image: url('../../public/pics/solarSystem.jpg');
  background-position:center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
}
</style>
