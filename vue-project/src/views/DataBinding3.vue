<template>
    <label>선택: <input type="checkbox" true-value="yes" false-value="no" v-model="checked"></label>
    <p>선택값: {{checked}}</p>

    <label>text속성: <input type="text" v-bind:value="ival"></label> <!-- v-model => value -->
    <p>값: {{ival}}</p>
    
    <!-- v-bind: attribute의 값을 바인딩. -->
    <img v-bind:src="imgSrc" :width="imgWidth"> <!-- v-bind 생략가능 -->
    <input type="text" v-model="textStr">
    <button v-bind:disabled="textStr == ''">Click</button>
</template>

<script>
export default {
  data(){
    return{
      checked: 'yes',
      ival: 'sample',
      imgSrc: 'https://kr.vuejs.org/images/logo.png',
      imgWidth: '100px',
      isTrue: true,
      textStr: ''
    }
  }
}
</script>