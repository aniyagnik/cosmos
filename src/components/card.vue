<template>
  <div class="card-component">
      <h1 class='title text-uppercase font-weight-black'>{{ object.name }}</h1>
      <p>
        {{ object.summary }}
      </p>
  </div>
</template>

<script>
export default {
  props: [ 'object' ],
  data () {
    return {

    }
  }
}
</script>

<style>
  .card-component {
    border: 3px solid white;
    padding: 10px;
    background-color: black;
    opacity:0.8;
    margin-bottom:10px;
    text-decoration: none !important;
    color:whitesmoke;
  }

  .card-component:hover{
    opacity: 1;
    border: 3px solid crimson;
  }

  .card-component:hover .heading {
    color: crimson;
  }
</style>
