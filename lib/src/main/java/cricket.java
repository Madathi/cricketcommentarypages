

import java.io.IOException;
import java.util.*;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.mysql.cj.jdbc.MysqlConnectionPoolDataSource;
import com.mysql.cj.jdbc.MysqlPooledConnection;

/**
 * Servlet implementation class cricket
 */
public class cricket extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
	int i=1,over=1,temp1=0,temp2=0;
    public cricket() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doPost(request, response);
	}

	/**
	 * @return 
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PrintWriter out=response.getWriter();
		HttpSession httpSession=request.getSession(true);
		String bowlingscore = request.getParameter("bowlingscore");
		Integer overrun =Integer.parseInt(request.getParameter("overrun"));
		Integer ball=Integer.parseInt(request.getParameter("ball"));
	    String cricketplayer1=request.getParameter("cricketplayer1");
	    String cricketplayer2=request.getParameter("cricketplayer2");
	    Integer cricketplayer1score=Integer.parseInt(request.getParameter("cricketplayer1score"));
	    Integer cricketplayer2score=Integer.parseInt(request.getParameter("cricketplayer2score"));
	    Integer currentplayerstatus=Integer.parseInt(request.getParameter("currentplayerstatus"));
	    httpSession.setAttribute("bowlingscore",bowlingscore);
		out.print(ball);
		
		try {
	           
			MysqlConnectionPoolDataSource ds = new MysqlConnectionPoolDataSource();
            ds.setUrl("jdbc:mysql://localhost:3306/cricket");
			ds.setUser("root");
			ds.setPassword("root");
			MysqlPooledConnection pc=(MysqlPooledConnection) ds.getPooledConnection();
			Connection con=pc.getConnection();
	         if(ball==1)
	         {
		         PreparedStatement ps1=con.prepareStatement("insert into scoretable (ball1,overscore) values(?,?)");
	        	 ps1.setString(1,bowlingscore);
	             ps1.setLong(2,overrun);
	             ps1.executeUpdate();
	             System.out.print("1");
	         }
	         else if(ball==2)
	         {
	        	 
	        	 PreparedStatement ps2=con.prepareStatement("update scoretable set ball2=?,overscore=? where overno=?");
	        	 ps2.setString(1,bowlingscore);
	             ps2.setLong(2,overrun);
	             ps2.setLong(3,over);
	             ps2.executeUpdate();
	             System.out.print("2");
	             
	         }
	         else if(ball==3)
	         {
	        	
	        	 PreparedStatement ps3=con.prepareStatement("update scoretable set ball3=?,overscore=? where overno=?");
	        	 ps3.setString(1,bowlingscore);
	             ps3.setLong(2,overrun);
	             ps3.setLong(3,over);
	             ps3.executeUpdate();
	             System.out.print("3");
	         }
	         else if(ball==4)
	         {
	        	
	        	 PreparedStatement ps4=con.prepareStatement("update scoretable set ball4=?,overscore=? where overno=?");
	        	 ps4.setString(1,bowlingscore);
	             ps4.setLong(2,overrun);
	             ps4.setLong(3,over);
	             ps4.executeUpdate();
	             System.out.print("4");
	             
	         }
	         else if(ball==5)
	         {
	        	 PreparedStatement ps5=con.prepareStatement("update scoretable set ball5=?,overscore=? where overno=?");
	        	 ps5.setString(1,bowlingscore);
	             ps5.setLong(2,overrun);
	             ps5.setLong(3,over);
	             ps5.executeUpdate();
	             System.out.print("5");
	         }
	         else if(ball==0)
	         {
	        	 PreparedStatement ps6=con.prepareStatement("update scoretable set ball6=?,overscore=? where overno=?");
	        	 ps6.setString(1,bowlingscore);
	             ps6.setLong(2,overrun);
	             ps6.setLong(3,over);
	             ps6.executeUpdate();
	             System.out.print("0");
	             over++;
	            
	         }
	         if(ball==1 && over==1)
	         {
	        	 PreparedStatement ps7=con.prepareStatement("insert into playerstable (playername,playerscore,playerstatus) values(?,?,?)");
	        	 ps7.setString(1,cricketplayer1);
	        	 ps7.setLong(2,cricketplayer1score);
	        	 ps7.setString(3,"not out");
	        	 ps7.executeUpdate();
	        	 PreparedStatement ps8=con.prepareStatement("insert into playerstable (playername,playerscore,playerstatus) values(?,?,?)");
	        	 ps8.setString(1,cricketplayer2);
	        	 ps8.setLong(2,cricketplayer2score);
	        	 ps8.setString(3,"not out");
	        	 ps8.executeUpdate(); 
	         }
	         if(temp1==0)
	         {
	        	 PreparedStatement ps9=con.prepareStatement("update playerstable set playerscore=? where playername=?");
	        	 ps9.setLong(1,cricketplayer1score);
	        	 ps9.setString(2,cricketplayer1);
	        	 ps9.executeUpdate();
	        	 if(currentplayerstatus==0 && bowlingscore.equals("out"))
	        	 {
	        		 PreparedStatement ps10=con.prepareStatement("update playerstable set playerstatus=? where playername=?");
	        		 ps10.setString(1,"out");
	        		 ps10.setString(2,cricketplayer1);
	        		 ps10.executeUpdate();
	        		 temp1=1;
	        	 }
	        }
	         else if(temp1==1)
	        {
	        	 PreparedStatement ps11=con.prepareStatement("insert into playerstable (playername,playerscore,playerstatus) values(?,?,?)");
	        	 ps11.setString(1,cricketplayer1);
	        	 ps11.setLong(2,cricketplayer1score);
	        	 ps11.setString(3,"not out");
	        	 ps11.executeUpdate();
	        	 temp1=0;
	        }
	        if(temp2==0)
	        {
	        	 PreparedStatement ps12=con.prepareStatement("update playerstable set playerscore=? where playername=?");
	        	 ps12.setLong(1,cricketplayer2score);
	        	 ps12.setString(2,cricketplayer2);
	        	 ps12.executeUpdate();
	        	 if(currentplayerstatus==1 && bowlingscore.equals("out"))
	        	 {
	        		 PreparedStatement ps13=con.prepareStatement("update playerstable set playerstatus=? where playername=?");
	        		 ps13.setString(1,"out");
	        		 ps13.setString(2,cricketplayer2);
	        		 ps13.executeUpdate();
	        		 temp2=1;
	        	 }
	        }
	        else   if(temp2==1)
	        {
	        	PreparedStatement ps14=con.prepareStatement("insert into playerstable (playername,playerscore,playerstatus) values(?,?,?)");
	        	 ps14.setString(1,cricketplayer2);
	        	 ps14.setLong(2,cricketplayer2score);
	        	 ps14.setString(3,"not out");
	        	 ps14.executeUpdate();
	        	 temp2=0;
	        }
	        
		}
		catch (Exception e) {
    		// TODO: handle exception
    		e.printStackTrace();
		
	}
	}

}
