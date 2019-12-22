<template>
  <div>
    <b-row>
      <b-col>
        <router-link :to="`/solarSystem/${objArr[0].name}`" style="text-decoration:none">
          <card-component v-bind:object='objArr[0]'></card-component>
        </router-link>
      </b-col>
      <b-col>
        <router-link :to="`/solarSystem/${objArr[1].name}`" style="text-decoration:none">
          <card-component v-bind:object='objArr[1]'></card-component>
        </router-link>
      </b-col>
      <b-col>
        <router-link :to="`/solarSystem/${objArr[2].name}`" style="text-decoration:none">
          <card-component v-bind:object='objArr[2]'></card-component>
        </router-link>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import cardComponent from '@/components/card.vue'

export default {
  props: [ 'objArr' ],
  components: {
    'card-component': cardComponent
  },
  data () {
    return {

    }
  }
}
</script>
