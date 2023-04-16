package com.swadha.spashtam.applicantinterview.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.swadha.spashtam.applicantinterview.model.ApplicantInterviewDetailsModel;

import java.util.List;
@Repository
public interface ApplicantInterviewDetailsRepo extends JpaRepository<ApplicantInterviewDetailsModel,String>{
    public List<ApplicantInterviewDetailsModel> findAll();

    public ApplicantInterviewDetailsModel findByApplicantId(String applicantId);
    
    // public ApplicantInterviewDetailsModel findByApplicantId(String applicantId);

}
