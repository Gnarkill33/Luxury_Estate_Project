import { SpecialityBody, SpecialityTitle, SpecialityList, SpecialityContainer, SpecialityBottom, IconWater, IconPaw, IconCar, IconFitness, IconBoat } from './Specialities.style.js';
import SpecialityItem from './SpecialityItem.jsx';
import JoinWindow from '../JoinWindow/JoinWindow.jsx';

const specialitiesIcons = [
    IconWater,
    IconPaw,
    IconCar,
    IconFitness,
    IconBoat,
]

const specialitiesInfo = [
    {
        "id": "1",
        "name": "Seafront",
        "text": "have a look",
    },
    {
        "id": "2",
        "name": "Pet friendly",
        "text": "pets allowed",
    },
    {
        "id": "3",
        "name": "Electric car",
        "text": "charge your car",
    },
    {
        "id": "4",
        "name": "Fitness/Gym",
        "text": "work out",
    },
    {
        "id": "5",
        "name": "Boat mooring",
        "text": "take a trip",
    },
]

const Specialities = () => {
    return (
        <SpecialityBody>
            < SpecialityTitle >
                Our properties specialities
            </ SpecialityTitle >
            < SpecialityList >
                {specialitiesInfo.map((speciality, index) => {
                    const Icon = specialitiesIcons[index];
                    return (
                        <SpecialityContainer>
                            <Icon />
                            < SpecialityItem key={speciality.id} speciality={speciality} />
                        </ SpecialityContainer>
                    )
                })}
            </SpecialityList>
            <SpecialityBottom>
                < JoinWindow />
            </SpecialityBottom>
        </SpecialityBody>
    )
}

export default Specialities;