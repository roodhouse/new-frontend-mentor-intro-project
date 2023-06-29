import './App.css';
import Copy from './components/Copy';
import Banner from './components/Banner';
import Form from './components/Form'

function App() {
  return (
    <div className="App xl:h-screen">
      <div id='wrapper' className='h-full bg-[url("./images/bg-intro-mobile.png")] bg-orange pt-[88px] px-6 pb-[68px] xl:px-0 xl:py-[121px] xl:flex xl:flex-col xl:flex-wrap xl:items-center'>
        <div id='copyWrapper' className='pb-[64px] xl:w-[525px] xl:h-full xl:flex xl:justify-center xl:items-center xl:pb-[130px]'>
          <Copy />
        </div>
        <div id='bannerWrapper' className='pb-6 xl:w-[540px]'>
          <Banner />
        </div>
        <div id='formWrapper' className='p-6 bg-white rounded-[10px] shadow-[0px_8px_0px_0px_rgba(0,0,0,0.15)] xl:w-[540px]'>
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
