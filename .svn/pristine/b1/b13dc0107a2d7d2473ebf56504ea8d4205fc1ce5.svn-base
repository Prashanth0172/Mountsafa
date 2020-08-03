package com.hyva.bsfms.bs.bsentities;

import lombok.Data;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Data
@Table(name = "salaryConfig", uniqueConstraints = @UniqueConstraint(columnNames = {"salaryId"}))
public class SalaryConfig implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "native")
    @GenericGenerator(name = "native", strategy = "native")
    private Long salaryId;
    private Long employeeId;
    private String salEffectiveDate;
    private String basicSal;
    @Column(columnDefinition="text")
    private String empearnings;
    @Column(columnDefinition="text")
    private String empdeductions;

    public Long getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(Long employeeId) {
        this.employeeId = employeeId;
    }

    public Long getSalaryId() {
        return salaryId;
    }

    public void setSalaryId(Long salaryId) {
        this.salaryId = salaryId;
    }

    public String getSalEffectiveDate() {
        return salEffectiveDate;
    }

    public void setSalEffectiveDate(String salEffectiveDate) {
        this.salEffectiveDate = salEffectiveDate;
    }

    public String getBasicSal() {
        return basicSal;
    }

    public void setBasicSal(String basicSal) {
        this.basicSal = basicSal;
    }

    public String getEmpearnings() {
        return empearnings;
    }

    public void setEmpearnings(String empearnings) {
        this.empearnings = empearnings;
    }

    public String getEmpdeductions() {
        return empdeductions;
    }

    public void setEmpdeductions(String empdeductions) {
        this.empdeductions = empdeductions;
    }
}
