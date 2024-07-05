import { Container, Top, Title, ToClose, Body, Category, Option, Label, Wrapper, Bottom } from "./ExtraFilters.style.js";
import { Button } from "../JoinWindow/JoinWindow.style.js";
import { filters } from "../../filters.mock.js";


const ExtraFilters = ( { onShow, onSetFilterName, onSaveFilterName } ) => {
    return (
        <Container > 
            <Top>
                <Title >Filters</ Title>
                <ToClose 
                onClick={onShow}
                />
            </Top>
            <Wrapper>
            {Object.keys(filters).map(filter => 
                <Body>
                <Category>{filter}</Category> {
                    filters[filter].values.map(value => (
                    <Label>
                        <Option 
                        type="checkbox"
                        name={value} 
                        onClick={(event) => {
                            onSetFilterName(event.target.name); 
                            // onSaveFilterName()
                        }}/> {value}
                    </Label>))
                }
            </ Body> 
            )}
            </Wrapper>
            <Bottom > 
                <Button 
                    $small='15%' 
                    $light='var(--primary-gold-dark)' 
                    $white='var(--white)' 
                    $margin='1rem'
                    >
                        Clear All
                    </Button>
                <Button 
                    $small='15%' 
                    $margin='1rem'>
                        Show 24 villas
                </Button>
            </ Bottom>
        </ Container>
        
    )
}

export default ExtraFilters;