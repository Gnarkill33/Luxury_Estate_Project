import { useEffect, useState } from "react";
import { Container, Top, Title, ToClose, Body, Category, Option, Label, Wrapper, Bottom } from "./ExtraFilters.style.js";
import { Button } from "../JoinWindow/JoinWindow.style.js";
import { filters } from "../../filters.mock.js";


const ExtraFilters = ( { onShowClick } ) => {
    const [checked, setChecked] = useState();

    const handleChecked = () => {
        setChecked(false);
    }

    useEffect(() => {
        setChecked();
    }, [checked])

    return (
        <Container > 
            <Top>
                <Title >Filters</ Title>
                <ToClose 
                onClick={onShowClick}
                />
            </Top>
            <Wrapper>
            {Object.keys(filters).map(filter => 
                <Body key={filter}>
                <Category>{filter}</Category> {
                    filters[filter].values.map(value => <Label key={filter}><Option type="checkbox" checked={checked}/> {value}</Label>)
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
                    onClick={handleChecked}>
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