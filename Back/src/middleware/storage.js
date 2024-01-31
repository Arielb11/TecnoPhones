const multer = require ("multer");

const guardar = multer.diskStorage({
    destination: (req,file,cb) => { //Ubicacion en donde se guardan las imagenes
        cb(null, './public/uploads') 
    },
    filename: (req,file,cb) =>{ //Nombre con el que se guardan las imagenes
        if(file !== null){ 
            const ext = file.originalname.split('.').pop(); //Para evitar que haya repetidas
            cb(null,Date.now()+'.'+ext);
        }
    }
})

// Para validar que las imagenes essan jpg, jpeg, png
const filtro = (req,file,cb) => {
    if(file && (file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') ){
        cb(null,true)
    } else {
        cb(null, false)
    }
}

subirImagen = multer({storage: guardar, fileFilter: filtro});

module.exports = {subirImagen};