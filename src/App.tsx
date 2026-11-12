import { CityInfo } from "./components/CityInfo";
import { PhotoGallery } from "./components/PhotoGallery";
import { city } from "./data/city";
import "./App.css";

function App() {
  return (
    <main className="page">
      <article className="city-card">
        <CityInfo
          name={city.name}
          country={city.country}
          founded={city.founded}
          description={city.description} 
          />
        <PhotoGallery photos={city.photos}/>  
      </article>
    </main>
  )
}

export default App;