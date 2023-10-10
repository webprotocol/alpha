package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.mapper.DeptMapper;
import com.example.mapper.EmpMapper;
import com.example.model.Emp;

import jakarta.servlet.http.HttpServletRequest;

@Controller
@RequestMapping("/emp")
public class EmpController {
	
	@Autowired
	EmpMapper empMapper;	// DI(Dependency Injection) - 의존 주입
	
	@Autowired
	DeptMapper deptMapper;
	
	@GetMapping("/list")
	void list(Integer deptno, String search, HttpServletRequest request) {
		System.out.println("deptno = " + deptno);
		System.out.println("search = " + search);
		
		var list = empMapper.selectBySearch(deptno, search);
		
		request.setAttribute("list", list);
		
		var depts = deptMapper.selectAll();
		request.setAttribute("depts", depts);
	}
	
	
	@GetMapping("/list2")
	void list2(Integer deptno, String search, HttpServletRequest request) {
		System.out.println("deptno = " + deptno);
		System.out.println("search = " + search);
		
		List<Emp> list = null;
		if (deptno == null)
			list = empMapper.selectAll();
		else
			list = empMapper.selectByDeptno(deptno);
		
		request.setAttribute("list", list);
		
		var depts = deptMapper.selectAll();
		request.setAttribute("depts", depts);
	}
}
