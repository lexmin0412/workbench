import Layout from './components/layout'
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import Issues from './pages/issues';
import Repos from './pages/repos';

function App() {

	const {pathname} = window.location

  return (
    <div className="h-screen w-screen">
      <Layout header={<Header />} footer={<Footer />}>
        {pathname === "/repos" ? <Repos /> : <Issues />}
      </Layout>
    </div>
  );
}

export default App
