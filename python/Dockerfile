FROM python:3.11-slim

WORKDIR /app
COPY requirements.txt .
RUN python -m venv /opt/venv && . /opt/venv/bin/activate && pip install -r requirements.txt

COPY . .
EXPOSE 8080

CMD ["/opt/venv/bin/uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8080"]
