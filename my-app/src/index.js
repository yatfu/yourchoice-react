import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Menu, Grid, Image, Header } from 'semantic-ui-react';


class TopMenu extends React.Component {

    render() {

        return (

            <Menu borderless className="topmenu">

            <Grid container centered>

        <Menu.Item>HOME PAGE</Menu.Item>

        <Menu.Item>LOCATIONS</Menu.Item>

        <Menu.Item>ABOUT US</Menu.Item>

        <Menu.Item>RESERVATIONS</Menu.Item>

        <Menu.Item>CONTACT US</Menu.Item>

        </Grid>

        </Menu>)

    }

}

class Background extends React.Component {
    render() {
        return (
        <Container fluid>
            <Image src='/src/tanaka.jpg' fluid/>
        </Container>
    )
    }
}


class FooterMenu extends React.Component {
    render() {
        return (
            <Image src='/tanaka.jpg'/>
    )
    }
}

class YourChoice extends React.Component {

    render() {
        return (
            <div>
            <TopMenu/>
            <Background/>
            <FooterMenu/>
            </div>
    );
    }
}

ReactDOM.render(<YourChoice/>, document.getElementById('root'));