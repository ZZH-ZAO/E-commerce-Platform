//new vue 创建一个应用实例对象
import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router";
import "./assets/main.css";

//测试接口函数
import { getCategory } from "@/api/testAPI.js";
getCategory().then((res) => {
  console.log("测试接口函数结果：", res);
});
const app = createApp(App);

app.use(createPinia());
app.use(router);
//以APP为参数创建一个应用实例对象
//挂载到id为app的节点上
app.mount("#app");
