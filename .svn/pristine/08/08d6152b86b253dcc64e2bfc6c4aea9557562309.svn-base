package com.hyva.bsfms.bs.bsrespositories;
import com.hyva.bsfms.bs.bsentities.OtherReceipt;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OtherReceiptRepository extends JpaRepository<OtherReceipt, Long> {
    OtherReceipt findByOrno(String orNo);
   List<OtherReceipt> findAllByOrno(String orNo);
   List<OtherReceipt> findAllByStatusNotIn(List<String> orNo);

}
