import { DisplayModel } from './../models/display.model';
import { Component, OnInit, ModuleWithComponentFactories } from '@angular/core';
import { AdvertiseService } from '../services/advertise.service';
import { callLifecycleHooksChildrenFirst } from '@angular/core/src/view/provider';
import { AspectRatioEnum } from '../services/aspect-ratio.enum';
import { PriceEnum } from '../services/price.enum';

@Component({
  selector: 'app-aspect-ratio',
  providers: [ AdvertiseService ],
  templateUrl: './aspect-ratio.component.html',
  styleUrls: ['./aspect-ratio.component.css']
})
export class AspectRatioComponent implements OnInit {

  displayList: DisplayModel[];
  aspectRatioTypes = AspectRatioEnum;
  pricesType = PriceEnum;
  selectedAspectRatioType: string;
  selectedPriceType: string;
  ar: any;

  constructor(private advertiseService: AdvertiseService) { }

  ngOnInit() {
    this.GetAdvertises(null);
  }

  Aspects(): Array<string> {
    const Aspects = Object.keys(this.aspectRatioTypes);
    return Aspects.slice(Aspects.length / 2);
  }

  Prices(): Array<string> {
    const Prices = Object.keys(this.pricesType);
    return Prices.slice(Prices.length / 2);
  }

  aspectRatioLabel(id: number) {
    if (id === 1) {
      return '16:9';
    }
    return '9:16';
  }

  setAspectRatioType(aspectRatio: string) {
    if (aspectRatio) {
      this.selectedAspectRatioType = aspectRatio;
    }
  }

  calcPrice() {
    const priceType = PriceEnum[this.selectedPriceType];
    this.GetAdvertises(priceType);
  }

  searchAdvertise() {
    const ratioType = AspectRatioEnum[this.selectedAspectRatioType];
    this.GetAdvertises(ratioType);
  }

  GetAdvertises(ratio: number) {
    this.advertiseService.getAdvertises(ratio).subscribe(data => {
      this.displayList = data ? data as DisplayModel[] : [];
    });
  }
}
