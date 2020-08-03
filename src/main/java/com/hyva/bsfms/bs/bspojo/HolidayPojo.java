package com.hyva.bsfms.bs.bspojo;

import lombok.Data;

@Data
public class HolidayPojo {

    private Long id;
    private String holidayName;
    private String employeeType;
    private String typeOfEmployee;
    private String fromdate;
    private String todate;
    private String noOfDays;
    private String branchId;
    private String status;


}
