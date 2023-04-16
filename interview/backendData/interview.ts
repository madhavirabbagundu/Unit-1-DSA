
import { Component, Input, NgModule, OnInit, ViewChild } from "@angular/core";
import { Validators } from "@angular/forms";
// import  studentData  from '../student.json'; 
import {
    FormGroup,
    FormBuilder,

  } from "@angular/forms";
  import { NgxSpinnerService } from "ngx-spinner";
  import { ApplicantInterviewDetailService } from '../service/applicantInterviewDetails.service';
  import { SnackBarService } from '../service/snack-bar.service';
  // import { ApplicationDetailsModel } from "../model/applicantDetails.model";
  import { Router } from "@angular/router";
  import { StudentService } from "../service/student.service";
  interface Student{
    id:Number;
    name:String;
  }
@Component({
    selector:'applicant-root',
    templateUrl:'./applicant.component.html',
    styleUrls:['./applicant.component.css'],
    
})
// var arr = ['A']
export class ApplicantComponent implements OnInit{ 
readonly activeStepClass = 'active';
readonly nonActiveStepClass = "disabled";
@Input() mode: string;
// oneCheckChecked = true;



ApplicantData:any=[
  
  {
    id:0,
    question:"What is the toughest challenge you faced so far?How did you overcome the same",
   grade:null,

  },

  {
    id:1,question:'How do you  clear your doubts in studies?',
  grade:null,

},
  {
    id:2,question:"Give us the pattern of the next exam you will face. Also give us a plan for how you would prepare for this exam.",
  grade:null,

},
  {
    id:3,question:'give us the few areas of difficulty in your studies.Also tell us how you intend to overcome the same?',
  grade:null,


},
  {
    id:4,question:'What is the goal you have set for yourself this year?Give us an indication of steps to acheive the same?',
  grade:null,
},
{
  id:5,
  question:"Give us an insight into your goals for next year? Next 4years? Next 10 years? How would you achieve these?",
  grade:null,

},
{
  id:6,
  question:"If swadha Foundation were to give you Rs.10000 today tell us how would you use it?Rule is that you should not left any money unspent.",
  grade:null,
},
{
  id:7,
  question:"Let us assume you have been given 5 lakh rupees and you are spend it within the next week.Tell us what would you spend on?",
  grade:null,

},
{
  id:8,
  question:"Have you solved any day to day problem that you or your family faces?Please give us more details of the same.(to check problem solving ability)",
  grade:null,
},
{
  id:9,
  question:"Tell a qualify of a friend/ parent / relative that you think you should emulate?Why do you think this quality is so good?",
  grade:null,
},
]


// checkboxChecked = false;


public interviewform: FormGroup;
wizardStepStyle: string[];
wizardSteppsExpandState: boolean[];
myForm: any;
PerfectAnswer;
IdealAnswer;
BadAnswer;
StandardAnswer;
RightDirection;
tickChecked = false;
gradesOfApplicant=false;
applicantInterview :any[];
selectedValue:String;
data;
previewData;
interviewApplicantName;
applicantQuestions:String;
gradesDropDown: any;
storeData:any;
applicantQuestionDetailsModels: any;
conform = false;
selecteddata : any
getdata : any = false
backupapplicationdata : any

constructor(
    private dt: FormBuilder,
    public spinnerService: NgxSpinnerService,
    private modelDispenser: ApplicantInterviewDetailService,
    private modelDispenser2: StudentService,
    private messageService: SnackBarService,
    private router: Router,

  ) {

    this.wizardStepStyle = [
      this.activeStepClass,
      this.nonActiveStepClass,
    ]
    this.wizardSteppsExpandState = [true,false];
        this.createInterview();

  }
  ngOnInit():void{
    this.modelDispenser.getApplicantInterview().subscribe(
      (applicantData)=>{
        this.storeData = applicantData;
      console.log("StoreData",this.storeData[0])
      },
      error=>{
        console.log("error in get,  ", error )
      }
    )
    this.gradesDropDown = this.getDrpDownValues('33');
    this.applicantInterview = [];
    console.log(this.getDrpDownValues('33'))


  }
  createInterview(){
    this.interviewform = this.dt.group({
      // interviewData:[this.applicantInterview],
      applicantName:[null,[Validators.maxLength(30)]],
        interviewerName:[null,[Validators.maxLength(30)]],
        applicantId:[null,[Validators.maxLength(15)]],
        grade:[null]
        
    })
  }

 
  changeSection(index: number) {
    if(index==1){
      this.getdata = true
      console.log("returnbadck data",this.ApplicantData)
      this.backupapplicationdata = this.ApplicantData
    }
  
    for (let i = 0; i < this.wizardSteppsExpandState.length; i++) {
      if (index - 1 === i) {
        this.wizardSteppsExpandState[i] = true; 
        this.wizardStepStyle[i] = this.activeStepClass;
      } else {
        this.wizardSteppsExpandState[i] = false;
        this.wizardStepStyle[i] = this.nonActiveStepClass;
      }
    }
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
  selectQuestion(e){
 console.log(e);
  let ControlGrade = this.interviewform.get('grade').value;
  e.grade = ControlGrade;
  // e.applicantName = this.interviewform.get('applicantName').value;
    // e.interviewerName = this.interviewform.get('interviewerName').value;
    e.applicantId = this.interviewform.get('applicantId').value;
  // console.log(e) 
  this.applicantInterview.push(e) 
//  console.log(this.applicantInterview)

 
  
  }

  


  getApplicantInterview(): void{
    this.modelDispenser.getApplicantInterview().subscribe(
      (applicantData)=>{
      console.log(applicantData)
      },
      error=>{
        console.log("error in get,  ", error )
      }
    )
  }
  submit(){
    this.getdata =false
    // let name = this.interviewform.get('applicantName').value;
    // sessionStorage.setItem("interviewData",JSON.stringify(this.ApplicantData));

    // let interviewName = this.interviewform.get('interviewerName').value;
    if(this.interviewform.valid){
    //  this.interviewApplicantName.push(name)
    //  this.interviewApplicantName.push(interviewName)
    //  console.log(this.interviewApplicantName)
      this.previewData = this.applicantInterview
      console.log("============setting the data localstr",JSON.stringify(this.previewData))
      this.selecteddata = localStorage.setItem("selecteddata",JSON.stringify(this.previewData))
      // this.ApplicantData = this.previewData
     console.log("total data:",this.previewData)

      // console.log(this.interviewform)
         this.changeSection(2)
    }

    
  }

  saveApplicantInterviewDetails():void{
    this.spinnerService.show();
    let applicantData = JSON.stringify({
      applicantId:this.interviewform.get("applicantId").value,
      applicantName: this.interviewform.get("applicantName").value,
      interviewerName:this.interviewform.get("interviewerName").value,
      applicantQuestionDetailsModels:this.applicantInterview,
    })
    this.modelDispenser.addApplicantInterviewDetails(applicantData).subscribe(data =>{
      this.messageService.success("Applicant Data Submitted !")
    },
    error => {
      this.messageService.error("Error on Applicant Submission !!")
    })
    this.router.navigate([`./interview/interviewerList`]);

  }


  



}