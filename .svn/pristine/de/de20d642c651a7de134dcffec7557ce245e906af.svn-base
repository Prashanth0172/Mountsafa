package com.hyva.bsfms.bs.bsmapper;

import com.hyva.bsfms.bs.bsentities.State;
import com.hyva.bsfms.bs.bspojo.StateDTO;
import java.util.ArrayList;
import java.util.List;

public class BsStateMapper {
    public static List<StateDTO> mapstateEntityToPojo(List<State> List) {
        List<StateDTO> list = new ArrayList<>();
        for (State state : List) {
            StateDTO pojo = new StateDTO();
            pojo.setCountryId(state.getCountryId());
            pojo.setStatus(state.getStatus());
            pojo.setStateName(state.getStateName());
            pojo.setStateId(state.getStateId());

            list.add(pojo);
        }
        return list;
    }
}
