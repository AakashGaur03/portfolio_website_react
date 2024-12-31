const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };
  return (
    <>
      <div className="mainFooter">
        <p className="footerHeading p-0 m-0">Aakash Gaur</p>
        <p className="p-0 m-0">&copy; {getCurrentYear()} copyright all right reserved</p>
      </div>
    </>
  );
};
export default Footer;
