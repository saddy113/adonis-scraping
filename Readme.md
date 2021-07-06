# Adonis Scraping

## Getting Started

### env setup

You can check env file or see this

```bash
PORT=3333
HOST=0.0.0.0
NODE_ENV=development
APP_KEY=gXZEUiUClJ6OjhGnKiwPEB7Y3QP5b3Kq
```

#### Star project for development

```bash
docker-compose build
docker-compose up
```

#### Star project for production <br>
change `NODE_ENV=development` to `NODE_ENV=production`

and run script

```bash
docker-compose -f docker-compose.prod.yml build
docker-compose -f docker-compose.prod.yml up -d
```

### See how to use Adonis 5 and Puppeteer

Adonis 5 : https://docs.adonisjs.com/guides/introduction
<br>
Puppeteer : https://github.com/puppeteer/puppeteer
