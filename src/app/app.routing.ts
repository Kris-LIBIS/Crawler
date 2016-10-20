import {Routes, RouterModule} from "@angular/router";
import {SingleComponent} from "./components/single.component";
import {RangeComponent} from "./components/range.component";
import {HomeComponent} from "./components/home.component";

const ROUTES: Routes = [
  {path: 'single', component: SingleComponent},
  {path: 'range', component: RangeComponent},
  {path: '', component: HomeComponent}
];

export const routing = RouterModule.forRoot(ROUTES);
