package com.hyva.bsfms.bs.bsrespositories;
import com.hyva.bsfms.bs.bsentities.JournalEntry;
import com.hyva.bsfms.bs.bsentities.OtherPayment;
import com.hyva.bsfms.bs.bsentities.OtherReceipt;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OtherPaymentRepository extends JpaRepository<OtherPayment, Long> {
    OtherPayment findByOpNo(String opNo);
    List<OtherPayment> findAllByOpNo(String opNo);
    List<OtherPayment> findAllByStatusNotIn(List<String> opNo);
    List<OtherPayment> findAllByStatus(String status);
    List<OtherPayment> findAllByStatusAndStatus(String status,String status1);

}
