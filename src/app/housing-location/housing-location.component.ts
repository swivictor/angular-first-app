import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
// NOTE - Typescript Interface   
import { HousingLocation } from '../housing-location';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
   <section class="listing">
    <!-- REVIEW Property Binding src used by [src] -->
    <img [src]="housingLocation.photo" alt="Exterior photo of {{housingLocation.name}}" class="listing-photo">
    <h2 class="listing-heading">
      {{housingLocation.name}}
    </h2>
    <p class="listing-locations">
    {{housingLocation.city}}, {{housingLocation.state}}
      </p>
      <a [routerLink]="['/details',housingLocation.id]">Learn More</a>
   </section>
  `,
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  // REVIEW - What this code about?
 @Input() housingLocation!:HousingLocation;
}
