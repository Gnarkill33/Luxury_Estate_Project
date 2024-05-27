import { SpecialityWrapper, SpecialityName, SpecialityText, Icon } from './SpecialityItem.style.js'
import { IoIosArrowRoundForward } from "react-icons/io";

const SpecialityItem = ({ speciality }) => {
    return (
        <SpecialityWrapper>
            <Icon>{speciality.icon}</Icon>
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