package edu.drexel.trainsim.itinerary.otp.dtos;

import edu.drexel.trainsim.db.DBConnection;
import edu.drexel.trainsim.db.models.AdminLogin;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;


public class AdminLoginDto {

    public String authenticateAdminUser(AdminLogin adminLogin) {
        String adminUser = adminLogin.getAdminUserName();
        String adminPassword = adminLogin.getAdminPassword();

        Connection connection = null;
        Statement statement = null;
        ResultSet result = null;

        String userNameDB = "";
        String passwordDB = "";
        String roleDB = "";

        try {
            connection = DBConnection.createConnection();
            statement = connection.createStatement();
            result = statement.executeQuery("select adminUser,adminPassword,role from users");

            while (result.next()) {
                userNameDB = result.getString("user");
                passwordDB = result.getString("password");
                roleDB = result.getString("role");

                if(adminUser.equals(userNameDB) && adminPassword.equals(passwordDB) && roleDB.equals("Admin"))
                    return "Admin_Role";
                else if(adminUser.equals(userNameDB) && adminPassword.equals(passwordDB) && roleDB.equals("User"))
                    return "User_Role";
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return "Invalid user credentials";
    }
}
