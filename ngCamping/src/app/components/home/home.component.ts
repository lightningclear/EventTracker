import { Router, RouterModule } from '@angular/router';
import { CampingService } from './../../service/camping.service';
import { Camping } from './../../models/camping';
import { Component, OnInit } from '@angular/core';
import { IncompletePipe } from './../../pipes/incomplete.pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  selected: Camping | null = null;

  newCamp: Camping = new Camping();

  editCamp: Camping | null = null;

  camps: Camping[] = [];

  distance = 0;

  incompletePipe:IncompletePipe = new IncompletePipe();

  constructor(private campSvc: CampingService, private router: Router) { }

  getNumOfCamps() {
    return this.incompletePipe.transform(this.camps, 0).length;
  }

  checkWarning() {
    let numOfTodos = this.getNumOfCamps();
    if(numOfTodos >= 10) {
      return 'badge bg-danger';
    } else if(numOfTodos >= 5) {
      return 'badge bg-warning';
    } else {
      return 'badge bg-success'
    }
  }

  reload() {
    this.campSvc.index().subscribe(
      data => this.camps = data,
      err => console.log(err)
    );
  }

  ngOnInit(): void {
    this.reload();
  }

  displayCamp(camp: Camping){
    this.selected = camp;
  }

  addCamp(){
    this.router.navigateByUrl("/createCamp");
  }

  setEditCamp() {
    this.editCamp = Object.assign({}, this.selected);
  }

  updateCamp(camp: Camping){
    this.campSvc.update(camp).subscribe(
      data => {
        this.reload();
        this.selected = null;
        this.editCamp = null;
      }
    );
  }

  deleteCamp(id: number) {
    this.campSvc.destroy(id).subscribe(
      data => this.reload(),
      err => console.log(err)
    );
  }

}
