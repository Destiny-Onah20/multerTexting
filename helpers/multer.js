const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination : (req,file,cb)=>{
        cb(null, "./upload")
    },
    filename: (req,file,cb)=>{
        cb(null, file.originalname)
    }
});

const fileFilter = (req,file,cb)=>{
    const ext = path.extname(file.originalname);
    if(ext === ".jpeg" || ext === ".png" || ext === ".jpg"){
        cb(null, true)
    }else{
        cb(null, new Error("Unsupported File format"), false)
    }
};

const uploadPixc = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits : {
        fileSize: 1024 * 1024 * 4
    }
}).single("postImage");

module.exports = uploadPixc;