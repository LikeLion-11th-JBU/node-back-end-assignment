const router = require('express').Router()
const users = [
  { id: 'chb2005', pw: '1234', nickname: 'chabgbum' },
  { id: 'alex123', pw: '1234', nickname: 'alex' },
  { id: 'h1997', pw: '1234', nickname: 'Harry' },
]
/**
 * @swagger
 * paths:
 *  /user/nickname:
 *   post:
 *    tags:
 *    - user
 *    description: 닉네임 조회
 *    parameters:
 *    - in: body
 *      name: body
 *      required: true
 *      schema:
 *       properties:
 *        id:
 *         type: string
 *        pw:
 *         type: string
 *
 *    responses:
 *     200:
 *      description: 닉네임 조회 성공
 *      schema:
 *       properties:
 *        message:
 *         type: string
 *     401:
 *      description: 닉네임 조회 실패
 *      schema:
 *       properties:
 *        message:
 *         type: string
 *
 */
router.post('/nickname', async (req, res, next) => {
  try {
    for (let i = 0; i < users.length; i++) {
      if (req.body.id == users[i].id) {
        if (req.body.pw == users[i].pw) {
          return res.status(200).json({
            message: '닉네임 : ' + users[i].nickname,
          })
        } else {
          return res.status(401).json({
            message: '비밀번호가 틀렸습니다.',
          })
        }
      }
    }
    return res.status(401).json({
      message: '아이디가 존재하지 않습니다!',
    })
  } catch (err) {
    console.log(err)
    return next(err)
  }
})

module.exports = router
