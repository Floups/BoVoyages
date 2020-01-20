import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {VoyageurService} from './voyageur.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuth = false;
  private id = null;

  constructor(private voyageurService: VoyageurService, private router: Router) {
  }

  authentify(n, p) {
    this.voyageurService.getVoyageurs().subscribe(tab => tab.forEach(e => {
        this.isAuth = e.mail === n && e.password === p;
        if (this.isAuth) {
          this.id = e.id;
          this.router.navigate(['album']);
        }
      }
    ));
  }

  unauthentify() {
    this.isAuth = false;
    this.router.navigate(['login']);
  }

  isAuthentified() {
    return this.isAuth;
  }

  getId() {
    return this.id;
  }
}
