<template>
  <footer>
    <h3>2강입니다.</h3>
  </footer>
  <div v-html="temp"></div>
  <slot></slot> <!-- html 템플릿을 그대로 사용.-->
  <slot name="header"></slot>
  <slot name="footer"></slot>
</template>

<script>
  export default {
    props: ['temp']
  }
</script>