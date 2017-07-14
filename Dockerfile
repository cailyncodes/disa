FROM colehansen/polymer

WORKDIR "/usr/scr/app"

COPY . /usr/src/app

CMD ["polymer", "serve", "-H", "0.0.0.0", "-p", "80"]