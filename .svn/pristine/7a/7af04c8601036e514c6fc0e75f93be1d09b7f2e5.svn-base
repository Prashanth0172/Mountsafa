package com.hyva.bsfms.bs.bsendpoints;
import com.hyva.bsfms.bs.bsentities.JournalEntry;
import com.hyva.bsfms.bs.bsentities.OtherPayment;
import com.hyva.bsfms.bs.bspojo.JournalEntryDTO;
import com.hyva.bsfms.bs.bspojo.OtherPurchaseGtDTO;
import com.hyva.bsfms.bs.bspojo.OtherRecieptGtDTO;
import com.hyva.bsfms.bs.bspojo.PosInvoiceDTO;
import com.hyva.bsfms.bs.bsservice.GTService;
import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.node.ObjectNode;
import org.hibernate.Criteria;
import org.hibernate.criterion.MatchMode;
import org.hibernate.criterion.Restrictions;
import org.json.JSONException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;
import javax.servlet.http.HttpServlet;
import java.io.IOException;
import java.sql.SQLException;
import java.text.ParseException;
import java.util.List;

@RestController
@RequestMapping("/gt")
public class GTController extends HttpServlet{
    @Autowired
    GTService gtService;

    @RequestMapping(value = "/saveOtherRecieptGt",method = RequestMethod.POST,consumes ="application/json",produces = "application/json")
    public OtherRecieptGtDTO saveOtherRecieptGt(@RequestBody OtherRecieptGtDTO orgtDTO)throws IOException, JSONException,ParseException {
        OtherRecieptGtDTO rpdto = null;
        rpdto = gtService.createOtherRecieptNPayment(orgtDTO);
        return rpdto;
    }

    @RequestMapping(value = "/getDuplicateReceipt",method = RequestMethod.GET,produces="application/json")
    public ResponseEntity getDuplicateReceipt() {
        List<PosInvoiceDTO> invDTO = gtService.getOtherReceiptDuplicateList();
        return ResponseEntity.status(200).body(invDTO);
    }
    @RequestMapping(value = "/duplicateReceiptPrint/{paymentId}",method = RequestMethod.POST,produces="application/json")
    public OtherRecieptGtDTO duplicateReceiptPrint(@PathVariable(value = "paymentId") String paymentId) {
        OtherRecieptGtDTO rpdto = gtService.duplicateReceiptPrint(paymentId);
        return rpdto;
    }
    @RequestMapping(value = "/saveOtherPurchaseGt",method = RequestMethod.POST,consumes="application/json")
    public OtherPurchaseGtDTO saveOtherPurchaseGt( @RequestBody OtherPurchaseGtDTO purchaseDTO,
                                                  @RequestAttribute("userId") int userId) throws IOException, SQLException, MessagingException, JSONException,ParseException {
        purchaseDTO = gtService.createOtherPurchaseNPayment(purchaseDTO, userId);
        return purchaseDTO;
    }
    @RequestMapping(value = "/saveJournalEntryGt",method = RequestMethod.POST,consumes ="application/json",produces = "application/json")
    public JournalEntryDTO saveJournalEntryGt(@RequestBody JournalEntryDTO jegtDTO) throws IOException, SQLException, MessagingException, JSONException {
        JournalEntryDTO rpdto = null;
        jegtDTO.setStatus("Prepared");
        rpdto = gtService.createJournalEntryNPayment(jegtDTO);
        return rpdto;
    }
    @RequestMapping(value = "/getDuplicateJE",method = RequestMethod.GET,produces="application/json")
    public ResponseEntity getDuplicateJE(@RequestParam(value = "itemSearchText") String itemSearchText) {
        List<JournalEntry> otherPaymentList = gtService.getOtherJournalEntryList(itemSearchText);
        return ResponseEntity.status(200).body(otherPaymentList);
    }
    @RequestMapping(value = "/duplicateJEPrint/{paymentId}",method = RequestMethod.POST,produces="application/json")
    public JournalEntryDTO duplicateJEPrint(@PathVariable(value = "paymentId") String paymentId) {
        JournalEntryDTO rpdto = gtService.duplicateJournalEntryPrint(paymentId);
        return rpdto;
    }

