package controlador;

import java.io.IOException;
import java.util.ArrayList;

import modelo.InfoYoutube;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

public class SearchYoutube {

	public static ArrayList<InfoYoutube> SearchByWord(String word)
			throws IOException {
		ArrayList<InfoYoutube> arrayInfoYoutube = new ArrayList<InfoYoutube>();
		String s;
		String link;
		String titulo;
		String duracion;

		word = word.replace(" ", "+");
		Document doc = Jsoup.connect(
				"https://www.youtube.com/results?search_query=" + word).get();
		String title = doc.title();
		System.out.println(title);

		Elements h3 = doc.select("h3");
		for (int i = 0; i <= 2; i++) {
			h3.remove(0);
		}
		System.out.println(h3.size());

		try {
			for (Element src : h3) {
				InfoYoutube infoYoutube = new InfoYoutube();
				s = src.toString();
				link = s.substring(38, 38 + 20);
				//System.out.println(src.toString());
				//System.out.println(link);

				titulo = s.substring(s.indexOf("title", 40) + 7,
						s.indexOf("\"", s.indexOf("title", 40) + 9));
				//System.out.println(titulo);

				duracion = s.substring(s.indexOf("- Duraci") + 12,
						s.indexOf("- Duraci") + 12 + 4);
				//System.out.println(duracion);
				infoYoutube.setNombre(titulo);
				infoYoutube.setDuracion(duracion);
				infoYoutube.setUrlYoutube(link);
				arrayInfoYoutube.add(infoYoutube);
			}
		} catch (StringIndexOutOfBoundsException e) {

			System.out.println(e);
		}

		return arrayInfoYoutube;
	}

	public static ArrayList<InfoYoutube> SearchByArtist(String artist)
			throws IOException {
		ArrayList<InfoYoutube> arrayInfoYoutube = new ArrayList<InfoYoutube>();
		String link;
		String titulo;
		String duracion;

		artist = artist.replace(" ", "+");
		Document doc = Jsoup.connect(
				"https://www.youtube.com/results?search_query=" + artist).get();

		Elements tables = doc.select("table.watch-card-list");
		Elements trs = tables.get(0).select("tr");
		try {
			for (Element src : trs) {
				InfoYoutube infoYoutube = new InfoYoutube();

				String t = src.select("td.watch-card-main-col").toString();
				titulo = t.substring(t.indexOf("title") + 7,
						t.indexOf("\"", t.indexOf("title") + 7 + 5));
				infoYoutube.setNombre(titulo);

				link = t.substring(t.indexOf("href=") + 6,
						t.indexOf("&", t.indexOf("href=") + 6 + 5));
				infoYoutube.setUrlYoutube(link);

				String d = src.select("td.watch-card-data-col").toString();
				duracion = d.substring(d.indexOf(">") + 1, d.indexOf("</td>"));
				infoYoutube.setDuracion(duracion);

				arrayInfoYoutube.add(infoYoutube);
			}
		} catch (StringIndexOutOfBoundsException e) {

			System.out.println(e);
		}

		return arrayInfoYoutube;
	}
}
