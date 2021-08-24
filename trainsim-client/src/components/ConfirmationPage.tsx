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
            <p>Order Completed</p>
            {/* <p>{payment}</p> */}

            <NavButtonBar
                onBack={() => setPage(<CheckoutPage search={search} itinerary={itinerary} setPage={setPage} />)}
                onNext={() => console.log("Next")} />
            </div>

    }

}
