import express from "express";

const app = express();
app.use(express.json());

app.post("/webhook", (req, res) => {
  console.log("Message received");
  res.sendStatus(200);
});

app.get("/webhook", (req, res) => {
  res.send(req.query["hub.challenge"]);
});

app.listen(3000);
