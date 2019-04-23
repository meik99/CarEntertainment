import { Component } from '@angular/core';
import {IpcService} from './service/ipc.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CarEntertainment';

  constructor(

  ){
    // this.ipc.on('pong', (event) => {
    //   console.log('pong');
    // });
    //
    // this.ipc.send('ping');
  }
}
