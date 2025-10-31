import FireDataLoader from '../components/FireDataLoader'
import AddDataModal from '../components/AddDataModal'
import useFiresData from '../components/Logic/ParseData'

function LandingPage() {

  const { averageFires, averageTemp, averageArea } = useFiresData();
    
  return (
    <>
        <div className="w-[100wv] h-[100%] bg-gray-200 flex justify-center">
          <div className="w-[80%]">
            <div className='flex items-center justify-center gap-[50px] mt-10'>
                <h1 className='text-[2.3rem]'>FireWatch Dashboard</h1>
                <AddDataModal />
            </div>
            <div className="flex justify-center gap-10 pt-10">
              <div className="avg-columns">
                <h2 className='text-[calc(0.6rem+1vw)] text-center'>Avg. Temp: {averageTemp}</h2>
              </div>
              <div className="avg-columns">
                <h2 className='text-[calc(0.6rem+1vw)] text-center'>Fires: {averageFires}</h2>
              </div>
              <div className="avg-columns">
                <h2 className='text-[calc(0.6rem+1vw)] text-center'>Avg. Area: {averageArea}</h2>
              </div>
            </div>
            <FireDataLoader />
          </div>
        </div>
    </>
  )
}

export default LandingPage