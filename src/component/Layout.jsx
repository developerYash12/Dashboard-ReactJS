import "./Layout.css";

export default function Layout() {
  return (
    <div className="container">
      <nav className="btn-list">
        <div className="Layout-List">
          <div className="User-box2">
            <div className="User-profile">
              <img
                style={{ backgroundColor: "white", width: "2rem" }}
                alt="photoURL"
                src="https://cdn1.iconfinder.com/data/icons/construction-3-8/48/122-512.png"
                className="User-profile-logo"
              />
            </div>
            <div className="User-Name">
              <b className="User-Name-heading" style={{ fontSize: "xx-large" }}>
                Dashboard
              </b>
            </div>
          </div>
        </div>

        <div className="dashboard-heading">
          <span className="span-list">
            <span className="span-logo">
              <a className="span-headline">
                <img
                  alt="photoURL"
                  src="https://minimal-kit-react.vercel.app/assets/icons/navbar/ic_analytics.svg"
                  style={{ width: "2rem" }}
                />
                <b>Dashboard</b>
              </a>
            </span>
            <span className="span-logo">
              <a className="span-headline">
                <img
                  style={{ height: "23px", width: "2rem" }}
                  alt="photoURL"
                  src="https://logodix.com/logo/1070679.png"
                />
                <b>Customers</b>
              </a>
            </span>
            <span className="span-logo">
              <a className="span-headline">
                <img
                  alt="photoURL"
                  style={{ width: "2rem" }}
                  src="https://clipground.com/images/product-png-9.png"
                />
                <b>Product</b>
              </a>
            </span>
            <span className="span-logo">
              <a className="span-headline">
                <img
                  alt="photoURL"
                  style={{ height: "29px", width: "2rem" }}
                  src="	https://cdn.onlinewebfonts.com/svg/img_509247.png"
                />
                <b>Income</b>
              </a>
            </span>
            <span className="span-logo">
              <a className="span-headline">
                <img
                  alt="photoURL"
                  style={{ width: "2rem" }}
                  src="	https://icon-library.com/images/product-icon-png/product-icon-png-13.jpg"
                />
                <b>Promote</b>
              </a>
            </span>
            <span className="span-logo">
              <a className="span-headline">
                <img
                  alt="photoURL"
                  style={{ width: "2rem" }}
                  src="https://www.freeiconspng.com/uploads/help-icon-12.png"
                />
                <b>Help</b>
              </a>
            </span>
          </span>
          <div className="Layout-List" style={{ marginTop: "100px" }}>
            <div className="User-box">
              <div className="User-profile">
                <img
                  alt="photoURL"
                  src="https://plus.unsplash.com/premium_photo-1689708721750-8a0e6dc14cee?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2070"
                  className="User-profile-logo"
                />
              </div>
              <div className="User-Name">
                <b className="User-Name-heading">Evano</b>
                <br />

                <small style={{ color: "white" }}>Project Manager</small>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
