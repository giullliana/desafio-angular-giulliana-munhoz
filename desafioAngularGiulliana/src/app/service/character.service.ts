import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character } from '../model/character.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import {Md5} from 'ts-md5/dist/md5';

@Injectable({
    providedIn: 'root'
})
export class CharacterService {

    constructor(private http: HttpClient) { }
    getAllCharacters(): Observable<any> {
        const ts = new Date().getTime()
        const hash = Md5.hashStr(ts+environment.privateKey+environment.publicKey)
        const url = `https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${environment.publicKey}&hash=${hash}`
        console.log(url)
        return this.http.get<Character[]>(url)
    }

    getCharacterById(id: number) : Observable<Character>{
        const ts = new Date().getTime()
        const hash = Md5.hashStr(ts+environment.privateKey+environment.publicKey)
        const url = `https://gateway.marvel.com:443/v1/public/characters/${id}?ts=${ts}&apikey=${environment.publicKey}&hash=${hash}`
        console.log(url)
        return this.http.get<Character>(url)  
    }
}

