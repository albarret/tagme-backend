var Asset = require('../model/asset.model');

exports.create = (req, res) => {
    if(!req.body) {
        res.status(400).send({ message: "Content cannot be empty!"});
        return;
    }

    const body = req.body;

    const asset = new Asset({
        name: body.name,
        description: body.description,
        health: body.health,
        status: body.status,
        img: body.img,
        model: body.model,
        owner: body.owner,
        unit: body.unit
    });

    asset
        .save(asset)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error ocurrde while crating new Asset"
            });
        });
}

exports.find = (req, res) => {
    
}

exports.update = (req, res) => {
    
}

exports.delete = (req, res) => {
    
}