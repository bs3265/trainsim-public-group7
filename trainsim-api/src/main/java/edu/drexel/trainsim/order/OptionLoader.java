package edu.drexel.trainsim.order;

import java.util.Enumeration;
import java.util.HashMap;
import java.util.ResourceBundle;

public class OptionLoader {

    private static HashMap<String, String> userOptions = null;
    private static ApiPropertyLoader apiPropertyLoader = new ApiPropertyLoader();

    public static void readOptions() {
        ResourceBundle rb = ResourceBundle.getBundle("config");
        Enumeration<String> keys = rb.getKeys();
        userOptions = new HashMap<String, String>();
        while (keys.hasMoreElements()) {
            String key = keys.nextElement();
            String value = rb.getString(key);
            userOptions.put(key, value);
        }
    }

    public static Object getObjectFromKey(String keyStr) {
        Object mazeObj = null;
        if (userOptions.containsKey(keyStr)) {
            String objName;
            objName = userOptions.get(keyStr);
            mazeObj = apiPropertyLoader.loadObject(objName);
        }
        return mazeObj;
    }

    public static Object getObjectFromStr(String objStr) {
        return apiPropertyLoader.loadObject(objStr);
    }

    public static String getString(String keyStr) {
        String valueStr = "";
        if (userOptions.containsKey(keyStr)) {
            valueStr = userOptions.get(keyStr);
        }
        return valueStr;
    }
}
