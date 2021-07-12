import { OrgService } from './../../shared/services/org/org.service';
import { Component, Injectable, OnInit } from '@angular/core';
import { Org } from 'src/app/shared/model/org';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-organization-detail',
  templateUrl: './organization-detail.component.html',
  styleUrls: ['./organization-detail.component.scss'],
})
export class OrganizationDetailComponent implements OnInit {
  orgForm: FormGroup = {} as FormGroup;

  constructor(
    private orgService: OrgService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    const orgId = this.route.snapshot.paramMap.get('oid');
    if (orgId) {
      this.orgService.getOrgById(+orgId).subscribe((result) => {
        this.initForm(result as Org);
      });
    }
  }

  back() {
    this.router.navigate(['organization']);
  }

  initForm(org: Org) {
    this.orgForm = this.fb.group({
      id: this.fb.control(org.id),
      name: this.fb.control(org.name, Validators.required),
      address: this.fb.control(org.address, Validators.required),
      description: this.fb.control(org.description),
    });
  }

  submit() {
    const orgSave = {...this.orgForm.value} as Org;
    console.log(orgSave);
    this.orgService.update(orgSave).subscribe(result => this.router.navigateByUrl('/organization'));
  }
}
