package com.hyva.bsfms.bs.bsrespositories;


import com.hyva.bsfms.bs.bsentities.Notification;
import com.hyva.bsfms.bs.bsentities.TrainingModule;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BsNotificationRepository extends JpaRepository<Notification, Long> {

    Notification findByNotificationSubject(String name);
    Notification findByNotificationSubjectAndNotificationIdNotIn(String name, Long id);
    List<Notification> findAllByNotificationSubject(String name);
    List<Notification> findAllByNotificationSubjectContainingAndNotificationStatus(String name,String status);
    Notification findFirstByNotificationSubjectContainingAndNotificationStatus(String name, String status, Sort sort);
    List<Notification> findAllByNotificationSubjectContainingAndNotificationStatus(String name, String status, Pageable pageable);
    Notification findFirstByNotificationStatus(String status,Sort sort);
    List<Notification> findAllByNotificationStatus(String status, Pageable pageable);
    List<Notification> findAllByNotificationStatus(String status);

}
