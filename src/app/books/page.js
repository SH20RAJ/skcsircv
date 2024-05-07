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
    return <>

<section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
  <div className="container px-4 md:px-6">
    <h2 className="text-3xl font-bold mb-6">Books</h2>
    <div className="card w-full">
      <div className="card-body" style={{ lineHeight: "1.5" }}>
        <p>No Data Available!</p>
      </div>
    </div>
    <h2 className="text-3xl font-bold mt-8 mb-6">Book Chapter</h2>
    <div className="card w-full">
      <div className="card-body leading-8 text-xl" style={{ lineHeight: "3" }}>
        <ol>
          <li>
            <strong>S Ningthoujam, SK Chakraborty</strong> - "Electronic Systems and Intelligent Computing", Springer, Singapore, (2020)
          </li>
          <li>
            <strong>Ashish Singh Parihar, D Prasad, A S Gautam, Swarnendu Kr Chakraborty</strong> - "MIDAS 2020", In book: Proceedings of International Conference on Machine Intelligence and Data Science Applications, Springer, Singapore, (2021)
          </li>
        </ol>
      </div>
    </div>
  </div>
</section>



    </>   
    
    

}

export default BookSection;