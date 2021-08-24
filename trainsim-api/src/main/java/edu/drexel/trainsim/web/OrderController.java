package edu.drexel.trainsim.web;
import edu.drexel.trainsim.order.models.OrderDetail;
import io.javalin.Javalin;
import io.javalin.http.Context;

public class OrderController implements Controller{
    
    public void bindRoutes(Javalin app) {
        app.post("/api/order", ctx -> this.createOrder(ctx));
    }

    private void createOrder(Context ctx) {
        // System.out.print(ctx);
        var order = ctx.bodyAsClass(OrderDetail.class);
        ctx.json(order);    
    }
    
}