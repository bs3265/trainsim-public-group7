import React, { Component, ReactElement } from "react";
import Itinerary from "../models/Itinerary";
import ItinerarySearch from "../models/ItinerarySearch";
import PurchaseStage from "../models/PurchaseStage";
import InputField from "./InputField";
import NavButtonBar from "./NavButtonBar";
import ProgressTracker from "./PurchaseTracker";
import SearchHeader from "./SearchHeader";
import TravelerInfoPage from "./TravelerInfoPage";
import ConfirmationPage from "./ConfirmationPage"
import axios from 'axios';

export interface CheckoutPageProps {
    search: ItinerarySearch;
    itinerary: Itinerary;
    setPage: (page: ReactElement) => void;
}

interface CheckoutPageState { 
    cardholderName: string,
    cardNumber: string,
    cvv:string
}

export default class CheckoutPage extends Component<CheckoutPageProps, CheckoutPageState> {
    constructor(props: CheckoutPageProps) {
        super(props);
        this.state = {
            cardholderName:'',
            cardNumber: '',
            cvv:''
        }
    }

    onSumbmit = () => {
        console.log(this.state)
        
        this.submitPayment().then(
            response => {
            if (response.status == 200 && response.data.code == 0) {
                //make the call to backend
                
                this.props.setPage(<ConfirmationPage search={this.props.search} itinerary={this.props.itinerary} setPage={this.props.setPage} payment={this.state}/>)
            } else {
                alert(`Invalid Card Information! Please try again`);
                console.log("false!!!")
            }
        });
        
    }

    submitPayment  = async () => {
        const paymenDetail = {
                "paymentAmount": 20,
                "creditCardInfo": {
                    "cardNumber": this.state.cardNumber,
                    "cvv": this.state.cvv
                }
            } ;
        const response = await axios.post('http://localhost:8003/api/stripe/payment', paymenDetail);
        return response;
    }

    override render() {
        const { search, itinerary, setPage } = this.props;

        return <div>
            <SearchHeader search={search} />
            <ProgressTracker currentStage={PurchaseStage.Checkout} />

            <hr />

            <div className="content">
                <h2 className="title is-3">Checkout</h2>
                <p>Please fill out the following billing information.</p>
                <div className="columns">
                    <div className="column is-8">
                        <form>
                            <div className="columns">
                                <div className="column">
                                    <InputField
                                        label="Cardholder Name"
                                        htmlName="cardholder-name"
                                        htmlType="text"
                                        icon="fas fa-user"
                                        autoComplete="cc-name"
                                        required={true}
                                        value={this.state.cardholderName}
                                        setValue={v => this.setState({cardholderName:v})}
                                    />
                                </div>
                            </div>
                            <div className="columns">
                                <div className="column">
                                    <InputField
                                        label="Card Number"
                                        htmlName="card-number"
                                        htmlType="text"
                                        icon="fas fa-credit-card"
                                        autoComplete="cc-number"
                                        required={true}
                                        value={this.state.cardNumber}
                                        setValue={v => this.setState({cardNumber:v})}
                                    />
                                </div>
                            </div>
                            <div className="columns">
                                <div className="column">
                                    <InputField
                                        label="Expiration"
                                        htmlName="expiration"
                                        htmlType="text"
                                        icon="fas fa-calendar"
                                        autoComplete="cc-exp"
                                        required={true}
                                        value=""
                                        setValue={v => console.log(v)}
                                    />
                                </div>
                                <div className="column">
                                    <InputField
                                        label="Security Code"
                                        htmlName="security-code"
                                        htmlType="password"
                                        icon="fas fa-lock"
                                        autoComplete="cc-csc"
                                        required={true}
                                        value={this.state.cvv}
                                        setValue={v => this.setState({cvv:v})}
                                    />
                                </div>
                            </div>
                            <hr />
                            <div className="columns">
                                <div className="column">
                                    <InputField
                                        label="First Name"
                                        htmlName="first-name"
                                        htmlType="text"
                                        icon="fas fa-user"
                                        autoComplete="billing fname"
                                        required={true}
                                        value=""
                                        setValue={v => console.log(v)}
                                    />
                                </div>
                                <div className="column">
                                    <InputField
                                        label="Last Name"
                                        htmlName="last-name"
                                        htmlType="text"
                                        icon="fas fa-user"
                                        autoComplete="billing lname"
                                        required={true}
                                        value=""
                                        setValue={v => console.log(v)}
                                    />
                                </div>
                            </div>
                            <div className="columns">
                                <div className="column">
                                    <InputField
                                        label="Email"
                                        htmlName="email"
                                        htmlType="email"
                                        icon="fas fa-at"
                                        autoComplete="billing email"
                                        required={true}
                                        value=""
                                        setValue={v => console.log(v)}
                                    />
                                </div>
                                <div className="column field">
                                    <InputField
                                        label="Phone"
                                        htmlName="phone"
                                        htmlType="tel"
                                        icon="fas fa-phone"
                                        autoComplete="billing tel"
                                        required={true}
                                        value=""
                                        setValue={v => console.log(v)}
                                    />
                                </div>
                            </div>
                            <div className="columns">
                                <div className="column">
                                    <InputField
                                        label="Street Address"
                                        htmlName="address-line1"
                                        htmlType="text"
                                        icon="fas fa-map-marker-alt"
                                        autoComplete="billing address-line1"
                                        required={true}
                                        value=""
                                        setValue={v => console.log(v)}
                                    />
                                </div>
                                <div className="column">
                                    <InputField
                                        label="Apartment or Suite (optional)"
                                        htmlName="address-line2"
                                        htmlType="text"
                                        icon="fas fa-map-marker-alt"
                                        autoComplete="billing address-line2"
                                        required={false}
                                        value=""
                                        setValue={v => console.log(v)}
                                    />
                                </div>
                            </div>
                            <div className="columns">
                                <div className="column">
                                    <InputField
                                        label="City"
                                        htmlName="city"
                                        htmlType="text"
                                        icon="fas fa-city"
                                        autoComplete="billing locality"
                                        required={true}
                                        value=""
                                        setValue={v => console.log(v)}
                                    />
                                </div>
                                <div className="column">
                                    <InputField
                                        label="State"
                                        htmlName="state"
                                        htmlType="text"
                                        icon="fas fa-map"
                                        autoComplete="billing region"
                                        required={true}
                                        value=""
                                        setValue={v => console.log(v)}
                                    />
                                </div>
                                <div className="column">
                                    <InputField
                                        label="Zip Code"
                                        htmlName="zip-code"
                                        htmlType="text"
                                        icon="fas fa-map-pin"
                                        autoComplete="billing postal-code"
                                        required={true}
                                        value=""
                                        setValue={v => console.log(v)}
                                    />
                                </div>
                            </div>
                            {/* <label className="checkbox">
                                <input type="checkbox" />
                                Save this card for future purchases
                            </label>
                            <input type="submit" className="button is-primary is-pulled-right" value="Add Payment Info" /> */}
                        </form>
                    </div>
                    <div className="column">
                        <div className="box">
                            Order Summary
                        </div>
                    </div>
                </div>
            </div>
            <NavButtonBar
                onBack={() => setPage(<TravelerInfoPage search={search} itinerary={itinerary} setPage={setPage} />)}
                // onNext={() => setPage(<ConfirmationPage search={search} itinerary={itinerary} setPage={setPage} />)} />
                onNext={() => this.onSumbmit()} />
        </div>
    }
}