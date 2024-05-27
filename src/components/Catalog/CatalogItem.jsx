import { CatalogueItemWrapper, CatalogueItemName, CatalogueItemDetails } from './CatalogItem.style.js';

const CatalogueItem = ({ info, index }) => {
    return (
        <CatalogueItemWrapper index={index} image={info.image}>
            <CatalogueItemName>{info.location}</CatalogueItemName>
            <CatalogueItemDetails>{info.number} properties</CatalogueItemDetails>
        </CatalogueItemWrapper >
    )
}

export default CatalogueItem;