const user = require('../Models/UserModel')

const findAll = () => {
    return user.find({})
}

const create = (inputUser)=>{
    return user.create(inputUser)
}

module.exports = {findAll, create}