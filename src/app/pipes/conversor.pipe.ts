import {Pipe,PipeTransform} from '@angular/core';

@Pipe({name:'conversor'})

export class Conversor implements PipeTransform{
	transform(a,b)
	{
		return "Resultado->" + a + "x" + b +": " + (parseInt(a)*parseInt(b));
	}
}