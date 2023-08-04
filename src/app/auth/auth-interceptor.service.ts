import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
import { AuthService } from "./auth.service";
import { exhaustMap, take } from "rxjs/operators";

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
	constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
		return this.authService.user.pipe(
			take(1), // take 1 value from the observable and then unsubscribe
			exhaustMap(user => { // exhaustMap waits for the first observable to complete and then replaces it with the second observable
				if (!user) {
					return next.handle(req);
				}
				const modifiedReq = req.clone({
					params: new HttpParams().set('auth', user.token)
				});
				return next.handle(modifiedReq);
			})
		);
	}
}