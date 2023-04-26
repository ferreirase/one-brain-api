import { Module } from '@nestjs/common';
import { HeroModule } from './modules/hero.module';

@Module({
  imports: [HeroModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
