const mongoose = require('mongoose');
const config = require('config');
mongoose.set('debug', true);

async function connectMongo() {

    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    };

    await mongoose.connect(config.MONGODB_URI, options).then(
        () => console.log('Mongodb is up and running.')
    ).catch(
        error => console.log('Mongo Error', { error })
    );

}

module.exports = async () => {
    await connectMongo();
}