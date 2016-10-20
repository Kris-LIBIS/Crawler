import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {NavbarComponent} from "./components/navbar.component";
import {routing} from "./app.routing";
import {HomeComponent} from "./components/home.component";
import {SingleComponent} from "./components/single.component";
import {RangeComponent} from "./components/range.component";
import {ResolverService} from "./services/resolver.service";
import {ResultListComponent} from "./components/result-list.component";
import {DataTableModule} from "primeng/components/datatable/datatable";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SingleComponent,
    RangeComponent,
    ResultListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    DataTableModule
  ],
  providers: [ResolverService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
