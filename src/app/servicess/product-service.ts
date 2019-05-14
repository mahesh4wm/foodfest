import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class Product{
    constructor(private http: HttpClient){

    }
}