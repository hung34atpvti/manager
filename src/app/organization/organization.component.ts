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

  constructor(private orgService: OrgService) {}

  ngOnInit(): void {
    this.getOrg(0, 20);
  }

  getOrg(page: number, limit: number) {
    this.orgService.getOrg(page, limit).subscribe((result) => {
      console.log(result);
      const pageable = result as Pageable;
      this.dataSource = pageable.content;
    });
  }
}
