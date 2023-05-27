import { Component, Input, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
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
import { Session } from 'protractor';
import { error } from 'console';

@Component({
  selector: 'app-profile-interviewassesments',
  templateUrl: './interviewassesments-profile.html',
  styleUrls: ['./interviewassesments-profile.css']
})
export class InterviewAssesmentsProfile implements OnInit {
  public panelform: FormGroup;
  wizardStepStyle: string[];

  readonly activeStepClass = "active";
  readonly nonActiveStepClass = "disabled";

  @Input() isWorkflowDashboard?: boolean;
  interviewView: any;

  @ViewChild(ModalDialog, {
    static: true
  }) modalDialog;
  @ViewChild(ModalDialog, {
    static: true
  }) modal: any;
  documentName: any;
  bootstrapimage: SafeResourceUrl;
  interview: any;
  wizardStepExpandState: boolean[];
  gradesDropDown: any;
  currentUrl: string;
  profileUrl: string;
  dataFilter = {
    filterOptions: ["questionId", "interviewQuestion", "interviewPriority", "interviewActivate", "interviewGrade"],
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
  previewData: any;
  getdata: boolean;
  returnData: any;
  checked: boolean;
  interviewnumber: any;
  first: any;
  second: any;
  secondname: boolean;
  firstname: boolean;
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


    this.interview = JSON.parse(sessionStorage.getItem('interviewData'));
    // this.interview.interviewerName = otherInterviewerName;
    console.log("assesment Data is printing  " + this.interview.panelflowEventId);

  }

  changeSection(index: number) {
    if (index == 1) {
      this.getdata = true
      console.log("returnbadck data", this.previewData)
      this.returnData = this.previewData
    }


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
  createInterview() {
    this.panelform = this.dt.group({
      applicationNumber: [null],
      applicantName: [null],
      firstInterviewerName: [null],
      secondInterviewerName: [null],
      otherInterviewerName: [null],
      panelflowEventId: [null],
      interviewGrade: [null],
      // interviewAssesment:[null],
      // applicantQuestions:new FormControl(null),
    })
  }

  selectQuestion(e, questionId) {
    console.log(e)
    let grade = this.panelform.get('interviewGrade').value;
    var number = this.panelform.get("applicationNumber").value;
    e.applicationNumber = number;
    e.questionId = questionId;
    e.interviewGrade = grade;
    this.applicantInterview.push(e)
    console.log("total data:", this.applicantInterview)

    // }
  }


  submit() {
    var count = 0;
    var count1 = 0;
    var count2 = 0;
    var count3 = 0;
    var count4 = 0;

    var number = this.panelform.get("applicationNumber").value;
    var name = this.panelform.get("applicantName").value;
    var interviewerName = this.interview.otherInterviewerName;
    var panelflowEventId = this.interview.panelflowEventId;
    var firstInterviewerName = this.interview.firstInterviewerName;
    var secondInterviewerName = this.interview.secondInterviewerName;
    // var firstInterviewerName = this.panelform.get("firstInterviewerName").value;
    // var secondInterviewerName = this.panelform.get("secondInterviewerName").value;
    this.previewData = this.applicantInterview
    console.log("preview data", this.previewData)

    console.log(number, name, interviewerName, panelflowEventId)
    // if(this.panelform.invalid){
    //    for(var i = 0;i < this.previewData.length; i++){
    //     console.log(this.previewData[i].interviewPriority)
    //     if(this.previewData[i].interviewPriority=="Planning"){
    //         count++;
    //     }
    //     else if(this.previewData[i].interviewPriority=="Team Work"){
    //         count1++
    //     }      
    //     else if(this.previewData[i].interviewPriority=="Handling Failure"){
    //         count2++
    //     }
    //     else if(this.previewData[i].interviewPriority=="Modesty "){
    //         count3++
    //     }
    //     else if(this.previewData[i].interviewPriority=="Enterprising"){
    //         count4++
    //     }
    // }
    // if(count>=1 && count1>=1 && count2 >=1 && count3>=1 && count4 >=1){
    // console.log(count,count1,count2,count3,count4)
    //   this.messageService.success("completed");
    this.changeSection(2);
    // }
    // else{
    //   console.log(count,count1,count2,count3,count4);
    //   this.messageService.error("Ask atleast one question in each catorgory")
    // }

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
        modInterviewActivate = interview.filter(list =>
          list.interviewActivate == 'Y')
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
  getPanelDetails(): void {
    this.interviewerDetails.getPanelDetails().subscribe(
      (applicantData) => {
        console.log(applicantData)
      },
      error => {
        console.log("error in get,  ", error)
      }
    )
  }




  saveAssesmentDetail() {
    this.spinnerService.show();
    const assesmentData = {
      // if(assesmentData.firstInterviewerName == assesmentData.secondInterviewerName){
      applicationNumber: this.panelform.get("applicationNumber").value,
      applicantName: this.panelform.get("applicantName").value,
      otherInterviewerName: this.interview.otherInterviewerName,
      panelflowEventId: this.interview.panelflowEventId,
      firstInterviewerName: this.interview.firstInterviewerName,
      secondInterviewerName: this.interview.secondInterviewerName,
      applicantQuestions: this.applicantInterview,



    }

    //checking my appraoch
    //  if(assesmentData)


    // console.log(assesmentData.firstInterviewerName, assesmentData.otherInterviewerName, assesmentData.secondInterviewerName)
    //first interviewer Going to submit
    if (assesmentData.secondInterviewerName == assesmentData.otherInterviewerName) {

      this.interviewerDetails.getSecondInterviewerByApplicationNumber(assesmentData.applicationNumber).subscribe((data) => {
        console.log(data)
        if (data == null) {
          this.interviewerDetails.addAssesmentDetails(JSON.stringify(assesmentData)).subscribe(assesmentData => {

            console.log(assesmentData);
            this.messageService.success("Assesment Data Completed!")
          }),

            error => {
              this.messageService.error("Error on Applicant Submission !!")
            }
        }
        else {

        
          // var count1 = 0;
          // for (var i = 0; i < data.applicantQuestions.length; i++) {
          //   FirstQuestionIds.push(data.applicantQuestions[i].questionId);
          // }
          // FirstQuestionIds.sort(function (a, b) { return a - b });
          // console.log("id :", FirstQuestionIds)



          // var SecondQuestionIds = []
          // for (var i = 0; i < assesmentData.applicantQuestions.length; i++) {
          //   SecondQuestionIds.push(assesmentData.applicantQuestions[i].questionId)
          // }
          // SecondQuestionIds.sort(function (a, b) { return a - b });
          // console.log("id2", SecondQuestionIds)


          // var notEqualId = []
          // for (var i = 0; i < data.applicantQuestions.length; i++) {
          //   if (FirstQuestionIds[i] === SecondQuestionIds[i]) {
          //     count++
          //   }
          //   else {
          //     notEqualId.push(FirstQuestionIds[i])
          //   }
          // }
          // console.log(count)

          let [pendingIds,removeIds] = this.convertingIntoNumbers(data.applicantQuestions,assesmentData.applicantQuestions);

          if (data.applicantQuestions.length == assesmentData.applicantQuestions.length) {
           if(pendingIds.length===0){
              this.interviewerDetails.addAssesmentDetails(JSON.stringify(assesmentData)).subscribe(assesmentData => {

                console.log(assesmentData);
                this.messageService.success("Assesment Data Completed!")
              }),

                error => {
                  this.messageService.error("Error on Applicant Submission !!")
                }
            }
            else {
              this.messageService.error(`Your Need to add ${pendingIds} and remove ${removeIds} Question Please Reconsign`);
            }

          }
          else {
            if(removeIds.length > 0 && pendingIds.length > 0){
              this.messageService.error(`You Need to add ${pendingIds} Question and Remove ${removeIds} Id Question`)

            }
            else if(pendingIds.length > 0){
            this.messageService.error(`You Need to add ${pendingIds} Question`)
          }
          else{
            this.messageService.error(`You need to Remove ${removeIds} Id Question`)
          }
        }
        }
      })
    }
    else {

      this.interviewerDetails.getFirstInterviewerByApplicationNumber(assesmentData.applicationNumber).subscribe((data1) => {
        if (data1 == null) {
          this.interviewerDetails.addAssesmentDetails(JSON.stringify(assesmentData)).subscribe(assesmentData => {
            this.messageService.success("Assesment Data Completed!")
          }),
            error => {
              this.messageService.error("Error on Applicant Submission !!")
            }
        }else {

        // for (var i = 0; i < data1.applicantQuestions.length; i++) {
          //   FirstQuestionIds.push(data1.applicantQuestions[i].questionId);
          // }
          // FirstQuestionIds.sort(function (a, b) { return a - b });
          // console.log("id :", FirstQuestionIds)



          // var SecondQuestionIds = []
          // for (var i = 0; i < assesmentData.applicantQuestions.length; i++) {
          //   SecondQuestionIds.push(assesmentData.applicantQuestions[i].questionId)
          // }
          // SecondQuestionIds.sort(function (a, b) { return a - b });
          // console.log("id2", SecondQuestionIds)


          // var notEqualId = FirstQuestionIds.filter(function (obj) {
          //   return SecondQuestionIds.indexOf(obj) == -1;
          // })
          // console.log(notEqualId);
          // for(var i = 0; i < data1.applicantQuestions.length; i++){
          //   if(FirstQuestionIds[i] === SecondQuestionIds[i]){
          //     count++
          //   }
          //   else{
          //     notEqualId.push(FirstQuestionIds[i])
          //   }
          // }
          // console.log(count)
            let [pendingIds,removeIds] = this.convertingIntoNumbers(data1.applicantQuestions,assesmentData.applicantQuestions);
            console.log(pendingIds.length);
          if (data1.applicantQuestions.length == assesmentData.applicantQuestions.length) {
            if (pendingIds.length===0) {
              this.interviewerDetails.addAssesmentDetails(JSON.stringify(assesmentData)).subscribe(assesmentData => {

                console.log(assesmentData);
                this.messageService.success("Assesment Data Completed!")
              }),

                error => {
                  this.messageService.error("Error on Applicant Submission !!")
                }
            }
            else {
              this.messageService.error(`Your Need to add ${pendingIds} and remove ${removeIds} Question Please Reconsign`);
            }
          }
          else {
            if(removeIds.length > 0 && pendingIds.length > 0){
              this.messageService.error(`You Need to add ${pendingIds} Question and Remove ${removeIds} Id Question`)

            }
            else if(pendingIds.length > 0){
            this.messageService.error(`You Need to add ${pendingIds} Question`)
          }
          else{
            this.messageService.error(`You need to Remove ${removeIds} Id Question`)
          }
        }
        }
      })
    }


  }

  convertingIntoNumbers(firstInterviewData,secondInterviewData){
    let firstUniqueIds;
    let secondUniqueIds;
    var firstInterviewQIds = firstInterviewData.map((data)=>data.questionId);
    var secondInterviewQIds = secondInterviewData.map((data)=>data.questionId);
    console.log(firstInterviewData,secondInterviewData)
    if(firstInterviewQIds.length!==secondInterviewQIds.length){
      if(firstInterviewQIds.length < secondInterviewQIds.length){
        firstUniqueIds = firstInterviewQIds.filter(function(obj){
          return secondInterviewQIds.indexOf(obj) ==-1;
        })
        secondUniqueIds = secondInterviewQIds.filter(function(obj){
          return firstInterviewQIds.indexOf(obj) ==-1;
        })

      }
      else if(firstInterviewQIds.length > secondInterviewQIds.length){
        firstUniqueIds = firstInterviewQIds.filter(function(obj){
          return secondInterviewQIds.indexOf(obj) ==-1;
        })
        secondUniqueIds = secondInterviewQIds.filter(function(obj){
          return firstInterviewQIds.indexOf(obj) ==-1;
        })
        console.log(firstUniqueIds);

      }
    }else if(firstInterviewData.length===secondInterviewData.length){
      firstUniqueIds = firstInterviewQIds.filter(function (obj) {
        return secondInterviewQIds.indexOf(obj) == -1;
      })
        secondUniqueIds  = secondInterviewQIds.filter(function (obj) {
          return firstInterviewQIds.indexOf(obj) == -1;
        })
    }
   
     return [firstUniqueIds,secondUniqueIds];
  }

  // onBack(): void {
  //   sessionStorage.removeItem('applicantData');
  //   this.router.navigate(['./interview/interviewprofile']);
  // }

  ngOnDestroy(): void {
    this.interview = undefined;
    sessionStorage.removeItem('applicantData');
  }


}
