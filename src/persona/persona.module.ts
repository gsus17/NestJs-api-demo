import { Module } from '@nestjs/common';
import { PersonaController } from './persona.controller';
import { PersonaService } from './persona.service';

@Module({
  imports: [],
  controllers: [PersonaController],
  providers: [PersonaService],
})
export class PersonaModule {}
