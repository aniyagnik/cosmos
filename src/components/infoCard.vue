<template>
  <div>
    <h2>{{ data.heading }}</h2>
    <p>{{ data.content }}</p>
  </div>
</template>

<script>
export default {
  props: ['data']
}
</script>
