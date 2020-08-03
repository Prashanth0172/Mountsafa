package com.hyva.bsfms.bs.bspojo;

import java.sql.Date;
import java.util.List;

/**
 * Created by sahera on 18/3/19.
 */
public class AssessmentsPojo {
    private String studentName;
    private String enquiryId;
    private String parentName;
    private String phoneNo;
    private String gradeId;
    //private Date  date;
    private String date;
    private String assessmentStatus;
    private String remarks;
    private List<RemarksPojo> remarksList;
    private String fatherName;
    private String motherName;



    public String getStudentName() {
        return studentName;
    }

    public void setStudentName(String studentName) {
        this.studentName = studentName;
    }

    public String getEnquiryId() {
        return enquiryId;
    }

    public void setEnquiryId(String enquiryId) {
        this.enquiryId = enquiryId;
    }

    public String getParentName() {
        return parentName;
    }

    public void setParentName(String parentName) {
        this.parentName = parentName;
    }

    public String getPhoneNo() {
        return phoneNo;
    }

    public void setPhoneNo(String phoneNo) {
        this.phoneNo = phoneNo;
    }

    public String getGradeId() {
        return gradeId;
    }

    public void setGradeId(String gradeId) {
        this.gradeId = gradeId;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getAssessmentStatus() {
        return assessmentStatus;
    }

    public void setAssessmentStatus(String assessmentStatus) {
        this.assessmentStatus = assessmentStatus;
    }

    public String getRemarks() {
        return remarks;
    }

    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }

    public List<RemarksPojo> getRemarksList() {
        return remarksList;
    }

    public void setRemarksList(List<RemarksPojo> remarksList) {
        this.remarksList = remarksList;
    }

    public String getFatherName() {
        return fatherName;
    }

    public void setFatherName(String fatherName) {
        this.fatherName = fatherName;
    }

    public String getMotherName() {
        return motherName;
    }

    public void setMotherName(String motherName) {
        this.motherName = motherName;
    }
}
