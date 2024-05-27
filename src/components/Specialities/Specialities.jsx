import { SpecialityBody, SpecialityTitle, SpecialityList, SpecialityContainer, SpecialityBottom } from './Specialities.style.js';
import { IoIosWater } from "react-icons/io";
import { IoIosPaw } from "react-icons/io";
import { IoIosCar } from "react-icons/io";
import { IoMdFitness } from "react-icons/io";
import { IoMdBoat } from "react-icons/io";
import SpecialityItem from './SpecialityItem.jsx';
import JoinWindow from '../JoinWindow/JoinWindow.jsx';

const specialitiesInfo = [
    {
        "id": "1",
        "name": "Seafront",
        "text": "have a look",
        "icon": IoIosWater,
    },
    {
        "id": "2",
        "name": "Pet friendly",
        "text": "pets allowed",
        "icon": IoIosPaw,
    },
    {
        "id": "3",
        "name": "Electric car",
        "text": "charge your car",
        "icon": IoIosCar,
    },
    {
        "id": "4",
        "name": "Fitness/Gym",
        "text": "work out",
        "icon": IoMdFitness,
    },
    {
        "id": "5",
        "name": "Boat mooring",
        "text": "take a trip",
        "icon": IoMdBoat,
    },
]

const Specialities = () => {
    return (
        <SpecialityBody>
            < SpecialityTitle >
                Our properties specialities
            </ SpecialityTitle >
            < SpecialityList >
                {specialitiesInfo.map((speciality) => {
                    return (
                        <SpecialityContainer key={speciality.id}>
                            < SpecialityItem speciality={speciality} />
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