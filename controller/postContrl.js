const model = require("../models").postText;
const path = require("path")
const fs = require("fs")
const valid = require("fastest-validator");


const createNewpost = async(req,res)=>{
    try {
        const post = {
            title: req.body.title,
            desc: req.body.desc,
            postImage: req.file.path,
            commentId: req.body.commentId
        }
        const schema = {
            title: {type: "string", optional: false},
            desc: {type: "string", optional: false},
            postImage: {type: "string", optional: false},
            commentId: {type: "number", optional: false}
        }
        const validation = new valid();
        const validator = validation.validate(post, schema);
        if(validator === true){
            res.status(400).json({
                message: validator[0].message
            })
        }else{
            const posted = await model.create(post);
            res.status(200).json({
                data: posted
            })
        }
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
};

module.exports = {
    createNewpost
}