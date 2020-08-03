package com.hyva.bsfms.bs.bsmapper;

import com.hyva.bsfms.bs.bsentities.CheckListMaster;
import com.hyva.bsfms.bs.bspojo.CheckListMasterPojo;

import java.util.ArrayList;
import java.util.List;

public class BsCheckMapper {
    public static List<CheckListMasterPojo> mapcheckEntityToPojo(List<CheckListMaster> List) {
        List<CheckListMasterPojo> list = new ArrayList<>();
        for (CheckListMaster checkListMaster : List) {
            CheckListMasterPojo pojo = new CheckListMasterPojo();
            pojo.setAccountName(checkListMaster.getAccountName());
            pojo.setCheckId(checkListMaster.getCheckId());
            pojo.setPriority(checkListMaster.getPriority());
            pojo.setStatus(checkListMaster.getStatus());
            list.add(pojo);
        }
        return list;
    }

    public static CheckListMaster mapCheckPojoToEntity(CheckListMasterPojo checkListMasterPojo){
        CheckListMaster checkListMaster = new CheckListMaster();
        checkListMaster.setAccountName(checkListMasterPojo.getAccountName());
        checkListMaster.setCheckId(checkListMasterPojo.getCheckId());
        checkListMaster.setPriority(checkListMasterPojo.getPriority());
        checkListMaster.setStatus(checkListMasterPojo.getStatus());
        return checkListMaster;
    }

}
