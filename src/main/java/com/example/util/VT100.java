package com.example.util;

public interface VT100 {
	
	public static void clearScreen() {
		System.out.print("\033[2J");
	}
	
	public static void cursorMove(int line, int column) {
		if (line<=0)
			throw new InvalidCursorException("line " + line + "은 허용되지 않습니다.");
		if (column<=0)
			throw new InvalidCursorException("column " + column + "은 허용되지 않습니다.");
		
		System.out.printf("\033[%d;%dH", line, column);
	}
	
	public static void setForeground(int fg) {
		System.out.printf("\033[%dm", fg);
	}
	
	public static void setForeground(Color fg) {
		System.out.printf("\033[%dm", fg.ordinal() + 30);
	}
	
	public static void setBackground(int bg) {
		System.out.printf("\033[%dm", bg);
	}
	
	public static void setBackground(Color bg) {
		System.out.printf("\033[%dm", bg.ordinal() + 40);
	}
	
	public static void reset() {
		System.out.print("\033[0m");
	}
	
	public static void print(char ch) {
		System.out.print(ch);
	}

}
