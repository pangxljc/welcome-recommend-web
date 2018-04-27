import ajax from "./ajax.js";
const brc='http://localhost:8080/'

// [1、获取E宠主页广告列表](##获取E宠主页广告列表)<br/>
export const reqData = ()=> ajax(brc+"demo/home2")


// [6、用户名密码登陆](#4用户名密码登陆)<br/>
// export  const reqData =(list)=>ajax(brc+"login_pwd",{name,pwd})
