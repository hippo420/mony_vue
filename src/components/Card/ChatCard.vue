<template>
    <v-container>
        <v-card
        v-bind:title="chatBang.title"
        v-bind:text="chatBang.lastContent"
        variant="outlined"
        ></v-card>
    </v-container>
</template>
<script>
export default {


        data() {
            return {
                chatBang: {
                    id :'001',
                    title:'거지채팅방',
                    lastContent:'우리는 거지입니다.'}
                }
        },
        mounted() {
            // 메뉴 데이터를 백엔드 API에서 가져오는 요청
            this.fetchMenuItems();
        },
        methods: {
            clickChat() {
            
            },
            
            clickOption(){

            }
            
        }
    }
</script>