
import javax.servlet.http.HttpSession;

import javax.websocket.HandshakeResponse;
import javax.websocket.server.*;
import javax.websocket.server.ServerEndpointConfig.Configurator;
public class CricketServerConfigurator extends Configurator {
	public void modifyHandshake(ServerEndpointConfig sec,HandshakeRequest request,HandshakeResponse response)
	{
		sec.getUserProperties().put("bowlingscore",(String)((HttpSession) request.getHttpSession()).getAttribute("bowlingscore"));
		
	}

}
