package com.hyva.bsfms.bs.bsrespositories;

import com.hyva.bsfms.bs.bsentities.RegistrationFees;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * Created by sahera on 18/3/19.
 */
public interface RegisterFeeRepository extends CrudRepository<RegistrationFees,Long> {
    List<RegistrationFees> findAllByEnquiryId(String enq);

}
