const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const app = require('../server');
chai.use(chaiHttp);
let api = chai.request('http://localhost:1208');
let server;

describe('Server tests', function () {

    before(function (done) {
        server = app.listen(1208, function () {
            console.log("Server is up and running at 1208!");
            done();
        })
    })

    it('should return 200 status code', function (done) {

        api.post('/ctof').send({
            temp: 95
        }).end(function (err, res) {
            if (err) throw err;
            assert.equal(res.status, 200);
            done();
        })

    })

    it('should return 400', function (done) {


        api.post('/ctof').send({
            temp: "abc"
        }).end(function (err, res) {
            if (err) throw err;
            assert.equal(res.status, 400);
            done();
        })
    })

    after(function () {
        server.close();
    })

})