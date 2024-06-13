import {JoinWindowTitle} from '../JoinWindow/JoinWindow.style.js';
import {IconsWrapper} from './Details.style.js';
import {Window, Body, Field, FieldText} from './Contacts.style.js';
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io5";

const Contacts = () => {
    return (
        <Window>
            <JoinWindowTitle $textColor='var(--white)' $textAlign='left'>
                Let’s connect
            </JoinWindowTitle>
            <Body>
                <Field>Phone</Field>
                <FieldText>+385 91 322 8444</FieldText>
                <Field>Email</Field>
                <FieldText>prospekt@prospekt.hr</FieldText>
                <Field>Address</Field>
                <FieldText>Prospekt Ltd 
                <br/> 
                Drazice 138, 51 000 Rijeka 
                <br/>
                Croatia
                </FieldText>
                <IconsWrapper>
                    <IoLogoInstagram color='white'/>
                    <IoLogoFacebook color='white'/>
                    <IoLogoWhatsapp color='white'/>
                </IconsWrapper>
            </Body>
                    
        </Window>

    )
}

export default Contacts;