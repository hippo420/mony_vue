import store from '@/store/store.js';

const getHeaders = () => {
    const headers = new Headers();
    headers.append('USER_ID', store.state.userData.userid);
    headers.append('Content-Type', 'application/json');
    return headers;
};

const gfnTrx = async (url, method, data, callback) => {
    let IP;
    const PORT = process.env.VUE_APP_PORT;
    
    if (process.env.NODE_ENV === "prod") {
        
        IP = process.env.VUE_APP_END_POINT_IP;
    } else if (process.env.NODE_ENV === "test") {
        IP = process.env.test.VUE_APP_END_POINT_IP;
    } else {
        IP = 'localhost';
    }


    const fullUrl = `http://${IP}:${PORT}${url}`;
    console.log(fullUrl);


    const config = {
        method,
        headers: getHeaders(),
        credentials: 'include' , // Include cookies if isAllCookie is true
        body: data == null ? null : JSON.stringify(data)
    };

    try {
        const response = await fetch(fullUrl, config);
        if (!response.ok) {
            throw new Error(`API Error: ${response.statusText}`);
        }
        
        const responseData = await response.json();
        console.log(responseData.data.status );
        if(responseData.data.status != response.ok && responseData.data.status!= null){
            alert(responseData.data.message);
        }

        console.log('gfnTrx:', responseData);
        //cookie.set('JSESSIONID', 'aaaaaa', 1);
        callback(responseData.data);
    } catch (error) {
        console.error('API Error:', error);
        // Add additional error handling logic here if needed
    }
};

export default {
    gfnTrx
};