package edu.drexel.trainsim.order.models;
import edu.drexel.trainsim.itinerary.models.Stop;

public class OrderDetail {
    protected String id;
    protected String email;
    protected int ticketNumber;
    //depart and arrive should be stop or place
    protected String depart;
    protected String arrive;
    //passenger should have it's own object
    protected String[] passenger;
    protected String tripType;
    protected Double amount;
    
    public OrderDetail() {
        
    }
    public OrderDetail(String id, String email, int ticketNumber, String depart, String arrive, String tripType, Double amount){
        this.id = id;
        this.email = email;
        this.ticketNumber = ticketNumber;
        this.depart = depart;
        this.arrive = arrive;
        this.tripType = tripType;
        this.amount = amount;
    }
    
}