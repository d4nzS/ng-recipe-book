import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, Observable, throwError } from "rxjs";

export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {
  }

  public signup(email: string, password: string): Observable<AuthResponseData> {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA9ho2tkoPtpsTvw_Xd-Ov05PR7lvQ_NWQ',
      {
        email,
        password,
        returnSecureToken: true
      }
    ).pipe(
      catchError(errorRes => {
        let errorMessage = 'An unknown error occurred!';

        if (!errorRes.error || !errorRes.error.error) {
          return throwError(errorMessage);
        }

        if (errorRes.error.error.message === 'EMAIL_EXISTS') {
          errorMessage = 'This email exists already!';
        }

        return throwError(errorMessage);
      })
    );
  }

  public login(email: string, password: string): Observable<AuthResponseData> {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA9ho2tkoPtpsTvw_Xd-Ov05PR7lvQ_NWQ',
      {
        email,
        password,
        returnSecureToken: true
      }
    );
  }
}
