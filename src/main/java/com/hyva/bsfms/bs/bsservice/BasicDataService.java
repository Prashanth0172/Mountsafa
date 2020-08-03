package com.hyva.bsfms.bs.bsservice;

import com.hyva.bsfms.bs.bsentities.Branches;
import com.hyva.bsfms.bs.bsentities.SMSServer;
import com.hyva.bsfms.bs.bsentities.User;
import com.hyva.bsfms.bs.bsrespositories.BranchesRepository;
import com.hyva.bsfms.bs.bsrespositories.BsUserRepository;
import com.hyva.bsfms.bs.sms.SMSServerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class BasicDataService {

    @Autowired
    BsUserRepository bsUserRepository;
    @Autowired
    BranchesRepository branchesRepository;
   @Autowired
   SMSServerRepository smsServerRepository;

    public void insertBasicData() throws Exception {
        //============================================= User ======================================================================
//        List<User> userList = (List<User>) bsUserRepository.findAll();
//        if (userList.isEmpty()) {
//            User userObj = new User();
//            userObj.setEmail("");
//            userObj.setFull_name("admin");
//            userObj.setPasswordUser("admin");
//            userObj.setPhone("");
//            userObj.setSecurityAnswer("");
//            userObj.setSecurityQuestion("");
//            userObj.setStatus("Active");
//            userObj.setUserName("admin");
//            userObj.setUserToken("");
//            bsUserRepository.save(userObj);
//
//
//        }
    }
    public void pushBasicData() throws Exception {
        List<SMSServer> smsServers = smsServerRepository.findAll();
        if (smsServers.isEmpty()) {
            getSmsServerObject("http://sms.hyvaitsolutions.com/api/v4/", "A71210d6e04ce8f4edaba269004814b74", "HVAGPS");
        }
        List<User> userList = (List<User>) bsUserRepository.findAll();
        if (userList.isEmpty()) {
            User userObj = new User();
            userObj.setFull_name("Main Branch");
            userObj.setBranchCode("Main Branch");
            userObj.setPasswordUser("admin");
            userObj.setStatus("Active");
            userObj.setUserName("admin");
            bsUserRepository.save(userObj);
        }
        List<Branches> branchesList = (List<Branches>) branchesRepository.findAll();
        if (branchesList.isEmpty()) {
            Branches branchesObj = new Branches();
            branchesObj.setBranchCode("Main Branch");
            branchesObj.setBranchName("Main Branch");
            branchesObj.setStatus("Active");
            branchesObj.setUserName("admin");
            branchesObj.setPassword("admin");
            branchesRepository.save(branchesObj);
        }

    }
    public void getSmsServerObject(String smsUrl, String  apiKey, String senderId) {
        SMSServer smsServer = new SMSServer();
        smsServer.setSmsUrl(smsUrl);
        smsServer.setApiKey(apiKey);
        smsServer.setSenderId(senderId);
        smsServerRepository.save(smsServer);
    }
}


















