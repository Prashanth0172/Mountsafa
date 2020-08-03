package com.hyva.bsfms.bs.bsmapper;

import com.hyva.bsfms.bs.bsentities.City;
import com.hyva.bsfms.bs.bsentities.Roles;
import com.hyva.bsfms.bs.bspojo.CityDTO;
import com.hyva.bsfms.bs.bspojo.RolesPojo;

import java.util.ArrayList;
import java.util.List;

public class BsRoleMapper {
    public static List<RolesPojo> maproleEntityToPojo(List<Roles> List) {
        List<RolesPojo> list = new ArrayList<>();
        for (Roles role : List) {
            RolesPojo pojo = new RolesPojo();
            pojo.setBranchId(role.getBranchId());
            pojo.setRole(role.getRole());
            pojo.setStatus(role.getStatus());
            pojo.setRolesId(role.getRolesId());
            list.add(pojo);
        }
        return list;
    }
}
