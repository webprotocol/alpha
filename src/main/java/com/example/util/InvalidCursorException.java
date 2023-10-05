package com.example.util;

public class InvalidCursorException extends RuntimeException {

	public InvalidCursorException() {
		super("부정확한 Cursor 값입니다.");
	}
	public InvalidCursorException(String msg) {
		super(msg);
	}
	
}
