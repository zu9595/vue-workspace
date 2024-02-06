<template>
  <header>
    <h2>간단 게시판</h2>
    <p>뷰로 작성하는 게시판</p>
  </header>
  <p>{{ rootList }}</p>
  <p>{{ rootStr }}</p>
</template>

<script>
export default {
  props: ['rootData'], // props는 바로 위 부모 컴포넌트까지만 받아올 수 있음
  inject: ['rootList','rootStr'] // 2단계 이상의 부모 컴포넌트에서 받아오려면 부모에서 privide()로 정의하고 inject로 호출
}
</script>
