import { CatalogueItemWrapper, CatalogueItemName, CatalogueItemDetails } from './CatalogueItem.style.js';

const CatalogueItem = ({ info, index }) => {
    return (
        <CatalogueItemWrapper index={index} style={{ backgroundImage: `url(${info.image})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
            <CatalogueItemName>{info.location}</CatalogueItemName>
            <CatalogueItemDetails>{info.number} properties</CatalogueItemDetails>
        </CatalogueItemWrapper >
    )
}

export default CatalogueItem;