import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTourDto } from './dtos/create-tour-dto';
import { TourService } from './tour.service';

@Controller('tour')
export class TourController {
  constructor(private readonly tourService: TourService) {}

  @Get()
  getTour() {
    return this.tourService.getTours;
  }
  @Post()
  CreateTour(@Body() CreateTourDto: CreateTourDto) {
    return CreateTourDto;
  }
}
