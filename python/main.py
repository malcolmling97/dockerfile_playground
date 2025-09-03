from fastapi import FastAPI, Request
from pydantic import BaseModel
import os

app = FastAPI()
PORT = int(os.getenv("PORT", "8080"))

class Echo(BaseModel):
    msg: str

@app.get("/healthz")
def healthz():
    return {"status": "ok"}

@app.post("/echo")
def echo(body: Echo):
    return {"you_said": body.msg}

@app.get("/metrics")
def metrics():
    # toy metrics; replace with real counters/gauges
    return {"uptime_sec": os.times().elapsed}

@app.get("/")
def home():
    return {"welcome to the home page, we have routes /healthz /echo and /metrics"}

# if you ever run via `python main.py`
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=PORT)
