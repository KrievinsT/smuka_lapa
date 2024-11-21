import logo from './logo.png';

function Footer() {
  return (
    <div>
      <footer className="w-full pt-[160px] px-[0] pb-[48px] h-auto flex justify-center bottom-[0] absolute">
        <div><img src={logo} alt="Logo" /></div>
      </footer>
    </div>
  );
}

export default Footer;