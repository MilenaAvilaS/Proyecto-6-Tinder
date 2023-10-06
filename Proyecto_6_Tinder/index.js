import 'dotenv/config';
import express from 'express';
import router from "./router/router.js";

const { APP_PORT, APP_NAME } = process.env;
const app = express();
app.use(express.json());

app.use(router);

app.listen(APP_PORT, () => {
  console.log(`${APP_NAME} está corriendo en http://localhost:${APP_PORT}`);
});
