package edu.drexel.trainsim.order;

import com.paypal.core.PayPalEnvironment;
import com.paypal.core.PayPalHttpClient;


public class PayPalClient {

    String clientId = OptionLoader.getString("paypal.client");
    String clientSecret = OptionLoader.getString("paypal.secret");

    /**
     *Set up the PayPal Java SDK environment with PayPal access credentials.
     *This sample uses SandboxEnvironment. In production, use LiveEnvironment.
     */
    private PayPalEnvironment environment = new PayPalEnvironment.Sandbox(
            clientId,
            clientSecret);

    /**
     *PayPal HTTP client instance with environment that has access
     *credentials context. Use to invoke PayPal APIs.
     */
    PayPalHttpClient client = new PayPalHttpClient(environment);

    /**
     *Method to get client object
     *
     *@return PayPalHttpClient client
     */
    public PayPalHttpClient client() {
        return this.client;
    }

}
