import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {IpcService} from '../../service/ipc.service';

@Component({
  selector: 'app-music-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.scss']
})
export class ExplorerComponent implements OnInit {
  filenames = [
  ];
  dirnames = [

  ];
  currentlyPlaying: string = null;

  constructor(
    private ipcService: IpcService,
    private changeDetectionRed: ChangeDetectorRef
  ) {
  }

  ngOnInit() {
    this.ipcService.on("musicdir", (event, data) => {
      this.dirnames.push(data);
      this.changeDetectionRed.detectChanges();
    });
    this.ipcService.on("musicfile", (event, data) => {
      this.filenames.push(data);
      this.changeDetectionRed.detectChanges();
    });

    this.ipcService.on("music-current", (event, args) => {
      this.currentlyPlaying = args;
    });

    this.ipcService.send("music");
  }

  play(filename: string) {
    this.ipcService.send("music-play", filename);
    this.currentlyPlaying = filename;

    let filenameIndex = this.filenames.indexOf(filename);

    for(let i = filenameIndex+1; i < this.filenames.length; i++){
      this.ipcService.send("music-queue", this.filenames[i]);
    }
  }
}
