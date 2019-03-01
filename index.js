var mongoose=require('mongoose');
var schema=require('./schema');

mongoose.connect('mongodb://localhost:27017/test');
var Post=mongoose.model('User2',schema,'users2');

var post=new Post({
    title:'Post1',
    author:'John Smith',
    body:'post1',
    comments:[{body:'post1',date:'12-12-12'}],
    meta: {
        votes:2,
        favs:2
    }
});

Post.find(function(error,docs){
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log(docs);
});

Post.find({author: 'John Smith'},
function(error,docs){
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log(docs);
});

post.save(function(error){
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("Guardado");
    process.exit(0);
});

Post.update({_id:'5c76e35df3528b330ab5fc92'},{$set: {body: 'actualizado!'}},
function(error,docs){
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log(docs);
    process.exit(0);
});

Post.findByIdAndRemove({_id:'5c76e3788d427e3321fb2529'}, function(error,docs){
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log(docs);
    process.exit(0);
});

