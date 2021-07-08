import { Component, OnInit } from '@angular/core';
import { Org } from '../shared/model/org';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss'],
})
export class OrganizationComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'address', 'description'];
  dataSource = [...ELEMENT_DATA];

  constructor() {}

  ngOnInit(): void {}
}

const ELEMENT_DATA: Org[] = [
  { id: 1, name: 'Hydrogen', address: '1.0079', description: 'H' },
  { id: 2, name: 'Helium', address: '4.0026', description: 'He' },
  { id: 3, name: 'Lithium', address: '6.941', description: 'Li' },
  { id: 4, name: 'Beryllium', address: '9.0122', description: 'Be' },
  { id: 5, name: 'Boron', address: '10.811', description: 'B' },
  { id: 6, name: 'Carbon', address: '12.0107', description: 'C' },
  { id: 7, name: 'Nitrogen', address: '14.0067', description: 'N' },
  { id: 8, name: 'Oxygen', address: '15.9994', description: 'O' },
  { id: 9, name: 'Fluorine', address: '18.9984', description: 'F' },
  { id: 10, name: 'Neon', address: '20.1797', description: 'Ne' },
];
