package com.hyva.bsfms.bs.bsrespositories;
import com.hyva.bsfms.bs.bsentities.GLTransactions;
import com.hyva.bsfms.bs.bsentities.OtherReceipt;
import com.hyva.bsfms.bs.bsentities.PosReceiptPaymentTypes;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface PosReceiptPayRepository extends JpaRepository<PosReceiptPaymentTypes, Long> {

    List<PosReceiptPaymentTypes> findAllByOtherReceipt(OtherReceipt id);
    PosReceiptPaymentTypes findByOtherReceipt(OtherReceipt id);
}
