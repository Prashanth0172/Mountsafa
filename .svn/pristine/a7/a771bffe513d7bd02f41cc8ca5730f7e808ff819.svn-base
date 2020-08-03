package com.hyva.bsfms.bs.bsrespositories;
import com.hyva.bsfms.bs.bsentities.*;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.print.attribute.standard.MediaSize;
import java.util.List;


public interface OcOtherPaymentWOItemRep extends JpaRepository<OcOtherPaymentWithoutItem, Long> {
    List<OcOtherPaymentWithoutItem> findAllByOcdetails(Long id);
    List<OcOtherPaymentWithoutItem> findByOcdetails(OtherPayment otherPayment);

//    List<OcOtherPaymentWithoutItem> findByOcdetails(OtherPayment id);
}
