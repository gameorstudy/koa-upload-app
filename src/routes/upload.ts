import * as Koa from 'koa'
import * as Router from 'koa-router'

const router: Router = new Router()

router.get('/upload', (ctx: Koa.Context) => {
    ctx.body = 'Hello Upload!'
})

export default router