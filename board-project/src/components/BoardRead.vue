<template>
  <table id="list">
    <tr>
      <td style="width: 50px;">글제목</td>
      <td>{{ readBoard.title }}</td>
      <td>{{ readBoard.view }}</td>
    </tr>
    <tr style="height: 200px;">
      <td>글내용</td>
      <td colspan="2">{{ readBoard.content }}</td>
    </tr>
  </table>
  <button style="float:right;" v-on:click="callList">목록</button>
</template>
  
<script>
export default {
  props: ['readBoard'],
  data() {
    return {

    }
  },
  methods: {
    callList(){
      this.$emit('back-list');
    }
  }
}
</script>
  