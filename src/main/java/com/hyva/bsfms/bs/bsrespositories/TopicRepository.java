package com.hyva.bsfms.bs.bsrespositories;
import com.hyva.bsfms.bs.bsentities.Topic;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TopicRepository extends JpaRepository<Topic,Long> {
    List<Topic> findAllBySubjectNameContainingOrLevelNameContainingOrClassNameContaining(String subject,String level,String className);
    Topic findBySubjectNameContainingOrLevelNameContainingOrClassNameContaining(Sort sort,String subject,String level,String className);
    List<Topic> findBySubjectNameContainingOrLevelNameContainingOrClassNameContaining(Pageable pageable,String subject,String level,String className);
    List<Topic> findAllBy(Pageable pageable);
    Topic findFirstBy(Sort sort);
}
