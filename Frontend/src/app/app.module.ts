import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideMenuComponent } from './mainComponents/side-menu/side-menu.component';
import { ContentComponent } from './mainComponents/content/content.component';
import { ButtonComponent } from './subComponents/button/button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { DegiroComponent } from './pagesComponents/degiro/degiro.component';
import { BondoraComponent } from './pagesComponents/bondora/bondora.component';
import {MatInputModule} from '@angular/material/input';
import { HomeComponent } from './pagesComponents/home/home.component';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './subComponents/card/card.component';
import { PlatformService } from './services/platform.service';
import { TableComponent } from './subComponents/table/table.component';
import {MatTableModule} from '@angular/material/table'; 

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    ContentComponent,
    ButtonComponent,
    DegiroComponent,
    BondoraComponent,
    HomeComponent,
    CardComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatInputModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,
    MatTableModule
  ],
  providers: [PlatformService],
  bootstrap: [AppComponent]
})
export class AppModule { }
