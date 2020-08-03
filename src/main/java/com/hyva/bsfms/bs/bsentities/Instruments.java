package com.hyva.bsfms.bs.bsentities;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;

@Entity
public class Instruments implements Serializable {

    @Id
    @GenericGenerator(name = "native", strategy = "native")
    @GeneratedValue(strategy = GenerationType.AUTO,generator = "native")
    private Long instrumentsId;
    private String instrumentsName;
    private String status;

    public Long getInstrumentsId() {
        return instrumentsId;
    }

    public void setInstrumentsId(Long instrumentsId) {
        this.instrumentsId = instrumentsId;
    }

    public String getInstrumentsName() {
        return instrumentsName;
    }

    public void setInstrumentsName(String instrumentsName) {
        this.instrumentsName = instrumentsName;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
