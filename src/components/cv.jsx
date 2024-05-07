'use client'
import Link from "next/link"
import Image from "next/image";
import Header from "./Header";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import Nav from "./Nav";

export function CV() {

  
  return (
    (<div className="flex flex-col min-h-[100dvh]">
      <Header/>
      <main className="flex-1 dark:bg-gradient-to-r dark:from-slate-900 dark:to-zinc-800">
        <HeroSection/>
        <section
          className="w-full py-12 md:py-24 lg:py-32 animate-fade-in-up"
          id="educational-qualification">
          <div className="container px-4 md:px-6">
            <div className="space-y-20">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Educational Qualification</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-40">
                <div className="card">
                  <h3 className="text-xl font-bold">Doctor of Philosophy</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">National Institute of Technology, Arunachal Pradesh</p>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">Computer Science & Engineering in 2015</p>
                </div>
                <div className="card">
                  <h3 className="text-xl font-bold">Masters of Technology</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">Jadavpur University, West Bengal</p>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">Multimedia Development 2009</p>
                </div>
                <div className="card">
                  <h3 className="text-xl font-bold">Bachelor of Technology</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">West Bengal University of Technology, West Bengal</p>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">Information Technology in 2005</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-transparent animate-fade-in-up border-y "
          id="research">
          <div className="container px-4 md:px-6">
            <div className="space-y-20">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Research</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="card">
                  <h3 className="text-xl font-bold">Information Security</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">
                    Developing novel algorithms and techniques for secure communication and data protection.
                  </p>
                </div>
                <div className="card">
                  <h3 className="text-xl font-bold">Cryptography</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">
                    Exploring advanced cryptographic primitives and their applications in various domains.
                  </p>
                </div>
                <div className="card">
                  <h3 className="text-xl font-bold">Blockchain Technology</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">
                    Investigating the use of blockchain technology for secure and decentralized applications.
                  </p>
                </div>
                <div className="card">
                  <h3 className="text-xl font-bold">Deep Learning</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">
                    Developing novel deep learning models for various applications, including image processing and
                    natural language processing.
                  </p>
                </div>
                <div className="card">
                  <h3 className="text-xl font-bold">Machine Learning</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">
                    Designing efficient and scalable machine learning algorithms for data analysis and decision-making.
                  </p>
                </div>
                <div className="card">
                  <h3 className="text-xl font-bold">Quantum Computing</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">
                    Exploring the potential of quantum computing for solving complex problems and enhancing
                    cryptographic techniques.
                  </p>
                </div>
                <div className="card">
                  <h3 className="text-xl font-bold">Image Processing</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">
                    Advancing the state-of-the-art in image enhancement, segmentation, and analysis.
                  </p>
                </div>
                <div className="card">
                  <h3 className="text-xl font-bold">Big Data</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">
                    Designing scalable and efficient algorithms for processing and analyzing large-scale data.
                  </p>
                </div>
                <div className="card">
                  <h3 className="text-xl font-bold">Network Traffic Classification</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">
                    Developing machine learning-based techniques for identifying and categorizing network traffic.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="w-full py-12 md:py-24 lg:py-32 animate-fade-in-up border-y "
          id="experience">
          <div className="container px-4 md:px-6">
            <div className="space-y-20">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Experience</h2>
              <div className="flex flex-col">
                
              <div className="">
                <h2 className=" text-4xl p-10">Academic experiences </h2>

                <table>
                <tbody>
                    <tr>
                        <td>
                            <p><strong>Sl No</strong></p>
                        </td>
                        <td>
                            <p><strong>Name of Organization</strong></p>
                        </td>
                        <td>
                            <p><strong>Type of Job</strong></p>
                        </td>
                        <td>
                            <p><strong>Post</strong></p>
                        </td>
                        <td>
                            <p><strong>Date of Joining</strong></p>
                        </td>
                        <td>
                            <p><strong>Date of Leaving</strong></p>
                        </td>
                        <td>
                            <p><strong>Total Experiences</strong></p>
                        </td>
                        <td>
                            <p><strong>Reason for leaving</strong></p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>1.</p>
                        </td>
                        <td>
                            <p>National Institute of Technology, Arunachal Pradesh</p>
                        </td>
                        <td>
                            <p>Full Time</p>
                        </td>
                        <td>
                            <p>Asst. Professor</p>
                        </td>
                        <td>
                            <p>01.12.2011</p>
                        </td>
                        <td>
                            <p>Continuing</p>
                        </td>
                        <td>
                            <p>9.2 Years</p>
                        </td>
                        <td>
                            <p>-</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>2.</p>
                        </td>
                        <td>
                            <p>Bengal Institute of Technology & Management, Santiniketan</p>
                        </td>
                        <td>
                            <p>Full Time</p>
                        </td>
                        <td>
                            <p>Asst. Professor</p>
                        </td>
                        <td>
                            <p>21.09.2008</p>
                        </td>
                        <td>
                            <p>25.11.2012</p>
                        </td>
                        <td>
                            <p>4.1 Years</p>
                        </td>
                        <td>
                            <p>Joined as an Asst. Professor NIT, Arunachal Pradesh</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>3.</p>
                        </td>
                        <td>
                            <p>Jalpaiguri Govt. Engineering College</p>
                        </td>
                        <td>
                            <p>Part-Time</p>
                        </td>
                        <td>
                            <p>Lecturer</p>
                        </td>
                        <td>
                            <p>26.02.2006</p>
                        </td>
                        <td>
                            <p>30.06.2007</p>
                        </td>
                        <td>
                            <p>1.4 Years</p>
                        </td>
                        <td>
                            <p>Higher Study (M.Tech)</p>
                        </td>
                    </tr>
                </tbody>
                </table>


              </div>
              

              <div>
                <h2 className=" text-4xl py-20 pb-10 pl-10">Administrative experiences</h2>
                  <table align="left" cellSpacing={0}>
                    <tbody>
                      <tr>
                        <td>
                          <p>Sl No</p>
                        </td>
                        <td>
                          <p>Name of Organization</p>
                        </td>
                        <td>
                          <p>Type of Job</p>
                        </td>
                        <td>
                          <p>Post</p>
                        </td>
                        <td>
                          <p>Date of Joining</p>
                        </td>
                        <td>
                          <p>Date of Leaving</p>
                        </td>
                        <td>
                          <p>Total Experiences</p>
                        </td>
                        <td>
                          <p>Reason for leaving</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>1.</p>
                        </td>
                        <td>
                          <p>National Institute of Technology, Arunachal Pradesh</p>
                        </td>
                        <td>
                          <p>Full Time</p>
                        </td>
                        <td>
                          <p>Asst. Professor</p>
                        </td>
                        <td>
                          <p>01.12.2011</p>
                        </td>
                        <td>
                          <p>Continuing</p>
                        </td>
                        <td>
                          <p>9.2 Years</p>
                        </td>
                        <td>
                          <p>-</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>2.</p>
                        </td>
                        <td>
                          <p>Bengal Institute of Technology &amp; Management, Santiniketan</p>
                        </td>
                        <td>
                          <p>Full Time</p>
                        </td>
                        <td>
                          <p>Asst. Professor</p>
                        </td>
                        <td>
                          <p>21.09.2008</p>
                        </td>
                        <td>
                          <p>25.11.2012</p>
                        </td>
                        <td>
                          <p>4.1 Years</p>
                        </td>
                        <td>
                          <p>Joined as an Asst. Professor NIT, Arunachal Pradesh</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>3.</p>
                        </td>
                        <td>
                          <p>Jalpaiguri Govt. Engineering College</p>
                        </td>
                        <td>
                          <p>Part-Time</p>
                        </td>
                        <td>
                          <p>Lecturer</p>
                        </td>
                        <td>
                          <p>26.02.2006</p>
                        </td>
                        <td>
                          <p>30.06.2007</p>
                        </td>
                        <td>
                          <p>1.4 Years</p>
                        </td>
                        <td>
                          <p>Higher Study (M.Tech)</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>

              </div>





                </div>
            </div>
          </div>
        </section>
        
        <section
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-transparent animate-fade-in-up border-y "
          id="teaching">
          <div className="container px-4 md:px-6">
            <div className="space-y-20">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Teaching</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* <div>
                  <h3 className="text-xl font-bold">Information Security</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">
                    Undergraduate course, National Institute of Technology Arunachal Pradesh
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Cryptography</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">
                    Graduate course, National Institute of Technology Arunachal Pradesh
                  </p>
                </div> */}
                <div className="card">
                  <h3 className="text-xl font-bold">Computer Graphics and Multimedia Theory</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">
                    Undergraduate course, National Institute of Technology Arunachal Pradesh
                  </p>
                </div>
                <div className="card">
                  <h3 className="text-xl font-bold">Formal Language & Automata Theory</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">
                    Undergraduate course, National Institute of Technology Arunachal Pradesh
                  </p>
                </div>
                <div className="card">
                  <h3 className="text-xl font-bold">Object-Oriented Programming</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">
                    Undergraduate course, National Institute of Technology Arunachal Pradesh
                  </p>
                </div>
                <div className="card">
                  <h3 className="text-xl font-bold">Visual Programming & Web Technology</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">
                    Undergraduate course, National Institute of Technology Arunachal Pradesh
                  </p>
                </div>
                <div className="card">
                  <h3 className="text-xl font-bold">Multimedia Technology</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">
                    Undergraduate course, National Institute of Technology Arunachal Pradesh
                  </p>
                </div>
                <div className="card">
                  <h3 className="text-xl font-bold">Internet Technology</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">
                    Undergraduate course, National Institute of Technology Arunachal Pradesh
                  </p>
                </div>
                <div className="card">
                  <h3 className="text-xl font-bold">Database Management System</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">
                    Undergraduate course, National Institute of Technology Arunachal Pradesh
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>



        <section
          className="w-full py-12 md:py-24 lg:py-32 animate-fade-in-up border-y "
          id="awards-achievements">
          <div className="container px-4 md:px-6">
            <div className="space-y-20">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"> Awards/Achievement</h2>
              <div className="">
              Awarded as one of the best teachers of NIT Arunachal Pradesh for the academic year of 2011-2012


              </div>
            </div>
          </div>
        </section>

        
        
      </main>
      <Footer/>
      {/* <div className="ai fixed bottom-0 right-0   animate-bounce  duration-1000">
        <span className="relative inline-flex">
        <Link href={"/ai-assistant"} className=" text-center flex justify-center items-center flex-col">
        <div className=""><svg xmlns="http://www.w3.org/2000/svg" className="ionicon h-10 w-10" viewBox="0 0 512 512"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={32} /><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M360 94.59V296M443.13 212.87L296 360M417.41 360H216M299.13 443.13l-144-144M152 416V216M68.87 299.13l144-144M94.59 152H288M212.87 68.87L360 216" /></svg>
        </div>
        <div className="">AI</div>

               
        </Link>
              <span className="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500" />
              </span>
            </span>

      </div> */}
    </div>)
  );
}

