import {Pipe, PipeTransform} from '@angular/core';
import {Album} from './album.model';

@Pipe({
  name: "genre",
  pure: false
})

export class GenrePipe implements PipeTransform {


  transform(input: Album[], genre) {
    var output: Album[] = [];
    var totalCareTaker = 0;
    if(genre == "Rock") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].genre == "Rock") {
          output.push(input[i]);

        }
      }
      return output;
    } else if (genre == "Pop") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].genre == "Pop") {
          output.push(input[i]);

        }
      }
      return output;
    } else {
      return input;
    }
  }


}
