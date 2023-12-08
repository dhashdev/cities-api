import { Module } from '@nestjs/common';
import { CitiesController } from './cities.controller';
import { CitiesRepository } from 'src/cities/cities.repository';
import { CitiesService } from 'src/cities/cities.service';
// Module for managing city-related functionality
@Module({
  // Controllers included in the module
  controllers: [CitiesController],
  providers: [CitiesService, CitiesRepository],
})
export class CitiesModule {}
