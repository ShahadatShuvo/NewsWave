import Footer from "@/componants/homepage/footer";
import MainCategories from "@/componants/homepage/main-categories";
import Navbar from "@/componants/homepage/navbar";
import SingleNews from "@/componants/single-news";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="my-8">
        {" "}
        <MainCategories />
      </div>
      <SingleNews />
      <Footer />
    </div>
  );
}
