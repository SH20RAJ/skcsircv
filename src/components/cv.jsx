"use client";
import Link from "next/link";
import Image from "next/image";
import Header from "./Header";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import Nav from "./Nav";

export function CV() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1 dark:bg-gradient-to-r dark:from-slate-900 dark:to-zinc-800">
        <HeroSection />
        <section
          className="w-full py-12 md:py-24 lg:py-32 animate-fade-in-up"
          id="educational-qualification"ƒ
        >
          <div className="container px-4 md:px-6">
            <div className="space-y-20">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Educational Qualification
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-40">
                <div className="card">
                  <h3 className="text-xl font-bold">
                    Ph. D in Computer Science & Engineering
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">
                    NIT, Arunachal Pradesh - 2015
                  </p>
                </div>
                <div className="card">
                  <h3 className="text-xl font-bold">
                    Master of Technology in Information Technology
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">
                    IIEST Shibpur (BESU) - 2009
                  </p>
                </div>
                <div className="card">
                  <h3 className="text-xl font-bold">
                    Bachelor of Technology (B.TECH.) in Information Technology
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">
                    WBUT - 2006
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-transparent animate-fade-in-up border-y" id="research">
  <div className="container px-4 md:px-6">
    <div className="space-y-20">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Research</h2>
      <div className=" ">
        <div className="card">
          <h3 className="text-xl font-bold">Distributed Systems</h3>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Swarnendu Kumar Chakraborty is working as an Associate Professor in the department of Computer Science and Engineering at National Institute of Technology (NIT), Arunachal Pradesh, Govt. of India. He has more than twelve years of teaching experience. His research areas are distributed systems, advanced error control, cryptography, and Information Security. He is the author of more than 30 peer-reviewed publications in reputed journals.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>




