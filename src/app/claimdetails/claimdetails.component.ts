import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-claimdetails',
  templateUrl: './claimdetails.component.html',
  styleUrls: ['./claimdetails.component.css'],
})
export class ClaimdetailsComponent {
  claimid: any;
  constructor(
    public router: Router,
    private activatedroute: ActivatedRoute
  ) // private http: HttpClient
  {}

  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe((params) => {
      this.claimid = params.get('claimNumber');

      //alert (this.claimid);
    });
  }

  // file: any;
  // getfile(event: any) {
  //   this.file = event.target.file[0];
  //   console.log('file', this.file);
  // }

  // submitData() {
  //   let formData = new FormData();
  //   formData.set('file', this.file);

  //   this.http.post('...../', formData).subscribe((Response) => {});
  // }

  newuser = [
    {
      patientDetails: {
        firstName: 'John',
        lastName: 'Smith',
      },
      claimDetails: {
        claimNumber: 'CL34246334',
        dateSubmitted: '2007-04-26T00:00:00',
        claimStatus: 'ADDITIONAL_INFO_REQUIRED',
      },
    },
    {
      patientDetails: {
        firstName: 'Lara',
        lastName: 'Smith',
      },
      claimDetails: {
        claimNumber: 'CL34243337',
        dateSubmitted: '2010-04-26T00:00:00',
        claimStatus: 'COMPLETED',
      },
    },
    {
      patientDetails: {
        firstName: 'Steve',
        lastName: 'Bernard',
      },
      claimDetails: {
        claimNumber: 'CL34234338',
        dateSubmitted: '2013-04-26T00:00:00',
        claimStatus: 'NOT_RECEIVED',
      },
    },
  ];
}
