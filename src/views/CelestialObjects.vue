<template>
    <div>
       <h2>{{ body.name }}</h2>
       <p>{{ body.discription }}</p>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      body: {}
    }
  },
  computed: {
    ...mapState([
      'solarSystem'
    ])
  },
  mounted () {
    const body = this.solarSystem.find(({ name }) => name === this.$route.params.name)
    this.body = body
  }

}
</script>
