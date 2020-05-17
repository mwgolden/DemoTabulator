import { Component, OnInit } from '@angular/core';
import Tabulator from 'tabulator-tables';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'DemoTabulator';
	people: IPerson[] = [];
	columnNames: any[] = [];
	myTable: Tabulator;
	onUpdate(){
		alert("Updated Row!");
	}
	ngOnInit(){
		this.people = [
			{ id: 1, firstName: "John", lastName: "Smith", state: "Ohio", birthday:'' },
      { id: 2, firstName: "Jane", lastName: "Doe", state: "Iowa", birthday:'' },
      { id: 3, firstName: "Bill", lastName: "Great", state: "Hawaii", birthday:'' },
      { id: 4, firstName: "Ted", lastName: "Adventure", state: "Arizona", birthday:'' }
		];
		this.columnNames = [
			{title: "Id", field: "id"},
			{title: "First Name", field: "firstName"},
			{title: "Last Name", field: "lastName"},
			{title: "State", field: "state"},
			{title: "Birth Day", field: "birthday", align:"center",
				sorter:"date", editor:"input"}
		];
		this.myTable = new Tabulator('#tabulator-div', {
			cellEdited:function(data){
				console.log(data._cell.row.data);
			},
			layout: "fitColumns"
		});
		this.myTable.setColumns(this.columnNames);
		this.myTable.setData(this.people);
	}
}
interface IPerson {
	id: number,
	firstName: string,
	lastName: string,
	state: string,
	birthday: string
}
