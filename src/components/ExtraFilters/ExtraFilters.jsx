import { Container, Title, Body, Category, Option, Label, Wrapper, Bottom } from "./ExtraFilters.style.js";
import { Button } from "../JoinWindow/JoinWindow.style.js";
import { filters } from "../../filters.mock.js";


const ExtraFilters = () => {
    return (
        <Container > 
            <Title >Filters</ Title>
            <Wrapper>
            {filters.map(filter => 
                <Body key={filter.location}>
                <Category>{filter.location}</Category>
                <Label><Option type="checkbox" value="Seaside" /> {filter.location.values}</Label>
                <Label><Option type="checkbox" value="Countryside"/> {filter.value2}</Label>
                <Label><Option type="checkbox" value="Village"/> {filter.value3}</Label>
                <Label><Option type="checkbox" value="Town"/> {filter.value4}</Label>
                <Label><Option type="checkbox" value="Mountains"/> {filter.value5}</Label>
            </ Body> 
            )}
            </Wrapper>
            <Bottom > 
                <Button $light='var(--primary-gold-dark)' $white='var(--white)'>Clear All</Button>
                <Button $small='15%'>Show 24 villas</Button>
            </ Bottom>
        </ Container>
        
    )
}

export default ExtraFilters;