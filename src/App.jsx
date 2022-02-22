import { Navigation, Hero} from './components';
const App = () => {
  return (
    <div className="xl:container md:mx-auto">
    <Navigation />
    <div>
      {/* Body Goes here */}
    <Hero/>
    </div>
    </div>
  )
}

export default App
