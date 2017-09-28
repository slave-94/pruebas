import { Injectable } from '@angular/core';

@Injectable()

export class RopaService
{
    public nombre_prenda = 'Prenda uno';
    public coleccion_ropa = [];

    prueba()
    {
        return this.nombre_prenda;
    }

    addRopa(elemento)
    {
    	this.coleccion_ropa.push(elemento);
    }

    getRopa()
    {
    	return this.coleccion_ropa;
    }

    removeItem(i)
    {
    	this.coleccion_ropa.splice(i,1);
    }

}