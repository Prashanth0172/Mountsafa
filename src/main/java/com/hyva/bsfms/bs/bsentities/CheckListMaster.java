package com.hyva.bsfms.bs.bsentities;

import lombok.Data;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Data
@Table(name = "CheckList", uniqueConstraints = @UniqueConstraint(columnNames = {"checkId"}))
public class CheckListMaster implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "native")
    @GenericGenerator(name = "native", strategy = "native")
    private Long checkId;
    private String accountName;
    private String priority;
    private String status;
    private Long level1Id;
    private Long level2Id;
    private Long level3Id;

    public Long getCheckId() {
        return checkId;
    }

    public void setCheckId(Long checkId) {
        this.checkId = checkId;
    }

    public String getAccountName() {
        return accountName;
    }

    public void setAccountName(String accountName) {
        this.accountName = accountName;
    }

    public String getPriority() {
        return priority;
    }

    public void setPriority(String priority) {
        this.priority = priority;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Long getLevel1Id() {
        return level1Id;
    }

    public void setLevel1Id(Long level1Id) {
        this.level1Id = level1Id;
    }

    public Long getLevel2Id() {
        return level2Id;
    }

    public void setLevel2Id(Long level2Id) {
        this.level2Id = level2Id;
    }

    public Long getLevel3Id() {
        return level3Id;
    }

    public void setLevel3Id(Long level3Id) {
        this.level3Id = level3Id;
    }
}
