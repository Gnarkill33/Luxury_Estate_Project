import { Wrapper, FeedbackInput } from "./Feedback.style.js";
import {JoinWindowTitle, JoinButton} from '../JoinWindow/JoinWindow.style.js';

const Feedback = () => {
    return (
        <Wrapper>
            <JoinWindowTitle>We’d love to hear from you</JoinWindowTitle>
            <FeedbackInput type="text" placeholder="Your Name" />
            <FeedbackInput type="text" placeholder="Email" />
            <FeedbackInput type="text" placeholder="Message" />
            <JoinButton $small='25%'>Send</JoinButton>
        </Wrapper>
    )
}

export default Feedback;