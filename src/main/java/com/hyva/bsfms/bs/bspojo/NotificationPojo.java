package com.hyva.bsfms.bs.bspojo;

import lombok.Data;

import java.util.Date;

@Data
public class NotificationPojo {
    private Long notificationId;
    private String notificationSubject;
    private String notificationSend;
    private Date notificationDate;
    private String notificationContent;
    private String notificationStatus;
    private String branchName;
    private String branchId;
    private String userId;
}
