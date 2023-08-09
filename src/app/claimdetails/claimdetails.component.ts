import { Component } from '@angular/core';

@Component({
  selector: 'app-claimdetails',
  templateUrl: './claimdetails.component.html',
  styleUrls: ['./claimdetails.component.css'],
})
export class ClaimdetailsComponent {
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