package com.hyva.bsfms.bs.bsrespositories;

import com.hyva.bsfms.bs.bsentities.AssessmentType;
import com.hyva.bsfms.bs.bsentities.Position;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BsAssessmentTypeRepository extends JpaRepository<AssessmentType, Long> {

    AssessmentType findByAssessmentTypeName(String name);
    AssessmentType findByAssessmentTypeNameAndAssessmentTypeIdNotIn(String name, Long id);
    List<AssessmentType> findAllByAssessmentTypeName(String positionName);
    List<AssessmentType>findAllByStatus(String status);
    List<AssessmentType>findAllByAssessmentTypeNameContainingAndStatus(String countryName, String status);
    AssessmentType findFirstByAssessmentTypeNameContainingAndStatus(String countryName, String status, Sort sort);
    List<AssessmentType>findAllByAssessmentTypeNameContainingAndStatus(String countryName, String status, Pageable pageable);
    AssessmentType findFirstByStatus(String status, Sort sort);
    List<AssessmentType>findAllByStatus(String status, Pageable pageable);

}
