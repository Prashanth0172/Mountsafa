package com.hyva.bsfms.bs.bsmapper;

import com.hyva.bsfms.bs.bsentities.LeaveFormMaster;
import com.hyva.bsfms.bs.bspojo.LeaveFormDTO;
import java.util.ArrayList;
import java.util.List;


public class BsLeaveFormMapper {
    public static List<LeaveFormDTO> mapleaveFormEntityToPojo(List<LeaveFormMaster> List) {
        List<LeaveFormDTO> list = new ArrayList<>();
        for (LeaveFormMaster leaveFormMaster : List) {
            LeaveFormDTO pojo = new LeaveFormDTO();
            pojo.setLeaveFormId(leaveFormMaster.getLeaveFormId());
            pojo.setApproved(leaveFormMaster.getApproved());
            pojo.setDate(leaveFormMaster.getDate());
            pojo.setDateApply(leaveFormMaster.getDateApply());
            pojo.setName(leaveFormMaster.getName());
            pojo.setNotApproved(leaveFormMaster.getNotApproved());
            pojo.setNote(leaveFormMaster.getNote());
            pojo.setPosition(leaveFormMaster.getPosition());
            pojo.setReach(leaveFormMaster.getReach());
            pojo.setReliefStaff(leaveFormMaster.getReliefStaff());
            pojo.setStaffNo(leaveFormMaster.getStaffNo());
            pojo.setSupervisor(leaveFormMaster.getSupervisor());
            pojo.setTelephoneNo(leaveFormMaster.getTelephoneNo());
            pojo.setTypeOfLeave(leaveFormMaster.getTypeOfLeave());
            pojo.setLeaveFormList(leaveFormMaster.getLeaveFormList());
            pojo.setStatus(leaveFormMaster.getStatus());
            pojo.setDateDiff(leaveFormMaster.getDateDiff());
            pojo.setSigndate(leaveFormMaster.getSigndate());
            pojo.setAdminNote(leaveFormMaster.getAdminNote());
            pojo.setAdminNote(leaveFormMaster.getAdminNote());
            pojo.setAdmin(leaveFormMaster.getAdmin());
            pojo.setMurdissign(leaveFormMaster.getMurdissign());
            pojo.setApproveStatus(leaveFormMaster.getApproveStatus());
            pojo.setNotApprovedStatus(leaveFormMaster.getNotApprovedStatus());
            pojo.setLeaveList(leaveFormMaster.getLeaveList());
            pojo.setDaysRequired(leaveFormMaster.getDaysRequired());
            list.add(pojo);
        }
        return list;
    }

    public static LeaveFormMaster mapLeaveFormPojoToEntity(LeaveFormDTO leaveFormDTO){
        LeaveFormMaster leaveFormMaster = new LeaveFormMaster();
        leaveFormMaster.setLeaveFormId(leaveFormDTO.getLeaveFormId());
        leaveFormMaster.setApproved(leaveFormDTO.getApproved());
        leaveFormMaster.setDate(leaveFormDTO.getDate());
        leaveFormMaster.setDateApply(leaveFormDTO.getDateApply());
        leaveFormMaster.setName(leaveFormDTO.getName());
        leaveFormMaster.setNotApproved(leaveFormDTO.getNotApproved());
        leaveFormMaster.setNote(leaveFormDTO.getNote());
        leaveFormMaster.setPosition(leaveFormDTO.getPosition());
        leaveFormMaster.setReach(leaveFormDTO.getReach());
        leaveFormMaster.setReliefStaff(leaveFormDTO.getReliefStaff());
        leaveFormMaster.setStaffNo(leaveFormDTO.getStaffNo());
        leaveFormMaster.setSupervisor(leaveFormDTO.getSupervisor());
        leaveFormMaster.setTelephoneNo(leaveFormDTO.getTelephoneNo());
        leaveFormMaster.setLeaveFormList(leaveFormDTO.getLeaveFormList());
        leaveFormMaster.setTypeOfLeave(leaveFormDTO.getTypeOfLeave());
        leaveFormMaster.setStatus("Active");
        leaveFormMaster.setDateDiff(leaveFormDTO.getDateDiff());
        leaveFormMaster.setSigndate(leaveFormDTO.getSigndate());
        leaveFormMaster.setAdminNote(leaveFormDTO.getAdminNote());
        leaveFormMaster.setAdmin(leaveFormDTO.getAdmin());
        leaveFormMaster.setMurdissign(leaveFormDTO.getMurdissign());
        leaveFormMaster.setApproveStatus(leaveFormDTO.getApproveStatus());
        leaveFormMaster.setNotApprovedStatus(leaveFormDTO.getNotApprovedStatus());
        leaveFormMaster.setLeaveList(leaveFormDTO.getLeaveList());
        leaveFormMaster.setDaysRequired(leaveFormDTO.getDaysRequired());
        return leaveFormMaster;
    }
}
