import UserCard from "./components/UserCard"

function App() {

  return (
    <>
<div className="grid grid-cols-1 min-[400px]:grid-cols-2 min-[1200px]:grid-cols-3 2xl:grid-cols-4 gap-3 pt-3">

      <UserCard/>
      <UserCard/>
      <UserCard/>
      <UserCard/>
      <UserCard/>
      </div>
    </>
  )
}

export default App
