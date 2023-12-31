import React from "react";
import Input_Structure from "../components/Input_Structure"
import TextArea_Structure from "../components/TextArea_Structure";
import DropDown_Structure from "../components/DropDown_Structure";

import {
    countryOptions,
    stateOptions
  } from "./Names";

function Get_Sample({getSampleOnAddress, getSampleInCountry, getSampleInState, getSampleInCity, getSampleOnPincode, handleInputChange}) {
    return (
        <>
            <div className="getSample">
                <h2>Get Sample</h2>
                <div>
                    <TextArea_Structure 
                        requirement={true}
                        label_value="Get Sample on Address"
                        id_value="getSampleOnAddress" 
                        value={getSampleOnAddress}  
                        onchange_value={handleInputChange} />
                </div>
                <div>
                    <DropDown_Structure
                        requirement={true}
                        label_value="Country"
                        id_value="getSampleInCountry" 
                        value={getSampleInCountry}  
                        onchange_value={handleInputChange}
                        options_value={countryOptions} />
                </div>
                <div>
                    <DropDown_Structure
                        requirement={true}
                        label_value="State"
                        id_value="getSampleInState" 
                        value={getSampleInState}  
                        onchange_value={handleInputChange}
                        options_value={stateOptions} />
                </div>
                <div>
                    <Input_Structure 
                        requirement={true}
                        label_value="City/Village"
                        id_value="getSampleInCity" 
                        value={getSampleInCity}  
                        onchange_value={handleInputChange} />
                </div>
                <div>
                    <Input_Structure 
                        requirement={true}
                        label_value="Pin code or Zip code"
                        type_value="number"
                        id_value="getSampleOnPincode" 
                        value={getSampleOnPincode}  
                        onchange_value={handleInputChange} />
                </div>
            </div>
        </>
    )
}

export default Get_Sample;