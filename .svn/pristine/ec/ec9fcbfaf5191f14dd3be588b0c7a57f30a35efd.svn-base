package com.hyva.bsfms.bs.bsmapper;

import com.hyva.bsfms.bs.bsentities.LeaveMaster;
import com.hyva.bsfms.bs.bspojo.LeaveDTO;

import java.util.ArrayList;
import java.util.List;

public class BsLeaveMapper {
    public static List<LeaveDTO> mapleaveEntityToPojo(List<LeaveMaster> List) {
        List<LeaveDTO> list = new ArrayList<>();
        for (LeaveMaster leave : List) {
            LeaveDTO pojo = new LeaveDTO();
            pojo.setDays(leave.getDays());
            pojo.setStatus(leave.getStatus());
            pojo.setLeaveFor(leave.getLeaveFor());
            pojo.setLeaveId(leave.getLeaveId());
            pojo.setLeaveType(leave.getLeaveType());
            pojo.setDayCount(leave.getDayCount());
            pojo.setPaidLeave(leave.getPaidLeave());
            pojo.setAllowNegativeBal(leave.getAllowNegativeBal());
            pojo.setReasonRequired(leave.getReasonRequired());
            pojo.setDay(leave.getDay());
            pojo.setDay1(leave.getDay1());
            pojo.setCalender(leave.getCalender());

            list.add(pojo);
        }
        return list;
    }

    public static LeaveMaster mapLeavePojoToEntity(LeaveDTO leaveDTO){
        LeaveMaster leave = new LeaveMaster();
        leave.setLeaveId(leaveDTO.getLeaveId());
        leave.setLeaveType(leaveDTO.getLeaveType());
        leave.setStatus(leaveDTO.getStatus());
        leave.setLeaveFor(leaveDTO.getLeaveFor());
        leave.setDays(leaveDTO.getDays());
        leave.setDayCount(leaveDTO.getDayCount());
        leave.setPaidLeave(leaveDTO.getPaidLeave());
        leave.setAllowNegativeBal(leaveDTO.getAllowNegativeBal());
        leave.setReasonRequired(leaveDTO.getReasonRequired());
        leave.setDay(leaveDTO.getDay());
        leave.setDay1(leaveDTO.getDay1());
        leave.setCalender(leaveDTO.getCalender());
        return leave;
    }


}
