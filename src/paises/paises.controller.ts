import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Country } from './entities/country.entity';
import { PaisesService } from './paises-service.service';

@Controller('paises')
export class PaisesController {

    constructor(private paisesService: PaisesService) { }

    @Get()
    public getCountries() {
        return this.paisesService.getCountryList();
    }

    @Post()
    public createCountry(@Body() country: Country) {
        this.paisesService.postCountry(country);
        return `This action created #${country.nombre}`;
    }

    @Put()
    public updateCountry(@Body() country: Country) {
        this.paisesService.updateCountry(country)
        return `This action update #${country.nombre}`;
    }

    @Delete(':id')
    public deleteCountry(@Param('id') id: string) {
        this.paisesService.deleteCountry(id);
        return `This action removes a #${id}`;
    }
}
