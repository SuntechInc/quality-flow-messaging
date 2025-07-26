# @qualityflow/messaging

Biblioteca de mensageria Kafka para NestJS.

## Instalação

```bash
npm install @qualityflow/messaging
```

## Uso

### 1. Importe o módulo no seu AppModule

```typescript
import { Module } from '@nestjs/common';
import { MessagingModule } from '@qualityflow/messaging';

@Module({
  imports: [
    MessagingModule.forRoot({
      brokers: ['localhost:9092'],
      clientId: 'my-service',
      groupId: 'my-service-group',
    }),
  ],
})
export class AppModule {}
```

### 2. Use o cliente Kafka nos seus serviços

```typescript
import { Injectable, Inject } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { KAFKA_SERVICE_TOKEN } from '@qualityflow/messaging';

@Injectable()
export class MyService {
  constructor(
    @Inject(KAFKA_SERVICE_TOKEN)
    private readonly kafkaClient: ClientKafka,
  ) {}

  async sendMessage(topic: string, message: any) {
    return this.kafkaClient.emit(topic, message);
  }
}
```

## Configuração

| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| `brokers` | `string[]` | Array de brokers Kafka (ex: `['localhost:9092']`) |
| `clientId` | `string` | ID do cliente Kafka |
| `groupId` | `string` | ID do grupo consumidor |

## Desenvolvimento

```bash
# Instalar dependências
pnpm install

# Compilar a biblioteca
pnpm run build

# Executar testes
pnpm test
``` 