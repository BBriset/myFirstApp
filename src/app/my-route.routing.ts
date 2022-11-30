import { Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfilComponent } from './user-profil/user-profil.component';

const routes: Routes = [
  { path: 'sign-up', component: SignUpComponent },
  { path: 'user-profil', component: UserProfilComponent },
  { path: '', component: UserProfilComponent },
];

export { routes };
