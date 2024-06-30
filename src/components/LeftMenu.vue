<template>
    <div>
    <v-navigation-drawer
        v-model="drawer"
        absolute
        location="left"

        width="180">

        <template v-slot:prepend>
            <v-list-item
                lines="two"
                prepend-avatar="https://randomuser.me/api/portraits/women/81.jpg"
                subtitle="Logged in"
                title="Jane Smith"
            ></v-list-item>
        </template>
        <v-divider></v-divider>

    <div>
        <v-list density="compact" nav>
        
            <v-list-item @click="movePage('');">
            <v-toolbar-title>
                <v-icon class="mr-2">home</v-icon>
                Menu
            </v-toolbar-title>
            </v-list-item>
            <hr class="mt-2 mb-2">
            <template v-for="menu in menus" :key="menu.id">
                <v-list-item
                    @click="movePage(menu.target);"
                >{{menu.title}}
                </v-list-item>
                
            </template>
        </v-list>
    </div>
    </v-navigation-drawer>
</div>
</template>
<style>
    
</style>
<script>
import Transaction from '@/common/core/Transaction';
export default {


        data() {
            return {
                menus: [
                    {id :'Aaaa',targrt:'A',title:'A메뉴'},
                    {id :'Baaaa',targrt:'B',title:'B메뉴'},
                    {id :'Caaaa',targrt:'C',title:'C메뉴'},
                ], // 메뉴 항목을 저장할 배열,
                drawer: true,
            }
        },
        mounted() {
            // 메뉴 데이터를 백엔드 API에서 가져오는 요청
            this.fetchMenuItems();
        },
        methods: {
            fetchMenuItems() {
                //gfnTrx("/login/prcLogin","POST",member ,this.fnLoginCallback);
                Transaction.gfnTrx('/system/getMenu',"GET",this.fnMenuCallback);
            // 백엔드 API에서 메뉴 데이터를 가져오는 요청을 보내고
            // 받은 데이터를 menuItems에 저장
            // axios 또는 fetch 등을 사용하여 백엔드 API 호출
            // 예를 들어, axios.get('/api/menu') 등으로 요청을 보낼 수 있음
            },
            
            fnMenuCallback(){

            }
            
        }
    }
</script>