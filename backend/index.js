// index.js
import { app } from "./server.js";
import "dotenv/config";
const APP_PORT = process.env.APP_PORT || 3000;

app.listen(APP_PORT, () => {
  console.log(`Server Runing on port: ${APP_PORT}`);
});
