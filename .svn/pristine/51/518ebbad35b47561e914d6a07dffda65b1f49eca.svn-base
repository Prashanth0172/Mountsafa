package com.hyva.bsfms.bs.bsrespositories;
import com.hyva.bsfms.bs.bsentities.TopicDetails;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TopicDetailsRepository extends JpaRepository<TopicDetails,Long> {
    List<TopicDetails> findAllByChapterAndTopicName(String chapter, String topicName);
    List<TopicDetails> findAllByChapter(String chapter);
    TopicDetails findAByChapterAndTopicName(String chapter, String topicName);
    List<TopicDetails> findByTopicId(Long id);
    TopicDetails findAllByTopicName(String name);
}
