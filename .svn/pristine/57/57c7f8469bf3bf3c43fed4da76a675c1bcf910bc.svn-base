package com.hyva.bsfms.bs.bsmapper;

import com.hyva.bsfms.bs.bsentities.Holiday;
import com.hyva.bsfms.bs.bsentities.Trainer;
import com.hyva.bsfms.bs.bspojo.HolidayPojo;
import com.hyva.bsfms.bs.bspojo.TrainerPojo;

import java.util.ArrayList;
import java.util.List;

public class BsTrainerMapper {
    public static Trainer mapPojoToEntity(TrainerPojo pojo) {
        Trainer trainer = new Trainer();
        trainer.setId(pojo.getId());
        trainer.setName(pojo.getName());
        trainer.setCharges(pojo.getCharges());
        trainer.setCode(pojo.getCode());
        trainer.setType(pojo.getType());
        trainer.setEmail(pojo.getEmail());
        trainer.setPhone(pojo.getPhone());
        trainer.setRemarks(pojo.getRemarks());
        trainer.setStatus(pojo.getStatus());
        trainer.setBranchId(pojo.getBranchId());
        return trainer;
    }

    public static List<TrainerPojo> mapEntityToPojo(List<Trainer> trainerList) {
        List<TrainerPojo> list = new ArrayList<>();
        for (Trainer trainer : trainerList) {
            TrainerPojo trainerPojo = new TrainerPojo();
                trainerPojo.setId(trainer.getId());
                trainerPojo.setName(trainer.getName());
                trainerPojo.setCharges(trainer.getCharges());
                trainerPojo.setCode(trainer.getCode());
                trainerPojo.setType(trainer.getType());
                trainerPojo.setEmail(trainer.getEmail());
                trainerPojo.setPhone(trainer.getPhone());
                trainerPojo.setType(trainer.getType());
                trainerPojo.setRemarks(trainer.getRemarks());
                trainerPojo.setStatus(trainer.getStatus());
                trainerPojo.setBranchId(trainer.getBranchId());
                list.add(trainerPojo);

        }

return  list;
    }
}










