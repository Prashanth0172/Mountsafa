package com.hyva.bsfms.bs.bsrespositories;
import com.hyva.bsfms.bs.bsentities.Sow;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SowRepository extends JpaRepository<Sow,Long> {
    List<Sow> findAllByLevelContaining(String name);
    Sow findFirstByLevelContaining(String name,Sort sort);
    List<Sow>findAllByLevelContaining(String name,Pageable pageable);
    Sow findFirstBy(Sort sort);
    List<Sow> findByLevelAndTermAndSubjectAndChapter(Long levelId,Long termId,Long subjectId,Long chapterId);


}
