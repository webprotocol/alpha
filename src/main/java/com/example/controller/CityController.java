package com.example.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.mapper.CityMapper;
import com.example.model.City;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
@RequestMapping("/city")
public class CityController {
	
	@Autowired
	CityMapper mapper;	// DI - 의존 주입

//	static final Logger log = LoggerFactory.getLogger(CityController.class);
//	@GetMapping("/list")
	String list2(String code, Model model) {	// IoC (Inverse Of Control) - 제어의 역전
		log.info("list...");

		List<City> list = null; 
		if (code==null || code.trim().equals(""))
			list = mapper.selectAll();
		else
			list = mapper.selectAllByCode(code);
		
		model.addAttribute("list", list);
		
		var codes = mapper.selectCountryCodes();
		model.addAttribute("codes", codes);
		
		return "city/list";
	}
	
	@GetMapping("/list")
	String list(String code, Long population, Model model) {	// IoC (Inverse Of Control) - 제어의 역전
		log.info("list...");

		var list = mapper.searchAll(code, population);
		
		model.addAttribute("list", list);
		
		var codes = mapper.selectCountryCodes();
		model.addAttribute("codes", codes);
		
		return "city/list";
	}
}
