const mongoose = require('mongoose')

mongoose
    .connect(
        'mongodb+srv://fseymortier:zHHJAUhkF3BqFZeb@cluster0.j250a.mongodb.net/Cluster0?retryWrites=true&w=majority',
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'))
