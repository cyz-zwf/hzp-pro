import axios from 'axios';

// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.withCredentials = true;
//Axios实现请求重试
axios.defaults.retry = 1; //重试次数
axios.defaults.retryDelay = 1000; //重试延时
axios.defaults.shouldRetry = (error) => true; //重试条件，默认只要是错误都需要重试

/* 封装get方法*/
export function get(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        }).then(response => {
            resolve(response.data);
        }).catch(err => {
            reject(err);
        })
    })
}

/* 封装post方法 */
export function post(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.post(url, params).then(response => {
            if(response.status == 200){
                if(response.data.status == 1){
                    resolve(response.data.data);
                }else{
                    this.$message({
                        message: response.data.message,
                        type: "warning"
                    });
                }
            }else if(response.status == 404){
                this.$message({
                    message: "页面不存在",
                    type: "warning"
                });
            }else if(response.status == 500){
                this.$message({
                    message: "服务端错误",
                    type: "warning"
                });
            }else if(response.status == 501){
                this.$message({
                    message: "登陆态失效,请重新登陆!",
                    type: "warning"
                });
                // 跳转到登录页  你自己写
            }
        }).catch(err => {
            reject(err);
        })
    })
}
