'use client'
import HeroSection from "@/components/HeroSection";
import Nav from "@/components/Nav";
import { Projects } from "@/components/projects";

const BookSection = () => {
  return  <div>
  <Books />
  <HeroSection/>
</div>
};


export const Books = () => {
    return <div className="container  px-4 py-8 min-h-screen max-w-6xl  ">
    <h1 className="text-2xl font-bold mb-6">Publications</h1>
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-semibold">2023</h2>
        <ol className="list-decimal pl-4">
          <li>
            K. Hemant Kumar Reddy, Rajat Subhra Goswami, Diptendu Sinha Roy -
            "<span className="font-medium italic">An Artificial Intelligence Approach to Enabled Smart Service Towards Futuristic Smart Cities</span>",
            IGI Global ,(2023)
          </li>
        </ol>
      </div>
      <div>
        <h2 className="text-xl font-semibold">2022</h2>
        <ol className="list-decimal pl-4">
          <li>
            Deepak Gupta, Rajat Subhra Goswami, Subhasish Banerjee, M Tanveer, Ram Bilas Pachori -
            "<span className="font-medium italic">Pattern Recognition and Data Analysis with Applications</span>",
            Springer Nature ,Vol.888,(2022)
          </li>
        </ol>
      </div>
      <div>
        <h2 className="text-xl font-semibold">2020</h2>
        <ol className="list-decimal pl-4">
          <li>
            Chukhu Chunka, Subhasish Banerjee, Soumyajit Nag, Rajat Subhra Goswami -
            "<span className="font-medium italic">Micro-Electronics and Telecommunication Engineering: Proceedings of 3rd ICMETE 2019</span>",
            Springer Singapore ,Vol.106,(2020)
          </li>
        </ol>
      </div>
    </div>
    <h1 className="text-2xl font-bold mt-8 mb-4">Book Chapter</h1>
    <ol className="list-decimal pl-4">
      <li>
        Chukhu Chunka, Rajat Subhra Goswami, Subhasish Banerjee -
        "<span className="font-medium italic">A Novel Approach to Generate Symmetric Key in Cryptography Using Genetic Algorithm (GA)</span>",
        Emerging Technologies in Data Mining and Information Security., Springer Link Vol.755, ,(2019)
      </li>
    </ol>
  </div>
}

export default BookSection;