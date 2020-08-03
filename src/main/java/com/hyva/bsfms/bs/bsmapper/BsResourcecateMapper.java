package com.hyva.bsfms.bs.bsmapper;

import com.hyva.bsfms.bs.bsentities.ResourceCategory;
import com.hyva.bsfms.bs.bsentities.Roles;
import com.hyva.bsfms.bs.bspojo.ResourceCategoryPojo;
import com.hyva.bsfms.bs.bspojo.RolesPojo;

import java.util.ArrayList;
import java.util.List;

public class BsResourcecateMapper {
    public static List<ResourceCategoryPojo> mapresourcecatEntityToPojo(List<ResourceCategory> List) {
        List<ResourceCategoryPojo> list = new ArrayList<>();
        for (ResourceCategory resource : List) {
            ResourceCategoryPojo pojo = new ResourceCategoryPojo();
            pojo.setBranchId(resource.getBranchId());
            pojo.setResourceCategoryId(resource.getResourceCategoryId());
            pojo.setStatus(resource.getStatus());
            pojo.setResourceCategoryName(resource.getResourceCategoryName());
            list.add(pojo);
        }
        return list;
    }
}
