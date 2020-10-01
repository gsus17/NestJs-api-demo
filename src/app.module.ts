import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaisesModule } from './paises/paises.module';
import { PersonaModule } from './persona/persona.module';

@Module({
  imports: [PaisesModule, PersonaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
