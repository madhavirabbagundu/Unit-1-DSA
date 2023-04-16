import { Component, Input, OnInit, ViewChild } from '@angular/core';
import * as feather from 'feather-icons';
import { DatePipe } from '@angular/common';
import { ModalDialog } from '../shared/modal.component';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-profile-interviewer',
  templateUrl: './interviewer-profile.html',
  styleUrls: ['./interviewer-profile.css']
})
export class InterviewerProfile implements OnInit {

  @Input() isWorkflowDashboard?: boolean;
  @ViewChild(ModalDialog, {
    static: true
  }) modalDialog;
  interviewer;
 
  NA: String;
  constructor(
    public datepipe: DatePipe,

    public spinnerService: NgxSpinnerService) {
    this.interviewer = JSON.parse(sessionStorage.getItem('interviewData'));
  }

  ngOnInit(): void {
    feather.replace();
  }

 
  ngOnDestroy(): void {
    this.interviewer = undefined;
    sessionStorage.removeItem('interviewData');
   
  }


}
