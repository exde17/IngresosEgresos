import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { SalidasService } from './salidas.service';
import { CreateSalidaDto } from './dto/create-salida.dto';
import { UpdateSalidaDto } from './dto/update-salida.dto';
import { Auth } from 'src/user/decorator';
import { ValidRoles } from 'src/user/interfaces';

@Controller('salidas')
export class SalidasController {
  constructor(private readonly salidasService: SalidasService) {}

  @Post()
  // @Auth(ValidRoles.admin, ValidRoles.user, ValidRoles.superUser)
  async create(@Body() createSalidaDto: CreateSalidaDto) {
    return this.salidasService.create(createSalidaDto);
  }

  @Get()
  @Auth(ValidRoles.admin, ValidRoles.user, ValidRoles.superUser)
  async findAll() {
    return this.salidasService.findAll();
  }

  @Get(':id')
  @Auth(ValidRoles.admin, ValidRoles.user, ValidRoles.superUser)
  async findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.salidasService.findOne(id);
  }

  @Patch(':id')
  @Auth(ValidRoles.admin, ValidRoles.user, ValidRoles.superUser)
  async update(@Param('id', ParseUUIDPipe) id: string, @Body() updateSalidaDto: UpdateSalidaDto) {
    return this.salidasService.update(id, updateSalidaDto);
  }

  @Delete(':id')
  @Auth(ValidRoles.admin, ValidRoles.user, ValidRoles.superUser)
  async remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.salidasService.remove(id);
  }
}