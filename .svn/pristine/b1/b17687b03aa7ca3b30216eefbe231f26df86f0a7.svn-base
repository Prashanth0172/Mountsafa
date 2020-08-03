package com.hyva.bsfms.bs.bsentities;

import lombok.Data;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Data
@Table(name = "employee", uniqueConstraints = @UniqueConstraint(columnNames = {"employeeId"}))
public class Employee implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "native")
    @GenericGenerator(name = "native", strategy = "native")
    private Long employeeId;

    private String empBranch;
    private String employeeName;
    private String employeeCode;
    private String userType;
    private String empType;
    private String typeOfEmp;
    private String empDepartment;
    private String empDesignation;
    private String empCoordinator;
    private String reportTo;
    private String empDoj;
    private String empCapability;
    private String speciality;
    private String mobile;
    private String emailId;
    private String aadharNo;
    private String passportNo;
    private String experience;
    private String addressLine1;
    private String addressLine2;
    private String country;
    private String state;
    private String city;
    private String postalCode;
    private String userName;
    private String password;
    private String empbranchId;
    private String salEffectiveDate;
    private String basicSal;
    @Column(columnDefinition="text")
    private String empearnings;
    @Column(columnDefinition="text")
    private String empdeductions;
    private String empAge;
    private String empDob;
    private String earningAmount;
    private String deductionAmount;
    private Long hrId;

    public Long getHrId() {
        return hrId;
    }

    public void setHrId(Long hrId) {
        this.hrId = hrId;
    }

    public String getSalEffectiveDate() {
        return salEffectiveDate;
    }

    public String getEarningAmount() {
        return earningAmount;
    }

    public void setEarningAmount(String earningAmount) {
        this.earningAmount = earningAmount;
    }

    public String getDeductionAmount() {
        return deductionAmount;
    }

    public void setDeductionAmount(String deductionAmount) {
        this.deductionAmount = deductionAmount;
    }

    public String getEmpAge() {
        return empAge;
    }

    public void setEmpAge(String empAge) {
        this.empAge = empAge;
    }

    public String getEmpDob() {
        return empDob;
    }

    public void setEmpDob(String empDob) {
        this.empDob = empDob;
    }

    public void setSalEffectiveDate(String salEffectiveDate) {
        this.salEffectiveDate = salEffectiveDate;
    }

    public String getBasicSal() {
        return basicSal;
    }

    public void setBasicSal(String basicSal) {
        this.basicSal = basicSal;
    }

    public String getEmpearnings() {
        return empearnings;
    }

    public void setEmpearnings(String empearnings) {
        this.empearnings = empearnings;
    }

    public String getEmpdeductions() {
        return empdeductions;
    }

    public void setEmpdeductions(String empdeductions) {
        this.empdeductions = empdeductions;
    }

    private String status;

    public String getEmployeeCode() {
        return employeeCode;
    }

    public void setEmployeeCode(String employeeCode) {
        this.employeeCode = employeeCode;
    }

    public String getEmpBranch() {
        return empBranch;
    }

    public void setEmpBranch(String empBranch) {
        this.empBranch = empBranch;
    }

    public Long getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(Long employeeId) {
        this.employeeId = employeeId;
    }

    public String getEmployeeName() {
        return employeeName;
    }

    public void setEmployeeName(String employeeName) {
        this.employeeName = employeeName;
    }

    public String getUserType() {
        return userType;
    }

    public void setUserType(String userType) {
        this.userType = userType;
    }

    public String getEmpType() {
        return empType;
    }

    public void setEmpType(String empType) {
        this.empType = empType;
    }

    public String getTypeOfEmp() {
        return typeOfEmp;
    }

    public void setTypeOfEmp(String typeOfEmp) {
        this.typeOfEmp = typeOfEmp;
    }

    public String getEmpDepartment() {
        return empDepartment;
    }

    public void setEmpDepartment(String empDepartment) {
        this.empDepartment = empDepartment;
    }

    public String getEmpDesignation() {
        return empDesignation;
    }

    public void setEmpDesignation(String empDesignation) {
        this.empDesignation = empDesignation;
    }

    public String getEmpCoordinator() {
        return empCoordinator;
    }

    public void setEmpCoordinator(String empCoordinator) {
        this.empCoordinator = empCoordinator;
    }

    public String getReportTo() {
        return reportTo;
    }

    public void setReportTo(String reportTo) {
        this.reportTo = reportTo;
    }

    public String getEmpDoj() {
        return empDoj;
    }

    public void setEmpDoj(String empDoj) {
        this.empDoj = empDoj;
    }

    public String getEmpCapability() {
        return empCapability;
    }

    public void setEmpCapability(String empCapability) {
        this.empCapability = empCapability;
    }

    public String getSpeciality() {
        return speciality;
    }

    public void setSpeciality(String speciality) {
        this.speciality = speciality;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getEmailId() {
        return emailId;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    public String getAadharNo() {
        return aadharNo;
    }

    public void setAadharNo(String aadharNo) {
        this.aadharNo = aadharNo;
    }

    public String getPassportNo() {
        return passportNo;
    }

    public void setPassportNo(String passportNo) {
        this.passportNo = passportNo;
    }

    public String getExperience() {
        return experience;
    }

    public void setExperience(String experience) {
        this.experience = experience;
    }

    public String getAddressLine1() {
        return addressLine1;
    }

    public void setAddressLine1(String addressLine1) {
        this.addressLine1 = addressLine1;
    }

    public String getAddressLine2() {
        return addressLine2;
    }

    public void setAddressLine2(String addressLine2) {
        this.addressLine2 = addressLine2;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getPostalCode() {
        return postalCode;
    }

    public void setPostalCode(String postalCode) {
        this.postalCode = postalCode;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmpbranchId() {
        return empbranchId;
    }

    public void setEmpbranchId(String empbranchId) {
        this.empbranchId = empbranchId;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
