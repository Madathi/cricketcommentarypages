import java.util.Collections;
import java.util.HashSet;
import java.util.Set;

import javax.websocket.EndpointConfig;
import javax.websocket.OnClose;
import javax.websocket.OnMessage;
import javax.websocket.OnError;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;

@ServerEndpoint( value="/cricketServerEndpoint",configurator=CricketServerConfigurator.class)
public class CricketServerEndpoint {
   static Set<Session> bowlscore=Collections.synchronizedSet(new HashSet<Session>());
   @OnOpen	
   public void onOpen( EndpointConfig endpointConfig ,Session cricketSession)
   {
	   bowlscore.add(cricketSession);
   }
  

    @OnClose
 public void onClose(Session cricketsession) {
    	bowlscore.remove(cricketsession);
    }
    @OnError
  public void onError(Throwable error) {
    	
    }
    public String buildJsonData(String bowlingscore)
    {
    	return bowlingscore;
    }

    @OnMessage
        public void handleMessage(String bowlingscore, Session session) {
    	bowlscore.stream().forEach(x->{
    		try {x.getBasicRemote().sendText(buildJsonData(bowlingscore));}
    		catch(Exception e) {e.printStackTrace();}
    	});
    	
    }
}