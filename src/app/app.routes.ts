import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Address } from './pages/address/address';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'address',
        component: Address
    },
    {
        path: '**', 
        redirectTo: ''
    }
];