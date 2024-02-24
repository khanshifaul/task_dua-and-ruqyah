import Logo from "./logo";
import NavBtn from "./nav-btn";
import SupportBtn from "./support-btn";

const NavData = [
  {
    iconName: "/assets/home.svg",
    url: "/",
    label: "Home",
  },
  {
    iconName: "/assets/font.svg",
    url: "/duas",
    label: "Font",
  },
  {
    iconName: "/assets/memorize.svg",
    url: "/duas",
    label: "Memorize",
  },
  {
    iconName: "/assets/bookmark.svg",
    url: "/duas",
    label: "Bookmark",
  },
  {
    iconName: "/assets/ruqyah.svg",
    url: "/duas",
    label: "Ruqyah",
  },
  {
    iconName: "/assets/dua-info.svg",
    url: "/duas",
    label: "Dua Info",
    hidden: true,
  },
  {
    iconName: "/assets/books.svg",
    url: "/duas",
    label: "Books",
    hidden: true,
  },
];
const HwNavbar = () => {
  return (
    <div className="relative">
      {/* Desktop Navbar */}
      <div className="rounded-2xl bg-background p-4 hidden lg:flex flex-col gap-5 min-w-fit h-[90vh] scroll-smooth focus:scroll-auto default:overflow-y-scroll-visible overflow-y-scroll scrollbar-thin shadow">
        <Logo />
        <nav className="flex flex-col items-start md:items-center gap-5">
          {NavData.map((navData) => (
            <div key={navData.url}>
              {!navData.hidden && (
                <NavBtn
                  iconName={navData.iconName}
                  url={navData.url}
                  label={navData.label}
                />
              )}
            </div>
          ))}
        </nav>
        <SupportBtn />
      </div>
      {/* Mobile Navbar */}
      <div className="block lg:hidden w-full fixed left-0 bottom-0 p-4 rounded-t-3xl bg-background shadow-top">
        <nav className="flex justify-center gap-2">
          {NavData.map((navData) => (
            <NavBtn
              key={navData.url}
              iconName={navData.iconName}
              url={navData.url}
              label={navData.label}
              hidden={navData.hidden}
            />
          ))}
        </nav>
      </div>
    </div>
  );
};

export default HwNavbar;
