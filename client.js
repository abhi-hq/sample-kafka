const { Kafka } = require('kafkajs')

exports.kafka = new Kafka({
    clientId: "demo-app",
    brokers: ["localhost:9092"],
});
