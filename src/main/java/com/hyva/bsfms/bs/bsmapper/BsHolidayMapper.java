package com.hyva.bsfms.bs.bsmapper;

import com.hyva.bsfms.bs.bsentities.GradeMaster;
import com.hyva.bsfms.bs.bsentities.Holiday;
import com.hyva.bsfms.bs.bspojo.GradeMasterPojo;
import com.hyva.bsfms.bs.bspojo.HolidayPojo;

import java.util.ArrayList;
import java.util.List;

public class BsHolidayMapper {
    public static Holiday mapPojoToEntity(HolidayPojo pojo){
        Holiday holiday=new Holiday();
        holiday.setId(pojo.getId());
        holiday.setHolidayName(pojo.getHolidayName());
        holiday.setFromdate(pojo.getFromdate());
        holiday.setTodate(pojo.getTodate());
        holiday.setEmployeeType(pojo.getEmployeeType());
        holiday.setNoOfDays(pojo.getNoOfDays());
        holiday.setTypeOfEmployee(pojo.getTypeOfEmployee());
        holiday.setBranchId(pojo.getBranchId());
        holiday.setStatus(pojo.getStatus());
        return holiday;
    }
    public static List<HolidayPojo> mapholidayEntityToPojo(List<Holiday> List) {
        List<HolidayPojo> list = new ArrayList<>();
        for (Holiday group : List) {
            HolidayPojo pojo = new HolidayPojo();
            pojo.setBranchId(group.getBranchId());
            pojo.setEmployeeType(group.getEmployeeType());
            pojo.setFromdate(group.getFromdate());
            pojo.setTodate(group.getTodate());
            pojo.setHolidayName(group.getHolidayName());
            pojo.setNoOfDays(group.getNoOfDays());
            pojo.setId(group.getId());
            pojo.setTypeOfEmployee(group.getTypeOfEmployee());
            pojo.setStatus(group.getStatus());
//            pojo.setUserId(group.getUserId().toString());
            list.add(pojo);
        }
        return list;
    }
}
