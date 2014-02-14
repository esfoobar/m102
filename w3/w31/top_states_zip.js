use cities;

db.zips.aggregate([
    {$group: { _id: "$state", zip_count: { $sum: 1 }}},
    {$sort: {zip_count: -1}},
    {$limit: 5}
])