import * as express from "express";

const app = express();

app.get("/", (req, res, next) => {
  res.status(200).json({
    status: { code: 200, message: "success" },
    payload: { message: "Welcome to Easy Api" },
  });
});

app.listen(8080, () => {
  console.log("Listening on port 8080");
});