    @RequestMapping(value = "/getDuplicatePaymentVoucher",method = RequestMethod.GET,produces="application/json")
    public ResponseEntity getDuplicatePaymentVoucher(@RequestParam(value = "itemSearchText") String itemSearchText) {
        List<OtherPayment> otherPaymentList = gtService.getOtherPaymentDuplicateList(itemSearchText);
        return ResponseEntity.status(200).body(otherPaymentList);
    }

    @RequestMapping(value = "/printDuplicateVoucher/{paymentId}",method = RequestMethod.POST,produces="application/json")
    public OtherPurchaseGtDTO printDuplicateVoucher(@PathVariable(value = "paymentId") String paymentId) {
        OtherPurchaseGtDTO rpdto = gtService.duplicateVoucherPrint(paymentId);
        return rpdto;
    }
    @RequestMapping(value = "/saveDraftGtSales",method = RequestMethod.POST,consumes ="application/json",produces = "application/json")
    public OtherRecieptGtDTO saveDraftGtSales(@RequestBody OtherRecieptGtDTO otherRecieptGtDTO) throws IOException, ParseException, JSONException {
        OtherRecieptGtDTO rpdto = null;
        rpdto = gtService.createDraftGtSalesPayment(otherRecieptGtDTO);
        return rpdto;
    }
    @RequestMapping(value = "/getOtherGTSalesEdit/{invoiceNo}",method = RequestMethod.GET,produces="application/json")
    public ResponseEntity getOtherGTSalesEdit(@PathVariable(value = "invoiceNo") String invoiceNo) {
        OtherRecieptGtDTO otherRecieptGtDTO = gtService.retrieveGtSalesForEditPopulate(invoiceNo);
        if(otherRecieptGtDTO.getSelectedAccountList().isEmpty()){
            otherRecieptGtDTO.setMessage("Invoice Not Found");
            return  ResponseEntity.status(200).body(otherRecieptGtDTO);
        }
        return  ResponseEntity.status(200).body(otherRecieptGtDTO);
    }
    @RequestMapping(value = "/cancelGtReceipt",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity cancelDebitNote(@RequestParam("invoiceNo") String  invoiceNo) {

        ObjectNode objectNode = new ObjectMapper().createObjectNode();
        objectNode.put("message", gtService.makeCancelledGtReceipt(invoiceNo));
        return ResponseEntity.status(HttpStatus.OK).body(objectNode.toString());
    }
    @RequestMapping(value = "/postGtforSales/{invoiceNo}",method = RequestMethod.GET,produces="application/json")
    public ResponseEntity postGtforSales(@PathVariable(value = "invoiceNo") String invoiceNo) throws IOException, SQLException, MessagingException, JSONException {

        OtherRecieptGtDTO otherRecieptGtDTO = gtService.postGTSales(invoiceNo);
        return  ResponseEntity.status(200).body(otherRecieptGtDTO);
    }
    @RequestMapping(value = "/getOtherGTPurchaseEdit/{invoiceNo}",method = RequestMethod.GET,produces="application/json")
    public ResponseEntity getOtherGTPurchaseEdit(@PathVariable(value = "invoiceNo") String invoiceNo) {
        OtherPurchaseGtDTO otherPurchaseGtDTO = gtService.retrievePIDetailsForEditPopulate(invoiceNo);
        if(otherPurchaseGtDTO.getSelectedAccountList().isEmpty()){
            otherPurchaseGtDTO.setMessage("Invoice Not Found");
            return ResponseEntity.status(200).body(otherPurchaseGtDTO);
        }
        return ResponseEntity.status(200).body(otherPurchaseGtDTO);
    }
    @RequestMapping(value = "/saveDraftGtPurchase",method = RequestMethod.POST,consumes ="application/json",produces = "application/json")
    public OtherPurchaseGtDTO saveDraftGtPurchase(@RequestBody OtherPurchaseGtDTO otherPurchaseGtDTO) throws IOException, ParseException,
            SQLException, MessagingException, JSONException {
        OtherPurchaseGtDTO rpdto = null;
        rpdto = gtService.createDraftGtPurchasePayment(otherPurchaseGtDTO);
        return rpdto;
    }
    @RequestMapping(value = "/postGtforExpense/{invoiceNo}",method = RequestMethod.GET,produces="application/json")
    public ResponseEntity postGtforExpense(@PathVariable(value = "invoiceNo") String invoiceNo) throws IOException, SQLException, MessagingException, JSONException {

        OtherPurchaseGtDTO otherPurchaseGtDTO = gtService.postGTPurchase(invoiceNo);
        otherPurchaseGtDTO.setResult("SUCCESS");
        return  ResponseEntity.status(200).body(otherPurchaseGtDTO);
    }
    @RequestMapping(value = "/cancelGtforExpense/{invoiceNo}",method = RequestMethod.GET,produces="application/json")
    public ResponseEntity cancelGtforExpense(@PathVariable(value = "invoiceNo") String invoiceNo) {
        ObjectNode objectNode = new ObjectMapper().createObjectNode();
        objectNode.put("message",gtService.cancelGtforExpense(invoiceNo));
        return ResponseEntity.status(HttpStatus.OK).body(objectNode.toString());
    }
    @RequestMapping(value = "/cancelGtExpense",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity cancelGtExpense(@RequestParam("invoiceNo") String  invoiceNo) {
        ObjectNode objectNode = new ObjectMapper().createObjectNode();
        objectNode.put("message", gtService.makeCancelledGtExpense(invoiceNo));
        return ResponseEntity.status(HttpStatus.OK).body(objectNode.toString());
    }
    @RequestMapping(value = "/cancelGtforSales/{invoiceNo}",method = RequestMethod.GET,produces="application/json")
    public ResponseEntity cancelGtforSales(@PathVariable(value = "invoiceNo") String invoiceNo) {
        ObjectNode objectNode = new ObjectMapper().createObjectNode();
        objectNode.put("message",gtService.cancelGtforSales(invoiceNo));
        return ResponseEntity.status(HttpStatus.OK).body(objectNode.toString());
    }
    @RequestMapping(value = "/saveDraftJournalEntryGt",method = RequestMethod.POST,consumes ="application/json",produces = "application/json")
    public JournalEntryDTO saveDraftJournalEntryGt(@RequestBody JournalEntryDTO jegtDTO) throws IOException, SQLException, MessagingException, JSONException {
        JournalEntryDTO rpdto = null;
        jegtDTO.setStatus("Draft");
        rpdto = gtService.createJournalEntryNPayment(jegtDTO);
        return rpdto;
    }
    @RequestMapping(value = "/getJREEdit/{invoiceNo}",method = RequestMethod.GET,produces="application/json")
    public ResponseEntity getJREEdit(@PathVariable(value = "invoiceNo") String invoiceNo) {
        JournalEntryDTO journalEntryDTO = gtService.retrieveJREForEditPopulate(invoiceNo);
        if(journalEntryDTO.getSelectedAccountList().isEmpty()){
            journalEntryDTO.setMessage("Invoice Not Found");
            return  ResponseEntity.status(200).body(journalEntryDTO);
        }
        return  ResponseEntity.status(200).body(journalEntryDTO);
    }
    @RequestMapping(value = "/postJournalEntryGt/{invoiceNo}",method = RequestMethod.GET,produces="application/json")
    public ResponseEntity postJournalEntryGt(@PathVariable(value = "invoiceNo") String invoiceNo) throws IOException, SQLException, MessagingException, JSONException {

        JournalEntryDTO journalEntryDTO = gtService.postJournalEntry(invoiceNo);
        journalEntryDTO.setResult("SUCCESS");
        return  ResponseEntity.status(200).body(journalEntryDTO);
    }
}
