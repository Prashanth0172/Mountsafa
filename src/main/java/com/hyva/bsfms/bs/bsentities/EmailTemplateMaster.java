package com.hyva.bsfms.bs.bsentities;

import lombok.Data;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Data
@Table(name = "EmailTempalte", uniqueConstraints = @UniqueConstraint(columnNames = {"emailId"}))
public class EmailTemplateMaster implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "native")
    @GenericGenerator(name = "native", strategy = "native")
    private Long emailId;
    private String emailName;
    private String emailSubject;
    private String emailDescription;
    private String emailStatus;
    private String branchId;


}
