// libs/quality-flow-messaging/src/messaging.interfaces.ts

/** Token de injeção para o ClientKafka */
export const KAFKA_SERVICE_TOKEN = 'KAFKA_SERVICE';

/** Payload básico para eventos de módulo de empresa */
export interface TenantCompanyModuleEvent {
  companyId:  string;
  moduleCode: string;
  segment:    string;
  timestamp:  string;
}
