package edu.drexel.trainsim.db;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.SQLOutput;

public class DBConnection {

    public static Connection createConnection() {

        Connection connection = null;
        String connectionURL =
                "jdbc:sqlserver://localhost:1433/admin";
        String userName = "";
        String password = "";

        try {

            try {
                Class.forName("com.mysql.jdbc.Driver");
            } catch (ClassNotFoundException e) {
                e.printStackTrace();
            }
            connection = DriverManager.getConnection(connectionURL, userName, password);
            System.out.println("Connecting to db " + connection );
        } catch (Exception e) {
            e.getStackTrace();
        }
        return connection;
    }

}
