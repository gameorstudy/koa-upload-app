import * as Koa from 'koa'
import router from './routes/upload'

const app = new Koa()

app.use(router.routes())

const PORT = 3001

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})