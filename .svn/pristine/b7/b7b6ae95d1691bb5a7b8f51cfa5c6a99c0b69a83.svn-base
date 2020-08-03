package com.hyva.bsfms.bs.bsmapper;

import com.hyva.bsfms.bs.bsentities.Resource;
import com.hyva.bsfms.bs.bsentities.ResourceCategory;
import com.hyva.bsfms.bs.bspojo.ResourceCategoryPojo;
import com.hyva.bsfms.bs.bspojo.ResourcePojo;

import java.util.ArrayList;
import java.util.List;

public class BsResourceMapper {
    public static List<ResourcePojo> mapresourceEntityToPojo(List<Resource> List) {
        List<ResourcePojo> list = new ArrayList<>();
        for (Resource resource : List) {
            ResourcePojo pojo = new ResourcePojo();
            pojo.setBranchId(resource.getBranchId());
            pojo.setResourceCode(resource.getResourceCode());
            pojo.setStatus(resource.getStatus());
            pojo.setResourceCategoryId(resource.getResourceCategoryId());
            pojo.setResourceId(resource.getResourceId());
            pojo.setResourceName(resource.getResourceName());
            pojo.setResourceType(resource.getResourceType());
            list.add(pojo);
        }
        return list;
    }
}
