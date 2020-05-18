package com.cap.entities;

import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity(name="loanrequest")
public class LoanRequest {
	@Id
	private String loanRequestId;
	private String loanCustomerId;
	private Double loanAmount;
	private String loanType;
	private int loanTenure;
	private Double loanRoi;
	private String loanStatus;
	private int creditScore;
	
	
	
	public String getLoanRequestId() {
		return loanRequestId;
	}
	public void setLoanRequestId(String loanRequestId) {
		this.loanRequestId = loanRequestId;
	}
	public String getLoanCustomerId() {
		return loanCustomerId;
	}
	public void setLoanCustomerId(String loanCustomerId) {
		this.loanCustomerId = loanCustomerId;
	}
	public Double getLoanRoi() {
		return loanRoi;
	}
	public void setLoanRoi(Double loanRoi) {
		this.loanRoi = loanRoi;
	}
	
	public Double getLoanAmount() {
		return loanAmount;
	}
	public void setLoanAmount(Double loanAmount) {
		this.loanAmount = loanAmount;
	}
	public String getLoanType() {
		return loanType;
	}
	public void setLoanType(String loanType) {
		this.loanType = loanType;
	}
	public int getLoanTenure() {
		return loanTenure;
	}
	public void setLoanTenure(int loanTenure) {
		this.loanTenure = loanTenure;
	}
	public Double getloanRoi() {
		return loanRoi;
	}
	public void setRoi(Double loanRoi) {
		this.loanRoi = loanRoi;
	}
	public String getLoanStatus() {
		return loanStatus;
	}
	public void setLoanStatus(String loanStatus) {
		this.loanStatus = loanStatus;
	}
	public int getCreditScore() {
		return creditScore;
	}
	public void setCreditScore(int creditScore) {
		this.creditScore = creditScore;
	}
	
	
	
	 @Override
	    public boolean equals(Object o) {
	        if (this == o) return true;
	        if (o == null || getClass() != o.getClass()) return false;
	        LoanRequest customer = (LoanRequest) o;
	        return loanRequestId == customer.loanRequestId;
	    }

	    @Override
	    public int hashCode() {
	        return Objects.hash(loanRequestId);
	    }
	
	
	
}
