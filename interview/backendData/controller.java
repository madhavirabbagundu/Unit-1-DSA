
package com.swadha.spashtam.applicantinterview.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.swadha.spashtam.applicantinterview.model.ApplicantInterviewDetailsModel;
import com.swadha.spashtam.applicantinterview.service.ApplicantInterviewDetailsService;
import javax.servlet.http.HttpServletRequest;
import java.util.List;
@CrossOrigin
@RestController
@RequestMapping("/applicantInterview")
public class ApplicantInterviewDetailsController {
    @Autowired
    private ApplicantInterviewDetailsService applicantInterviewDetailsService;
    @GetMapping("/interview")
    public List<ApplicantInterviewDetailsModel> findAll() {
        System.out.println(applicantInterviewDetailsService.getAll());
        return applicantInterviewDetailsService.getAll();
    }

    @PostMapping("/postinterview")
    public ApplicantInterviewDetailsModel addInterview(@RequestBody  ApplicantInterviewDetailsModel applicantInterviewDetailsModel,HttpServletRequest request){
        return applicantInterviewDetailsService.addInterview(applicantInterviewDetailsModel);
    }

    @Deprecated
    @GetMapping("/get/{applicantId}")
    public ApplicantInterviewDetailsModel getApplicantInterviewDetailsModel (@PathVariable String applicantId){
        return applicantInterviewDetailsService.getApplicantInterviewDetailsModel(applicantId);
    }

    // @Deprecated
    // @GetMapping("/get/{applicationNumber}")
    // public HomeVisitMaster gethomeVisitMaster (@PathVariable String applicationNumber){
    //     System.out.println(homeVisitMasterService.getHomeVisitMaster(applicationNumber));
    //     return homeVisitMasterService.getHomeVisitMaster(applicationNumber);
    // }
  
}
