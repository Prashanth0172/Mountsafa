package com.hyva.bsfms.bs.bsmapper;




import com.hyva.bsfms.bs.bsentities.AttendanceMgt;
import com.hyva.bsfms.bs.bspojo.AttendanceMgtPojo;

import java.util.ArrayList;
import java.util.List;


public class BsAttendanceMgtMapper {
    public static AttendanceMgt mapAttendancePojoToEntity(AttendanceMgtPojo attendanceMgtPojo) {
        AttendanceMgt attendanceMgt1 = new AttendanceMgt();
        attendanceMgt1.setaId(attendanceMgtPojo.getaId());
        attendanceMgt1.setaDate(attendanceMgtPojo.getaDate());
        attendanceMgt1.seteName(attendanceMgtPojo.geteName());
        attendanceMgt1.setEmpAttendance(attendanceMgtPojo.getEmpAttendance());
        attendanceMgt1.setStatus(attendanceMgtPojo.getStatus());
        attendanceMgt1.setDepartment(attendanceMgtPojo.getDepartment());

        return attendanceMgt1;
    }

    public static List<AttendanceMgtPojo> mapAttendanceEntityToPojo(List<AttendanceMgt> attendanceList) {
        List<AttendanceMgtPojo> list = new ArrayList<>();
        for (AttendanceMgt attendanceMgt : attendanceList) {
            AttendanceMgtPojo attendanceMgtPojo = new AttendanceMgtPojo();
            attendanceMgtPojo.setaId(attendanceMgt.getaId());
            attendanceMgtPojo.setaDate(attendanceMgt.getaDate());
            attendanceMgtPojo.seteName(attendanceMgt.geteName());
            attendanceMgtPojo.setStatus(attendanceMgt.getStatus());
            attendanceMgtPojo.setDepartment(attendanceMgt.getDepartment());
            attendanceMgtPojo.setEmpAttendance(attendanceMgt.getEmpAttendance());


            list.add(attendanceMgtPojo);
        }
        return list;
    }
}

