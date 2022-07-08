const express = require('express');
const fileUpload = require('express-fileupload');

const app = express();

app.use(fileUpload());

//upload endpoint ie where the file will be uploaded to

app.post('/upload', (req, res) => {
    if (req.files === null) {
        return res.status(400).json({ msg: 'No file uploaded' });
    }

    const file = fileUpload.files.file;
    file.mv(`${__dirname}/clienet/public/uploads/${file.name}`, err => {
        if (err) {
            console.error(err);
            return res.status(500).send(err);
        }
        res.json({fileName: file.name, filePAth : `/uploads/${file.name}`})
    });
});

app.listen(3000, () => console.log('Server Started...'));




