import { TitleWrapper, TitleElement, Results} from './Title.style.js';

const Title = ( {type, textBig, textSmall, textVillas, villasNumber}) => {
    return (
        <>
        { type === 'primary' && 
        <>
        <TitleElement>{textBig}</TitleElement>
        <TitleWrapper>
            <TitleElement $small>{textSmall}</TitleElement>
        </TitleWrapper>
        </>
        }
        { type === 'secondary' && 
        <>
        <TitleElement $average>{textVillas}</TitleElement>
        <Results>{villasNumber} results</Results>
        </>
        }
        </>
    )
}

export default Title;