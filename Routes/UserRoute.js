const {Router} = require('express')
const { message } = require('statuses')
const { use } = require('.')
const user = require('../Models/UserModel')
const router = Router({ mergeParams: true })
const userService = require('../services/UserService')

router
    .get('/', async  (req,res) => {
        try {
            const users = await userService.findAll()
            if(users || users.length !== 0)
                return res.status(200).json(users)
            else
                return res.status(400).json({message: 'khong co user trong db'})
        } catch(err) {
            return res.status(500).json({message: err.toString()})
        }
    })
    .post('/addUsers', async (req,res)=>{  
            
        userService.create({...req.body})
        .then(user =>{
            return res.status(201).json(user);
        })
        .catch(err=>{
            console.log(err)
            res.status(400).json({message:err});
        })
    })


module.exports = {router}

