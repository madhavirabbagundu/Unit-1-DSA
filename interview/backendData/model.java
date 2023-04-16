package com.swadha.spashtam.applicantinterview.model;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.Where;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

// import antlr.collections.List;
@Entity
@Setter
@Getter
@NoArgsConstructor
@Table(name = "APPLICANT_INTERVIEW")
@JsonIgnoreProperties({"hibernateLazyInitilizer", "handler", "applicantInterviewDetailsModel"})
@Where(clause = "del_flag = 'N'")
public class ApplicantInterviewDetailsModel {

    @Id
    @Column(name  = "application_id")
    private String applicantId;

    @OneToMany(mappedBy = "applicantInterviewDetailsModel",cascade = CascadeType.ALL)
    private List<ApplicantQuestionDetailsModel>applicantQuestionDetailsModels;

    @Column(name = "applicant_name")
    private String applicantName;

    @Column(name = "interviewer_name")
    private String interviewerName;
    
     @Column(name = "del_flag")
     private char delFlag = 'N';
   
}
