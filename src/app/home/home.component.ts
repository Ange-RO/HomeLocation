import { Component ,inject} from '@angular/core';
import { HousingService } from '../services/housing.service';
import {HousingLocation} from '../interfaces/housinglocation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
housingService: HousingService = inject(HousingService);

filteredLocationList: HousingLocation[] = [];

constructor() {
  this.housingLocationList = this.housingService.getAllHousingLocations();
  this.filteredLocationList = this.housingLocationList;

}
}