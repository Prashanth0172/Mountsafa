package com.hyva.bsfms.bs.bsmapper;

import com.hyva.bsfms.bs.bsentities.Branches;
import com.hyva.bsfms.bs.bsentities.Employeesar;
import com.hyva.bsfms.bs.bspojo.BranchesPojo;
import com.hyva.bsfms.bs.bspojo.EmployeesarPojo;

import java.util.ArrayList;
import java.util.List;

public class BsEmployeesarMapper {
    public static List<EmployeesarPojo> mapEmployeesarEntityToPojo(List<Employeesar> List) {
        List<EmployeesarPojo> list = new ArrayList<>();
        for (Employeesar employeesar : List) {
            EmployeesarPojo pojo = new EmployeesarPojo();
            pojo.setApprId(employeesar.getApprId());
            pojo.setAdapt(employeesar.getAdapt());
            pojo.setAoi(employeesar.getAoi());
            pojo.setAsserts(employeesar.getAsserts());
            pojo.setComm(employeesar.getComm());
            pojo.setCommit(employeesar.getCommit());
            pojo.setCurrentPost(employeesar.getCurrentPost());
            pojo.setCusf(employeesar.getCusf());
            pojo.setDateConfirmed(employeesar.getDateConfirmed());
            pojo.setDateJoined(employeesar.getDateJoined());
            pojo.setDd(employeesar.getDd());
            pojo.setDeleg(employeesar.getDeleg());
            pojo.setDss(employeesar.getDss());
            pojo.setEmergencyTaken(employeesar.getEmergencyTaken());
            pojo.setEow(employeesar.getEow());
            pojo.setHrs(employeesar.getHrs());
            pojo.setInitiative(employeesar.getInitiative());
            pojo.setJobgrade(employeesar.getJobgrade());
            pojo.setKoj(employeesar.getKoj());
            pojo.setLeader(employeesar.getLeader());
            pojo.setMedleavetaken(employeesar.getMedleavetaken());
            pojo.setNeatness(employeesar.getNeatness());
            pojo.setOrg(employeesar.getOrg());
            pojo.setPaa(employeesar.getPaa());
            pojo.setPerUndReveiw(employeesar.getPerUndReveiw());
            pojo.setPlan(employeesar.getPlan());
            pojo.setPrincipal(employeesar.getPrincipal());
            pojo.setPsl(employeesar.getPsl());
            pojo.setPts(employeesar.getPts());
            pojo.setQof(employeesar.getQof());
            pojo.setResponsibility(employeesar.getResponsibility());
            pojo.setSos(employeesar.getSos());
            pojo.setSss(employeesar.getSss());
            pojo.setStaffage(employeesar.getStaffage());
            pojo.setStaffDepar(employeesar.getStaffDepar());
            pojo.setStaffDesig(employeesar.getStaffDesig());
            pojo.setStaffName(employeesar.getStaffName());
            pojo.setStaffsupervisory(employeesar.getStaffsupervisory());
            pojo.setTbg(employeesar.getTbg());
            pojo.setType(employeesar.getType());
            pojo.setEncountered(employeesar.getEncountered());
            pojo.setStrength(employeesar.getStrength());
            pojo.setReaction(employeesar.getReaction());
            pojo.setWeakness(employeesar.getWeakness());
            pojo.setProgramme(employeesar.getProgramme());
            pojo.setProposed(employeesar.getProposed());
            pojo.setEfficient(employeesar.getEfficient());
            pojo.setEfficient(employeesar.getEfficient());
            pojo.setAgreement(employeesar.getAgreement());
            pojo.setSignature(employeesar.getSignature());
            pojo.setInterview(employeesar.getInterview());
            pojo.setEname(employeesar.getEname());
            pojo.setCourseList(employeesar.getCourseList());
            list.add(pojo);
        }
        return list;
    }


    public static Employeesar mapEmployeesarPojoToEntity(EmployeesarPojo employeesarPojo){
        Employeesar employeesar = new Employeesar();
        employeesar.setApprId(employeesarPojo.getApprId());
        employeesar.setAdapt(employeesarPojo.getAdapt());
        employeesar.setAoi(employeesarPojo.getAoi());
        employeesar.setAsserts(employeesarPojo.getAsserts());
        employeesar.setComm(employeesarPojo.getComm());
        employeesar.setCommit(employeesarPojo.getCommit());
        employeesar.setCurrentPost(employeesarPojo.getCurrentPost());
        employeesar.setCusf(employeesarPojo.getCusf());
        employeesar.setDateConfirmed(employeesarPojo.getDateConfirmed());
        employeesar.setDateJoined(employeesarPojo.getDateJoined());
        employeesar.setDd(employeesarPojo.getDd());
        employeesar.setDeleg(employeesarPojo.getDeleg());
        employeesar.setDss(employeesarPojo.getDss());
        employeesar.setEmergencyTaken(employeesarPojo.getEmergencyTaken());
        employeesar.setEow(employeesarPojo.getEow());
        employeesar.setHrs(employeesarPojo.getHrs());
        employeesar.setInitiative(employeesarPojo.getInitiative());
        employeesar.setJobgrade(employeesarPojo.getJobgrade());
        employeesar.setKoj(employeesarPojo.getKoj());
        employeesar.setLeader(employeesarPojo.getLeader());
        employeesar.setMedleavetaken(employeesarPojo.getMedleavetaken());
        employeesar.setNeatness(employeesarPojo.getNeatness());
        employeesar.setOrg(employeesarPojo.getOrg());
        employeesar.setPaa(employeesarPojo.getPaa());
        employeesar.setPerUndReveiw(employeesarPojo.getPerUndReveiw());
        employeesar.setPlan(employeesarPojo.getPlan());
        employeesar.setPrincipal(employeesarPojo.getPrincipal());
        employeesar.setPsl(employeesarPojo.getPsl());
        employeesar.setPts(employeesarPojo.getPts());
        employeesar.setQof(employeesarPojo.getQof());
        employeesar.setResponsibility(employeesarPojo.getResponsibility());
        employeesar.setSos(employeesarPojo.getSos());
        employeesar.setSss(employeesarPojo.getSss());
        employeesar.setStaffage(employeesarPojo.getStaffage());
        employeesar.setStaffDepar(employeesarPojo.getStaffDepar());
        employeesar.setStaffDesig(employeesarPojo.getStaffDesig());
        employeesar.setStaffName(employeesarPojo.getStaffName());
        employeesar.setStaffsupervisory(employeesarPojo.getStaffsupervisory());
        employeesar.setTbg(employeesarPojo.getTbg());
        employeesar.setType(employeesarPojo.getType());
        employeesar.setEncountered(employeesarPojo.getEncountered());
        employeesar.setStrength(employeesarPojo.getStrength());
        employeesar.setReaction(employeesarPojo.getReaction());
        employeesar.setWeakness(employeesarPojo.getWeakness());
        employeesar.setProgramme(employeesarPojo.getProgramme());
        employeesar.setProposed(employeesarPojo.getProposed());
        employeesar.setEfficient(employeesarPojo.getEfficient());
        employeesar.setEfficient(employeesarPojo.getEfficient());
        employeesar.setAgreement(employeesarPojo.getAgreement());
        employeesar.setSignature(employeesarPojo.getSignature());
        employeesar.setInterview(employeesarPojo.getInterview());
        employeesar.setEname(employeesarPojo.getEname());
        employeesar.setCourseList(employeesarPojo.getCourseList());
        return employeesar;
    }
}
