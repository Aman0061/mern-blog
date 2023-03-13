import User from '../models/User.js'
import bcryptjs from 'bcryptjs'


//Register User
export const register = async (req, res) => {
    try{
        const {username, password} = req.body

        const isUsed = await User.findOne({username})
        if (isUsed){
            return res.json({
                message: 'this username is used'
            })
        }

        const salt = bcryptjs.genSaltSync(10)
        const hash = bcryptjs.hashSync(password, salt)

        const newUser = new User({
            username,
            password: hash,
        })


        await newUser.save()

        res.json({
            newUser, meassage: 'Регистрация прошла успешно.'
        })

    }catch (error){
        res.json({message: 'Ошибка при создании пользователя.'})

    }
}


//Login User
export const login = async (req, res) => {
    try{

    }catch (error){}
}

//Get Me
export const getMe = async (req, res) => {
    try{

    }catch (error){}
}