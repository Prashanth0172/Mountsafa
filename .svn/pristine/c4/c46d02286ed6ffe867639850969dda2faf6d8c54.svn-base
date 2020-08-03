package com.hyva.bsfms.bs.bsmapper;

import com.hyva.bsfms.bs.bsentities.EmailTemplateMaster;
import com.hyva.bsfms.bs.bsentities.Notification;
import com.hyva.bsfms.bs.bsentities.TrainingModule;
import com.hyva.bsfms.bs.bspojo.EmailTemplatePojo;
import com.hyva.bsfms.bs.bspojo.NotificationPojo;
import com.hyva.bsfms.bs.bspojo.TrainingModulePojo;

import java.util.ArrayList;
import java.util.List;

public class BsEmailMapper {
    public static EmailTemplateMaster mapPojoToEntity(EmailTemplatePojo pojo){
        EmailTemplateMaster emailTemplateMaster=new EmailTemplateMaster();
        emailTemplateMaster.setEmailName(pojo.getEmailName());
        emailTemplateMaster.setEmailId(pojo.getEmailId());
        emailTemplateMaster.setEmailDescription(pojo.getEmailDescription());
        emailTemplateMaster.setEmailStatus(pojo.getEmailStatus());
        emailTemplateMaster.setEmailSubject(pojo.getEmailSubject());
        emailTemplateMaster.setBranchId(pojo.getBranchId());
        return emailTemplateMaster;
    }

    public static List<EmailTemplatePojo> mapEmailEntityToPojo(List<EmailTemplateMaster> emailTemplateMasterList){
        List<EmailTemplatePojo> list=new ArrayList<>();
        for(EmailTemplateMaster emailTemplateMaster:emailTemplateMasterList) {
            EmailTemplatePojo emailTemplatePojo = new EmailTemplatePojo();
            emailTemplatePojo.setEmailName(emailTemplateMaster.getEmailName());
            emailTemplatePojo.setEmailId(emailTemplateMaster.getEmailId());
            emailTemplatePojo.setEmailDescription(emailTemplateMaster.getEmailDescription());
            emailTemplatePojo.setEmailStatus(emailTemplateMaster.getEmailStatus());
            emailTemplatePojo.setEmailSubject(emailTemplateMaster.getEmailSubject());
            emailTemplatePojo.setBranchId(emailTemplateMaster.getBranchId());
            list.add(emailTemplatePojo);
        }
        return list;
    }
}
