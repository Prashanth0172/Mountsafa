package com.hyva.bsfms.bs.bsrespositories;
import com.hyva.bsfms.bs.bsentities.LessonPlan;
import com.hyva.bsfms.bs.bsentities.LessonPlanDetails;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface LessonPlanDetailsRepository extends JpaRepository<LessonPlanDetails,Long> {
    LessonPlanDetails findByLessonPlanIdAndComponentAndSubComponent(Long lessonPlanId, String componentId, String subComponentId);
   List<LessonPlanDetails> findByLessonPlanId(Long lessonPlanId);

}
