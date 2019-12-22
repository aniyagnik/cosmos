<template>
  <div class='box'>
    <h2>{{ data.heading }}</h2>
    <p>{{ data.content }}</p>
  </div>
</template>

<script>
export default {
  props: ['data']
}
</script>

<style>
.box{
  text-align:justify;
  margin-left: 10vw;
  margin-right: 10vw;
}
</style>
