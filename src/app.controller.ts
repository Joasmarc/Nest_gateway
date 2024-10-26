import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CrearUsuarioDto } from './dtos/crear-usuario.dto';
import { CrearTransaccioneDto } from './dtos/crear-transaccione.dto';

@Controller('api')
export class AppController {
    constructor(private readonly appService: AppService) { }

    @Get()
    getHello(): any {
        return this.appService.getHello();
    }

    @Post('usuarios')
    crearUsuario(@Body() crearUsuarioDto: CrearUsuarioDto) {
        return this.appService.crearUsuario(crearUsuarioDto);
    }

    @Post('recargas')
    recargarUsuario(@Body() crearTransaccioneDto: CrearTransaccioneDto) {
        return this.appService.recargarUsuario(crearTransaccioneDto);
    }
}
