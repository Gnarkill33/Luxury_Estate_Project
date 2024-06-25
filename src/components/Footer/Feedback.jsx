import { Wrapper, FeedbackInput } from "./Feedback.style.js";
import { JoinWindowTitle, Button } from '../JoinWindow/JoinWindow.style.js';

const Feedback = () => {
    return (
        <Wrapper>
            <JoinWindowTitle>We’d love to hear from you</JoinWindowTitle>
            <FeedbackInput type="text" placeholder="Your Name" />
            <FeedbackInput type="text" placeholder="Email" />
            <FeedbackInput type="text" placeholder="Message" />
            <Button $small='25%'>Send</Button>
        </Wrapper>
    )
}

export default Feedback;