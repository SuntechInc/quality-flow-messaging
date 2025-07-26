import { ClientsModuleOptions } from '@nestjs/microservices';
export declare function createKafkaClientOptions(brokers: string[], clientId: string, groupId: string): ClientsModuleOptions;
