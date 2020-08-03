package com.hyva.bsfms.bs.bsrespositories;

import com.hyva.bsfms.bs.bsentities.DoctorPanelMaster;
import com.hyva.bsfms.bs.bsentities.TeachingObservationForm;
import com.hyva.bsfms.bs.bsentities.Term;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BsTeachingObservationRepository extends JpaRepository<TeachingObservationForm, Long> {

    TeachingObservationForm findByTeacherName(String name);
    TeachingObservationForm findByTeacherNameAndTeachingObservationIdNotIn(String name, Long id);
    List<TeachingObservationForm> findAllByTeacherName(String name);

}
