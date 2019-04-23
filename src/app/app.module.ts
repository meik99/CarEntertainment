import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MusicComponent } from './music/music.component';
import {IpcService} from './service/ipc.service';
import { ExplorerComponent } from './music/explorer/explorer.component';
import { PlayerComponent } from './music/player/player.component';
import {FormsModule} from '@angular/forms';
import { FloorPipe } from './pipe/floor.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MusicComponent,
    ExplorerComponent,
    PlayerComponent,
    FloorPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    IpcService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
