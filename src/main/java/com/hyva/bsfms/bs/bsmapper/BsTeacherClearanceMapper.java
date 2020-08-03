package com.hyva.bsfms.bs.bsmapper;

import com.hyva.bsfms.bs.bsentities.TeacherTable;
import com.hyva.bsfms.bs.bspojo.TeacherPojo;

import java.util.ArrayList;
import java.util.List;

public class BsTeacherClearanceMapper {

    public static List<TeacherPojo> mapTeacherClearanceEntityToPojo(List<TeacherTable> List) {
        List<TeacherPojo> list = new ArrayList<>();
        for (TeacherTable teacherMasterClearance : List) {
            TeacherPojo teacherClearanceDTO = new TeacherPojo();
            teacherClearanceDTO.setTeachingId(teacherMasterClearance.getTeachingId());
            teacherClearanceDTO.setTeacherNm(teacherMasterClearance.getTeacherNm());
            teacherClearanceDTO.setmDate(teacherMasterClearance.getmDate());
            teacherClearanceDTO.setsDate(teacherMasterClearance.getsDate());
            teacherClearanceDTO.seteDate(teacherMasterClearance.geteDate());
            teacherClearanceDTO.setlDate(teacherMasterClearance.getlDate());
            teacherClearanceDTO.setuDate(teacherMasterClearance.getuDate());
            teacherClearanceDTO.setEmployeeNo(teacherMasterClearance.getEmployeeNo());
            teacherClearanceDTO.setBooks(teacherMasterClearance.getBooks());
            teacherClearanceDTO.setTeachingMaterials(teacherMasterClearance.getTeachingMaterials());
            teacherClearanceDTO.setStationaries(teacherMasterClearance.getStationaries());
            teacherClearanceDTO.setAttendanceBook(teacherMasterClearance.getAttendanceBook());
            teacherClearanceDTO.setAdminExecutive(teacherMasterClearance.getAdminExecutive());
            teacherClearanceDTO.setFeeSubmission(teacherMasterClearance.getFeeSubmission());
            teacherClearanceDTO.setCheckpointPapers(teacherMasterClearance.getCheckpointPapers());
            teacherClearanceDTO.setLessonPlan(teacherMasterClearance.getLessonPlan());
            teacherClearanceDTO.setProject(teacherMasterClearance.getProject());
            teacherClearanceDTO.setVicePrinciple(teacherMasterClearance.getVicePrinciple());
            teacherClearanceDTO.setAccessCard(teacherMasterClearance.getAccessCard());
            teacherClearanceDTO.setClassKeys(teacherMasterClearance.getClassKeys());
            teacherClearanceDTO.setTools(teacherMasterClearance.getTools());
            teacherClearanceDTO.setSportsEquipments(teacherMasterClearance.getSportsEquipments());
            teacherClearanceDTO.setAdministrator(teacherMasterClearance.getAdministrator());
            teacherClearanceDTO.setSchoolFee(teacherMasterClearance.getSchoolFee());
            teacherClearanceDTO.setRelevantFees(teacherMasterClearance.getRelevantFees());
            teacherClearanceDTO.setCourseFee(teacherMasterClearance.getCourseFee());
            teacherClearanceDTO.setAdvanceSalary(teacherMasterClearance.getAdvanceSalary());
            teacherClearanceDTO.setMoneyHeld(teacherMasterClearance.getMoneyHeld());
            teacherClearanceDTO.setFinanceManager(teacherMasterClearance.getFinanceManager());
            teacherClearanceDTO.setMudirApproval(teacherMasterClearance.getMudirApproval());


            list.add(teacherClearanceDTO);
        }
        return list;
    }

    public static TeacherTable mapTeacherClearancePojoToEntity(TeacherPojo pojo) {
        TeacherTable teacherMasterClearance = new TeacherTable();
        teacherMasterClearance.setTeachingId(pojo.getTeachingId());
        teacherMasterClearance.setTeacherNm(pojo.getTeacherNm());
        teacherMasterClearance.setmDate(pojo.getmDate());
        teacherMasterClearance.setsDate(pojo.getsDate());
        teacherMasterClearance.seteDate(pojo.geteDate());
        teacherMasterClearance.setlDate(pojo.getlDate());
        teacherMasterClearance.setuDate(pojo.getuDate());
        teacherMasterClearance.setEmployeeNo(pojo.getEmployeeNo());
        teacherMasterClearance.setBooks(pojo.getBooks());
        teacherMasterClearance.setTeachingMaterials(pojo.getTeachingMaterials());
        teacherMasterClearance.setStationaries(pojo.getStationaries());
        teacherMasterClearance.setAttendanceBook(pojo.getAttendanceBook());
        teacherMasterClearance.setAdminExecutive(pojo.getAdminExecutive());
        teacherMasterClearance.setFeeSubmission(pojo.getFeeSubmission());
        teacherMasterClearance.setCheckpointPapers(pojo.getCheckpointPapers());
        teacherMasterClearance.setLessonPlan(pojo.getLessonPlan());
        teacherMasterClearance.setProject(pojo.getProject());
        teacherMasterClearance.setVicePrinciple(pojo.getVicePrinciple());
        teacherMasterClearance.setAccessCard(pojo.getAccessCard());
        teacherMasterClearance.setClassKeys(pojo.getClassKeys());
        teacherMasterClearance.setTools(pojo.getTools());
//        teacherMasterClearance.setKeys(pojo.getKeys());
        teacherMasterClearance.setSportsEquipments(pojo.getSportsEquipments());
        teacherMasterClearance.setAdministrator(pojo.getAdministrator());
        teacherMasterClearance.setSchoolFee(pojo.getSchoolFee());
        teacherMasterClearance.setRelevantFees(pojo.getRelevantFees());
        teacherMasterClearance.setCourseFee(pojo.getCourseFee());
        teacherMasterClearance.setAdvanceSalary(pojo.getAdvanceSalary());
        teacherMasterClearance.setMoneyHeld(pojo.getMoneyHeld());
        teacherMasterClearance.setFinanceManager(pojo.getFinanceManager());
        teacherMasterClearance.setMudirApproval(pojo.getMudirApproval());


        return teacherMasterClearance;


    }
}
