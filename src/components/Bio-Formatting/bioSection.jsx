// PURPOSE: visually check the bio functions to verify they are working as expected

import { bioForListing } from "./bioForListing"
import { bioForJson } from "./bioForJson";

export const bioSection = (bioString) =>{
    const listing = bioForListing(bioString);
    if(listing.length <+ 2){
        return <p>{listing[0]}</p>
    } else {
        return listing.map((paragraph, index) => (
            <>
            <p>{paragraph}</p>
            {index !== listing.length - 1 && <br />}
            </>
        ))
    }
}


