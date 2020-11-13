import { Component, OnInit } from '@angular/core';
import { Horse } from '@app/_models/horse';
import { HORSES } from '@app/_helpers';
import { HorseService } from '../../horse.service';

@Component({
  selector: 'app-horses',
  templateUrl: './horses.component.html',
  styleUrls: ['./horses.component.css']
})
export class HorsesComponent implements OnInit {

  horses: Horse[];
  selectedHorse: Horse;

  constructor(private horseService: HorseService) { }

  ngOnInit(): void {
    this.getHorses2();
  }


  getHorses2(): void {
    this.horseService.getHorses()
      .subscribe(horses => this.horses = horses);
  }
}
