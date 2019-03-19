import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: LoginService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
       // const currentUser = this.authenticationService.getUserName;
        const token = localStorage.getItem('token');
        if (token) {
            request = request.clone({
                setHeaders: {
                  Authorization: `Bearer ${token}`
                }
            });
        }

        return next.handle(request);
    }
}