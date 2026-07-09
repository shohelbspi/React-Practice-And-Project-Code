
import './App.css'
import Card from './components/Card'

// function Square(){
//   return (
//     <div className='square'>

//     </div>
//   )
// }

function App() {

  return (
   <>
    <div className='grid'>
      <Card title='Card 1' desc=' card 1 ' img='https://s3.ap-south-1.amazonaws.com/modelfactory.in/upload/2023/Jan/12/blog_images/e46601974389fe0cab04c746fe55c4cf.jpg'/>
      <Card title='Card 2' desc='Card 2' img='https://static.toiimg.com/thumb/119202977/119202977.jpg?height=746&width=420&resizemode=76&imgsize=375468'/>
      <Card title='Card 3' desc='Card 3' img='https://s3.ap-south-1.amazonaws.com/modelfactory.in/upload/2023/Jan/12/blog_images/e46601974389fe0cab04c746fe55c4cf.jpg'/>
      <Card title='Card 4' desc='Card 4' img='https://s3.ap-south-1.amazonaws.com/modelfactory.in/upload/2023/Jan/12/blog_images/e46601974389fe0cab04c746fe55c4cf.jpg'/>
    </div>
   </>
  )
}

export default App
