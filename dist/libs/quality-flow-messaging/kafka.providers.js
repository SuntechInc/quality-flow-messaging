"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createKafkaClientOptions = createKafkaClientOptions;
const microservices_1 = require("@nestjs/microservices");
const messaging_interface_1 = require("./messaging.interface");
function createKafkaClientOptions(brokers, clientId, groupId) {
    return [{
            name: messaging_interface_1.KAFKA_SERVICE_TOKEN,
            transport: microservices_1.Transport.KAFKA,
            options: {
                client: { brokers, clientId },
                consumer: { groupId },
            },
        }];
}
//# sourceMappingURL=kafka.providers.js.map