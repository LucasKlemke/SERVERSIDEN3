import express from "express";
import router from "./routers/web.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//retornar todas as tasks
app.use("/", router);

app.listen(port, () => {
  console.log(`Server : http://localhost:${port}/pets `);
});
