import { Pageable } from './../shared/model/pageable';
import { Component, OnInit } from '@angular/core';
import { Org } from '../shared/model/org';
import { OrgService } from '../shared/services/org/org.service';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss'],
})
export class OrganizationComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'address', 'description'];
  dataSource: Org[] = [];
  currentPage: number = 1;
  totalPage: number = 1;
  arrPageNumber: number[] = [];
  limit: number = 6;

  constructor(private orgService: OrgService) {}

  ngOnInit(): void {
    this.getOrg(0, this.limit);
  }

  getOrg(page: number, limit: number) {
    this.orgService.getOrg(page, limit).subscribe((result) => {
      const pageable = result as Pageable;
      this.dataSource = pageable.content;
      this.totalPage = pageable.totalPages;
      this.getArrayPageNumber(this.totalPage);
    });
    this.currentPage = page;
  }

  getArrayPageNumber(totalPage: number) {
    this.arrPageNumber = [];
    for (let i = 0; i < this.totalPage; i++) {
      this.arrPageNumber.push(i);
    }
  }

  edit(id: number) {
    console.log(id);
  }
}
