package com.hyva.bsfms.bs.bsmapper;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import com.hyva.bsfms.bs.bsentities.EnquiryForm;
import com.hyva.bsfms.bs.bspojo.AssessmentsPojo;
import com.hyva.bsfms.bs.bspojo.EnquiryFormPOJO;
import com.hyva.bsfms.bs.bspojo.RegistrationFeePojo;
import com.hyva.bsfms.bs.bspojo.counslarPojo;
import org.apache.commons.lang3.StringUtils;

import java.lang.reflect.Type;
import java.util.List;

/**
 * Created by sahera on 16/3/19.
 */
public class EnquiryFormMapper {
    public static EnquiryForm saveEnquiryForm(EnquiryFormPOJO enquiryFormPOJO) {
        EnquiryForm enquiryForm = new EnquiryForm();
        enquiryForm.setEnquiryId(enquiryFormPOJO.getEnquiryId());
        enquiryForm.setEnquiryNo(enquiryFormPOJO.getEnquiryNo());
        enquiryForm.setEnqDate(enquiryFormPOJO.getEnqDate());
        enquiryForm.setStudentName(enquiryFormPOJO.getStudentName());
        enquiryForm.setTelephoneNo(enquiryFormPOJO.getTelephoneNo());
        enquiryForm.setAcademicDetailsOfStud(enquiryFormPOJO.getAcademicDetailsOfStud());
        enquiryForm.setAddress(enquiryFormPOJO.getAddress());
        enquiryForm.setEmailId(enquiryFormPOJO.getEmailId());
        enquiryForm.setReference(enquiryFormPOJO.getReference());
        enquiryForm.setLevel(enquiryFormPOJO.getGrade());
        enquiryForm.setSiblingGrade(enquiryFormPOJO.getSiblingGrade());
        enquiryForm.setStatus(enquiryFormPOJO.getStatus());
        enquiryForm.setTotalPaidAmt(enquiryFormPOJO.getTotalPaidAmt());
        enquiryForm.setSiblingDetails(enquiryFormPOJO.getSiblingDetails());
        enquiryForm.setFatherName(enquiryFormPOJO.getFatherName());
        enquiryForm.setMotherName(enquiryFormPOJO.getMotherName());
        enquiryForm.setReferrel(enquiryFormPOJO.getReferrel());
        enquiryForm.setTransport(enquiryFormPOJO.getTransport());
        enquiryForm.setOption1(enquiryFormPOJO.getOption1());
        enquiryForm.setAnnualIncome(enquiryFormPOJO.getAnnualIncome());
        enquiryForm.setQualification(enquiryFormPOJO.getQualification());
        enquiryForm.setProfession(enquiryFormPOJO.getProfession());
        enquiryForm.setPick(enquiryFormPOJO.getPick());
        enquiryForm.setEnqClass(enquiryFormPOJO.getEnqClass());

        return enquiryForm;
    }
    public static EnquiryFormPOJO mapEntityToPojo(EnquiryForm enquiryForm) {
        Gson gson = new Gson();

        EnquiryFormPOJO pojo = new EnquiryFormPOJO();
        pojo.setEnquiryId(enquiryForm.getEnquiryId());
        pojo.setEnquiryNo(enquiryForm.getEnquiryNo());
        pojo.setEnqDate(enquiryForm.getEnqDate());
        pojo.setStudentName(enquiryForm.getStudentName());
        pojo.setTelephoneNo(enquiryForm.getTelephoneNo());
        pojo.setAcademicDetailsOfStud(enquiryForm.getAcademicDetailsOfStud());
        pojo.setAddress(enquiryForm.getAddress());
        pojo.setEmailId(enquiryForm.getEmailId());
        pojo.setReference(enquiryForm.getReference());
        pojo.setGrade(enquiryForm.getLevel());
        pojo.setSiblingGrade(enquiryForm.getSiblingGrade());
        pojo.setStatus(enquiryForm.getStatus());
        pojo.setTotalPaidAmt(enquiryForm.getTotalPaidAmt());
        pojo.setSiblingDetails(enquiryForm.getSiblingDetails());
        pojo.setFatherName(enquiryForm.getFatherName());
        pojo.setMotherName(enquiryForm.getMotherName());
        pojo.setReferrel(enquiryForm.getReferrel());
        pojo.setTransport(enquiryForm.getTransport());
        pojo.setQualification(enquiryForm.getQualification());
        pojo.setOption1(enquiryForm.getOption1());
        pojo.setEnqClass(enquiryForm.getEnqClass());
        pojo.setAnnualIncome(enquiryForm.getAnnualIncome());
        pojo.setProfession(enquiryForm.getProfession());
        pojo.setPick(enquiryForm.getPick());
        Type type = new TypeToken<List<RegistrationFeePojo>>() {
        }.getType();
        List<RegistrationFeePojo> reg =gson.fromJson(enquiryForm.getFeeDeatils(), type);
        pojo.setFeePojoList(reg);
        Type assessment = new TypeToken<AssessmentsPojo>() {
        }.getType();
        AssessmentsPojo assessmentsPojos =gson.fromJson(enquiryForm.getAssessMentDetails(), assessment);
        pojo.setAssessmentsPojos(assessmentsPojos);
        Type counslar = new TypeToken<counslarPojo>() {
        }.getType();
        counslarPojo counslarPojos =gson.fromJson(enquiryForm.getCounslarDetails(), counslar);
        pojo.setCounslarPojos(counslarPojos);

        return pojo;



    }
}
