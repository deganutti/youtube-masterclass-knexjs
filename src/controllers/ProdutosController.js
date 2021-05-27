const knex = require('../database')

module.exports = {
    async index(req, res, next) { 
        try {
            const { page = 1 } = req.query;
            
            const cArtigo1 = knex('view_total_importado_produtos') 
            .offset((page - 1) * 5)

            const artigo1Obj = knex('view_total_importado_produtos').count()
            const results = await cArtigo1

            const [count] = await artigo1Obj 
            res.header('X-Total-Count', count["count"]) 
            
            return res.json(results)
        } catch (error) {
            next(error)
        }
    },
    async create(req, res, next){
        try {
            const { artigo1 } = req.body
            await knex('artigo1').insert({
                codart
            })
            return res.status(201).send()
        } catch (error) {
            next(error)
        } 
    }     
}