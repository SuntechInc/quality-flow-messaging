import { DynamicModule } from '@nestjs/common';
export declare class MessagingModule {
    static forRoot(config: {
        brokers: string[];
        clientId: string;
        groupId: string;
    }): DynamicModule;
}
