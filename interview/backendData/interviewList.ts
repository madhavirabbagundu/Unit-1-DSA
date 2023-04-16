import {
    AfterViewInit,
    Component,
    Input,
    OnInit,
    ViewChild,
  
  } from "@angular/core";
  import * as feather from "feather-icons";
  import {
    StudentViewModel,
    
  } from "../model/studentViewNew.model";
  import { ApplicantInterviewDetailService } from "../service/applicantInterviewDetails.service";
  import { MatPaginator } from "@angular/material/paginator";
  import { MatTableDataSource } from "@angular/material/table";
  import { MatDialog } from "@angular/material/dialog";
  import { Router } from "@angular/router";
  import { AuthServiceService } from "../shared/auth-service.service";
  import { LoggedInUserDetails } from "../model/loggedinUser.model";
  import { UserAccess } from "../model/roleModuleAccess.model";
  import { NgxSpinnerService } from "ngx-spinner";
  
  @Component({
    selector: "app-list-interviewer",
    templateUrl: "./interviewer.list.html",
    styleUrls: ["./interviewer.list.css"],
  })
  export class InterviewerList implements OnInit, AfterViewInit {
    @Input() studentAcademicScreen: boolean;
    filterText: string;
    students: StudentViewModel[];
    interviewView: any;
    displayedColumns: string[];
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    result: string;
    header: string;
    currentUser: LoggedInUserDetails;
    userAccess = UserAccess;
    deleteAccess = false;
    editAccess = false;
    currentUrl: string;
    profileUrl: string;
    dataFilter = {
      filterOptions: ["applicantId", "applicantName"],
      placeholderValue: "Search with Applicant Name OR Applicant ID ..",
      filterData: [],
      originalData: [],
    };
  
    constructor(
      private interviewerDetails: ApplicantInterviewDetailService,
      public confirmDialog: MatDialog,
      private router: Router,
      private authService: AuthServiceService,
      private spinnerService: NgxSpinnerService,
    ) {
      this.filterText = "";
      this.authService.currentUser.subscribe((x) => (this.currentUser = x));
    }
  
    ngOnInit(): void {
      this.spinnerService.show();
      feather.replace();
      this.getApplicantInterview();
      this.currentUrl = this.router.url.includes('interview/interviewerList') ? '/nterview/interviewerList' : '/interview/interviewerList';
      this.header = "Interviewer List";
      this.displayedColumns =
        [
          "applicantId",
          "applicantName",
        //   "studentRecStatus",
        //   "actions",
        ]
  
    }
  
    ngAfterViewInit(): void {
      feather.replace();
    }
  
    ngAfterViewChecked(): void {
      feather.replace();
    }
  
    getApplicantInterview(): void {
      this.interviewerDetails.getApplicantInterview().subscribe(
        (interview) => {
          this.dataFilter.originalData = JSON.parse(JSON.stringify(interview));
          this.dataFilter.filterData = JSON.parse(JSON.stringify(interview));
          this.interviewView = interview
          
          this.interviewView.paginator = this.paginator;
          this.spinnerService.hide();
        },
        (error) => {
          this.spinnerService.hide();
          // this.serviceErrors(error);
        }
      );
    }

      onInterviewerDetails(interviewData,mode): void {
        if(mode == 'view') {
          this.spinnerService.show();
          
          this.interviewerDetails.getInterviewerById(interviewData.applicantId).subscribe((interviewData) => {
            sessionStorage.setItem("interviewData",JSON.stringify(interviewData));
            this.router.navigate([`./interview/profile`]);

          })
        }
        else if(mode == 'edit'){
            this.spinnerService.show();
            this.interviewerDetails.getInterviewerById(interviewData.applicantId).subscribe((interviewData) => {
                sessionStorage.setItem("interviewData",JSON.stringify(interviewData));
                // this.router.navigate([`./interview/profile`]);

            })
        }
      }
    }
  
  
   
  
       
  
      
  
      
  
  
  
    
  
   
  
  
  