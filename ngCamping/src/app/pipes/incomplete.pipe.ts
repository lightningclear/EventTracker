import { Camping } from 'src/app/models/camping';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'incomplete'
})
export class IncompletePipe implements PipeTransform {

  transform(camps: Camping[], distance:  number): Camping[] {

    if(distance == 0){
      return camps;
    }

    return camps.filter(camp =>
      camp.distance == distance
    );
  }




}
