import HeaderMain from './HeaderMain';
import HeaderNav from './HeaderNav';
import HeaderTop from './HeaderTop';

const Header = () => {
  return (
    <div>
      {/* HeaderTop akan disembunyikan di mobile (sm) dan muncul di md ke atas */}
      <div className="hidden sm:block">
        <HeaderTop />
      </div>
      <HeaderMain />
      <HeaderNav />
    </div>
  );
};

export default Header;
