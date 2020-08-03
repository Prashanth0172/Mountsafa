package com.hyva.bsfms.bs.bsrespositories;

import com.hyva.bsfms.bs.bsentities.AcademicYearMaster;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BsAcademicYearMasterRepository extends JpaRepository<AcademicYearMaster, Long> {

    AcademicYearMaster findByAcdyrId(Long acdYearId);
    AcademicYearMaster findByAcdyrName(String s);
    AcademicYearMaster findByAcdyrNameAndAcdyrIdIsNotIn(String s,Long acdYearId);
    List<AcademicYearMaster> findByAcdyrNameIsStartingWith(String name);
    List<AcademicYearMaster> findByStatus(String name);
    List<AcademicYearMaster> findAllByStatus(String name,Pageable pageable);
    List<AcademicYearMaster> findAllByAcdyrNameContaining(String typeName);
    AcademicYearMaster findFirstByAcdyrNameContainingAndStatus(String typeName,String status, Sort sort);
    AcademicYearMaster findFirstByStatus(String status,Sort sort);
    List<AcademicYearMaster> findAllByAcdyrNameContainingAndStatus(String typeName,String status, Pageable pageable);

}
