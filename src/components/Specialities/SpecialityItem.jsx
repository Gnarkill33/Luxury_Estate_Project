import { IoIosArrowRoundForward } from "react-icons/io";
import { SpecialityWrapper, SpecialityName, SpecialityText } from './SpecialityItem.style.js'

const SpecialityItem = ({ speciality }) => {
    return (
        <SpecialityWrapper>
            <SpecialityName>
                {speciality.name}
            </SpecialityName>
            <SpecialityText>
                {speciality.text}
                <IoIosArrowRoundForward size="20px" />
            </SpecialityText>
        </ SpecialityWrapper>
    )
}

export default SpecialityItem;