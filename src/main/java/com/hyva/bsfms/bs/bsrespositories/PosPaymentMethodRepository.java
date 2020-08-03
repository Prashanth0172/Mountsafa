package com.hyva.bsfms.bs.bsrespositories;

import com.hyva.bsfms.bs.bsentities.PaymentMethod;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PosPaymentMethodRepository extends JpaRepository<PaymentMethod,Long> {
    List<PaymentMethod> findAllByStatus(String status);
    List<PaymentMethod> findAllByStatusAndPaymentmethodName(String status, String searchText);
    PaymentMethod findFirstByPaymentmethodNameAndStatus(String name, String status, Sort sort);
    PaymentMethod findByPaymentmethodNameAndPaymentmethodIdNotIn(String name, Long id);
    PaymentMethod findFirstByPaymentmethodName(String name);
    PaymentMethod findFirstByPaymentmethodNameContaining(String typeName, Sort sort);

    List<PaymentMethod> findAllByPaymentmethodNameContainingAndStatus(String name, String status, Pageable pageable);
    List<PaymentMethod> findAllByPaymentmethodNameContainingAndStatus(String name, String status);
    List<PaymentMethod> findAllByPaymentmethodNameContaining(String name);
    List<PaymentMethod> findAllByPaymentmethodNameContaining(String name,Pageable pageable);
    PaymentMethod findFirstByStatus(String status, Sort sort);
    List<PaymentMethod> findAllByStatus(String status, Pageable pageable);
    List<PaymentMethod> findByStatus(String status);
    PaymentMethod findFirstBy(Sort sort);
    List<PaymentMethod> findAllBy(Pageable pageable);


}
