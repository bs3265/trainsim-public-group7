import React, { Component, ReactElement } from "react";
import Itinerary from "../models/Itinerary";
import ItinerarySearch from "../models/ItinerarySearch";
import PurchaseStage from "../models/PurchaseStage";
import ProgressTracker from "./PurchaseTracker";
import SearchHeader from "./SearchHeader";
import SearchResultItem from "./SearchResultItem";
import TravelerInfoPage from "./TravelerInfoPage";

interface SearchResultPageProps {
    search_depart: ItinerarySearch;
    search: ItinerarySearch;
    itinerary_depart: Itinerary ;
    itineraries: readonly Itinerary[];
    setPage: (page: ReactElement) => void;
}

export default class SearchResultPageRoundTripReturn extends Component<SearchResultPageProps> {
    constructor(props: SearchResultPageProps) {
        super(props);
    }

    override render() {
        const { search, itineraries, itinerary_depart, setPage } = this.props;

        const message = itineraries.length !== 0 ?
            "RETURN: Please select one of the following itineraries." :
            "No results found.";

        return <div>
            <SearchHeader search={search} />
            <ProgressTracker currentStage={PurchaseStage.SelectItinerary} />

            <hr />

            <div className="content">
                <h2 className="title is-3">Itineraries</h2>
                <p>{message}</p>

                {itineraries.map(i =>
                    <SearchResultItem
                        key={i.id}
                        itinerary={i}
                        select={() => setPage(<TravelerInfoPage search={search} search_return={search} itinerary={itinerary_depart} itinerary_return={i} roundTrip={true} setPage={setPage} />)}
                    />
                )}

            </div>
        </div>
    }
}