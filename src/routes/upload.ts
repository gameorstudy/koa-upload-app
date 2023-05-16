import * as Koa from 'koa'
import * as path from "path";
import * as Router from "koa-router";
import * as multer from "@koa/multer";

const { resolve } = path;

const router = new Router<Koa.DefaultState, Koa.Context>();

// 上传文件存放路径、文件命名
const storage = multer.diskStorage({
  destination: function (_req, _file, cb) {
    cb(null, resolve(__dirname, "../../public"));
  },
  filename: function (_req, file, cb) {
    file.originalname = Buffer.from(file.originalname, 'latin1').toString(
      'utf8',
    ); // 支持非拉丁语言
    cb(null, file.originalname);
  },
});

// 文件大小、文件数量限制
const limits = {
  files: 1
}

router.post("/upload", async (ctx, next) => {
  const upload = multer({
    storage,
    limits
  }).single('file')

  try {
    await upload(ctx, next)
    ctx.body = {
      status: 200,
      message: 'Success'
    }
  } catch (err) {
    ctx.body = {
      status: -100,
      message: '文件上传失败'
    }
  }
});

export default router;
