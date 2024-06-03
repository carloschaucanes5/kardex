const {Pool} = require("pg");
const pool = new Pool({
    host:'localhost',
    user:'postgres',
    password:'postgres1',
    database:'ksystem',
    port:'5432'
})
module.exports = {
    pool
}