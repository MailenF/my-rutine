import {  Injectable } from '@angular/core';
import {
  Auth,
  authState,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  user,
  User
} from "@angular/fire/auth";
import { ErrorResponse } from "../models/errorResponse";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //
  constructor(private auth: Auth, private router: Router) {
    // this.singOut();
  }

  get userState$() {
    return authState(this.auth);
  }

  async signUp(email: string, password: string): Promise<void> {
    try {
      const { user } = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      await this.sendEmailVerification(user);
      this.router.navigate(['/email-verified']);
    } catch (error: unknown) {
      const { code, message } = error as ErrorResponse;
      console.log('Code ', code);
      console.log('Message ', message);
    }
  }

  async signIn(email: string, password: string): Promise<void> {
    try {
      const { user } = await signInWithEmailAndPassword(this.auth, email, password);
      this.checkUserIsVerified(user);
    } catch (error: unknown) {
      const { code, message } = error as ErrorResponse;
      console.log('Code ', code);
      console.log('Message ', message);
    }
  }

  async signOut(): Promise<void> {
    try {
      await this.auth.signOut();
    } catch (error: unknown) {
      console.log(error);
    }
  }

  async sendEmailVerification(user: User): Promise<void> {
    try {
      await sendEmailVerification(user);
    } catch (error: unknown) {
      console.log(error);
    }
  }
  async sendPasswordResetEmail(email: string): Promise<void> {
    try {
      await sendPasswordResetEmail(this.auth, email);
    } catch (error: unknown) {
      console.log(error);
    }
  }


  private checkUserIsVerified(user: User): void {
    const route = user.emailVerified ? '' : '/email-verified';
    this.router.navigate([route]);
  }
}
