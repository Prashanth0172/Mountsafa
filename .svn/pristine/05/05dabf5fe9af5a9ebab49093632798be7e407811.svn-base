package com.hyva.bsfms.bs.bsrespositories;

import com.hyva.bsfms.bs.bsentities.Branches;
import com.hyva.bsfms.bs.bsentities.DoctorPanelMaster;


import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BsDoctorPanelRepository extends JpaRepository<DoctorPanelMaster, Long> {

    DoctorPanelMaster findByDoctorName(String name);
    DoctorPanelMaster findByDoctorNameAndDoctorpanelIdNotIn(String name, Long id);
    List<DoctorPanelMaster> findAllByDoctorName(String name);
    List<DoctorPanelMaster> findAllByDoctorNameContainingAndDoctorStatus(String name,String status);
    DoctorPanelMaster findFirstByDoctorNameContainingAndDoctorStatus(String name, String status, Sort sort);
    List<DoctorPanelMaster> findAllByDoctorNameContainingAndDoctorStatus(String name, String status, Pageable pageable);
    DoctorPanelMaster findFirstByDoctorStatus(String status,Sort sort);
    List<DoctorPanelMaster> findAllByDoctorStatus(String status, Pageable pageable);
    List<DoctorPanelMaster> findAllByDoctorStatus(String status);

}
