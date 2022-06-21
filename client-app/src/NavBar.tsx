import { Button, Container, Header, Menu } from 'semantic-ui-react';

interface Props {
    openForm: () => void;
}

export default function NavBar({openForm}: Props) {
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>
                    <img src="/assets/logo.png" alt="logo" style={{marginRight: 20 }} />
                </Menu.Item>
                <Menu.Item>
                    <Header as='h4' style={{color:'white'}}>Tandem Diabetes Git Portal</Header>
                </Menu.Item>
                <Menu.Item name='Activities' />
                <Menu.Item>
                        <Button onClick={openForm} floated='right' content='Create Activity' color='blue'/> 
                </Menu.Item>
            </Container>
        </Menu>
    )
}