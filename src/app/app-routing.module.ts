import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NormalUserPageComponent } from './pages/normal-user-page/normal-user-page.component';

const routes: Routes = [
    {
        path: '',
        component: NormalUserPageComponent,
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
