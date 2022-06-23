const {Router} = require('express')

const {router:userRouter} = require('./UserRoute')

const router = Router({mergeParams:true})

router.use('/user',userRouter)

module.exports = {router}