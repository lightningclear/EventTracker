import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Camping } from 'src/app/models/camping';
import { CampingService } from 'src/app/service/camping.service';

@Component({
  selector: 'app-create-camp',
  templateUrl: './create-camp.component.html',
  styleUrls: ['./create-camp.component.css']
})
export class CreateCampComponent implements OnInit {

  editCamp: Camping = new Camping();

  camps: Camping[] = [];

  constructor(private campSvc: CampingService, private router: Router) { }

  ngOnInit(): void {
  }

  addCamp(newCamp: Camping){
    this.campSvc.create(newCamp).subscribe(
      data => {
        this.reload();
      },
      err => console.log(err)
    );
  }

  reload() {
    this.campSvc.index().subscribe(
      data => this.camps = data,
      err => console.log(err)
    );
  }

  goHome(){
    this.router.navigateByUrl("/home");
  }

}
