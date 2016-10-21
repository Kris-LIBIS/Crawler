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
import {ContextMenuModule} from "primeng/components/contextmenu/contextmenu";
import {SafePipe} from "./pipes/safe.pipe";
import {ButtonModule} from "primeng/components/button/button";
import {ProgressBarModule} from "primeng/components/progressbar/progressbar";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SingleComponent,
    RangeComponent,
    ResultListComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    DataTableModule,
    ContextMenuModule,
    ButtonModule,
    ProgressBarModule
  ],
  providers: [ResolverService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
