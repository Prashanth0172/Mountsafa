package com.hyva.bsfms.bs.bsmapper;


import com.hyva.bsfms.bs.bsentities.City;
import com.hyva.bsfms.bs.bsentities.CustomApprover;
import com.hyva.bsfms.bs.bsentities.Position;
import com.hyva.bsfms.bs.bspojo.CityDTO;
import com.hyva.bsfms.bs.bspojo.CustomApproverPojo;
import com.hyva.bsfms.bs.bspojo.PositionPojo;

import java.util.ArrayList;
import java.util.List;

public class BsCustomApproverMapper {

    public static CustomApprover mapCustomApproverPojoToEntity(CustomApproverPojo pojo){
        CustomApprover type=new CustomApprover();
        type.setCustomApproverId(pojo.getCustomApproverId());
        type.setCustomRole(pojo.getCustomRole());
        type.setCustomDesc(pojo.getCustomDesc());
        type.setCustomLeave(pojo.getCustomLeave());
        type.setApprover(pojo.getApprover());
        type.setDocumentWorkflow(pojo.getDocumentWorkflow());
        type.setStatus(pojo.getStatus());
        return type;
    }


    public static List<CustomApproverPojo> mapCustomApproverEntityToPojo(List<CustomApprover> typeList){
        List<CustomApproverPojo> list=new ArrayList<>();
        for(CustomApprover type:typeList) {
            CustomApproverPojo customApproverPojo = new CustomApproverPojo();
            customApproverPojo.setCustomApproverId(type.getCustomApproverId());
            customApproverPojo.setCustomRole(type.getCustomRole());
            customApproverPojo.setCustomDesc(type.getCustomDesc());
            customApproverPojo.setApprover(type.getApprover());
            customApproverPojo.setCustomLeave(type.getCustomLeave());
            customApproverPojo.setDocumentWorkflow(type.getDocumentWorkflow());
            customApproverPojo.setStatus(type.getStatus());


            list.add(customApproverPojo);
        }
        return list;
    }
}
