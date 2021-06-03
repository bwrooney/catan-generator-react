import { Button, Card } from 'react-bootstrap';


const Menu = (props) => {
    const {
        radio,
        setRadio,
        getHexagons,
        hexagons,

    } = props;
    return (
        <div className="menu">
        <h1>Catan Generator</h1>
        <label>Regular</label>
        <input
          type="radio"
          checked={radio === 'regular'}
          value={'regular'}
          onChange={() => { setRadio('regular') }}
        />
        <br />
        <label>Expansion</label>
        <input
          type="radio"
          checked={radio === 'expansion'}
          value={'expansion'}
          onChange={() => { setRadio('expansion') }}
        />
      <br />
      <Button
      className="generate-button"
        variant="primary"
        onClick={getHexagons}
      >Generate</Button>
      <p>Select a game mode and press 'Generate'</p>
      </div>
    )
}

export default Menu;