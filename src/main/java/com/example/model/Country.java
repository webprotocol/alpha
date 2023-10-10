package com.example.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Country {
	String code;
	String name;
	String continent;
	String region;
	String surfaceArea;
	Integer indepYear;
	Long	population;
	Double lifeExpectancy;
	Double gnp;
	Double gnpOld;
	String localName;
	String governmentForm;
	String headOfState;
	Long	capital;
	String code2;
}
