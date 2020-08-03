package com.hyva.bsfms.bs.bsentities;

import lombok.Data;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Data
@Table(name = "Assessor", uniqueConstraints = @UniqueConstraint(columnNames = {"assrId"}))
public class Assessor implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "native")
    @GenericGenerator(name = "native", strategy = "native")
    private Long assrId;
    private String staffName;
    private String staffDesig;
    private String staffDepar;
    private String dateJoined;
    private String dateConfirmed;
    private String staffsupervisory;
    private String principal;
    private String staffage;
    private String jobgrade;
    private String medleavetaken;
    private String emergencyTaken;
    private String PerUndReveiw;
    private String currentPost;
    private String type;
    private String koj;
    private String qof;
    private String initiative;
    private String neatness;
    private String cusf;
    private String responsibility;
    private String dd;
    private String aoi;
    private String paa;
    private String sss;
    private String pts;
    private String hrs;
    private String adapt;
    private String eow;
    private String commit;
    private String comm;
    private String asserts;
    private String psl;
    private String sos;
    private String leader;
    private String tbg;
    private String deleg;
    private String dss;
    private String plan;
    private String org;
    private String strength;
    private String enhancement;
    private String weakness;
    private String programme;
    private String proposed;
    private String encountered;
    private String efficient;
    private String agreement;
    private String reaction;
    private String signature;
    private String ename;
    private String interview;
    private String courseList;


}
