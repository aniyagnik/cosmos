<template>
    <div>
       <h2>{{ body.name }}</h2>
       <li v-for='data in body.discription' :key="data.heading">
         <info-container :data='data'></info-container>
       </li>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import infoContainer from '@/components/infoCard'

export default {
  components: {
    'info-container': infoContainer
  },
  data () {
    return {
      body: {}
    }
  },
  computed: {
    ...mapState([
      'dataSolarObject'
    ])
  },
  mounted () {
    const body = this.dataSolarObject.find(({ name }) => name === this.$route.params.name)
    this.body = body
  }

}
</script>
