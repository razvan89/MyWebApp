<template>
  <div class="widget">
    <div class="loader" :style="{width: width + 'px', height: width + 'px'}"><div></div><div></div><div></div><div></div></div>
  </div>
</template>

<script>
export default {
  props: ['width']
}
</script>

<style>

</style>
