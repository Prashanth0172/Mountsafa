package com.hyva.bsfms.bs.bsmapper;
import com.hyva.bsfms.bs.bsentities.OcOtherReceiptWithoutItem;
import com.hyva.bsfms.bs.bsentities.OtherReceipt;
import com.hyva.bsfms.bs.bspojo.AccountMasterDTO;
import com.hyva.bsfms.bs.bspojo.PosInvoiceDTO;

import java.util.ArrayList;
import java.util.List;

public class GTMapper {
    public static List<PosInvoiceDTO> getOtherReceiptEntityToPojo(List<OtherReceipt> typeList){
        List<PosInvoiceDTO> list=new ArrayList<>();
        for(OtherReceipt type:typeList) {
            PosInvoiceDTO posInvoiceDTO = new PosInvoiceDTO();
            posInvoiceDTO.setFormNo(type.getOrno());
            posInvoiceDTO.setCustomerName(type.getSupplierName());
            posInvoiceDTO.setGtAmountPaid(type.getAmountPaid());
            posInvoiceDTO.setPiStatus(type.getStatus());
            list.add(posInvoiceDTO);
        }
        return list;
    }
    public static List<AccountMasterDTO> getOcReceiptDetailsEntityToPojo(List<OcOtherReceiptWithoutItem> typeList){
        List<AccountMasterDTO> list=new ArrayList<>();
        for(OcOtherReceiptWithoutItem type:typeList) {
            AccountMasterDTO accountMasterDTO = new AccountMasterDTO();
            accountMasterDTO.setAccountname(type.getAccountid().getAccountname());
            accountMasterDTO.setAccountDescription(type.getDescription());
            accountMasterDTO.setGtAmountExcTax(type.getAmount());
            accountMasterDTO.setAmtexclusivetax(type.getAmount().doubleValue());
            accountMasterDTO.setAccountid(type.getAccountid().getAccountid());
            accountMasterDTO.setAmtinclusivetax(type.getAmount().doubleValue());
            accountMasterDTO.setInvoiceNumber(type.getInvoiceNumber());
            list.add(accountMasterDTO);
        }
        return list;
    }

}