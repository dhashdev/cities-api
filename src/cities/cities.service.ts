import { CitiesRepository } from 'src/cities/cities.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CitiesService {
  constructor(public citiesRepo: CitiesRepository) {}

  // Retrieve and return all cities
  findAllCities() {
    return this.citiesRepo.findAllCities();
  }

  // Retrieve and return details of a single city by ID
  findSingleCity(id: number) {
    return this.citiesRepo.findSingleCity(id);
  }

  // Retrieve and return latitude and longitude of a single city by ID
  findLatLngOfCity(id: number) {
    return this.citiesRepo.findLatLngOfCity(id);
  }
}
