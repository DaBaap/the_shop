FROM python:3.11.4-slim-buster

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /app
RUN pip install --upgrade pip
RUN apt-get update
RUN apt-get install curl -y
RUN apt-get install python3-pip python3-dev libpq-dev -y


COPY . .
RUN pip install -r req.txt
RUN pip install Django psycopg2

# RUN python manage.py makemigrations
# RUN python manage.py migrate

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
