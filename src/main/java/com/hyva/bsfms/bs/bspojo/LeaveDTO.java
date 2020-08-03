package com.hyva.bsfms.bs.bspojo;

import lombok.Data;

@Data
public class LeaveDTO {
    private Long leaveId;
    private String leaveType;
    private String status;
    private String leaveFor;
    private String days;
    private String dayCount;
    private String paidLeave;
    private String allowNegativeBal;
    private String reasonRequired;
    private String day;
    private String day1;
    private String calender;
}
