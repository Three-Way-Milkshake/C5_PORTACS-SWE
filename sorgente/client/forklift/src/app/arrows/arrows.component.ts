import { ArrowsService } from './../services/arrows.service';
import { Component, OnInit } from '@angular/core';
import { NgZone } from '@angular/core';

@Component({
  selector: 'app-arrows',
  templateUrl: './arrows.component.html',
  styleUrls: ['./arrows.component.css']
})
export class ArrowsComponent implements OnInit {

  /*
  dir[0] sx
  dir[1] turnaround
  dir[2] dx
  dir[3] start/stop
  */
  dir: boolean[] = [false, false, false, false];

  constructor(private service: ArrowsService, private ngZone: NgZone) {

  }

  ngOnInit() {
    this.service.onNewArrows().subscribe((data) => {
      this.ngZone.run(() => {
        this.updateArrows(String(data));
      });
    });
  }

  updateArrows(data : string) {
    switch (data) {
      case "2":
        this.dir = [false, false, true, false];
        break;
      case "3":
        this.dir = [true, false, false, false];
        break;
      case "1":
        this.dir = [false, true, false, false];
        break;
      case "4":
        this.dir = [false, false, false, false];
        break;
      case "0":
        this.dir = [false, false, false, true];
        break;
    }
  }

}
