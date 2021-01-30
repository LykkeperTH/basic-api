import { Module } from '@nestjs/common';
import { TourModule } from './tour/tour.module';

@Module({
  imports: [TourModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
