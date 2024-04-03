const mongoose = require('mongoose')
const connectToDatabase = async () => {
    try{
        await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@users.bmjzbcq.mongodb.net/database?retryWrites=true&w=majority&appName=users`);
        console.log('Banco de dados conectado com sucesso!')
    } catch (error){
        console.log('Erro ao conectar ao banco de dados: ', error)
    }
    
}

module.exports = connectToDatabase;