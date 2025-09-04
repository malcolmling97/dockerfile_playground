import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

// basic middleware
app.use(express.json());

// home
app.get("/", (req, res) => {
    res.json({ msg: "check our /v1/hello and healthz muahahahhaa" });
});

// test
app.get("/test", (req, res) => {
    res.json({ msg: "testing" });
});

// healthcheck
app.get("/healthz", (req, res) => res.status(200).send("ok"));

// sample endpoint
app.get("/v1/hello", (req, res) => {
  res.json({ msg: "hello world" });
});

// graceful shutdown (SIGTERM from Docker/K8s)
const server = app.listen(PORT, () => {
  console.log(`listening on :${PORT}`);
});
process.on("SIGTERM", () => {
  console.log("shutting down...");
  server.close(() => process.exit(0));
});
