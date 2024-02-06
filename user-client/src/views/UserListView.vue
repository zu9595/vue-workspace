<template>
    <div class="container">
        <h1>전체 회원 조회</h1>
        <table class="table">
            <caption>Total : {{ count }}</caption>
            <thead>
                <tr>
                    <th>No.</th>
                    <th>ID</th>
                    <th>이름</th>
                    <th>성별</th>
                    <th>가입날짜</th>
                </tr>
            </thead>
            <tbody>
                <!-- <template :key="idx" v-for="(userdata, idx) in userList"> -->
                <!-- 템플릿 태그는 렌더링되지 않음, v-for, v-if를 같이 쓸 때 나누기 위해 사용 -->
                <tr :key="idx" v-for="(userdata, idx) in userList" @click="goToUserInfo(userdata.user_id)">
                    <td v-text="userdata.user_no" />
                    <td>{{ userdata.user_id }}</td>
                    <td>{{ userdata.user_name }}</td>
                    <td>{{ userdata.user_gender }}</td>
                    <td>{{ userdata.join_date }}</td>
                </tr>
                <!-- </template> -->
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            userList: []
        }
    },
    computed: { // 새로운 함수로 선언, 항상 감시하며 갱신, 값을 리턴받음
        count() {
            return this.userList.length;
        }
    },
    watch: { // 와처. 이미 있는 함수로 선언, 프로세스
        userList(oldQuestion, newQuestion) {
            console.log('이전 : ', oldQuestion);
            alert('데이터가 변경되었습니다');
            console.log('이후 : ', newQuestion);
        }
    },
    created() { // 여러 함수를 호출할 경우 async로 동기화 시켜주어야함
        this.getUserList(); // 비동기 작업
    },
    methods: {
        async getUserList() {
            // 동기 작업
            let result = await axios.get('/api/users')
                .catch(err => console.log(err));
            let list = result.data;
            this.userList = list;
        },
        goToUserInfo(userId) {
            this.$router.push({ path: '/userInfo', query: { "userId": userId } }); // index.js에서 정의된 주소를 가져옴
            //this.$router.push({ name: 'userInfo', query: { "userId": userId } });
        }
    }
}
</script>
