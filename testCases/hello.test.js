const request = require('supertest') 
const app = require('../app')

test ('test that PASSES for the right reasons', async () => {
 await request(app).post('/').send({
        message:'hello'
    }).expect(200)
})


test (' test that FAILS for the right reasons', async () => {
    await request(app).post('/').send({
       }).expect(200)
   })

   



