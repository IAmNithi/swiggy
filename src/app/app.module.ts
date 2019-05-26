import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { FoodcardComponent } from './component/foodcard/foodcard.component';
import { FoodbannerComponent } from './component/foodbanner/foodbanner.component';
import { AdbannerComponent } from './component/adbanner/adbanner.component';
import { ButtonComponent } from './atomic/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FoodcardComponent,
    FoodbannerComponent,
    AdbannerComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
