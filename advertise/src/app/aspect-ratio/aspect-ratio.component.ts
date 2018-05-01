import { DisplayModel } from './../models/display.model';
import { Component, OnInit, ModuleWithComponentFactories } from '@angular/core';
import { AdvertiseService } from '../services/advertise.service';
import { callLifecycleHooksChildrenFirst } from '@angular/core/src/view/provider';
import { AspectRatioEnum } from '../services/aspect-ratio.enum';

@Component({
  selector: 'app-aspect-ratio',
  providers: [ AdvertiseService ],
  templateUrl: './aspect-ratio.component.html',
  styleUrls: ['./aspect-ratio.component.css']
})
export class AspectRatioComponent implements OnInit {

  displayList: DisplayModel[];
  aspectRatioDisplayTypes = AspectRatioEnum;
  ar: any;

  constructor(private advertiseService: AdvertiseService) { }

  ngOnInit() {
    this.GetAdvertises(null);
    console.log(this.aspectRatioDisplayTypes);
  }

  keys(): Array<string> {
    const keys = Object.keys(this.aspectRatioDisplayTypes);
    return keys.slice(keys.length / 2);
  }

  aspectRatioLabel(id: number) {
    if (id === 1) {
      return '16:9';
    }
    return '9:16';
  }

  GetAdvertises(ratio: AspectRatioEnum) {
    this.advertiseService.getAdvertises(ratio).subscribe(data => {
      this.displayList = data ? data as DisplayModel[] : [];
    });
  }
}
