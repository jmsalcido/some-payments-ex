FROM ruby:2.5-alpine

RUN apk update && apk add build-base nodejs sqlite sqlite-dev tzdata

RUN mkdir /app
WORKDIR /app

COPY Gemfile Gemfile.lock ./
RUN bundle install

COPY . .

CMD puma -C config/puma.rb
