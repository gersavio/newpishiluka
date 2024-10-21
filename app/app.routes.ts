import { Routes } from '@angular/router';
import { ColorsComponent } from './pages/colors/colors.component';
import { FamilyComponent } from './pages/family/family.component';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { MemoComponent } from './pages/memo/memo.component';
import { HomeComponent } from './pages/home/home.component';
import { UserComponent } from './pages/user/user.component';
import { MenuComponent } from './shared/menu/menu.component';

export const routes: Routes = [
  { path: 'colors', component:ColorsComponent },
  { path: 'family', component:FamilyComponent },
  { path: 'numbers', component:NumbersComponent },
  { path: 'memo', component:MemoComponent },
  { path: 'home', component:HomeComponent },
  { path: 'user', component:UserComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },

];
