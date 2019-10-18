function inventory (req, res){
    const {image_url, product_name, price} = req.body;
    const db = req.app.get("db");
    db.get_inventory(image_url, product_name, price)
    .then((result) => {
        res.status(200).json(result)
        console.log("got it")
    })
    .catch(() => {
        res.status(500).json("Errrorororos")
    })
    }

function createProduct(req, res){
    const {image_url, product_name, price} = req.body;
    const db = req.app.get("db");
    db.create_product(image_url, product_name, price)
    .then(() => {
        res.sendStatus(200)
        console.log("got iett")
    })
    .catch(() => {
        res.status(500).json("Errrorororos")
    })
    }

function deleteProduct(req, res){
    console.log("delete")
}

module.exports = {
    inventory,
    createProduct,
    deleteProduct
}