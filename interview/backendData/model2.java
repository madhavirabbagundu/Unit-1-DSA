package com.swadha.spashtam.applicantinterview.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import javax.persistence.*;
// import javax.persistence.CascadeType;
// import javax.persistence.Column;
// import javax.persistence.Entity;
// import javax.persistence.FetchType;
// import javax.persistence.GeneratedValue;
// import javax.persistence.GenerationType;
// import javax.persistence.Id;
// import javax.persistence.JoinColumn;
// import javax.persistence.ManyToOne;
// import javax.persistence.Table;


@Entity
@Getter
@Setter
@Table(name = "APPLICANT_INTERVIEW_QUESTIONS")
@JsonIgnoreProperties({"hibernateLazyInitilizer", "handler", "applicantInterviewDetailsModel"})
public class ApplicantQuestionDetailsModel {

    @Id
    @Column(name = "applicant_question_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int applicantQuetionId;

    @Column(name="question_id")
    private int id;

    @Column(name = "application_id" ,insertable = false,updatable = false)
    private String applicantId;

    @ManyToOne(cascade = CascadeType.ALL,fetch = FetchType.LAZY)
    @JoinColumn(name = "application_id",referencedColumnName = "application_id")
    private ApplicantInterviewDetailsModel applicantInterviewDetailsModel;

    @Column(name = "question")
    private String question;

    @Column(name = "grade")
    private String grade;

    @Column(name  = "del_flag")
    private char delFlag='N';   
    
}
