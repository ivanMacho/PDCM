package controlador;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;

import modelo.InfoYoutubeDLQuality;

public class Youtubedl2 {
	
	public static String ObtenerURL(String urlYou){
		String s = null;
		String er = null;
		
		// Ejcutamos el comando
		try{
			System.out.println("parametro recibido en ObtenerURL" +urlYou);
			Process p = Runtime.getRuntime().exec("youtube-dl -f 140 -g " + urlYou);

			BufferedReader stdInput = new BufferedReader(new InputStreamReader(p.getInputStream()));

			BufferedReader stdError = new BufferedReader(new InputStreamReader(p.getErrorStream()));

			// Leemos la salida del comando
			System.out.println("Ésta es la salida standard del comando:\n");
			s = stdInput.readLine();
			System.out.println(s);
			
			/*
			while ((s = stdInput.readLine()) != null) {
				System.out.println(s);
			}
			*/
			
			// Leemos los errores si los hubiera
			
			while ((er = stdError.readLine()) != null) {
				System.out.println("Ésta es la salida standard de error del comando (si la hay):\n");
				System.out.println(er);
			}
			
			//System.exit(0);
		} catch (IOException e) {
			System.out.println("Excepción: ");
			e.printStackTrace();
			System.exit(-1);
		}

		return s;
	
	}
	
	public static ArrayList<InfoYoutubeDLQuality> ObtenerCalidades(String urlYou){
		ArrayList<InfoYoutubeDLQuality> arrayQ = null;
		String er = null;
		
		// Ejcutamos el comando
		try{
			System.out.println("parametro recibido en ObtenerCalidades" +urlYou);
			Process p = Runtime.getRuntime().exec("youtube-dl -F " + urlYou);

			BufferedReader stdInput = new BufferedReader(new InputStreamReader(p.getInputStream()));

			BufferedReader stdError = new BufferedReader(new InputStreamReader(p.getErrorStream()));

			// Leemos la salida del comando
			System.out.println("Ésta es la salida standard del comando:\n");
			String linea;
			String l;
			InfoYoutubeDLQuality infoYouQ = null;
			while((linea = stdInput.readLine()) != null){
				if(Character.isDigit(linea.charAt(0))){
					infoYouQ= new InfoYoutubeDLQuality();
					String[] s = linea.split("\\s+");
					infoYouQ.setFormatCode(s[0]);
					infoYouQ.setExtension(s[1]);
					infoYouQ.setResolution(s[2]);
					arrayQ.add(infoYouQ);
				}
			}
				
		    
			//System.out.println(s);
			
			/*
			while ((s = stdInput.readLine()) != null) {
				System.out.println(s);
			}
			*/
			
			// Leemos los errores si los hubiera
			
			while ((er = stdError.readLine()) != null) {
				System.out.println("Ésta es la salida standard de error del comando (si la hay):\n");
				System.out.println(er);
			}
			
			//System.exit(0);
		} catch (IOException e) {
			System.out.println("Excepción: ");
			e.printStackTrace();
			System.exit(-1);
		}

		return arrayQ;
		
	}

}
