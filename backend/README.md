# How to run

Application is going to use port `8080`, right now the API CORS filter supports any request from any host

1. run: `docker-compose build`
2. run: `docker-compose run api rails db:migrate`
3. run: `docker-compose up`

API should be running on port 8080 accepting requests from `localhost` only.