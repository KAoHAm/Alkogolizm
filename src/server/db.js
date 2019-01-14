var mongo=require('mongodb').MongoClient;
var mongoose = require('mongoose')
const Schema=mongoose.Schema;

const person= new Schema({
        name: "",
        gender: "",
        date:"",
        alcohol:"",
        cup: ""
    } , {
    versionKey: false,
},
);

const Alc=mongoose.model("alcohol", person)


exports.setUpConnection=()=> {

    console.log("connecting...")
    mongoose.connect(`mongodb://localhost/alcohol`);

}

exports.GetTodo=()=>{
    console.log("Get Todo")
    return Alc.find()
}

exports.Count=(i)=>{
    return  i=Alc.countDocuments()
}

exports.PostTodo=(data)=> {
    const alc=new Alc({
        name: data.person.name,
        gender:  data.person.gender,
        date: data.person.date,
        alcohol: data.person.alcohol,
        cup: data.person.cup
        })
    console.log("Post todo")
    return alc.save()

}



