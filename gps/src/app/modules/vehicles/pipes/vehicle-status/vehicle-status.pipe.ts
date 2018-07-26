import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vehicleStatus'
})
export class VehicleStatusPipe implements PipeTransform {

  transform(value: number): string {
    let move = "Running";
    let  stop = "Stopped"
    if (value > 10 ){
      return move;
    }
    if ( value < 10 ){
      return stop;
    }
  }

}
