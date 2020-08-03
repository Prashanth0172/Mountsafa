package com.hyva.bsfms.bs.bsrespositories;


import com.hyva.bsfms.bs.bsentities.DoctorPanelMaster;
import com.hyva.bsfms.bs.bsentities.TrainingModule;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BsTrainingModuleRepository extends JpaRepository<TrainingModule, Long> {

    TrainingModule findByTrainingModuleName(String name);
    TrainingModule findByTrainingModuleNameAndTrainingIdNotIn(String name, Long id);
    List<TrainingModule> findAllByTrainingModuleName(String name);
    List<TrainingModule> findAllByTrainingStatus(String status);
    List<TrainingModule> findAllByTrainingModuleNameContainingAndTrainingStatus(String name,String status);
    TrainingModule findFirstByTrainingModuleNameContainingAndTrainingStatus(String name, String status, Sort sort);
    List<TrainingModule> findAllByTrainingModuleNameContainingAndTrainingStatus(String name, String status, Pageable pageable);
    TrainingModule findFirstByTrainingStatus(String status,Sort sort);
    List<TrainingModule> findAllByTrainingStatus(String status,Pageable pageable);
}
