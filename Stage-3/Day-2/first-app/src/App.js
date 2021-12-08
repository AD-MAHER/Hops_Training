
import './App.css';
import ArticlePart from './Components/Layout/ArticlePart';
import Footer from './Components/Layout/Footer';
import Header from './Components/Layout/Header';



function App() {

  return (
    <>
      <Header header_name="Header" />
      <ArticlePart leftSider_name="Left Sider" centerContent_name="Article" />
      <Footer footer_name="Footer" />
    </>
  );
}

export default App;