<section className="w-full py-12 md:py-24 lg:py-32 animate-fade-in-up border-y" id="experience">
  <div className="container px-4 md:px-6">
    <div className="space-y-20">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Experience</h2>
      <div className="flex flex-col">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="card">
            <h3 className="text-xl font-bold">HoD, Dept. of CSE</h3>
            <p className="text-gray-500 dark:text-gray-400 mt-1">NIT Arunachal Pradesh</p>
            <p className="text-gray-500 dark:text-gray-400 mt-1">2011 to July 2017</p>
          </div>
          <div className="card">
            <h3 className="text-xl font-bold">Dean Finance</h3>
            <p className="text-gray-500 dark:text-gray-400 mt-1">NIT Arunachal Pradesh</p>
            <p className="text-gray-500 dark:text-gray-400 mt-1">2017 to February 2018</p>
          </div>
          <div className="card">
            <h3 className="text-xl font-bold">Prof. In/Charge T&P Cell</h3>
            <p className="text-gray-500 dark:text-gray-400 mt-1">NIT Arunachal Pradesh</p>
            <p className="text-gray-500 dark:text-gray-400 mt-1">Currently</p>
          </div>
          <div className="card">
            <h3 className="text-xl font-bold">Co-ordinator, Employability Skill Training</h3>
            <p className="text-gray-500 dark:text-gray-400 mt-1">Under TEQUIP-III</p>
            <p className="text-gray-500 dark:text-gray-400 mt-1">Currently</p>
          </div>
          <div className="card">
            <h3 className="text-xl font-bold">Dean (Academics)</h3>
            <p className="text-gray-500 dark:text-gray-400 mt-1">NIT Arunachal Pradesh</p>
            <p className="text-gray-500 dark:text-gray-400 mt-1">Currently</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-transparent animate-fade-in-up border-y" id="teaching">
  <div className="container px-4 md:px-6">
    <div className="space-y-20">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Teaching</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="card">
          <h3 className="text-xl font-bold">Operating Systems</h3>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Undergraduate course, National Institute of Technology Arunachal Pradesh</p>
        </div>
        <div className="card">
          <h3 className="text-xl font-bold">Data Structure and Algorithms</h3>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Undergraduate course, National Institute of Technology Arunachal Pradesh</p>
        </div>
        <div className="card">
          <h3 className="text-xl font-bold">Distributed Systems</h3>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Undergraduate course, National Institute of Technology Arunachal Pradesh</p>
        </div>
        <div className="card">
          <h3 className="text-xl font-bold">Wireless Networks</h3>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Undergraduate course, National Institute of Technology Arunachal Pradesh</p>
        </div>
        <div className="card">
          <h3 className="text-xl font-bold">Cryptography</h3>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Undergraduate course, National Institute of Technology Arunachal Pradesh</p>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-transparent animate-fade-in-up border-y" id="membership">
  <div className="container px-4 md:px-6">
    <div className="space-y-20">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Membership</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="card">
          <h3 className="text-xl font-bold">IEEE</h3>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Membership Details</p>
        </div>
        <div className="card">
          <h3 className="text-xl font-bold">ACM</h3>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Membership Details</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-transparent animate-fade-in-up border-y" id="patents">
  <div className="container px-4 md:px-6">
    <div className="space-y-20">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Patents</h2>
      <div className="flex flex-col">
        <div>
          {/* <h2 className=" text-4xl p-10">Patents</h2> */}

          <table>
            <tbody>
              <tr>
                <td><p><strong>Sl No</strong></p></td>
                <td><p><strong>Country</strong></p></td>
                <td><p><strong>Patent Number</strong></p></td>
                <td><p><strong>Filing Date</strong></p></td>
                <td><p><strong>Title</strong></p></td>
                <td><p><strong>Inventors</strong></p></td>
                <td><p><strong>Department</strong></p></td>
                <td><p><strong>Type</strong></p></td>
                <td><p><strong>Status</strong></p></td>
              </tr>
              <tr>
                <td><p>1.</p></td>
                <td><p>Australia</p></td>
                <td><p>2021102838</p></td>
                <td><p>25/05/21</p></td>
                <td><p>Self-Aware Continual Pose Estimator in Act Video Recording and Animations</p></td>
                <td><p>Shweta Chandrashekhar Dharmadhikari, Tulika Chakrabarti, Ananda Shankar Hati, Garima Jain, Manisha Mathur, Swarnendu Kr Chakraborty, B Nikhilesh, S Liya, M. R Arun, Chilukuri Bala Venkata Subbarayudu, Prasun Chakrabarti, and G Divya</p></td>
                <td><p>CSE</p></td>
                <td><p>Innovation</p></td>
                <td><p>G (30-06-2021)</p></td>
              </tr>
              <tr>
                <td><p>2.</p></td>
                <td><p>Australia</p></td>
                <td><p>2021102601</p></td>
                <td><p>01/06/21</p></td>
                <td><p>Foot-Operated Seed and Leaves Pulverizer using Automated Thrist Control</p></td>
                <td><p>Ashok Kumar Koshariya, Tulika Chakrabarti, Ananda Shankar Hati, Snadeep Poddar, M Mahalingam, Swarnendu Kr Chakraborty, Shaik Nasreen, A., Daniel Das, Reddy, Chirra Kesava, Kumar, Dileep G, Prasun Chakrabarti, and Karthikeyan C</p></td>
                <td><p>CSE</p></td>
                <td><p>Innovation</p></td>
                <td><p>G (28-07-2021)</p></td>
              </tr>
              <tr>
                <td><p>3.</p></td>
                <td><p>India</p></td>
                <td><p>202141039512 A</p></td>
                <td><p>01/09/21</p></td>
                <td><p>Machine Learning based System for Emotion Recognitions</p></td>
                <td><p>Rajib Guhathakurta, Dr. Sachin Tyagi, Harshad Laljibhai Chaudhary, Shraddha Rameshbhai Modi, Adesh Vishnuprasad Panchal, Dr. Matam Mohan Babu, Dr. Swarnendu Kumar Chakraborty, Dr.Manju. J, Dr. Sunanda Das</p></td>
                <td><p>CSE</p></td>
                <td><p>Innovation</p></td>
                <td><p>P (24/9/2021)</p></td>
              </tr>
              <tr>
                <td><p>4.</p></td>
                <td><p>India</p></td>
                <td><p>202141042379 A</p></td>
                <td><p>19/09/21</p></td>
                <td><p>An Image Processing and Deep Learning Based System for Advertisement</p></td>
                <td><p>Rajib Guhathakurta, Dr. Matam Mohan Babu, Dr. G. Muralikrishnan, Dr. Nalin Kant Mohanty, S. Senthilkumar, Dr. Swarnendu Kumar Chakraborty, Ms. Pragya Singh Tomar, R. Uma Maheshwari, Dr. Brahma Datta Shukla, Dr. Sunanda Das</p></td>
                <td><p>CSE</p></td>
                <td><p>Innovation</p></td>
                <td><p>P (1/10/2021)</p></td>
              </tr>
              <tr>
                <td><p>5.</p></td>
                <td><p>Germany</p></td>
                <td><p>G16H 50/20</p></td>
                <td><p>07/01/22</p></td>
                <td><p>An Artifical Intelligence based system for breast cancer detection</p></td>
                <td><p>Aruna Devi Baladhandapani, Abha Prasanalakshmi Balaji, Prasun Chakrabarti, Swarnendu Kumar Chakraborty, Syed Mohd Fazal Ul Haque, Bonthu Kotaiah, Ravi Kumar, Sravanth Kumar Ramakuri, Madhusudhan Sampath, Siva Shankar Subramanian, Meghana Ramachandra Tribhuwan</p></td>
                <td><p>CSE</p></td>
                <td><p>Innovation</p></td>
                <td><p>(21-02-2022)</p></td>
              </tr>
              <tr>
                <td><p>6.</p></td>
                <td><p>India</p></td>
                <td><p>202211024840</p></td>
                <td><p>27/04/22</p></td>
                <td><p>Machine Learning clustering approach for resource sharing in drone-assisted flying Ad-Hoc Network</p></td>
                <td><p>Ashish Singh Parihar, Dr. Swarnendu Kumar chakraborty</p></td>
                <td><p>CSE</p></td>
                <td><p>Innovation</p></td>
                <td><p>(06-05-2022)</p></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</section>














      </main>
      <Footer />
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
    </div>
  );
}
