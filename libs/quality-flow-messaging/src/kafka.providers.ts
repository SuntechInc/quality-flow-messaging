// libs/quality-flow-messaging/src/kafka.providers.ts

import { ClientsModuleOptions, Transport } from '@nestjs/microservices';
import { KAFKA_SERVICE_TOKEN } from './messaging.interface';

/**
 * Gera a configuração para ClientsModule.register()
 */
export function createKafkaClientOptions(
  brokers: string[],
  clientId: string,
  groupId: string,
): ClientsModuleOptions {
  return [{
    name:    KAFKA_SERVICE_TOKEN,
    transport: Transport.KAFKA,
    options: {
      client:   { brokers, clientId },
      consumer: { groupId },
    },
  }];
}
