import React, { Component, ReactElement } from "react";
import Itinerary from "../models/Itinerary";
import ItinerarySearch from "../models/ItinerarySearch";
import PurchaseStage from "../models/PurchaseStage";
import InputField from "./InputField";
import NavButtonBar from "./NavButtonBar";
import ProgressTracker from "./PurchaseTracker";
import SearchHeader from "./SearchHeader";
import TravelerInfoPage from "./TravelerInfoPage";
import CheckoutPage from "./CheckoutPage";
import HomePage from "./HomePage";

export interface ConfirmationPageProps {
    search: ItinerarySearch;
    itinerary: Itinerary;
    payment: any
    setPage: (page: ReactElement) => void;
}


interface ConfirmationPageState { }

export default class ConfirmationPage extends Component<ConfirmationPageProps, ConfirmationPageState> {
    constructor(props: ConfirmationPageProps) {
        super(props);
    }

    override render() {
        const { search, itinerary, setPage, payment } = this.props;
        console.log(payment)
        return <div>
            <SearchHeader search={search} />
            <ProgressTracker currentStage={PurchaseStage.Confirmation} />
            <hr />

            <div className="content">
                <h2 className="title is-3">Confirmation</h2>
                <p>Thank you for your purchase.</p>
                <h2 className="title is-4">Purchase Summary - Ticket Number {this.props.payment.id}</h2>
                <div className="columns">
                    <div className="column is-10">
                        <table>
                            <tbody>
                                <tr>
                                    <td>Depart</td>
                                    <td>{this.props.payment.depart}</td>
                                </tr>
                                <tr>
                                    <td>Arrive</td>
                                    <td>{this.props.payment.arrive}</td>
                                </tr>
                                <tr>
                                    <td>Purchase Date</td>
                                    <td>{this.props.payment.creationDate}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <NavButtonBar
                onBack={() => console.log("back")}
                onNext={() => window.location.reload(false)} />
            </div>

    }

}
