import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HorseService } from '@app/horse.service';
import { Location } from '@angular/common';
import { Horse } from '@app/_models/horse';

@Component({
  selector: 'app-horse-detail',
  templateUrl: './horse-detail.component.html',
  styleUrls: ['./horse-detail.component.css']
})
export class HorseDetailComponent implements OnInit {

  horse: Horse;

  constructor( private route: ActivatedRoute,
    private horseService: HorseService,
    private location: Location ) { }

    ngOnInit(): void {
      //this.getHorse();
    }
  
    
    goBack(): void {
      this.location.back();
    }

}
