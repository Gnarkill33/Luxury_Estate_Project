import { Link } from 'react-router-dom'
import { Container, Title } from './NotFoundPage.style.js'

const NotFoundPage = () => {
    return (
        <Container>
        <Title>404 Not Found</Title>
        <Link to='/'>Back to Home page</Link>
        </Container>
    )
}

export default NotFoundPage