package com.hyva.bsfms.bs.bsmapper;


import com.hyva.bsfms.bs.bsentities.Instruments;
import com.hyva.bsfms.bs.bsentities.Position;
import com.hyva.bsfms.bs.bspojo.InstrumentsPojo;
import com.hyva.bsfms.bs.bspojo.PositionPojo;

import java.util.ArrayList;
import java.util.List;

public class BsInstrumentsMapper {

    public static Instruments mapInstrumentsPojoToEntity(InstrumentsPojo pojo){
        Instruments type=new Instruments();
        type.setInstrumentsId(pojo.getInstrumentsId());
        type.setInstrumentsName(pojo.getInstrumentsName());
        type.setStatus(pojo.getStatus());

        return type;
    }

    public static List<InstrumentsPojo> mapInstrumentsEntityToPojo(List<Instruments> typeList){
        List<InstrumentsPojo> list=new ArrayList<>();
        for(Instruments type:typeList) {
            InstrumentsPojo instrumentsPojo = new InstrumentsPojo();
            instrumentsPojo.setInstrumentsId(type.getInstrumentsId());
            instrumentsPojo.setInstrumentsName(type.getInstrumentsName());
            instrumentsPojo.setStatus(type.getStatus());

            list.add(instrumentsPojo);
        }
        return list;
    }
}
