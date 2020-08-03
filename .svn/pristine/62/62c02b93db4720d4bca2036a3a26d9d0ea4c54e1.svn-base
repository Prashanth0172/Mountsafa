package com.hyva.bsfms.bs.bsmapper;




import com.hyva.bsfms.bs.bsentities.AttendanceMgt;
import com.hyva.bsfms.bs.bsentities.StudentAttendence;
import com.hyva.bsfms.bs.bspojo.AttendanceMgtPojo;
import com.hyva.bsfms.bs.bspojo.StudentAttendencePojo;

import java.util.ArrayList;
import java.util.List;


public class BsStudentAttendenceMapper {
    public static StudentAttendence mapStudentAttendencePojoToEntity(StudentAttendencePojo studentAttendencePojo) {
        StudentAttendence studentAttendence = new StudentAttendence();
        studentAttendence.setStudentAttendenceId(studentAttendencePojo.getStudentAttendenceId());
        studentAttendence.setaDate(studentAttendencePojo.getaDate());
        studentAttendence.setStudentClass(studentAttendencePojo.getStudentClass());
        studentAttendence.setStudentLevel(studentAttendencePojo.getStudentLevel());
        studentAttendence.setFirstCheckIn(studentAttendencePojo.getFirstCheckIn());
        studentAttendence.setLastCheckOut(studentAttendencePojo.getLastCheckOut());
        studentAttendence.setTime(studentAttendencePojo.getTime());
        studentAttendence.setStudentAttendence(studentAttendencePojo.getStudentAttendence());
        studentAttendence.setAttendance(studentAttendencePojo.getAttendance());
        studentAttendence.setStatus(studentAttendencePojo.getStatus());

        return studentAttendence;
    }

    public static List<StudentAttendencePojo> mapStudentAttendanceEntityToPojo(List<StudentAttendence> studentAttendenceList) {
        List<StudentAttendencePojo> list = new ArrayList<>();
        for (StudentAttendence studentAttendence : studentAttendenceList) {
            StudentAttendencePojo studentAttendencePojo = new StudentAttendencePojo();
            studentAttendencePojo.setStudentAttendenceId(studentAttendence.getStudentAttendenceId());
            studentAttendencePojo.setaDate(studentAttendence.getaDate());
            studentAttendencePojo.setStudentClass(studentAttendence.getStudentClass());
            studentAttendencePojo.setStudentLevel(studentAttendence.getStudentLevel());
            studentAttendencePojo.setFirstCheckIn(studentAttendence.getFirstCheckIn());
            studentAttendencePojo.setLastCheckOut(studentAttendence.getLastCheckOut());
            studentAttendencePojo.setTime(studentAttendence.getTime());
            studentAttendencePojo.setStatus(studentAttendence.getStatus());
            studentAttendencePojo.setStudentAttendence(studentAttendence.getStudentAttendence());
            studentAttendencePojo.setAttendance(studentAttendence.getAttendance());


            list.add(studentAttendencePojo);
        }
        return list;
    }
}

