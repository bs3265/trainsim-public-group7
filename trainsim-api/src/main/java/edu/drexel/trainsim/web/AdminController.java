package edu.drexel.trainsim.web;

import edu.drexel.trainsim.db.models.AdminLogin;
import edu.drexel.trainsim.itinerary.otp.dtos.AdminLoginDto;
import jdk.nashorn.internal.ir.IfNode;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;


public class AdminController extends HttpServlet {
    private static final long serialVersionUID = 1l;

    public AdminController() {
    };

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException {
        String adminUserName = request.getParameter("adminUserName");
        String adminPassword = request.getParameter("adminPassword");

        AdminLogin adminLogin = new AdminLogin();
        adminLogin.setAdminUserName(adminUserName);
        adminLogin.setAdminPassword(adminPassword);

        AdminLoginDto adminLoginDto = new AdminLoginDto();

        try {
            String userValidate = adminLoginDto.authenticateAdminUser(adminLogin);

            if (userValidate.equals("admin_role")) {
                System.out.println("Admin's Home");

                HttpSession session = request.getSession(); //Creating a session
                session.setAttribute("Admin", adminUserName); //setting session attribute
                request.setAttribute("userName", adminUserName);

                request.getRequestDispatcher("/JSP/Admin.jsp").forward(request, response);
            }
            else if(userValidate.equals("User_Role"))
            {
                System.out.println("User's Home");

                HttpSession session = request.getSession();
                session.setMaxInactiveInterval(10*60);
                session.setAttribute("User", adminUserName);
                request.setAttribute("userName", adminPassword);

                request.getRequestDispatcher("/JSP/User.jsp").forward(request, response);
            }
            else
            {
                System.out.println("Error message = "+userValidate);
                request.setAttribute("errMessage", userValidate);

                request.getRequestDispatcher("/JSP/Login.jsp").forward(request, response);
            }
        } catch (IOException e1 ) {
            e1.printStackTrace();
        } catch (Exception e2 ) {
            e2.printStackTrace();
        }
    }
}
