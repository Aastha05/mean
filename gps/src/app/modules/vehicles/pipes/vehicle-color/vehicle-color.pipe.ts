import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vehicleColor'
})
export class VehicleColorPipe implements PipeTransform {

  transform(value:number): string {
    if(value > 10 ){
      return 'green';
    }
    if(value < 10){
      return 'red';
    }

  }

}
