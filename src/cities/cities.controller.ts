import { CitiesService } from './cities.service';
import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
// Controller for managing city-related endpoints
@Controller('/cities')
export class CitiesController {
  constructor(public citiesService: CitiesService) {}
  // Endpoint to retrieve all cities
  @Get()
  getAllCities() {
    // Implementation for retrieving all cities
    return this.citiesService.findAllCities();
  }

  // Endpoint to retrieve the latitude and longitude of a specific city
  @Get('/lat-lng/:id')
  getLatLngOfCity(@Param('id') id: number) {
    // Implementation for retrieving city coordinates
    return this.citiesService.findLatLngOfCity(id - 1);
  }

  // Endpoint to retrieve details of a specific city by ID
  @Get('/:id')
  getSingleCity(@Param('id') id: number) {
    // Implementation for retrieving details of a single city
    return this.citiesService.findSingleCity(id - 1);
  }
}
