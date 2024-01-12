const express = require('express')
const router = express.Router()

const bcrypt = require('bcrypt')
const User = require('../models/user')

router.post('/register', async(req, res) => {

    const { name,
        lastName,
        email,
        phone,
        dni,
        password } = req.body;

    // Hash de la contraseña
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

    // Guarda el usuario con la contraseña hash en la base de datos
    const newuser = new User({
        name,
        lastName,
        email,
        phone,
        dni,
        password: hashedPassword
    })

    try {
        const user = await newuser.save();
        res.send('Usuario registrado exitosamente')
    } catch (error) {
        console.log(error);
        return res.status(400).json({message: error });
    }
});





router.post('/login', async (req, res) => {
    
    const { email, password } = req.body;

    try {
        // Busca al usuario por su dirección de correo electrónico y password en la base de datos
        const user = await User.findOne({ email : email });

        if (!user) {
            return res.status(400).json({ message: 'Credenciales inválidas' });
        }

         // Compara la contraseña proporcionada con la contraseña almacenada en la base de datos
        const checkPassword = await bcrypt.compare(password, user.password);


        if (checkPassword) {
            // Las contraseñas coinciden, permitir que el usuario inicie sesión
            const temp = {
                name: user.name,
                lastName: user.lastName,
                email: user.email,
                phone: user.phone,
                dni: user.dni,
                isAdmin: user.isAdmin,
                _id: user._id,
            };
            res.send(temp);
        } else {
            // Las contraseñas no coinciden, denegar el acceso
            return res.status(400).json({ message: 'Credenciales inválidas' });
        }
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: error });
    }
});


router.get('/getallusers', async(req, res) => {

    try {
        const users = await User.find({})
        res.send(users)
    } catch (error) {
        return res.status(400).json({ message: error });
    }
})

module.exports=router