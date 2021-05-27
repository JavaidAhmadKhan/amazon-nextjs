import Image from "next/image";
import Header from "../components/Header";

function checkout() {
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/* Left */}
        <div>
            <Image src='https://links.papareact.com/ikj'/>
        </div>
        {/* Right */}
        <div></div>
      </main>
    </div>
  );
}

export default checkout;
