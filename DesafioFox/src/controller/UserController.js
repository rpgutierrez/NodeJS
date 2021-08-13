const User = require('../model/User')

module.exports = {
    async index(req,res){
        const user = await User.find()
        res.json(user)
    },

    async busca(req,res){
        const {_id} = req.params
        const user = await User.findOne({_id})
        res.json(user)
    },
    async deleta(req,res){
        const {_id} = req.params
        const user = await User.findOneAndDelete({_id})
        res.json(user)
    },

    async salvar(req,res){
        
        try{
            const {nome, telefone, email, senha, usuario} = req.body;

            let dataCreate = {}

            dataCreate = {
                nome, telefone, email, senha, usuario
            }
            const user = await User.create(dataCreate);
            res.json(user)

        }catch(err){
            return res.status(400).send({ error: 'usuário já cadastrado'})
        } 
       
    },

    async atualizar(req,res){
        try{
            const {_id, nome, telefone, email, senha, usuario} = req.body;

            let dataCreate = {}

            dataCreate = {
                _id, nome, telefone, email, senha, usuario
            }
            const user = await User.findByIdAndUpdate({_id}, dataCreate, {new: true});
            res.json(user)
        
        }catch(err){
            return res.status(400).send({ error: 'usuário já cadastrado'})
        } 
       
    }
}