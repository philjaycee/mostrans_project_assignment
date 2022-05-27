import {render} from "@testing-library/react";
import LandPage from "./LandPage"

describe("Output Component", () => {
    it ( "rendered output", () => {
       const {firstState} = render(<LandPage allCharacters={true}/>);
       const state = firstState([])
       expect(state).toBeTruthy(); 
    })
})