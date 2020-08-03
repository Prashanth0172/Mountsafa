package com.hyva.bsfms.bs.bsmapper;

import com.hyva.bsfms.bs.bsentities.Department;
import com.hyva.bsfms.bs.bsentities.Roles;
import com.hyva.bsfms.bs.bspojo.DepartmentPojo;
import com.hyva.bsfms.bs.bspojo.RolesPojo;

import java.util.ArrayList;
import java.util.List;

public class BsDepartmentMapper {
    public static List<DepartmentPojo> mapdptEntityToPojo(List<Department> List) {
        List<DepartmentPojo> list = new ArrayList<>();
        for (Department dpt : List) {
            DepartmentPojo pojo = new DepartmentPojo();
            pojo.setBranchId(dpt.getBranchId());
            pojo.setDepartmentId(dpt.getDepartmentId());
            pojo.setStatus(dpt.getStatus());
            pojo.setDepartmentName(dpt.getDepartmentName());
            list.add(pojo);
        }
        return list;
    }
}
