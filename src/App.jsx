import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Switch from 'react-switch';
import Menu from './Menu'
import 'bootstrap/dist/css/bootstrap.min.css';
import { HexGrid, Layout, Hexagon, Text, Pattern, Path, Hex } from 'react-hexgrid';
import { Button } from 'react-bootstrap';
import {fills, secretFills, standardHexagons} from './mockData';
import './App.css';

const App = (props) => {

  const [hexagons, setHexagons] = useState([]);
  const [radio, setRadio] = useState('regular');
  const [checked, setChecked] = useState(false);

  const regularURL = `http://localhost:5000/standard`
  const expansionURL = `http://localhost:5000/expansion`

  const getHexagons = async () => {
    if (radio === 'regular') {
      await axios.get(regularURL)
        .then(res => {
          setHexagons(res.data);
        })
    }
    else if (radio === 'expansion') {
      await axios.get(expansionURL)
        .then(res => {
          console.log(res.data)
          setHexagons(res.data);
        })
    }
  }

  useEffect(() => {
    console.log(radio + " selected")
    console.log(hexagons.length === 30 && radio === 'expansion')
  }, [hexagons])

  const handleSecret = nextChecked => {
    setChecked(nextChecked);
  };

  return (<>
    <div className="App">
      <Menu 
        radio={radio}
        setRadio={setRadio}
        getHexagons={getHexagons}
        handleSecret={handleSecret}
        checked={checked}
        hexagons={hexagons}
      />
      <Switch
        onChange={handleSecret}
        checked={checked}
        className="secret"
      />
    </div>
    <div>
      {hexagons.length > 0 && hexagons.length === 19 && radio === 'regular' ? (

        <HexGrid width={1200} height={800}>
          <Layout size={{ x: 10, y: 10 }} flat={true} spacing={1} origin={{ x: 0, y: -40 }}>
            {hexagons.map((hexagon, i) =>
              <Hexagon
                className={hexagon.hexagon.resourceType}
                key={i}
                q={hexagon.hexagon.gridX}
                r={hexagon.hexagon.gridY}
                s={0}
                fill={hexagon.hexagon.resourceType}
              >
                <Text className={hexagon.hexagon.number === 6 || hexagon.hexagon.number === 8 ? "common-number": null}>{hexagon.hexagon.number.toString()}</Text>
              </Hexagon>
            )}
          </Layout>
          <Pattern id="brick" link={checked ? secretFills.brick : fills.brick}></Pattern>
          <Pattern id="sheep" link={checked ? secretFills.sheep : fills.sheep} />
          <Pattern id="rock" link={checked ? secretFills.rock : fills.rock} />
          <Pattern id="wood" link={checked ? secretFills.wood : fills.wood} />
          <Pattern id="wheat" link={checked ? secretFills.wheat : fills.wheat} />
          <Pattern id="desert" link={checked ? secretFills.desert : fills.desert} />
        </HexGrid>
      )
        :
        ''}
      {hexagons.length === 30 && radio === 'expansion' ? (

        <HexGrid width={1200} height={800}>
          <Layout size={{ x: 8, y: 8 }} flat={true} spacing={1} origin={{ x: 0, y: -25 }}>
            {hexagons.map((hexagon, i) =>
              <Hexagon
                className={hexagon.hexagon.resourceType}
                key={i + 1000}
                q={hexagon.hexagon.gridX}
                r={hexagon.hexagon.gridY}
                s={0}
                fill={hexagon.hexagon.resourceType}
              >
                <Text>{hexagon.hexagon.number.toString()}</Text>
              </Hexagon>
            )}
          </Layout>
          <Pattern id="brick" link={checked ? secretFills.brick : fills.brick}></Pattern>
          <Pattern id="sheep" link={checked ? secretFills.sheep : fills.sheep} />
          <Pattern id="rock" link={checked ? secretFills.rock : fills.rock} />
          <Pattern id="wood" link={checked ? secretFills.wood : fills.wood} />
          <Pattern id="wheat" link={checked ? secretFills.wheat : fills.wheat} />
          <Pattern id="desert" link={checked ? secretFills.desert : fills.desert} />
        </HexGrid>
      )
        :
        ''}
    </div>
  </>
  );
}

export default App;
