import { DisplayModel } from './../models/display.model';
import { Component, OnInit, ModuleWithComponentFactories } from '@angular/core';
import { AdvertiseService } from '../services/advertise.service';
import { callLifecycleHooksChildrenFirst } from '@angular/core/src/view/provider';

@Component({
  selector: 'app-aspect-ratio',
  providers: [ AdvertiseService ],
  templateUrl: './aspect-ratio.component.html',
  styleUrls: ['./aspect-ratio.component.css']
})
export class AspectRatioComponent implements OnInit {

  displayList: DisplayModel[];

  constructor(private advertiseService: AdvertiseService) { }

  ngOnInit() {
    this.GetAdvertises();
  }

  GetAdvertises() {
    this.advertiseService.getAdvertises(null).subscribe(data => {
      this.displayList = data ? data as DisplayModel[] : [];
      console.log(this.displayList);
    });
  }
}
