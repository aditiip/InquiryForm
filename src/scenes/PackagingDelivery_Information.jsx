import React from "react";
import DropDown_Structure from "../components/DropDown_Structure";
import Input_Structure from "../components/Input_Structure"

import {
    packingTypeOptions,
    packingQtyOptions,
    deliveryModeOptions
  } from "./Names";

function PackagingDelivery_Information({packingType, packingQty, packingQtyValue, deliveryMode, handleInputChange}) {
    return (
        <>
            <div className="packingDelivery">
                <h2>Packing and Delivery Information</h2>
                <div>
                    <DropDown_Structure
                        requirement={true}
                        label_value="Packing Type"
                        id_value="packingType" 
                        value={packingType}  
                        onchange_value={handleInputChange}
                        options_value={packingTypeOptions} />
                </div>
                <div>
                    <DropDown_Structure
                        requirement={true}
                        label_value="Delivery Mode"
                        id_value="deliveryMode" 
                        value={deliveryMode}  
                        onchange_value={handleInputChange}
                        options_value={deliveryModeOptions} />
                </div>
            </div>
        </>
    )
}

export default PackagingDelivery_Information;