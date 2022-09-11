import logo from './logo.svg';
import './App.css';
import heri from './image/Heri.png'

function App() {
  return (
    <div className="App">
     
      <section id="home" class="pt-36">
         <div class="container">
         <div class="flex flex-wrap">
            <div class="w-full self-center px-4 lg:w-1/2">
            <h1 class="text-base font-semibold text-primary md:text-xl lg:text-2xl">Halo semua 😁, nama saya <span class="block font-bold text-dark -900 text-4xl mt-1">Heri</span> </h1>
            <h2 class="font-medium text-secondary text-lg mb-5 lg:text-2xl">Saya mahasiswa <span class="block text-secondary">Universitas Sulawesi Barat</span></h2>
            <p class="font-medium text-secondary km p mb-10 leading-relaxed">Saya suka pemrograman saya harap bisa bekerja sebagai seorang <span class="text-dark font-bold">Web Developer</span></p>
             <a href="#" class="text-based font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transiton duration-300 ease-in-out">hubungi Saya</a>
            </div>
            <div class="w-full self-end px-4 lg:w-1/2">
               <div class="relative mt-10 lg:mt-9 lg:right-0">
                 <img src={heri} alt="heri" class="max-w-full mx-auto"/>
                  <span class="absolute bottom-10 -z-10 left-1/2 -translate-x-1/2 md:scale-125">
<svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#14b8a6" d="M66.1,-19.3C75.8,8.4,67.1,44.4,45.7,59C24.3,73.6,-9.7,66.9,-35.2,48.4C-60.7,29.9,-77.7,-0.4,-70.4,-24.8C-63.1,-49.2,-31.5,-67.7,-1.7,-67.2C28.2,-66.6,56.4,-47,66.1,-19.3Z" transform="translate(100 100) scale(1.4)"/>
</svg>
                  </span>
               </div>
            </div>
         </div>
         </div>
      </section>
      
      <section id="about" class="pt-36 pb-32">
         <div class="container">
         <div class="flex flex-wrap">
            <div class="w-full px-4 lg:w-1/2 mb-4">
                  <h4 class="font-bold uppercase text-primary text-lg mb-3">Tentang saya</h4>
                  <h2 class="text-dark font-bold max-w-md">Kita bisa jadi apapun yang kita inginkan asal kita mau berusaha</h2>
                  <p class="font-medium text-base text-secondary max-w-xl">Belajar bahasa pemrograman sangat menyenangkan </p>
            </div>
            <div class="w-full px-4">
                <h3 class="font-semibold text-dark text-2xl mb-4">Mari berteman</h3>
                <p class="font-medium text-secondary text-based mb-6">yuk ikuti saya di social media dan mari berteman</p>
                <div class="flex items-center">
                <a href="" target="blank" class="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300"><svg role="img" width="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
                </div>
            </div>
         </div>
         </div>
      </section>
    </div>
    
  );
}

export default App;
