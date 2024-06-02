import axios from 'axios';

export default{
    
    gfnTrx(url, method, data){
        let IP;
        let PORT = process.env.VUE_APP_PORT;
        const config = {
            header: {
                "Context-Type": "application/json",
            },
            method,
            url,
            data,
        };
        
        if (process.env.NODE_ENV == "prod") {
            IP =process.env.VUE_APP_END_POINT_IP;
        }else if(process.env.NODE_ENV == "test"){
            IP =process.env.test.VUE_APP_END_POINT_IP;
        }else{
            IP =process.env.local.VUE_APP_END_POINT_IP;
        }
        console.log(process.env);
        axios.defaults.baseURL='http://'+IP+':'+PORT;

        //axios로부터 반환되는 프로미스를 반환하도록 변경
        return axios(config)
            .then(response => {
                console.log('gfnTrx:', response.data);
                return response.data;
            })
            .catch(error => {
                // 여기에 오류 처리 로직을 추가할 수 있습니다.
                console.error('API Error:', error);
                //throw new Error('API 요청 중 오류가 발생했습니다.');
        });
    }
    
}