import Image from "next/image";
function Header() {
  return (
    <header>
      {/* Top nav */}
      <div>
        <div>
          <Image src="https://links.papareact.com/f90" width="300" height="300"/>
        </div>
      </div>
      {/* Bottom nav */}
      <div></div>
    </header>
  );
}

export default Header;
