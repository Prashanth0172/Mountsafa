package com.hyva.bsfms.bs.bspojo;

import com.hyva.bsfms.bs.bsentities.Student;

import java.util.List;

public class StudentAttendenceDto {

    private List<Student> studentList;
    private List<StudentAttendencePojo> list;
    public String studentName;


    public List<Student> getStudentList() {
        return studentList;
    }

    public void setStudentList(List<Student> studentList) {
        this.studentList = studentList;
    }

    public List<StudentAttendencePojo> getList() {
        return list;
    }

    public void setList(List<StudentAttendencePojo> list) {
        this.list = list;
    }

    public String getStudentName() {
        return studentName;
    }

    public void setStudentName(String studentName) {
        this.studentName = studentName;
    }
}
