const {kafka} = require('./client')

async function init(){
    const admin = kafka.admin();
    console.log("Admin connecting..");
    admin.connect();
    console.log("Connected..");
    
    await admin.createTopics({
        topics: [
            {
                topic:"rider-updates",
                numPartitions:2,
            },
        ],
    });
    console.log("Topic Created [rider-updates]");
    await admin.disconnect();
}

init();