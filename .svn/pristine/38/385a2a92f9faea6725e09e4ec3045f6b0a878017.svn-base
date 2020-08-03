package com.hyva.bsfms.bs.bsrespositories;
import com.hyva.bsfms.bs.bsentities.FeeTypeMaster;
import com.hyva.bsfms.bs.bsentities.StudentFee;
import com.hyva.bsfms.bs.bsentities.StudentFeeDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface BsStudentFeeDetailsRepository  extends JpaRepository<StudentFeeDetails, Long> {

    List<StudentFeeDetails> findByStudentfee(StudentFee studentFee);
    List<StudentFeeDetails> findByFeetypemaster(FeeTypeMaster feeTypeMaster);
    StudentFeeDetails findByFeetypemasterAndStudentfee(FeeTypeMaster feeTypeMaster,StudentFee studentFee);
    @Query("SELECT sum(paidAmt),feeTypeName from StudentFeeDetails as a group by a.feeTypeName")
    List<StudentFeeDetails> findAllBy();

}
