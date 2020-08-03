package com.hyva.bsfms.bs.bsmapper;

import com.hyva.bsfms.bs.bsentities.Notification;
import com.hyva.bsfms.bs.bsentities.TrainingModule;
import com.hyva.bsfms.bs.bspojo.NotificationPojo;
import com.hyva.bsfms.bs.bspojo.TrainingModulePojo;

import java.util.ArrayList;
import java.util.List;

public class BsNotificationMapper {
    public static Notification mapPojoToEntity(NotificationPojo pojo){
        Notification notification=new Notification();
        notification.setNotificationSubject(pojo.getNotificationSubject());
        notification.setNotificationContent(pojo.getNotificationContent());
        notification.setNotificationId(pojo.getNotificationId());
        notification.setBranchId(pojo.getBranchId());
        notification.setNotificationDate(pojo.getNotificationDate());
        notification.setNotificationSend(pojo.getNotificationSend());
        notification.setNotificationStatus(pojo.getNotificationStatus());
//        trainingModule.setT(pojo.getGradeStatus());
        return notification;
    }

    public static List<NotificationPojo> mapNotificationEntityToPojo(List<Notification> notificationList){
        List<NotificationPojo> list=new ArrayList<>();
        for(Notification notification:notificationList) {
            NotificationPojo notificationPojo = new NotificationPojo();
            notificationPojo.setNotificationSubject(notification.getNotificationSubject());
            notificationPojo.setNotificationId(notification.getNotificationId());
            notificationPojo.setNotificationContent(notification.getNotificationContent());
            notificationPojo.setBranchId(notification.getBranchId());
            notificationPojo.setNotificationDate(notification.getNotificationDate());
            notificationPojo.setNotificationSend(notification.getNotificationSend());
            notificationPojo.setNotificationStatus(notification.getNotificationStatus());
//            notificationPojo.setNotificationContent(notification.getNotificationContent());
//            trainingModulePojo.setDoctorAddress(trainingModule.getDoctorAddress());


            list.add(notificationPojo);
        }
        return list;
    }
}
