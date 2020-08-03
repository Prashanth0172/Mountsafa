package com.hyva.bsfms.bs.bsrespositories;
import com.hyva.bsfms.bs.bsentities.AccountMaster;
import com.hyva.bsfms.bs.bsentities.GLTransactions;
import com.hyva.bsfms.bs.bsentities.OtherReceipt;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface GLTransactionRepository extends JpaRepository<GLTransactions, Long> {
    List<GLTransactions> findAllByAccount(AccountMaster accountMaster);
    GLTransactions findByAccount(AccountMaster accountMaster);

}
