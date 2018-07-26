import { Routes } from '@angular/router';

import { BookHomeComponent } from '../../books/components/book-home/book-home.component';
import { BookListComponent } from '../../books/components/book-list/book-list.component';


export const routes: Routes = [
    {
        path: 'books',
        component:BookHomeComponent,
        children: [
            {
                path:'list',
                component: BookListComponent
            },
            {
                path:'**',
                redirectTo: 'list'
            }
        ]
    },
    {
        path:'**',
        redirectTo: 'books'
    }
];
