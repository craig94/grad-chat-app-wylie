import { Injectable } from '@angular/core';
import { User } from '../objects/user';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {
    constructor (private http: Http) {}

    private url = "/api/user";
    private uriUrl = "/api/oauth/uri";

    getUser(): Promise<User> {
        return this.http.get(this.url)
        .toPromise()
        .then(response => response.json())
        .catch(this.handleError);
    }

    getUsers(): Promise<User[]> {
        return this.http.get(this.url + "s")
        .toPromise()
        .then(response => response.json())
        .catch(this.handleError);
    }

    getUri(): Promise<any> {
        return this.http.get(this.uriUrl)
        .toPromise()
        .then(response => response.json())
        .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
}
