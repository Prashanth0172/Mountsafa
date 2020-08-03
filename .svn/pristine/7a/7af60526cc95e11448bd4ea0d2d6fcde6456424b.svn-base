package com.hyva.bsfms.bs.bsmapper;

import com.hyva.bsfms.bs.bsentities.Notification;
import com.hyva.bsfms.bs.bsentities.Qualification;
import com.hyva.bsfms.bs.bsentities.TrainingModule;
import com.hyva.bsfms.bs.bspojo.NotificationPojo;
import com.hyva.bsfms.bs.bspojo.QualificationPojo;
import com.hyva.bsfms.bs.bspojo.TrainingModulePojo;

import java.util.ArrayList;
import java.util.List;

public class BsQualificationMapper {
    public static Qualification mapPojoToEntity(QualificationPojo pojo){
        Qualification qualification=new Qualification();
        qualification.setQualificationId(pojo.getQualificationId());
        qualification.setQualificationName(pojo.getQualificationName());
        qualification.setStatus(pojo.getStatus());
        qualification.setBranchId(pojo.getBranchId());
//        trainingModule.setT(pojo.getGradeStatus());
        return qualification;
    }


    public static List<QualificationPojo> mapQualificationEntityToPojo(List<Qualification> qualificationList){
        List<QualificationPojo> list=new ArrayList<>();
        for(Qualification Qualification:qualificationList) {
            QualificationPojo qualificationPojo = new QualificationPojo();
            qualificationPojo.setQualificationId(Qualification.getQualificationId());
            qualificationPojo.setQualificationName(Qualification.getQualificationName());
            qualificationPojo.setStatus(Qualification.getStatus());
            qualificationPojo.setBranchId(Qualification.getBranchId());
//            qualificationPojo.setNotificationDate(Qualification.getNotificationDate());
//            notificationPojo.setSendTo(notification.getSendTo());
//            notificationPojo.setNotificationContent(notification.getNotificationContent());
//            trainingModulePojo.setDoctorAddress(trainingModule.getDoctorAddress());


            list.add(qualificationPojo);
        }
        return list;
    }
}
