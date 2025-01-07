
import Header from '@/components/header'
import Navbar from '@/components/nav'
const HomePage = () => {
  return (
    <main className='flex items-center justify-center h-screen bg-sky-100'>
      <div className='w-full max-w-screen-2xl mx-auto p-20 bg-slate-100 rounded-2xl shadow-lg'>
        <Navbar />
        <Header/>
        <h1>homepage</h1>
      </div>
    </main>
  )
}

export default HomePage
