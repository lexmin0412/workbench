import Layout from './components/layout'
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import Issues from './pages/issues';

function App() {

  return (
    <div className="h-screen w-screen">
      <Layout
				header={<Header/>}
				footer={<Footer/>}
			>
				<Issues />
			</Layout>
    </div>
  );
}

export default App
