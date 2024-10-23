// 导入 Koa 相关依赖
const Koa = require("koa");
const Router = require("koa-router");
const bodyParser = require("koa-bodyparser");

// 创建 Koa 实例
const app = new Koa();
const router = new Router();

// 中间件：解析请求体
app.use(bodyParser());

// 定义简单的路由
router.get("/", async (ctx) => {
  ctx.body = "Hello, Koa!";
});

router.post("/data", async (ctx) => {
  const requestData = ctx.request.body;
  ctx.body = {
    message: "Data received",
    data: requestData,
  };
});

// 将路由添加到 Koa 实例中
app.use(router.routes()).use(router.allowedMethods());

// 监听端口
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
