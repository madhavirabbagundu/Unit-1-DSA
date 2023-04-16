package com.swadha.spashtam.applicantinterview.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.swadha.spashtam.applicantinterview.model.ApplicantInterviewDetailsModel;
import com.swadha.spashtam.applicantinterview.model.ApplicantQuestionDetailsModel;
import com.swadha.spashtam.applicantinterview.repository.ApplicantInterviewDetailsRepo;

import java.util.List;

@Service
public class ApplicantInterviewDetailsService {
    @Autowired
    private ApplicantInterviewDetailsRepo applicantInterviewDetailsRepo;

    @Autowired
    private ApplicantQuestionDetailsService applicantQuestionDetailsService;

    public List<ApplicantInterviewDetailsModel> getAll() {
        return applicantInterviewDetailsRepo.findAll();
    }

    public ApplicantInterviewDetailsModel addInterview(ApplicantInterviewDetailsModel applicantInterviewDetailsModels) {

        applicantInterviewDetailsModels.setDelFlag('N');
        ApplicantInterviewDetailsModel applicantInterviewDetailsModelSaved = applicantInterviewDetailsRepo
                .save(applicantInterviewDetailsModels);

                List<ApplicantQuestionDetailsModel> applicantQuestionSavedList = applicantInterviewDetailsModelSaved.getApplicantQuestionDetailsModels();
                for (int i = 0; i < applicantQuestionSavedList.size(); i++) {
                    ApplicantQuestionDetailsModel applicantQuestionDetailsModel = applicantQuestionSavedList.get(i);
                    applicantQuestionDetailsModel.setApplicantInterviewDetailsModel(applicantInterviewDetailsModelSaved);
                    applicantQuestionDetailsModel.setApplicantId(applicantInterviewDetailsModelSaved.getApplicantId());
                    applicantQuestionDetailsService.addApplicantQuestionDetailsModel(applicantQuestionDetailsModel);
                }
        
                return applicantInterviewDetailsModelSaved;
    }

    public ApplicantInterviewDetailsModel getApplicantInterviewDetailsModel(String applicantId) {
        ApplicantInterviewDetailsModel applicantInterviewDetailsModel = applicantInterviewDetailsRepo.findByApplicantId(applicantId);
        return applicantInterviewDetailsModel;
    }

    // public HomeVisitMaster getHomeVisitMaster(String applicationNumber) {
    //     HomeVisitMaster homeVisitMaster = homeVisitMasterRepo.findByApplicationNumber(applicationNumber);
    //     return homeVisitMaster;
    // }

}
