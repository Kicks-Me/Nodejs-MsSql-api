let dboperations = require('./dboperations');
let Order = require('./order');

let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors');
let app = express();
let router = express.Router();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);

router.use((req, res, next) => {
    console.log('Middleware');
    next();
})

router.route('/orders').get((req, res) => {
    // console.log(result);
    dboperations.getOrder().then(result => {
        res.json(result[0]);
    })
})

router.route('/orderSingle/:id').get((req, res) => {
    // console.log(result);
    dboperations.getSingleOrder(req.params.id).then(result => {
        res.json(result[0]);
    })
})

router.route('/postOrder').post((req, res) => {

    let order = {...req.body}
    dboperations.postOrder(order).then(result => {
        res.status(201).json(result);
    })
})

let port = process.env.PORT || 8090;
app.listen(port, () => {
    console.log(`App is running on port ${ port }`);
});


// dboperations.getOrder().then(result => {
//     console.log(result);
// })