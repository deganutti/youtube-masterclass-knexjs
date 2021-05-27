
const knex = require('../database')

module.exports = {
    async index(req, res, next) { 
        try {
            const { page = 1 } = req.query;
            
            const cArtigo1 = knex('cliente') 
            .offset((page - 1) * 5)

            const artigo1Obj = knex('cliente').count()
            const results = await cArtigo1

            const [count] = await artigo1Obj 
            res.header('X-Total-Count', count["count"]) 
            
            return res.json(results)
        } catch (error) {
            next(error)
        }
    },
     
}