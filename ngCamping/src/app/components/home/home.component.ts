import { CampingService } from './../../service/camping.service';
import { Camping } from './../../models/camping';
import { Component, OnInit } from '@angular/core';

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

  constructor(private campSvc: CampingService) { }

  // getNumOfTodos() {
  //   return this.incompletePipe.transform(this.camps, this.Camping).length;
  // }

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

  addTodo(){
    this.campSvc.create(this.newCamp).subscribe(
      data => {
        this.reload();
        this.newCamp = new Camping();
      },
      err => console.log(err)
    );
  }

  setEditTodo() {
    this.editCamp = Object.assign({}, this.selected);
  }

  updateTodo(camp: Camping){
    this.campSvc.update(camp).subscribe(
      data => {
        this.reload();
        this.selected = null;
        this.editCamp = null;
      }
    );
  }

  deleteTodo(id: number) {
    this.campSvc.destroy(id).subscribe(
      data => this.reload(),
      err => console.log(err)
    );
  }

}
