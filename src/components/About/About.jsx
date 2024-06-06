import { AboutContainer, AboutWrapper, AboutDescription, AboutTitle, AboutText, AboutMoto, AboutImage, ImageContainerTop, ImageContainerBottom, Image } from './About.style';

const About = () => {
    return (
        <AboutContainer>
            <AboutTitle>
                About Us
            </AboutTitle>
            <AboutWrapper>
                <AboutDescription>
                    <AboutText>
                        Curabitur efficitur ante vel mi bibendum, et maximus nisl ultricies. Morbi nec tempus dui, sit amet facilisis nisl.
                        <br />
                        Ut vel urna quis urna tristique tempus. Etiam lobortis est at mauris eleifend, id tempor purus ultricies.
                        <br />
                        Curabitur efficitur luctus enim nec sollicitudin. Fusce venenatis venenatis lorem eu accumsan. Nunc sit amet mi vitae odio porttitor feugiat. Sed quis sem elementum, viverra ligula at, lobortis magna. Praesent congue nibh in dolor rutrum, et euismod quam elementum.
                        <br />
                        Mauris justo felis, iaculis quis sagittis sit amet, feugiat vitae est. Aliquam porta ex elit, sit amet rutrum turpis egestas viverra. Quisque at libero purus.
                    </AboutText>
                    <AboutMoto>
                        We strive to offer you best possible homes to stay.
                    </AboutMoto>
                </AboutDescription>
                <AboutImage>
                    <ImageContainerTop>
                        <Image $top src="/images/img_top.svg" alt="people" />
                    </ImageContainerTop>
                    <ImageContainerBottom>
                        <Image src="/images/img_bottom.svg" alt="girl" />
                    </ImageContainerBottom>
                </AboutImage>
            </AboutWrapper>
        </AboutContainer>
    )
}

export default About;