import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { ArticleService } from '../services/article.service';
import { authGuard } from '../tools/auth.guard';

export const routes: Routes = [
    {
        path: "",
        loadComponent: () => import('../views/home/home.component').then(m => m.HomeComponent),
        resolve: { // les données à récupérer de façon asynchrone pour la bonne exécution du composant
            articles : () => inject(ArticleService).all()
        }
    },
    {
        path: "editor/:id",
        loadComponent: () => import('../views/editor/editor.component').then(m => m.EditorComponent),
        canActivate: [authGuard]
    },
    {path: "auth", loadChildren: () => authRoutes},
    {path: "**", loadComponent: () => import('../views/not-found/not-found.component').then(m => m.NotFoundComponent)}
];

const authRoutes: Routes = [
    {path: "login", loadComponent: () => import('../views/login/login.component').then(m => m.LoginComponent)},
    {path: "register",  loadComponent: () => import('../views/register/register.component').then(m => m.RegisterComponent)},
    {path: "**", redirectTo: "login"} // path : "**" (wildcards) récupère toutes routes ne correspondant pas aux précédentes 
]