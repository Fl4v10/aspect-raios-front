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
  priceTypes = PriceEnum;
  selectedAspectRatioType: string;
  selectedPriceType: string;
  amount: number;
  arValue: string;
  ptValue: string;
  onSubmit: any;

  constructor(private advertiseService: AdvertiseService) { }

  ngOnInit() {
    this.GetAdvertises(null);
  }

  Aspects(): Array<string> {
    const Aspects = Object.keys(this.aspectRatioTypes);
    return Aspects.slice(Aspects.length / 2);
  }

  Prices(): Array<string> {
    const Prices = Object.keys(this.priceTypes);
    return Prices.slice(Prices.length / 2);
  }

  Sum() {
    this.searchAdvertise();
    let aux = 0;
    for (let i = 0; i < this.displayList.length; i++) {
      const element = this.displayList[i];
      if (PriceEnum[this.selectedPriceType] === 0) {
        aux = aux + element.prices[0].price;
      }

      if (PriceEnum[this.selectedPriceType] === 1) {
        aux = aux + element.prices[1].price;
      }
    }

    this.amount = aux;
  }

  aspectRatioLabel(id: number) {
    if (id === 1) {
      return '16:9';
    }
    return '9:16';
  }

  setPriceType(price: string) {
    if (price) {
      this.selectedPriceType = price;
    }
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
