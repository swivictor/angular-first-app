import { Component ,  inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article>
      <img class="listing-photo" [src]="housingLocation?.photo"/>
    </article>
    <section>
      <h2 class="listing-heading" >
        {{housingLocation?.name}}
      </h2>
      <p class="listing-location">
        {{housingLocation?.city}} {{housingLocation?.state}}
      </p>
    </section>
    <section class="listing-fearure">
      <h2 class="section-heading">
        About the Loaction
      </h2>
      <ul>
        <li>
          Units available : {{housingLocation?.availableUnits}}
        </li>
        <li>
          Wifi available : {{housingLocation?.wifi}}
        </li>
        <li>
          Loundry available : {{housingLocation?.laundry}}
        </li>
      </ul>
    </section>
    <section class="listing-apply">
      <h2 class="section-heading">
        Apply now to live here
      </h2>
      <button class="primary" type="button">
        Apply Now
      </button>
    </section>
  `,
  styleUrls: ['./details.component.css']
})

//REVIEW - Explain this
export class DetailsComponent {
  route : ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation : HousingLocation | undefined;

  constructor() {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
  }
}
