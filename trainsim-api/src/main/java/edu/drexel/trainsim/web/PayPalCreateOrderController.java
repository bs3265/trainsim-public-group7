//package edu.drexel.trainsim.web;
//
//import edu.drexel.trainsim.order.PaypalCreateOrder;
//import edu.drexel.trainsim.order.db.CreateOrder;
//import io.javalin.Javalin;
//
//public class PayPalCreateOrderController implements Controller {
//    private final CreateOrder orderCreation;
//
//    public PayPalCreateOrderController(CreateOrder orderCreation) {
//        this.orderCreation = orderCreation;
//    }
//
//
//    @Override
//    public void bindRoutes(Javalin app) {
//        try {
//            new PaypalCreateOrder().createOrder(true);
//        } catch (com.braintreepayments.http.exceptions.HttpException e) {
//            System.out.println(e.getLocalizedMessage());
//        } catch (Exception e) {
//            e.printStackTrace();
//        }
//
//    }
//}
