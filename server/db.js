const mongoose= require('mongoose')


dburl='mongodb+srv://As_357:e7tF08joaS2NR5h1@cluster0.k4tlh.mongodb.net/Theinternetfolks?authSource=admin&replicaSet=atlas-vwbpyb-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true'

module.exports=()=>{
    return mongoose.connect(dburl)
}