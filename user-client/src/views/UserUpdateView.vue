<template>
    <div class="container">
        <h1>회원 정보 수정</h1>
        <div class="row">
            <table class="table">
                <tr>
                    <th class="text-right table-primary">번호</th>
                    <td class="text-center"><input class="form-control" type="number" v-model="userInfo.user_no" readonly>
                    </td>
                </tr>
                <tr>
                    <th class="text-right table-primary">아이디</th>
                    <td class="text-center"><input class="form-control" type="text" v-model="userInfo.user_id" readonly></td>
                </tr>
                <tr>
                    <th class="text-right table-primary">비밀번호</th>
                    <td class="text-center"><input class="form-control" type="password" v-model="userInfo.user_pwd"></td>
                </tr>
                <tr>
                    <th class="text-right table-primary">이름</th>
                    <td class="text-center"><input class="form-control" type="text" v-model="userInfo.user_name"></td>
                </tr>
                <tr>
                    <th class="text-right table-primary">성별</th>
                    <td class="text-center">
                        <input type="radio" value="M" v-model="userInfo.user_gender">남
                        <input type="radio" value="F" v-model="userInfo.user_gender">여
                        <!-- <input type="checkbox" true-value="예" false-value="아니오" v-model="chkVal"> -->
                    </td>
                </tr>
                <tr>
                    <th class="text-right table-primary">나이</th>
                    <td class="text-center"><input class="form-control" type="number" v-model="userInfo.user_age" min="0"
                            max="150"></td>
                </tr>
                <tr>
                    <th class="text-right table-primary">가입날짜</th>
                    <td class="text-center"><input class="form-control" type="text" v-model="userInfo.join_date" readonly></td>
                    <!-- yyyy-MM-dd -->
                </tr>
            </table>
        </div>
        <div class="row">
            <button class="btn btn-info col-4" @click="updateInfo()">저장</button>
            <router-link class="btn btn-success col-4" to="/">목록</router-link>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            //chkVal: false,
            userInfo: {}
        }
    },
    created(){
        let searchNo = this.$route.query.userId; //$router에서 넘겨준 쿼리를 $route로 받음
        this.getUserInfo(searchNo);
    },
    methods: {
        async getUserInfo(userId) {
            let result = await axios.get('/api/users/' + userId)
                .catch(err => console.log(err));
            let info = result.data;
            this.userInfo = info;
            console.log(this.userInfo);
        },
        async updateInfo() {
            // 1) 유효성 체크
            if (!this.validation()) return;

            // 2) ajax
            // 2-1) 실제 보낼 데이터 선별
            let data = this.getSendData();

            // 2-2) axios를 이용해 ajax
            await axios
                .put('/api/users/'+this.userInfo.user_id, data)
                .then(result => {
                    // 3) 결과처리
                    //let user_no = result.data.insertId;
                    // if(user_no == 0){
                    //     alert(`변경되지 않았습니다. \n메세지를 확인해주세요\n${result.data.message}`)
                    // }else{
                        console.log(result);
                        alert(`정상적으로 변경되었습니다.`);
                        // this.userInfo.user_no = user_no;
                    // }
                })
                .catch(err => console.log(err));


        },
        validation() {
            if (this.userInfo.user_pwd == "") {
                alert('비밀번호가 입력되지 않았습니다.');
                return false;
            }
            if (this.userInfo.user_name == "") {
                alert('이름이 입력되지 않았습니다.');
                return false;
            }
            return true;
        },
        getSendData() {
            let obj = this.userInfo;
            let delData = ["user_id", "user_no", "join_date"];
            let newObj = {};

            let isTargeted = null;
            for (let field in obj) {
                isTargeted = false;
                for (let target of delData) {
                    if (field == target) {
                        isTargeted = true;
                        break;
                    }
                }
                if (!isTargeted) {
                    newObj[field] = obj[field];
                }
            }
            let sendData = {
                "param" : newObj
            }
            return sendData;
        }
    }
}
</script>