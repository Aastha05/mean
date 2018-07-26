import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vehicleImage'
})
export class VehicleImagePipe implements PipeTransform {

  transform(value: string): string {
    return `/assets/images/vehicles/${value.toLowerCase()}.png`;

    // let vehicleImg = value.toLowerCase();

    // if(vehicleImg == 'car'){
    //   return `/assets/images/vehicles/${vehicleImg}.png`;
    // }
    // if(vehicleImg == 'bike'){
    //   return `/assets/images/vehicles/${vehicleImg}.png`;
    // }


  }

}
