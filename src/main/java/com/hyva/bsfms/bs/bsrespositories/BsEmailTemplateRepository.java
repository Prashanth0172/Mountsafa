package com.hyva.bsfms.bs.bsrespositories;


import com.hyva.bsfms.bs.bsentities.EmailTemplateMaster;
import com.hyva.bsfms.bs.bsentities.Notification;
import com.hyva.bsfms.bs.bsentities.TrainingModule;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BsEmailTemplateRepository extends JpaRepository<EmailTemplateMaster, Long> {

    EmailTemplateMaster findByEmailName(String name);
    EmailTemplateMaster findByEmailNameAndEmailIdNotIn(String name, Long id);
    List<EmailTemplateMaster> findAllByEmailName(String name);
    List<EmailTemplateMaster> findAllByEmailNameContainingAndEmailStatus(String name,String status);
    EmailTemplateMaster findFirstByEmailNameContainingAndEmailStatus(String name, String status, Sort sort);
    List<EmailTemplateMaster> findAllByEmailNameContainingAndEmailStatus(String name, String status, Pageable pageable);
    EmailTemplateMaster findFirstByEmailStatus(String status,Sort sort);
    List<EmailTemplateMaster> findAllByEmailStatus(String status,Pageable pageable);
    List<EmailTemplateMaster> findAllByEmailStatus(String status);

}
