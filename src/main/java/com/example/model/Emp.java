package com.example.model;

import java.time.LocalDate;

import com.example.util.Gender;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Emp {
	Integer 	empno;
	String		ename;
	Gender		gender;
	String		job;
	Integer	mgr;
	LocalDate	hiredate;
	Double		sal;
	Double		comm;
	Integer	deptno;
}
