import followingData from "./data/following.json"
import followersData from "./data/followers_1.json"
import "./App.css"

function App() {

  let following = []
  followingData.relationships_following.map(profile => {
    profile.string_list_data.map(profileData => {
      following.push(profileData.value)
    })
  })

  let followers = []
  followersData.map(profile => {
    profile.string_list_data.map(profileData => {
      followers.push(profileData.value)
    })
  })

  let followersSet = new Set(followers);
  let difference = [...following].filter(x => !followersSet.has(x));

  return (
      <div className="app">
        <h1>People Not Following Back:</h1>
        {
          difference.map(nonFollower => {
            return(
                <h3>{nonFollower}</h3>
            )
          })
        }
      </div>
  );
}

export default App;
