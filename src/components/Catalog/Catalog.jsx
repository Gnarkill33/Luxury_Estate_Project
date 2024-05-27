import { CatalogueWrapper, CatalogueTitle, CatalogueDescription, CatalogueBody } from "./Catalog.style.js"
import CatalogueItem from './CatalogItem.jsx'

const propertiesInfo = [
    {
        "id": "1",
        "location": "Mountains",
        "number": "87",
        "image": "images/Region1.svg",
    },
    {
        "id": "2",
        "location": "Coastline",
        "number": "64",
        "image": "images/Region2.svg",
    }
]

const Catalogue = () => {
    return (
        <CatalogueWrapper>
            <CatalogueTitle>
                OUR REGIONS
            </CatalogueTitle>
            <CatalogueDescription>
                Fusce blandit magna eget felis dapibus, ac lacinia quam faucibus. Quisque feugiat felis a quam volutpat, non scelerisque nibh scelerisque.
            </CatalogueDescription>
            <CatalogueBody>
                {propertiesInfo.map(item => {
                    return <CatalogueItem key={item.id} info={item} index={item.id} />
                })
                }
            </CatalogueBody>
        </CatalogueWrapper>
    )
}

export default Catalogue;