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
                <a href="" target="blank" class="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hever:border-primary hover:bg-primary hover:text-white"><svg role="img" width="20" class="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
                  <a href="" target="blank" class="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hever:border-primary hover:bg-primary hover:text-white"><svg role="img" width="20" class="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg></a>
    <a href="" target="blank" class="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hever:border-primary hover:bg-primary hover:text-white"><svg role="img" width="20" class="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>
    
     <a href="" target="blank" class="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hever:border-primary hover:bg-primary hover:text-white"><svg role="img" width="20" class="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg></a>
         <a href="" target="blank" class="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hever:border-primary hover:bg-primary hover:text-white"><svg role="img" width="20" class="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>TikTok</title><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg></a>
    
                </div>
            </div>
         </div>
         </div>
      </section>
    </div>
    
  );
}

export default App;