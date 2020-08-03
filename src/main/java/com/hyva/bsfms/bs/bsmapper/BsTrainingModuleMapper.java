package com.hyva.bsfms.bs.bsmapper;

import com.hyva.bsfms.bs.bsentities.DoctorPanelMaster;
import com.hyva.bsfms.bs.bsentities.GradeMaster;
import com.hyva.bsfms.bs.bsentities.TrainingModule;
import com.hyva.bsfms.bs.bspojo.DoctorpanelPojo;
import com.hyva.bsfms.bs.bspojo.GradeMasterPojo;
import com.hyva.bsfms.bs.bspojo.TrainingModulePojo;

import java.util.ArrayList;
import java.util.List;

public class BsTrainingModuleMapper {
    public static TrainingModule mapPojoToEntity(TrainingModulePojo pojo){
        TrainingModule trainingModule=new TrainingModule();
        trainingModule.setTrainingModuleName(pojo.getTrainingModuleName());
        trainingModule.setTrainingId(pojo.getTrainingId());
        trainingModule.setTrainingStatus(pojo.getTrainingStatus());
        trainingModule.setBranchId(pojo.getBranchId());
        trainingModule.setTrainingDescription(pojo.getTrainingDescription());
//        trainingModule.setT(pojo.getGradeStatus());
        return trainingModule;
    }

    public static List<TrainingModulePojo> mapTrainingEntityToPojo(List<TrainingModule> trainingModuleList){
        List<TrainingModulePojo> list=new ArrayList<>();
        for(TrainingModule trainingModule:trainingModuleList) {
            TrainingModulePojo trainingModulePojo = new TrainingModulePojo();
            trainingModulePojo.setTrainingModuleName(trainingModule.getTrainingModuleName());
            trainingModulePojo.setTrainingId(trainingModule.getTrainingId());
            trainingModulePojo.setTrainingStatus(trainingModule.getTrainingStatus());
            trainingModulePojo.setBranchId(trainingModule.getBranchId());
            trainingModulePojo.setTrainingDescription(trainingModule.getTrainingDescription());
//            trainingModulePojo.setDoctorAddress(trainingModule.getDoctorAddress());


            list.add(trainingModulePojo);
        }
        return list;
    }
}
