package com.hyva.bsfms.bs.bsentities;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Entity
public class StudentAttendence {

    @Id
    @GenericGenerator(name = "native", strategy = "native")
    @GeneratedValue(strategy = GenerationType.AUTO,generator = "native")

    private Long studentAttendenceId;
    private String aDate ;
    private String studentLevel ;
    private String studentClass ;
    private String student ;
    private String serialNo ;
//    private String eName;
    private String firstCheckIn;
    private String lastCheckOut;
    private String time;
    private String status;
    private String attendance;
    @Column(columnDefinition="text")
    private String studentAttendence;


    public String getAttendance() {
        return attendance;
    }

    public void setAttendance(String attendance) {
        this.attendance = attendance;
    }

    public String getStudentLevel() {
        return studentLevel;
    }

    public void setStudentLevel(String studentLevel) {
        this.studentLevel = studentLevel;
    }

    public String getStudentClass() {
        return studentClass;
    }

    public void setStudentClass(String studentClass) {
        this.studentClass = studentClass;
    }

    public String getStudent() {
        return student;
    }

    public void setStudent(String student) {
        this.student = student;
    }

    public Long getStudentAttendenceId() {
        return studentAttendenceId;
    }

    public void setStudentAttendenceId(Long studentAttendenceId) {
        this.studentAttendenceId = studentAttendenceId;
    }

    public String getaDate() {
        return aDate;
    }

    public void setaDate(String aDate) {
        this.aDate = aDate;
    }


    public String getSerialNo() {
        return serialNo;
    }

    public void setSerialNo(String serialNo) {
        this.serialNo = serialNo;
    }

    public String getFirstCheckIn() {
        return firstCheckIn;
    }

    public void setFirstCheckIn(String firstCheckIn) {
        this.firstCheckIn = firstCheckIn;
    }

    public String getLastCheckOut() {
        return lastCheckOut;
    }

    public void setLastCheckOut(String lastCheckOut) {
        this.lastCheckOut = lastCheckOut;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getStudentAttendence() {
        return studentAttendence;
    }

    public void setStudentAttendence(String studentAttendence) {
        this.studentAttendence = studentAttendence;
    }
}
