import { HttpException, HttpStatus, Injectable, InternalServerErrorException } from '@nestjs/common';
import axios, { AxiosError } from 'axios';
import { CrearUsuarioDto } from './dtos/crear-usuario.dto';
import { RespuestaInterface } from './interfaces/respuesta.interfaces';
import { CrearTransaccioneDto } from './dtos/crear-transaccione.dto';


@Injectable()
export class AppService {

    private resExito: RespuestaInterface = {
        "message": ["Proceso Exitoso!!!"],
        "error": "",
        "statusCode": 200
    }

    private resFallo: RespuestaInterface = {
        "message": ["Ups!!!, Algo Salio Mal"],
        "error": "",
        "statusCode": 500
    }

    async getHello() {
        const resp = await axios.get('http://localhost:3000/transacciones/');
        return resp.data;
    }

    async crearUsuario(crearUsuarioDto: CrearUsuarioDto) {

        let response = this.resExito

        try {
            const result = await axios.post('http://localhost:3000/usuarios/', crearUsuarioDto);
            if (result.status !== 201){
                response = this.resFallo
            }
            return response;    
        } catch (error) {
            if (error instanceof AxiosError) {
                const errorMessage = error.response?.data?.message || 'Error desconocido en la API';
                throw new HttpException(errorMessage, error.response?.status || HttpStatus.INTERNAL_SERVER_ERROR);
            } else {
                console.error('Error inesperado:', error);
                throw new InternalServerErrorException('Error inesperado en el servidor');
            }
        }
    }

    async recargarUsuario(crearTransaccioneDto: CrearTransaccioneDto) {

        let response = this.resExito

        try {
            const result = await axios.post('http://localhost:3000/transacciones/', crearTransaccioneDto);
            if (result.status !== 201){
                response = this.resFallo
            }
            return response;    
        } catch (error) {
            if (error instanceof AxiosError) {
                const errorMessage = error.response?.data?.message || 'Error desconocido en la API';
                throw new HttpException(errorMessage, error.response?.status || HttpStatus.INTERNAL_SERVER_ERROR);
            } else {
                console.error('Error inesperado:', error);
                throw new InternalServerErrorException('Error inesperado en el servidor');
            }
        }
    }

}
