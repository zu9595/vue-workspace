<template>
    <div class="container">
        <h1>회원 정보 조회</h1>
        <div class="row">
            <table class="table">
                <tr>
                    <th>번호</th>
                    <td>{{ userInfo.user_no }}</td>
                </tr>
                <tr>
                    <th>아이디</th>
                    <td>{{ userInfo.user_id }}</td>
                </tr>
                <tr>
                    <th>패스워드</th>
                    <td>{{ userInfo.user_pwd }}</td>
                </tr>
                <tr>
                    <th>이름</th>
                    <td>{{ userInfo.user_name }}</td>
                </tr>
                <tr>
                    <th>성별</th>
                    <td>{{ userInfo.user_gender }}</td>
                </tr>
                <tr>
                    <th>나이</th>
                    <td>{{ userInfo.user_age }}</td>
                </tr>
                <tr>
                    <th>가입날짜</th>
                    <td>{{ joinDate }}</td>
                </tr>
            </table>
        </div>
        <div class="row">
            <button class="btn btn-info col-4" @click="goToUpdate(userInfo.user_id)">수정</button>
            <router-link class="btn btn-success col-4" to="/">목록</router-link>
            <button class="btn btn-warning col-4" @click="deleteInfo(userInfo.user_id)">삭제</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            userInfo: {}
        }
    },
    computed: {
        userGender() {
            let result = null;
            if (this.userInfo.user_gender == "M") {
                result = "남";
            } else if (this.userInfo.user_gender == "F") {
                result = "여";
            }
            return result;
        },
        // userGender() {
        //     let map = {
        //         "M": "남",
        //         "F": "여"
        //     };
        //     return map[this.userInfo.user_gender];
        // },
        joinDate() {
            let result = null;
            if (this.userInfo.join_date != null) {
                let date = new Date(this.userInfo.join_date);
                let year = date.getFullYear();
                let month = ('0' + (date.getMonth() + 1)).slice(-2);
                let day = ('0' + date.getDate()).slice(-2);
                result = `${year}년${month}월${day}일`;
            }
            return result;
        }
    },
    created() {
        let searchNo = this.$route.query.userId; //$router에서 넘겨준 쿼리를 $route로 받음
        this.getUserInfo(searchNo);
    },
    methods: {
        async getUserInfo(userId) {
            let result = await axios.get('/api/users/' + userId)
                .catch(err => console.log(err));
            let info = result.data;
            this.userInfo = info;
        },
        goToUpdate(userId){
            // 수정폼 컴포넌트 호출
            this.$router.push({ path: '/userUpdate', query: { "userId": userId } });
        },
        deleteInfo(userId){
            // 서버에 해당 데이터를 삭제
            console.log(userId);
        }
    }
}
</script>