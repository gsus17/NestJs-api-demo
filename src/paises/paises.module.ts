import { Module } from '@nestjs/common';
import { PaisesService } from './paises-service.service';
import { PaisesController } from './paises.controller';

@Module({
  imports: [],
  controllers: [PaisesController],
  providers: [PaisesService],
})
export class PaisesModule {}
