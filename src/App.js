import { Input } from './Components/Input/index';
import { Canvas } from './Components/Canvas/index';
import { ReverseBtn } from './Components/Reverse/index';
import { tringle, reverseTringle } from './services/drawTringle'
import { Fragment, useState } from 'react';


function App() {

  const [value, setValue] = useState('');
  const [tringleArr, setTringleArr] = useState([]);
  const [isReversed, setIsReversed] = useState(true);

  const handleChange = ({ target: { value } }) => {
    setValue(value);
    setTringleArr(tringle(value));
  }

  const toggleFun = () => {
    if (!isReversed) {
      setTringleArr(tringle(value));
      setIsReversed(true);
    } else {
      setTringleArr(reverseTringle(value));
      setIsReversed(false);
    }
  }

  const canvas = tringleArr.map((item, index) => {
    return <Fragment key={index}>{item}<br /></Fragment>
  })

  return <div className='container'>
    <Input
      handleChange={handleChange}
    />

    <Canvas
      height={value}
      tringleArr={tringleArr}
      canvas={canvas}
    />

    <ReverseBtn
      toggleFun={toggleFun}
    />
  </div>
}

export default App;