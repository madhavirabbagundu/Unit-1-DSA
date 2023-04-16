{
    path:"interview/interviewerList",
    component:InterviewerList,
  },
  {
    path:"interview/profile",
    component:InterviewerProfile,
  },

  InterviewerList,
  InterviewerProfile,

  import { InterviewerList } from './interview/interviewer.list';
import { InterviewerProfile } from './interview/interviewer-profile';


//navMenu

<li [class]="anchorState[15].style" *ngIf="hasModuleAccess('7')">
<a data-target="#Il" data-toggle="collapse" [class]="anchorState[15].childState[0]" [attr.aria-expanded]="anchorState[15].childStateAria[0]">
  <i class="align-middle" data-feather="user-plus"></i> <span class="align-middle">Interview</span>
</a>
<ul id="Il" [class]="anchorState[15].childContainerStyle[0]" data-parent="#sidebar">
  <li *ngIf="hasModuleAccess('2C')" [class]="anchorState[15].childStyle[0]" (click)="resetChildStyles(15,0)"><a class="sidebar-link" routerLink="/interview/applicantForm">Applicant Form </a></li>
   <li *ngIf="hasModuleAccess('2A')" [class]="anchorState[16].childStyle[1]" (click)="resetChildStyles(15,1)"><a class="sidebar-link" routerLink="/interview/interviewerList">Interviewer List</a></li>

</ul>
</li>