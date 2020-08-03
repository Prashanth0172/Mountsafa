package com.hyva.bsfms.bs.bsrespositories;
import com.hyva.bsfms.bs.bsentities.OcOtherReceiptWithoutItem;
import com.hyva.bsfms.bs.bsentities.OtherReceipt;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface OcOtherReceiptWOItemRep extends JpaRepository<OcOtherReceiptWithoutItem, Long> {
    List<OcOtherReceiptWithoutItem> findAllByOcdetails(OtherReceipt id);
    List<OcOtherReceiptWithoutItem> findByOcdetails(OtherReceipt id);
}
