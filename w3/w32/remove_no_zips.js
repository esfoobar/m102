use cities;

db.zips.aggregate([
    { $project : { _id : { $substr : ["$_id",0,1] } } } , 
    { $group : { _id : "$_id", n : {$sum:1} } }
])

// db.zips.find({city: {$in: ['0','1','2','3','4','5','6','7','8','9']}})
db.zips.find({city: /^[0-9].*/ });

db.zips.remove({city: /^[0-9].*/ })