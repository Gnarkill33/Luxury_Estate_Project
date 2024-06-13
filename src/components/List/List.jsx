import { ListWrapper, ListTitle, ListDescription, ListBody } from './List.style.js';
import Card from '../Card/Card.jsx';

const data = [
    {
        "id": "1",
        "country": "Italy",
        "location": "Mountains",
        "name": "Villa Makarska",
        "guests": "8 guests",
        "bedrooms": '8 bedrooms',
        "area": "460 m2",
        "bathrooms": '4 bathrooms',
        "image": "images/Villa1.svg",
        "price": "From €280 / daily",
    },
    {
        "id": "2",
        "country": "Greece",
        "location": "Seaside",
        "name": "Villa Roxane",
        "guests": "11 guests",
        "bedrooms": '6 bedrooms',
        "area": "120 m2",
        "bathrooms": '5 bathrooms',
        "image": "images/Villa2.svg",
        "price": "From €110 / daily",
    },
    {
        "id": "3",
        "country": "Greece",
        "location": "Seaside",
        "name": "Aphrodite",
        "guests": "12 guests",
        "bedrooms": '6 bedrooms',
        "area": "460 m2",
        "bathrooms": '5 bathrooms',
        "image": "images/Villa3.svg",
        "price": "From €240 / daily",
    }
]

const List = () => {
    return (
        <ListWrapper>
            <ListTitle >
                Top Pick Villas
            </ListTitle >
            <ListDescription>
                Curabitur efficitur ante vel mi bibendum, et maximus nisl ultricies. Morbi nec tempus dui, sit amet facilisis nisl. Ut vel urna quis urna tristique tempus. Etiam lobortis est at mauris eleifend, id tempor purus ultricies.
            </ ListDescription>
            <ListBody>
                {data.map(item => {
                    return <Card key={item.id} {...item} index={item.id} />
                })
                }
            </ListBody>
        </ListWrapper>
    )
}

export default List;