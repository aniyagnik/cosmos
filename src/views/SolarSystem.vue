<template>
  <div class="solarSystem">
    <br>
    <h1>Our Solar System</h1>
    <b-container>
      <b-row>
        <b-col>
          <card-component v-bind:object='celestialBodies[0]'></card-component>
        </b-col>
        <b-col>
          <card-component v-bind:object='celestialBodies[1]'></card-component>
        </b-col>
        <b-col>
          <card-component v-bind:object='celestialBodies[2]'></card-component>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <card-component v-bind:object='celestialBodies[3]'></card-component>
        </b-col>
        <b-col>
          <card-component v-bind:object='celestialBodies[4]'></card-component>
        </b-col>
        <b-col>
          <card-component v-bind:object='celestialBodies[5]'></card-component>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <card-component v-bind:object='celestialBodies[6]'></card-component>
        </b-col>
        <b-col>
          <card-component v-bind:object='celestialBodies[7]'></card-component>
        </b-col>
        <b-col>
          <card-component v-bind:object='celestialBodies[8]'></card-component>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import cardComponent from '@/components/card.vue'
import celestialBodies from '@/data/solarSystem.js'

export default {
  components: {
    'card-component': cardComponent
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
  height: 92.5vh;
}
</style>
