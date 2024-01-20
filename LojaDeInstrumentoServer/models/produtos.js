const mongoose = require('./database');
const objectId = mongoose.Types.ObjectId;

const { Schema } = mongoose;


const ProdutosSchema = new Schema({
    nome_produto: {
        type: String,
        required: true
    },
    preco: {
        type: Number,
        required: true
    },
    categoria: { 
        type: String,
        default: true
    },
    ativo: { 
        type: Boolean,
        default: true
    }
});

const Produto = mongoose.model('Produtos', ProdutosSchema);

module.exports = Produto;