const express = require('express');             // Import expressjs
const account = require('../models/account.model');   // Import account model
const middleware = require('../middleware');
const multer = require('multer');
const path = require('path');
const {json} = require('express/lib/response');
const router = express.Router();
const mongoose = require('mongoose');
const cors = require('cors')
const jwt = require('jsonwebtoken');


// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads/');
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.originalname);
//     }
// });

// const fileFilter = (req, file, cb) => {
//     if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png' || file.mimetype == 'image/jpg') {
//         cb(null, true);
//     } else {
//         cb(null, false);
//     }
// };

// const upload = multer({
//     storage: storage,
//     limits: {
//         fileSize: 1024 * 1024 * 6,
//     },
//     // fileFilter: fileFilter,
// });

router.route('/add').put(cors(), (req,res) => {
    const profile = account({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        username: req.body.username,
        dob: req.body.dob,
        phone: req.body.phone,
        email: req.body.email,
        about: req.body.about,
        gender: req.body.gender,
        status: req.body.status,
    });
    profile.save().then(() => {
        return res.json({msg: 'Success'});
    }).catch((err) => {
        return res.status(400).json({msg: err});
    });
});


module.exports = router;