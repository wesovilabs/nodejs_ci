const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const Router = require("koa-router");
const Mongoose = require("mongoose");
const Routes = require("./routes");

const mongooseOptions = {
  useCreateIndex: true,
  useNewUrlParser: true
};

Mongoose.connect(process.env.MONGO_URL, mongooseOptions);

const app = new Koa();

const router = new Router();
Routes(router);

app
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(process.env.PORT || 3000);
