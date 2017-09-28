import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class PeticionesService {
	public url: string;
	public url_users: string;
	public url_insert_user: string;
	public url_login: string;

	constructor(private _http: Http) {
		this.url = "https://jsonplaceholder.typicode.com/photos";
		this.url_users = "http://192.168.0.28:3789/api/getusers"
		this.url_insert_user = "http://192.168.0.28:3789/api/register";
		this.url_login = "http://192.168.0.28:3789/api/login";
	}

	greet() {
		return 'Hellow world';
	}

	getPhotos() {
		return this._http.get(this.url).map(res => res.json());
	}

	//OBTENER DATOS POR GET
	getUsers() {
		return this._http.get(this.url_users).map(res => res.json());
	}

	//ENVIAR DATOS POR POST
	insertUser(data) {
		let json = JSON.stringify(data);
		//let params = /*'json=' +*/ json;
		let headers = new Headers({ 'Content-Type': 'application/json' });//x-www-form-urlencoded'});

		return this._http.post(this.url_insert_user, json, { headers: headers }).map(res => res.json());
	}

	//LOGIN POR POST ENVIANDO PARAMETRO EMAIL Y PASSWORD
	/*
	login(data) {
		let json = JSON.stringify(data);
		let headers = new Headers({ 'Content-Type': 'application/json' });

		return this._http.post(this.url_login, json, { headers: headers }).map(res => res.json());
	}
	*/

	//LOGIN
	login(data, gettoken=null)
	{
		if(gettoken != null)
		{
			data.gettoken = gettoken;
		}
		let params = JSON.stringify(data);
		let headers = new Headers({ 'Content-Type': 'application/json' });

		//localStorage.setItem('id', JSON.stringify(params));

		return this._http.post(this.url_login, params, { headers: headers }).map(res => res.json());
	}

	getId()
	{
		let id = JSON.parse(localStorage.getItem('id'));
		
		if(id != 'undefined')
		{
			//INICIAR MODELO
			//console.log('getId()[parsed]->'+id.name);
		}
		else{
			id = null;
		}	
		return id;
	}

	getToken()
	{
		let token = localStorage.getItem('token');
		if(token != 'undefined')
		{

		}
		else{
			token = null;
		}
		return token;
	}

}
