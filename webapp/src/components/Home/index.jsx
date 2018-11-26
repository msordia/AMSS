import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

// import Map from './Map';
import CurrentlyInTrip from './CurrentlyInTrip';
import InputTrip from './InputTrip';

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
`

const MenuButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 1em;
  left: 1em;
  height: 2.5em;
  width: 2.5em;
  border-radius: 50%;
  background: ${props => props.theme.white};
  box-shadow: 0 2px 5px ${props => props.theme.lightgray};
  cursor: pointer;
`

const SignOutButton = styled(MenuButton)`
  left: auto;
  right: 1em;
`

const MapWrapper = styled.div`
  flex: 1;
  background: lightblue;
`

const LowerBox = styled.div`
  height: 35%;
  box-shadow: 0 2px 5px ${props => props.theme.lightgray};
`

const Home = () => (
  <Container>
    <MapWrapper>
      <MenuButton><i class="fas fa-bars fa-lg" /></MenuButton>
      <SignOutButton><i class="fas fa-sign-out-alt fa-lg" /></SignOutButton>
      {/* <Map
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyBKIANqW2c99S9CmfcoznjjSg5K5buel8E&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      /> */}
    </MapWrapper>
    <LowerBox>
      <Switch>
        <Route path="/home/trip" render={() => (
          <CurrentlyInTrip />
        )}/>
        <Route render={() => (
          <InputTrip />
        )}/>
      </Switch>
    </LowerBox>
  </Container>
);

export default Home;
