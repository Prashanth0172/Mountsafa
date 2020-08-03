package com.hyva.bsfms.bs.bsmapper;

import com.hyva.bsfms.bs.bsentities.Agegroup;
import com.hyva.bsfms.bs.bsentities.Department;
import com.hyva.bsfms.bs.bspojo.AgegroupPojo;
import com.hyva.bsfms.bs.bspojo.DepartmentPojo;

import java.util.ArrayList;
import java.util.List;

public class BsAgeGroupMapper {
    public static List<AgegroupPojo> mapageEntityToPojo(List<Agegroup> List) {
        List<AgegroupPojo> list = new ArrayList<>();
        for (Agegroup age : List) {
            AgegroupPojo pojo = new AgegroupPojo();
            pojo.setBranchId(age.getBranchId());
            pojo.setAgegroupId(age.getAgegroupId());
            pojo.setStatus(age.getStatus());
            pojo.setFromAgegroup(age.getFromAgegroup());
            pojo.setToAgegroup(age.getToAgegroup());
            list.add(pojo);
        }
        return list;
    }

}
