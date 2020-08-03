package com.hyva.bsfms.bs.bsrespositories;

import com.hyva.bsfms.bs.bsentities.EnquiryForm;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * Created by sahera on 16/3/19.
 */
public interface EnquiryRepository extends CrudRepository<EnquiryForm,Long> {
    List<EnquiryForm> findAll();
    List<EnquiryForm> findByStatus(String status);
    List<EnquiryForm> findAllByLevel(String level);
    List<EnquiryForm> findByStatusAndLevel(String status,String grade);
}
