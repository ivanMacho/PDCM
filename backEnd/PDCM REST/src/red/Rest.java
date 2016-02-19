package red;

import java.io.IOException;
import java.util.ArrayList;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import controlador.Youtubedl;
import modelo.InfoYoutube;
import modelo.InfoYoutubeDL;

@Path("")
public class Rest {
	
	/*--------------------Servicos-----------------------------*/
	
	//Busqueda en Youtube, devuelve JSON con objetos de tipo InfoYoutube, que contienen Nombre, Duración y Url de Youtube
	@GET
	@Path("/searchYoutube")
	@Produces(MediaType.APPLICATION_JSON)
	public Response searchYoutube(@QueryParam("busqueda")String busqueda) throws IOException{
		
		ArrayList<InfoYoutube> arrayInfoYoutube = new ArrayList<InfoYoutube>();
		arrayInfoYoutube=controlador.SearchYoutube.SearchByWord(busqueda);
		
		
		return Response.ok().
				entity(arrayInfoYoutube).
				header("Access-Control-Allow-Origin", "*").
				header("Access-Control-Allow-Credentials", "true").
				header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT").
				header("Access-Control-Allow-Headers", "Content-Type, Accept, X-Requested-With").
				allow("OPTIONS").build();
		
	}
	
	//Busqueda en Youtube por nombre de grupo o artista, devuelve JSON con objetos de tipo InfoYoutube, que contienen Nombre, Duración y Url de Youtube
	@GET
	@Path("/searchYoutubeArtist")
	@Produces(MediaType.APPLICATION_JSON)
	public Response searchYoutubeArtist(@QueryParam("busqueda")String busqueda) throws IOException{
		
		ArrayList<InfoYoutube> arrayInfoYoutube = new ArrayList<InfoYoutube>();
		arrayInfoYoutube=controlador.SearchYoutube.SearchByArtist(busqueda);
		
		
		return Response.ok().
				entity(arrayInfoYoutube).
				header("Access-Control-Allow-Origin", "*").
				header("Access-Control-Allow-Credentials", "true").
				header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT").
				header("Access-Control-Allow-Headers", "Content-Type, Accept, X-Requested-With").
				allow("OPTIONS").build();
		
	}
	//Devuelve la urlSpecial con audio, para videos de youtube, recibe por ejemplo: /watch?v=6JUbFj0BIc4
	@GET
	@Path("/youtubedl")
	@Produces(MediaType.APPLICATION_JSON)
	public Response urlSpecial(@QueryParam("url")String url){
		
		InfoYoutubeDL infoDL = new InfoYoutubeDL();
		infoDL.setURLSpecial(Youtubedl.ObtenerURL(url));
		System.out.println("Parametro recibido:" +url);
		
		return Response.ok().
				entity(infoDL).
				header("Access-Control-Allow-Origin", "*").
				header("Access-Control-Allow-Credentials", "true").
				header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT").
				header("Access-Control-Allow-Headers", "Content-Type, Accept, X-Requested-With").
				allow("OPTIONS").build();
	}
	

	/*--------------------Servicos para TEST-----------------------------*/
	
	@GET
	@Path("/test")
	@Produces(MediaType.TEXT_PLAIN)
	public Response test(){
		
		String s = "Servidor REST ---> OK";
		
		return Response.ok().
				entity(s).
				header("Access-Control-Allow-Origin", "*").
				header("Access-Control-Allow-Credentials", "true").
				header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT").
				header("Access-Control-Allow-Headers", "*").
				allow("OPTIONS").build();
	
	}
}

/*return Response.ok().
				entity(arrayInfoYoutube).
				header("Access-Control-Allow-Origin", "*").
				header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT").
				allow("OPTIONS").build();
				*/
