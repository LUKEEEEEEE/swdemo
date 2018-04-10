import { Component, OnInit } from '@angular/core';
import {SwapiService} from '../../services/swapi.service';
import {Person, PersonClass, VehicleClass} from '../../models/Person';

@Component({
  selector: 'app-basic-display',
  templateUrl: './basic-display.component.html',
  styleUrls: ['./basic-display.component.css']
})
export class BasicDisplayComponent implements OnInit {

  name = 'SwapiDisplay';
  lastJedi = 'Luke';

  // swLuke = new Person() can not set empty classes with interfaces. <-- cleaner html
  swLuke: Person;
  swLukeBest: PersonClass = new PersonClass();

  constructor(private swapiService: SwapiService) { }

  ngOnInit() {
    // ngOnInit is usual place to load component data
    // service with interface
    this.swapiService.getLuke().subscribe(x => this.swLuke = x);
    // service with old sql veriant = DEPRECATED
    // this.swapiService.getLukeOldSql().subscribe(x => this.swLukeOld = x);

    // I think this is the best of both worlds
    // We map services response to class here
    this.swapiService.getLuke().subscribe(x => {
      // pop random vehicles in class to show how class constructs itself
      // random tmp variable so editor is happy / not crying
      const tmpx = new PersonClass(x);
      const v1 = new VehicleClass({name: `Snowspeeder`, crew: 2, passengers: 0});
      const v2 = new VehicleClass({name: `Imperial Speeder Bike`, crew: 1, passengers: 1});
      tmpx.vehicles = [v1, v2];

      this.swLukeBest = new PersonClass(tmpx);
    });
  }

}
