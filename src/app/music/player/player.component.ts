import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {IpcService} from '../../service/ipc.service';

@Component({
  selector: 'app-music-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit, OnChanges {
  private _currentlyPlaying = "";
  private _currentTime = 0;
  private _fullTime = 300;
  private _playStatus = "paused";
  private _currentVolume = 50;
  private _maxVolume = 100;

  constructor(
    private ipcService: IpcService
  ) {
  }

  ngOnInit() {
    this.ipcService.send("music-volume", this.currentVolume);

    this.ipcService.on("music-time-pos", (event, args) => {
      this.currentTime = args;
    });

    this.ipcService.on("music-length", (event, args) => {
      this.fullTime = args;
    });

    this.ipcService.on("music-current", (event, args) => {
      this.currentlyPlaying = args
    });

    this.ipcService.on("music-status", (event, args) => {
      this.playStatus = args ? "paused" : "playing";
    });

    setInterval(() => {
      if(this.playStatus === "playing") {
        this.ipcService.send("music-time-pos");
        this.ipcService.send("music-volume", this.currentVolume);
        this.ipcService.send("music-current");
      }
      this.ipcService.send("music-status");
    }, 200);

    this.ipcService.send("music-length");
  }

  ngOnChanges(changes: SimpleChanges): void {
    const buttonPlay = document.getElementById("buttonPlay");
    // @ts-ignore
    componentHandler.upgradeElement(buttonPlay);
  }


  get currentlyPlaying(): string {
    return this._currentlyPlaying;
  }

  set currentlyPlaying(value: string) {
    this._currentlyPlaying = value;
  }

  get currentTime(): number {
    return this._currentTime;
  }

  set currentTime(value: number) {
    this._currentTime = value;
  }

  get fullTime(): number {
    return this._fullTime;
  }

  set fullTime(value: number) {
    this._fullTime = value;
  }

  get playStatus(): string {
    return this._playStatus;
  }

  set playStatus(value: string) {
    this._playStatus = value;
  }

  get currentVolume(): number {
    return this._currentVolume;
  }

  set currentVolume(value: number) {
    this._currentVolume = value;
  }

  get maxVolume(): number {
    return this._maxVolume;
  }

  set maxVolume(value: number) {
    this._maxVolume = value;
  }

  togglePlayStatus(){
    setTimeout(() => {
      if (this.playStatus === 'playing') {
        this.playStatus = 'paused';
        this.ipcService.send("music-play-pause");
      } else {
        this.playStatus = 'playing';
        this.ipcService.send("music-play-pause");
      }
      setTimeout(() => {
        const buttonPlay = document.getElementById("buttonPlay");
        // @ts-ignore
        componentHandler.upgradeElement(buttonPlay);
      }, 100);
    }, 300);
  }

  previous() {
    this.ipcService.send("music-previous");
  }

  next() {
    this.ipcService.send("music-next");
  }

  seek() {
    this.ipcService.send("music-seek", this.currentTime);
  }
}
