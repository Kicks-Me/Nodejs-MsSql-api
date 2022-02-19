let config = require('./dbconfig');
const sql = require('mssql');

async function getOrder() {
    try {

        let pool = await sql.connect(config);
        let resultData = await pool.request().query("SELECT * FROM tblOrders");

        return resultData.recordsets;

    } catch (error) {
        console.log(error);
    }
}

async function getSingleOrder(Id_) {
    try {

        let pool = await sql.connect(config);
        let resultData = await pool.request()
            .input('input_parameter', sql.Int, Id_)
            .query('SELECT * FROM tblOrders WHERE Id = @input_parameter');

        return resultData.recordsets;

    } catch (error) {
        console.log(error);
    }
}

async function postOrder(post) {
    try {

        let pool = await sql.connect(config);
        let resultData = await pool.request()
            .input('Id', sql.Int, post.Id)
            .input('Title', sql.NVarChar, post.Title)
            .input('Qty', sql.Int, post.Qty)
            .input('Message', sql.NVarChar, post.Message)
            .input('City', sql.NVarChar, post.City)
            .execute('InsertPost');//Execute by storeprocedure

        return resultData.recordsets;

    } catch (error) {
        console.log(error);
    }
}



module.exports = {
    getOrder:           getOrder,
    getSingleOrder: getSingleOrder,
    postOrder:      postOrder
}