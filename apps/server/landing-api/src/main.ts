import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { NestExpressApplication } from '@nestjs/platform-express'
import { AppConfigService } from '@/config/app/config.service'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)

  const appConfig: AppConfigService = app.get(AppConfigService, {
    strict: false,
  })

  await app.listen(appConfig.port)
}
bootstrap()
