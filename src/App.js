import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     
      <section id="home" class="pt-36">
         <div class="container">
         <div class="flex flex-wrap">
            <div class="w-full self-center px-4">
            <h1 class="text-base font-semibold text-primary">Halo semua 👋, saya <span class="block font-bold text-dark -900 text-4xl mt-1">Heri</span> </h1>
            <h2 class="font-medium text-slate-500 text-lg mb-5">Saya mahasiswa <span class="block text-slate-400">Universitas Sulawesi Barat</span></h2>
            <p class="font-medium text-slate-400 mb-10 leading-relaxed">Saya suka pemrograman saya harap bisa bekerja sebagai seorang <span class="text-dark font-bold">Web Developer</span></p>
             <a href="#" class="text-based font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transiton duration-300 ease-in-out">hubungi Saya</a>
            </div>
            <div class="w-full self-end">
               <div class="mt-4">
                 
               </div>
            </div>
         </div>
         </div>
      </section>
    </div>
    
  );
}

export default App;
