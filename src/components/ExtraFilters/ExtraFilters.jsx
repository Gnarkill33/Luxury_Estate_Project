import { Container, Top, Title, ToClose, Body, Category, Option, Label, Wrapper, Bottom } from "./ExtraFilters.style.js";
import { Button } from "../JoinWindow/JoinWindow.style.js";
import { filters } from "../../filters.mock.js";


const ExtraFilters = ({ onShow, onSetFilter, chosenFilters, onResetFilters }) => {
    return (
        <Container> 
            <Top>
                <Title>Filters</Title>
                <ToClose onClick={onShow}/>
            </Top>
            <Wrapper>
            {Object.keys(filters).map(filter => 
                <Body key={filter.id}>
                <Category>{filter}</Category>
                    {filters[filter].values.map(value => (
                        <Label key={value}>
                            <Option 
                                type="checkbox"
                                name={value} 
                                checked={chosenFilters.includes(value)}
                                onClick={() => {
                                    onSetFilter(value); 
                                }}
                            /> 
                            {value}
                        </Label>
                    ))}
            </Body> 
            )}
            </Wrapper>
            <Bottom> 
                <Button 
                    $small='15%' 
                    $light='var(--primary-gold-dark)' 
                    $white='var(--white)' 
                    $margin='1rem'
                    onClick={onResetFilters}
                >
                    Clear All
                </Button>
                <Button 
                    $small='15%' 
                    $margin='1rem'>
                        Show 24 villas
                </Button>
            </Bottom>
        </Container>
    )
}

export default ExtraFilters;