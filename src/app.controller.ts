import { Body, Controller, Get, Headers, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CrearUsuarioDto } from './dtos/crear-usuario.dto';
import { CrearTransaccioneDto } from './dtos/crear-transaccione.dto';
import { ConfirmarTransaccionesDto } from './dtos/confirmar-transaccione.dto';

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

    @Post('pagar')
    pagarUsuario(@Body() crearTransaccioneDto: CrearTransaccioneDto) {
        return this.appService.pagarUsuario(crearTransaccioneDto);
    }

    @Post('confirmar')
    confirmarUsuario(@Body() confirmarTransaccionesDto: ConfirmarTransaccionesDto, @Headers('authorization') headeers) {
        return this.appService.confirmarUsuario(confirmarTransaccionesDto, headeers);
    }

    @Get('saldos/:documento')
    consultarSaldo(@Param('documento') documento: String) {
        return this.appService.consultarSaldo(documento);
    }
}
