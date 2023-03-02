const mongodb = require("mongodb");
// require("dotenv").configure();
const url = "mongodb://localhost:27017";
const client = new mongodb.MongoClient(url);

/**
 * connecting to mongodb and running find queries on socialApp db
 */

async function run() {
    try {
        // connecting to client: sending connection request
        await client.connect();
        // selecting the users collection
        const UserCollection = client.db("socialApp").collection("users");
        // finding the user collections
        const cursor = UserCollection.find({});
        console.log(cursor);
        // iterating over the cursor
        await cursor.forEach((docs) => {
            console.log(docs);
        });
        // till here
        console.log("Aggregation query");
        // creating an aggregate query
        const aggregate = UserCollection.aggregate([
            {
                $lookup: {
                    from: "posts",
                    localField: "username",
                    foreignField: "username",
                    as: "user_posts",
                    pipeline: [
                        { $project: { content: 1} },
                        { $addFields: { postid: { $toString: "$_id" } } },
                    ]
                }
            }
        ])
    }
    catch (e) {
        console.error(e);
      } finally {
        await client.close();//wait
      }
}