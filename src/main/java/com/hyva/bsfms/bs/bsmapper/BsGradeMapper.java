package com.hyva.bsfms.bs.bsmapper;

import com.hyva.bsfms.bs.bsentities.Agegroup;
import com.hyva.bsfms.bs.bspojo.AgegroupPojo;
import com.hyva.bsfms.bs.bspojo.GradeMasterPojo;
import com.hyva.bsfms.bs.bsentities.GradeMaster;

import java.util.ArrayList;
import java.util.List;

public class BsGradeMapper {
    public static GradeMaster mapPojoToEntity(GradeMasterPojo pojo){
        GradeMaster master=new GradeMaster();
        master.setGradeDescription(pojo.getGradeDescription());
        master.setGradeId(pojo.getGradeId());
        master.setGradeName(pojo.getGradeName());
        master.setGradeStatus(pojo.getGradeStatus());
        master.setBranchId(pojo.getBranchId());
        return master;
    }
    public static List<GradeMasterPojo> mapgradeEntityToPojo(List<GradeMaster> List) {
        List<GradeMasterPojo> list = new ArrayList<>();
        for (GradeMaster group : List) {
            GradeMasterPojo pojo = new GradeMasterPojo();
            pojo.setBranchId(group.getBranchId());
            pojo.setGradeDescription(group.getGradeDescription());
            pojo.setGradeStatus(group.getGradeStatus());
            pojo.setGradeName(group.getGradeName());
            pojo.setGradeId(group.getGradeId());
//            pojo.setUserId(group.getUserId().toString());
            list.add(pojo);
        }
        return list;
    }
}
