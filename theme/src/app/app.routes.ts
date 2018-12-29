import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EcommerceComponent } from './components/ecommerce/ecommerce.component';


const RUTAS: Routes = [
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'ecommerce', component: EcommerceComponent },
	{ path: '**', pathMatch: 'full', redirectTo: 'dashboard' }
];

export const APP_ROUTES = RouterModule.forRoot( RUTAS );