import { Component, Input, OnInit, ViewChild,ElementRef, Renderer2  } from '@angular/core';
import * as feather from 'feather-icons';
import {
  FormGroup,
  AbstractControl,
  FormControl,
  FormArray,
  NgForm,
  FormBuilder,
  Validators,
} from "@angular/forms";
import { DatePipe } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { DocumentViewerDialog } from '../shared/document-viewer.component';
import { Router } from "@angular/router";
import { ModalDialog } from '../shared/modal.component';
import { NgxSpinnerService } from "ngx-spinner";
import { ApplicantDetailService } from '../service/applicantDetail.service';
import { SnackBarService } from '../service/snack-bar.service';
import { LoggedInUserDetails } from '../model/loggedinUser.model';
import { Module, UserAccess } from '../model/roleModuleAccess.model';
import { ApplicantInterviewDetailService } from '../service/applicantInterviewDetails.service';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-profile-interviewassesments',
  templateUrl: './interviewassesments-profile.html',
  styleUrls: ['./interviewassesments-profile.css']
})
export class InterviewAssesmentsProfile implements OnInit {
  public Assesmentform: FormGroup;
  wizardStepStyle: string[];

  readonly activeStepClass = "active";
  readonly nonActiveStepClass = "disabled";

  @Input() isWorkflowDashboard?: boolean;
  interviewView: any;

  @ViewChild(ModalDialog, {
    static: true
  }) modalDialog;
  @ViewChild(ModalDialog,{
    static:true
  }) modal: any;
  documentName: any;
  bootstrapimage: SafeResourceUrl;
    interview: any;
    wizardStepExpandState: boolean[];
    gradesDropDown: any;
    currentUrl: string;
    profileUrl: string;
    dataFilter = {
      filterOptions: ["questionId","interviewQuestion","interviewPriority","interviewActivate"],
      placeholderValue: "Search with Applicant Name OR Applicant ID ..",
      filterData: [],
      originalData: [],
    };
    filteredData: any;
    applicantInterview: any;
    paginator: any;
    // getDrpDownValues: any;



  applicant;

  NA: String;
  imageUrlBootstrap: SafeResourceUrl;
  currentUser: LoggedInUserDetails;
  constructor(
    private dt: FormBuilder,
    public datepipe: DatePipe,
    private sanitizer: DomSanitizer,
    private modelDispenser2: StudentService,
    private messageService: SnackBarService,
    private interviewerDetails: ApplicantInterviewDetailService,
    private modelDispenser: ApplicantDetailService,
    private router: Router,
    public spinnerService: NgxSpinnerService
    ) {

      this.wizardStepStyle = [
        this.activeStepClass,
        this.nonActiveStepClass
      ]
      this.wizardStepExpandState = [true, false];
      this.createInterview();


    this.interview = JSON.parse(sessionStorage.getItem('applicantData'));


  }

  changeSection(index: number) {

    for (let i = 0; i < this.wizardStepExpandState.length; i++) {
      if (index - 1 === i) {
        this.wizardStepExpandState[i] = true;
        this.wizardStepStyle[i] = this.activeStepClass;
      } else {
        this.wizardStepExpandState[i] = false;
        this.wizardStepStyle[i] = this.nonActiveStepClass;
      }
    }

  }
  createInterview(){
    this.Assesmentform = this.dt.group({
      applicationNumber: [null],
      applicantName:[null],
      firstInterviewerName:[null],
      secondInterviewerName:[null],
      // applicantQuestions:new FormControl(null),
    })
  }
  submit(){
    this.changeSection(2);

    // console.log(this.Assesmentform)
var number = this.Assesmentform.get("applicationNumber").value;
var name = this.Assesmentform.get("applicantName").value;
var firstInterviewerName = this.Assesmentform.get("firstInterviewerName").value;
var secondInterviewerName = this.Assesmentform.get("secondInterviewerName").value;


console.log(number,name,firstInterviewerName,secondInterviewerName)
    // if(this.Assesmentform.invalid){
      console.log("submit button is working")
      this.messageService.success("completed");
    // }

    
  
      // this.messageService.error("not completed")
    
  }
  ngOnInit(): void {
    feather.replace();
    this.spinnerService.show();
    this.gradesDropDown = this.getDrpDownValues('33');

    feather.replace();
    // this.panelInterview = [];
    this.getApplicantInterview();
    this.applicantInterview = [];
    // this.getPanelCreation();
  }

  getDrpDownValues(referenceCode): any {
    let dropDownValues = [];
    this.modelDispenser2.getReferenceValueList(referenceCode).subscribe(referenceValue => {
      const referenceValues = referenceValue[0].referenceValues;
      for (let referenceValue of referenceValues) {
        dropDownValues.push({
          label: referenceValue.referenceCodeDisplayValue,
          value: referenceValue.referenceCodeValue
        })
      }
    },
      error => {
      });

    return dropDownValues;
  }
   
    getApplicantInterview(): void {
        this.interviewerDetails.getApplicantInterview().subscribe(
          (interview) => {
            var modInterviewActivate;
            modInterviewActivate = interview.filter(list=>
              list.interviewActivate=='Y')
            this.dataFilter.originalData = JSON.parse(JSON.stringify(modInterviewActivate));
            this.dataFilter.filterData = JSON.parse(JSON.stringify(modInterviewActivate));
            this.interviewView = modInterviewActivate
            this.interviewView.paginator = this.paginator;
            this.filteredData = modInterviewActivate;
            console.log(this.filteredData)
            this.spinnerService.hide();
            
          },
          (error) => {
            this.spinnerService.hide();
            // this.serviceErrors(error);
          }
        );
    
      }
    
      selectQuestion(e){
        console.log(e)
        var count = 0;
        var count1 = 0;
        var count2 = 0;
        var count3 = 0;
        var count4 = 0;
        this.applicantInterview.push(e)
        for(var i = 0;i < this.applicantInterview.length; i++){
            if(this.applicantInterview[i]=="Planning"){
                count++;
            }
            else if(this.applicantInterview[i]=="Team Work"){
                count1++
            }
            else if(this.applicantInterview[i]=="Handling Failure"){
                count2++
            }
            else if(this.applicantInterview[i]=="Modesty "){
                count3++
            }
            else if(this.applicantInterview[i]=="Enterprising"){
                count4++
            }
        }
        console.log(count,count1,count2,count3,count4)
         console.log("total data:",this.applicantInterview)
        }



//   onBack(): void {
//     sessionStorage.removeItem('applicantData');
//     this.router.navigate(['./applicant/pendingApproval']);
//   }

  ngOnDestroy(): void {
    this.interview = undefined;
    sessionStorage.removeItem('applicantData');
  }


}
