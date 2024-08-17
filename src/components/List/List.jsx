import { ListWrapper, ListTitle, ListDescription, ListBody } from './List.style.js';
import Card from '../Card/Card.jsx';
import { useFetch } from '../../hooks/useFetch.js'; 

const List = () => {
    const [villas] = useFetch();
    return (
        <ListWrapper>
            <ListTitle >
                Top Pick Villas
            </ListTitle >
            <ListDescription>
                Curabitur efficitur ante vel mi bibendum, et maximus nisl ultricies. Morbi nec tempus dui, sit amet facilisis nisl. Ut vel urna quis urna tristique tempus. Etiam lobortis est at mauris eleifend, id tempor purus ultricies.
            </ ListDescription>
            <ListBody>
                {villas.map(item => {
                    return <Card key={item.id} {...item} index={item.id} />
                })
                }
            </ListBody>
        </ListWrapper>
    )
}

export default List;