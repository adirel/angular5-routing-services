import { HelloComponent } from './hello/hello.component';
import { GoodByeComponent } from './good-bye/good-bye.component';
import { RouterModule, Routes } from '@angular/router';
import { NotexistComponent } from './notexist/notexist.component';


const routes: Routes = [
    { path: 'hello', component: HelloComponent },
    { path: 'goodbye/:name', component: GoodByeComponent },
    { path: '**', component: NotexistComponent },
    {
      path: '',
      redirectTo: '/hello',
      pathMatch: 'full'
    },
  ];

export const routing = RouterModule.forRoot(routes);
