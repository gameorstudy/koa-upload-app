import * as Koa from 'koa'
import router from './routes/upload'
import * as cors from '@koa/cors'

const app = new Koa()

app.use(cors())

app.use(router.routes()).use(router.allowedMethods())

const PORT = 3001

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})