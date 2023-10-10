package com.example.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

// model, VO(Value Object), DTO(Data Transfer Object)

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class City {
	Long 	id;
	String name;
	String countryCode;
	String district;
	Long 	population;
}
