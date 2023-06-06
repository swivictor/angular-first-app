import { Component ,  inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute} from '@angular/router';
// servive
import { HousingService } from '../housing.service';
// Interface
import { HousingLocation } from '../housing-location';
// Form Module
import { FormControl,FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
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
      <form [formGroup]="applyForm" (submit)="submitApplication()" >
        <label for="first-name">First Name</label>
        <input type="text" formControlName="firstName" id="first-name">
        <label for="last-name">Last Name</label>
        <input type="text" formControlName="lastName" id="last-name">
        <label for="email">Email</label>
        <input type="email" formControlName="email" id="email">
        <button type="submit" class="primary">Apply Now</button>
      </form>
    </section>
  `,
  styleUrls: ['./details.component.css']
})

//REVIEW - Explain this
export class DetailsComponent {
  route : ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation : HousingLocation | undefined;

  //NOTE - The applyForm() method gets called to get users data
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email : new FormControl(''),        
  })

  constructor() {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
  }
  submitApplication() {
    //REVIEW -  ?? used if the value of left hand side undefined the value of right hand side used
    this.housingService.submitApplication(
    this.applyForm.value.firstName ?? '',
    this.applyForm.value.lastName?? '',
    this.applyForm.value.email?? ''
    )
  }
}
