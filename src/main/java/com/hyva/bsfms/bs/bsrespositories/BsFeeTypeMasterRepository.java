package com.hyva.bsfms.bs.bsrespositories;

import com.hyva.bsfms.bs.bsentities.AcademicYearMaster;
import com.hyva.bsfms.bs.bsentities.FeeTypeMaster;
import com.hyva.bsfms.bs.bsentities.GradeMaster;
import com.hyva.bsfms.bs.bsentities.TrainingModule;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BsFeeTypeMasterRepository extends JpaRepository<FeeTypeMaster, Long> {

    FeeTypeMaster findByFeeTypeId(Long FeeTypeId);
    FeeTypeMaster findByFeeTypeNameAndType(String FeeTypeName,String type);
    FeeTypeMaster findByFeeTypeName(String FeeTypeName);
    FeeTypeMaster findByFeeTypeNameAndLevelAndAcdyrmasterAndFeeAmount(String name,GradeMaster gradeMaster,AcademicYearMaster academicYearMaster,double fee);
    List<FeeTypeMaster> findByFeeTypeNameIsStartingWith(String name);
    List<FeeTypeMaster>findByStatus(String Active);
    List<FeeTypeMaster>findByLevel(GradeMaster gradeMaster);
    List<FeeTypeMaster>findByLevelAndStatusAndType(GradeMaster gradeMaster,String status,String type);
    List<FeeTypeMaster> findByFeeTypeNameIsStartingWithAndStatus(String name ,String status);
    List<FeeTypeMaster>findByAcdyrmaster(AcademicYearMaster academicYearMaster);
    List<FeeTypeMaster>findByAcdyrmasterAndLevelAndStatus(AcademicYearMaster academicYearMaster, GradeMaster gradeMaster,String status);
    List<FeeTypeMaster>findByLevelAndAcdyrmasterAndFeeTypeIdNotInAndStatus(GradeMaster gradeMaster,AcademicYearMaster academicYearMaster,List<Long> ids,String status);
    List<FeeTypeMaster> findAllByFeeTypeNameContaining(String typeName);
    FeeTypeMaster findFirstByFeeTypeNameContainingAndStatus(String typeName,String status, Sort sort);
    List<FeeTypeMaster> findAllByFeeTypeNameContainingAndStatus(String typeName,String status, Pageable pageable);
    FeeTypeMaster findFirstByStatus(String status,Sort sort);
    List<FeeTypeMaster> findAllByStatus(String name,Pageable pageable);

}
