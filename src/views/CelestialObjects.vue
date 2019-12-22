<template>
    <!-- <div :style="{ 'background-image': `url(${body.image})` }"> -->
    <div class='info'>
      <div class='info-box'>
        <h1>{{ body.name }}</h1>
        <div class='pnts'>
          <h3 style='color:crimson'>QUICK FACTS</h3>
          <p>type : {{ body.type }}</p>
          <p>AGE : {{ body.age }}</p>
          <p>RADIUS : {{ body.radius }}</p>
        </div> <br>
        <li style="list-style-type:none" v-for='data in body.discription' :key="data.heading">
          <info-container :data='data'></info-container>
       </li>
      </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import infoContainer from '@/components/infoCard.vue'

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

<style>
.info{
  background-image: url('../../public/pics/sun.jpg');
}
.info-box{
  color:rgb(20, 16, 255);
  background-color: beige;
  opacity: 0.6;
  margin-left: 15vw;
  margin-right: 15vw;
  padding: 5vw;
}
.pnts{
  background-color: black;
  color: white;
  opacity:0.7;
  margin-left:30%;
  margin-right:30%;
  padding-top: 1vw;
  padding-bottom: 1vw;
  padding-left:4vw;
  padding-right:4vw;
}
</style>
