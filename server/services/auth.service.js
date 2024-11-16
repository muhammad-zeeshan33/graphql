const bcrypt = require('bcryptjs')
const userService = require('./user.service')
const jwtService = require( '../utils/jwt.service')

class AuthService {

    constructor(){}

    async register(payload){
        const existingUser = await userService.getUserByEmail(payload.email);
        if(existingUser){
            throw new Error("User already registered");
        }
        const user = await userService.createUser(payload);
        const jwtToken = jwtService.generateToken({
            userId: user.id,
            email: user.email,
            role: user.role
        })

        return {
            ...user,
            accessToken: jwtToken
        }
    }

    async login(payload){
        const existingUser = await userService.getUserByEmail(payload.email);
        if(!existingUser){
            throw new Error("User does not exist");
        }

        const isMatch = this.comparePassword(payload.password, existingUser.password)
        if(!isMatch){
            throw new Error("Password is incorrect");
        }

        const jwtToken = jwtService.generateToken({
            userId: existingUser.id,
            email: existingUser.email,
            role: existingUser.role
        });

        return {
            ...existingUser,
            accessToken: jwtToken
        }

    }

    async encryptPassword(password){
        const salt = await bcrypt.genSalt(10);
        return await bcrypt.hash(password, salt);
    }

    async comparePassword(password, userPassword){
        return await bcrypt.compare(password, userPassword);
    }

}

module.exports = new AuthService();