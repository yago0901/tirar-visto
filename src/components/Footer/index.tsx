function Footer() {
  return (
    <footer className="flex w-full h-[15vh] ">
      <div className=" w-full flex items-center justify-center mb-4 mt-4 border-t-2 border-solid border-[#8D8D8D]">
        <p className="text-[#232323] mt-4">
          © {new Date().getFullYear()} Tirar Visto. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;