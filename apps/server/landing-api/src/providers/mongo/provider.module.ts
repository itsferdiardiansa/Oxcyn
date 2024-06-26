import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { MongoDBConfigService } from '@/config/database/mongo/config.service'
import { GlobalConfigModule } from '@/config/config.module'

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [GlobalConfigModule],
      inject: [MongoDBConfigService],
      useFactory: async (mongoDBConfigService: MongoDBConfigService) => {
        return {
          dbName: mongoDBConfigService.name,
          uri: mongoDBConfigService.host,
          w: 'majority',
          retryAttempts: 2,
          retryWrites: true,
        }
      },
    }),
  ],
})
export class MongoDBProviderModule {}
