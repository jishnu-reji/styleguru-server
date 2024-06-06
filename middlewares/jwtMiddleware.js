const jwt=require('jsonwebtoken')

const jwtMiddleware = (req,res,next)=>{
    try{
        const token = req.headers['authorization'].split(" ")[1]
        if(token){
            const jwtResponse = jwt.verify(token,process.env.JWT_SECRET_KEY)
            req.payload=jwtResponse.userId
            next()
        }
        else{
            res.status(406).json("Authorisation failed!!! Token is missing!!!")
        }
    }
    catch(err){
        res.status(401).json("Authorisation failed!!! Please login!!!")
    }
}

module.exports =jwtMiddleware