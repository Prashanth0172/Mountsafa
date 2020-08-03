package com.hyva.bsfms.bs.bsmapper;

import com.hyva.bsfms.bs.bsentities.Branches;
import com.hyva.bsfms.bs.bsentities.DoctorPanelMaster;
import com.hyva.bsfms.bs.bsentities.TrainingModule;
import com.hyva.bsfms.bs.bspojo.BranchesPojo;
import com.hyva.bsfms.bs.bspojo.DoctorpanelPojo;
import com.hyva.bsfms.bs.bspojo.TrainingModulePojo;

import java.util.ArrayList;
import java.util.List;

public class BsDoctorpanelMapper {
    public static DoctorPanelMaster mapPojoToEntity(DoctorpanelPojo pojo){
        DoctorPanelMaster doctorPanelMaster=new DoctorPanelMaster();
        doctorPanelMaster.setDoctorName(pojo.getDoctorName());
        doctorPanelMaster.setDoctorpanelId(pojo.getDoctorpanelId());
        doctorPanelMaster.setDoctorAddress(pojo.getDoctorAddress());
        doctorPanelMaster.setDoctorCode(pojo.getDoctorCode());
        doctorPanelMaster.setDoctorEmail(pojo.getDoctorEmail());
        doctorPanelMaster.setDoctorPhone(pojo.getDoctorPhone());
        doctorPanelMaster.setDoctorRemarks(pojo.getDoctorRemarks());
        doctorPanelMaster.setDoctorStatus(pojo.getDoctorStatus());
        doctorPanelMaster.setBranchId(pojo.getBranchId());
        doctorPanelMaster.setDoctorSpecialization(pojo.getDoctorSpecialization());
//        trainingModule.setT(pojo.getGradeStatus());
        return doctorPanelMaster;
    }

    public static List<DoctorpanelPojo> mapDoctorEntityToPojo(List<DoctorPanelMaster> doctorPanelMasterList){
        List<DoctorpanelPojo> list=new ArrayList<>();
        for(DoctorPanelMaster doctorPanelMaster:doctorPanelMasterList) {
            DoctorpanelPojo doctorpanelPojo = new DoctorpanelPojo();
            doctorpanelPojo.setDoctorpanelId(doctorPanelMaster.getDoctorpanelId());
            doctorpanelPojo.setDoctorName(doctorPanelMaster.getDoctorName());
            doctorpanelPojo.setDoctorCode(doctorPanelMaster.getDoctorCode());
            doctorpanelPojo.setDoctorAddress(doctorPanelMaster.getDoctorAddress());
            doctorpanelPojo.setDoctorEmail(doctorPanelMaster.getDoctorEmail());
            doctorpanelPojo.setDoctorPhone(doctorPanelMaster.getDoctorPhone());
            doctorpanelPojo.setDoctorRemarks(doctorPanelMaster.getDoctorRemarks());
            doctorpanelPojo.setDoctorStatus(doctorPanelMaster.getDoctorStatus());
            doctorpanelPojo.setBranchId(doctorPanelMaster.getBranchId());
            doctorpanelPojo.setDoctorSpecialization(doctorPanelMaster.getDoctorSpecialization());

            list.add(doctorpanelPojo);
        }
        return list;
    }

}
