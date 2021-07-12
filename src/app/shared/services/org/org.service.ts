import { Org } from 'src/app/shared/model/org';
import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { LoggingService } from '../logging/logging.service';
import { api_url } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrgService {
  api_url_org: string = 'api/v1/orgs';

  constructor(
    private loggingService: LoggingService,
    private http: HttpClient
  ) {}

  getOrg(page: number, limit: number) {
    this.loggingService.logToConsole(`${page}, ${limit}`);
    return this.http.get(
      `${api_url.dev}/${this.api_url_org}/?PAGE=${page}&LIMIT=${limit}`
    );
  }

  getOrgById(id: number) {
    this.loggingService.logToConsole(`${id}`);
    return this.http.get(
      `${api_url.dev}/${this.api_url_org}/${id}`
    );
  }

  update(org: Org) {
    this.loggingService.logToConsole(`${org}`);
    const id: number = org.id;
    return this.http.put(
      `${api_url.dev}/${this.api_url_org}/${id}`,
      org
    );
  }
}
