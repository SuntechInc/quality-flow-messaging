// libs/quality-flow-messaging/src/messaging.module.ts

import { DynamicModule, Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { createKafkaClientOptions } from './kafka.providers';

@Module({})
export class MessagingModule {
  /**
   * Importar este módulo em cada microservice para habilitar Kafka
   * @param config.brokers – ["host:port"]
   * @param config.clientId – nome do cliente (ex: "core-service")
   * @param config.groupId – nome do grupo consumidor
   */
  static forRoot(config: {
    brokers: string[];
    clientId: string;
    groupId:  string;
  }): DynamicModule {
    return {
      module: MessagingModule,
      imports: [
        ClientsModule.register(
          createKafkaClientOptions(
            config.brokers,
            config.clientId,
            config.groupId,
          ),
        ),
      ],
      exports: [ClientsModule],
    };
  }
}
