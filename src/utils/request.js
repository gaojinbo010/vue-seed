import axios from 'axios';
import { Message, MessageBox } from "element-ui";
// import { getToken } from "@/utils/auth";
import store from "../store";

const {
    VUE_APP_APIROOT: APIROOT
    // ,VUE_APP_CURRENTMODE: CURRENTMODE
} = process.env || {};

// 创建axios实例
const request = axios.create({
    baseURL: APIROOT || "",
    timeout: 5000
});

// request拦截器
request.interceptors.request.use(
    config => {

        const token = store.getters.token;//getToken();

        // console.log(`Token : ${token}`);
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    error => {
        // for debug
        // console.log(error);
        Promise.reject(error);
    }
);

// respone拦截器
request.interceptors.response.use(
    response => {
        const res = response.data;
        if (res.code !== 1000) {
            Message({
                message: res.message || '发生未知错误',
                type: "error",
                duration: 5 * 1000
            });

            /* 
                50008:非法的token; 
                50012:其他客户端登录了;  
                50014:Token 过期了;
            */
            // res.code = 50008
            if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
                MessageBox.confirm(
                    "你已被登出，可以取消继续留在该页面，或者重新登录",
                    "确定登出",
                    {
                        confirmButtonText: "重新登录",
                        cancelButtonText: "取消",
                        type: "warning"
                    }
                ).then(() => {
                    store.dispatch("FedLogOut").then(() => {
                        
                        location.reload();
                    });
                });
            }
            return Promise.reject("error");
        } else {

            return res;
        }
    },
    error => {
        // for debug
        // console.log("err" + error);
        // Vue.$Message.error({
        //     message: error.message,
        //     duration: 5 * 1000,
        //     closable: true
        // });
        return Promise.reject(error);
    }
);

export default request;