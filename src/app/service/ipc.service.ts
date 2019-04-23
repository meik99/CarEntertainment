import { Injectable } from '@angular/core';
import {IpcRenderer} from 'electron';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IpcService {
  private ipc: IpcRenderer | undefined = void 0;

  constructor() {
    // @ts-ignore
    if (window.require) {
      try {
        // @ts-ignore
        this.ipc = window.require('electron').ipcRenderer;
      } catch (e) {
        console.warn('Electron\'s IPC was not loaded');
      }
    }
  }

  public on(channel: string, listener: Function): void {
    if(this.ipc){
      this.ipc.on(channel, listener);
    }
  }

  public send(channel: string, ...args): void {
    if(this.ipc){
      this.ipc.send(channel, ...args);
    }
  }
}
