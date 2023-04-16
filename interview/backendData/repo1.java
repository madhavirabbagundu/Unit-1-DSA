package com.swadha.spashtam.applicantinterview.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
// import com.swadha.spashtam.applicantinterview.model.ApplicantInterviewDetailsModel;
import com.swadha.spashtam.applicantinterview.model.ApplicantQuestionDetailsModel;
import java.util.List;

@Repository
public interface ApplicantQuestionDetailsRepo extends JpaRepository<ApplicantQuestionDetailsModel,String>{

    public List<ApplicantQuestionDetailsModel> findAll();

}
