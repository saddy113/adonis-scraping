/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
import Crawer from '../Libs/Crawer'

Route.get('/', async () => {
  const Crawl = new Crawer()
  const crawl = await Crawl.config()

  await crawl.page.goto('https://facebook.com')

  await crawl.page.screenshot({
    path: 'example.png',
  })

  await crawl.browser.close()
  return { hello: 'world' }
})
