import logo from './logo.svg';
import './App.css';
import BaiTapLayout from './components/BaiTapLayout/BaiTapLayout';
import DataBinding from './DataBinding.js/DataBinding';
import BaiTapChonXe from './StateReact/BaiTapChonXe';
import HandleEvent from './HandleEvent/HandleEvent';
import DemoProps from './Props/DemoProps';
import RenderWithMap from './RenderWithMap/RenderWithMap';
import DemoState from './StateReact/DemoState';
import DemoQLSP from './Props/DemoQLSP/DemoQLSP';
import BTGioHang from './Props/BTGioHang/BTGioHang';

function App() {
  return (
    <div className="App">
      {/* <BaiTapLayout/> */}
      {/* <DataBinding/> */}
      {/* <HandleEvent/> */}
      {/* <DemoProps/> */}
      <DemoQLSP/>
      {/* <RenderWithMap/> */}
      {/* <DemoState/> */}
      {/* <BaiTapChonXe/> */}
      {/* <BTGioHang/> */}
    </div>
  );
}

export default App;
