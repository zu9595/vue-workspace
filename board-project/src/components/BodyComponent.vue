<template>
  <ul id="myUL">
    <li v-for="sgdata in list" v-bind:key="sgdata.no" @click="makeClass(sgdata.no)">
      {{ sgdata.todo }}<span class="close" @click="delData(sgdata.no)">×</span>
    </li>
    <li class="checked">Pay bills<span class="close">×</span></li>
  </ul>
</template>

<script>
export default {
  props: ['list'],
  methods: {
    makeClass(no) {
      this.$emit('make-class', no);
    },

    delData(no) {
      this.$emit('del-data', no);
    }
  }
}
</script>
