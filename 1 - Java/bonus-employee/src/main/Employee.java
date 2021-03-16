package main;

import java.util.Date;

public class Employee {
	//Sin Number is the unique identifier
	private String sinNumber;
	//Employee first name
	private String fNameEmployee;
	//Employee last name
	private String lNameEmployee;
	//Employee Date of birth
	private Date dateOfBirth;
	//Employee department ID
	private int departmentId;
	//Employee Salary
	private double salary;

	public Employee() {
		super();

	}
	
	//method to calculate the employee bonus
	//accepts one parameter, return the new salary
	public double applyBonusEmployee(double salary) {
		salary += salary/100;		
		return salary;
		
	}
	
	//public getters and setter
	public String getSinNumber() {
		return sinNumber;
	}
	public void setSinNumber(String sinNumber) {
		this.sinNumber = sinNumber;
	}
	public String getfNameEmployee() {
		return fNameEmployee;
	}
	public void setfNameEmployee(String fNameEmployee) {

		this.fNameEmployee = fNameEmployee;
	}
	public String getlNameEmployee() {
		return lNameEmployee;
	}
	public void setlNameEmployee(String lNameEmployee) {
		this.lNameEmployee = lNameEmployee;
	}
	public Date getDateOfBirth() {
		return dateOfBirth;
	}
	public void setDateOfBirth(Date dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}
	public int getDepartmentId() {
		return departmentId;
	}
	public void setDepartmentId(int departmentId) {
		this.departmentId = departmentId;
	}
	public double getSalary() {
		return salary;
	}
	public void setSalary(double salary) {
		this.salary = salary;
	}
	
	
	//overrrindind the toString method in order to return last name and first name 
	@Override
	public String toString() {
		return String.format(lNameEmployee + ", "+fNameEmployee);
		
	}

}
	
