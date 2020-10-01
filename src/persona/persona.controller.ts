import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Persona } from './entities/persona.entity';
import { PersonaService } from './persona.service';

@Controller('persona')
export class PersonaController {
    constructor(private personaService: PersonaService) { }

    @Get()
    public getPersona() {
        return this.personaService.getPersonaList();
    }

    @Post()
    public createPersona(@Body() persona: Persona) {
        this.personaService.postPersona(persona);
        return `This action created #${persona.nombreCompleto}`;
    }

    @Put()
    public updatePersona(@Body() persona: Persona) {
        this.personaService.updatePersona(persona)
        return `This action update #${persona.nombreCompleto}`;
    }

    @Delete(':id')
    public deletePersona(@Param('id') id: string) {
        this.personaService.deletePersona(id);
        return `This action removes a #${id}`;
    }
}
