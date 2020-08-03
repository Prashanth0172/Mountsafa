package com.hyva.bsfms.bs.bsrespositories;
import com.hyva.bsfms.bs.bsentities.OtherPayment;
import com.hyva.bsfms.bs.bsentities.PosExpensePaymentTypes;
import com.hyva.bsfms.bs.bsentities.PosReceiptPaymentTypes;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface PosExpensePayRepository extends JpaRepository<PosExpensePaymentTypes, Long> {

    List<PosExpensePaymentTypes> findAllByOtherPayment(OtherPayment id);
    PosExpensePaymentTypes findByOtherPayment(OtherPayment id);
}
