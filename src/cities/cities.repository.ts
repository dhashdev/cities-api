import { readFile } from 'fs/promises';
import { NotFoundException } from '@nestjs/common';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CitiesRepository {
  async findAllCities() {
    try {
      const contents = await readFile('cities.json', 'utf8');
      const cities = JSON.parse(contents);
      return cities;
    } catch (error) {
      console.error('Error reading or parsing cities.json:', error);
      throw error; // Optionally rethrow the error or handle it appropriately
    }
  }

  async findSingleCity(id: number) {
    try {
      const contents = await readFile('cities.json', 'utf8');
      const cities = JSON.parse(contents);

      // Check if the provided id is within the valid range
      if (id >= 0 && id < cities.cities.length) {
        return cities.cities[id];
      } else {
        throw new NotFoundException(`City with ID ${id} not found`);
      }
    } catch (error) {
      console.error('Error reading or parsing cities.json:', error);
      throw error; // Optionally rethrow the error or handle it appropriately
    }
  }

  async findLatLngOfCity(id: number) {
    try {
      const contents = await readFile('cities.json', 'utf8');
      const cities = JSON.parse(contents);

      // Check if the provided id is within the valid range
      if (id >= 0 && id < cities.cities.length) {
        const city = cities.cities[id];
        const { latitude, longitude } = city;
        return { latitude, longitude };
      } else {
        throw new NotFoundException(`City with ID ${id} not found`);
      }
    } catch (error) {
      console.error('Error reading or parsing cities.json:', error);
      throw error; // Optionally rethrow the error or handle it appropriately
    }
  }
}
