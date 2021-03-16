package main;

import java.util.ArrayList;

public class ProcessBonus {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		//new arraylist to store all the employees
		ArrayList<Employee> employees = new ArrayList<Employee>();
		
		//new object of Employee
		Employee employeeData = new Employee();
		
		//Populating the employeeData object
		employeeData.setSinNumber("138499694");
		employeeData.setfNameEmployee("Joshua");
		employeeData.setlNameEmployee("Ann");
		employeeData.setDepartmentId(1);
		employeeData.setDateOfBirth(DateUtils.createDateFromString("2009-01-01"));
		employeeData.setSalary(1234.00);
		
		//adding the employeeData to the employees list
		employees.add(employeeData);
		
	
		Employee employeeData2 = new Employee();
		
		employeeData2.setSinNumber("601350580");
		employeeData2.setfNameEmployee("Taylor");
		employeeData2.setlNameEmployee("Green");
		employeeData2.setDepartmentId(2);
		employeeData2.setDateOfBirth(DateUtils.createDateFromString("2008-01-01"));
		employeeData2.setSalary(2500.00);
		employees.add(employeeData2);

		
		Employee employeeData3 = new Employee();
		
		employeeData3.setSinNumber("494147093");
		employeeData3.setfNameEmployee("Ivy");
		employeeData3.setlNameEmployee("Blue");
		employeeData3.setDepartmentId(3);
		employeeData3.setDateOfBirth(DateUtils.createDateFromString("2007-01-01"));
		employeeData3.setSalary(1999.00);
		employees.add(employeeData3);
		
		//filter any employee with salary less than 2000, calculate a bonus and add to the salary
		double salaryTarget  = 2000;
		employees.stream().parallel().
		filter(emp -> emp.getSalary()< salaryTarget).
		forEach(emp ->emp.setSalary(emp.applyBonusEmployee(emp.getSalary())));
		
		//print all employes full name and gross payment
		employees.forEach(employee -> {
			System.out.println("Employee Full Name: " + employee.toString() +". Monthly gross payment: $" +employee.getSalary());
		});

	}

}
