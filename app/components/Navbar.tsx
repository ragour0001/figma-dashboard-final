export default function Navbar() {
  return (
    <>
      <style>{`
        .navbar {
          display: flex;
          width: 100%;
          height: 100px;
          padding: 18px 40px;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          background: #fff;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
        }

        .nav-left {
          display: flex;
          padding: 0px 16px;
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
        }

        .logo-container {
          display: flex;
          align-items: center;
        }

        .logo-image {
          width: 119px;
          height: 42px;
          aspect-ratio: 17/6;
          object-fit: contain;
          position: relative;
        }

        .nav-right {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .resources-search-field-header {
          display: flex;
          height: 44px;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          gap: 10px;
          flex: 1 0 0;
          position: relative;
          max-width: 40%;
        }

        .resources-search-field-inner-header {
          display: flex;
          padding: 8px 16px 8px 12px;
          align-items: center;
          gap: 12px;
          flex: 1 0 0;
          align-self: stretch;
          border-radius: 8px;
          border: 1px solid #ccd8df;
          background: #fefefe;
          position: relative;
        }

        .resources-search-content-header {
          display: flex;
          align-items: center;
          gap: 12px;
          position: relative;
        }

        .resources-search-icon-header {
          width: 24px;
          height: 24px;
          position: relative;
          color: #222;
        }

        .resources-search-icon-header path {
          stroke: #222 !important;
          stroke-width: 1.2 !important;
          fill: #222 !important;
        }

        .resources-search-input {
          color: #999;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 150%;
          border: none;
          outline: none;
          background: transparent;
          flex: 1;
          min-width: 300px;
        }

        .resources-search-input::placeholder {
          color: #999;
        }

        .nav-icons {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .notification-icon,
        .bell-icon {
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s ease;
        }

        .notification-icon:hover,
        .bell-icon:hover {
          transform: scale(1.1);
        }

        .profile-section {
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          transition: opacity 0.2s ease;
        }

        .profile-section:hover {
          opacity: 0.8;
        }

        .avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #006b5f;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-weight: 600;
          font-size: 16px;
        }

        .profile-info {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .user-details {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .user-name {
          color: #1f1f1f;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 14px;
          font-weight: 600;
          line-height: 20px;
        }

        .user-role {
          color: #666;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 12px;
          font-weight: 400;
          line-height: 16px;
        }

        .dropdown-icon {
          width: 20px;
          height: 20px;
        }

        @media (max-width: 768px) {
          .navbar {
            padding: 12px 20px;
            height: 80px;
          }

          .nav-left {
            padding: 0;
          }

          .resources-search-field-header {
            display: none;
          }

          .nav-icons {
            gap: 12px;
          }

          .profile-info {
            display: none;
          }
        }
      `}</style>
      <nav className="navbar">
      <div className="nav-left">
        <div className="logo-container">
          <img
            layer-name="image 623"
            style={{
              width: "119px",
              height: "42px",
              aspectRatio: "17/6",
              position: "relative",
            }}
            src="/assets/images/logo.png"
            alt="Refill Health Logo"
            className="logo-image"
          />
        </div>
      </div>

      {/* <div className="nav-center">
        <div className="search-container">
          <div className="search-bar">
            <div className="search-content">
              <span className="search-placeholder">
                What are you looking for?
              </span>
            </div>
            <div className="search-icon-container">
              <svg
                className="search-icon"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M16.6 18L10.3 11.7C9.8 12.1 9.225 12.4167 8.575 12.65C7.925 12.8833 7.23333 13 6.5 13C4.68333 13 3.14583 12.3708 1.8875 11.1125C0.629167 9.85417 0 8.31667 0 6.5C0 4.68333 0.629167 3.14583 1.8875 1.8875C3.14583 0.629167 4.68333 0 6.5 0C8.31667 0 9.85417 0.629167 11.1125 1.8875C12.3708 3.14583 13 4.68333 13 6.5C13 7.23333 12.8833 7.925 12.65 8.575C12.4167 9.225 12.1 9.8 11.7 10.3L18 16.6L16.6 18ZM6.5 11C7.75 11 8.8125 10.5625 9.6875 9.6875C10.5625 8.8125 11 7.75 11 6.5C11 5.25 10.5625 4.1875 9.6875 3.3125C8.8125 2.4375 7.75 2 6.5 2C5.25 2 4.1875 2.4375 3.3125 3.3125C2.4375 4.1875 2 5.25 2 6.5C2 7.75 2.4375 8.8125 3.3125 9.6875C4.1875 10.5625 5.25 11 6.5 11Z"
                  fill="#3F4947"
                />
              </svg>
            </div>
          </div>
        </div>
      </div> */}

      <div className="nav-right">
        <div className="resources-search-field-header">
          <div className="resources-search-field-inner-header">
            <div className="resources-search-content-header">
              <svg
                className="resources-search-icon-header"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.0998 5.04996C7.62052 5.04996 4.79996 7.87052 4.79996 11.3498C4.79996 14.8292 7.62052 17.6497 11.0998 17.6497C14.5792 17.6497 17.3997 14.8292 17.3997 11.3498C17.3997 7.87052 14.5792 5.04996 11.0998 5.04996ZM3 11.3498C3 6.87642 6.62642 3.25 11.0998 3.25C15.5733 3.25 19.1997 6.87642 19.1997 11.3498C19.1997 15.8233 15.5733 19.4497 11.0998 19.4497C6.62642 19.4497 3 15.8233 3 11.3498Z"
                  fill="#CCCCCC"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.5488 15.7988C15.9002 15.4473 16.4701 15.4473 16.8215 15.7988L20.7364 19.7137C21.0879 20.0651 21.0879 20.635 20.7364 20.9864C20.385 21.3379 19.8151 21.3379 19.4637 20.9864L15.5488 17.0715C15.1973 16.7201 15.1973 16.1502 15.5488 15.7988Z"
                  fill="#CCCCCC"
                />
              </svg>
              <input
                type="text"
                placeholder="What are you looking for?"
                className="resources-search-input"
              />
            </div>
          </div>
        </div>
        <div className="nav-icons">
          <div className="notification-icon">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
              <circle cx="15" cy="15" r="15" fill="#F8FCFF" />
              <path
                d="M15.0004 29.6004C23.0637 29.6004 29.6004 23.0637 29.6004 15.0004C29.6004 6.93703 23.0637 0.400391 15.0004 0.400391C6.93703 0.400391 0.400391 6.93703 0.400391 15.0004C0.400391 23.0637 6.93703 29.6004 15.0004 29.6004Z"
                stroke="#9FF2E2"
                strokeWidth="0.8"
              />
              <path
                d="M17.8217 7.28613H12.1787C11.0741 7.28613 10.1787 8.18156 10.1787 9.28613V20.7151C10.1787 21.8197 11.0741 22.7151 12.1787 22.7151H17.8217C18.9263 22.7151 19.8217 21.8197 19.8217 20.7151V9.28613C19.8217 8.18156 18.9263 7.28613 17.8217 7.28613Z"
                stroke="#006B5F"
              />
              <path d="M16.4531 18.8145H14.1621" stroke="#006B5F" />
            </svg>
          </div>

          <div className="bell-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.13275 4.67775C9.207 3.6035 10.664 3 12.1832 3C13.7024 3 15.1594 3.6035 16.2336 4.67775C17.3079 5.75199 17.9114 7.20898 17.9114 8.7282C17.9114 11.4717 18.4982 13.1754 19.0389 14.1668C19.3105 14.6646 19.5748 14.9911 19.7585 15.185C19.8505 15.2822 19.9229 15.3466 19.9664 15.3829C19.9882 15.401 20.0028 15.4122 20.0091 15.4168C20.0101 15.4176 20.0109 15.4181 20.0114 15.4186C20.3048 15.6201 20.4346 15.9887 20.3312 16.3302C20.2267 16.6753 19.9086 16.9113 19.548 16.9113H4.81838C4.45777 16.9113 4.13967 16.6753 4.03518 16.3302C3.93179 15.9887 4.0616 15.6201 4.35496 15.4186C4.35553 15.4181 4.35631 15.4176 4.3573 15.4168C4.3636 15.4122 4.37821 15.401 4.39999 15.3829C4.44354 15.3466 4.51586 15.2822 4.6079 15.185C4.79156 14.9911 5.05594 14.6646 5.32745 14.1668C5.86822 13.1754 6.455 11.4717 6.455 8.7282C6.455 7.20898 7.05851 5.75199 8.13275 4.67775Z"
                fill="#006B5F"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.3571 18.6585C10.748 18.4317 11.2487 18.5648 11.4755 18.9557C11.5474 19.0797 11.6507 19.1826 11.7749 19.2542C11.8991 19.3257 12.04 19.3634 12.1833 19.3634C12.3267 19.3634 12.4676 19.3257 12.5918 19.2542C12.716 19.1826 12.8193 19.0797 12.8912 18.9557C13.118 18.5648 13.6187 18.4317 14.0096 18.6585C14.4006 18.8852 14.5336 19.386 14.3069 19.7769C14.0911 20.1489 13.7813 20.4577 13.4086 20.6724C13.036 20.887 12.6134 21 12.1833 21C11.7533 21 11.3307 20.887 10.9581 20.6724C10.5854 20.4577 10.2756 20.1489 10.0598 19.7769C9.83305 19.386 9.96613 18.8852 10.3571 18.6585Z"
                fill="#006B5F"
              />
            </svg>
          </div>

          <div className="profile-section">
          <div className="avatar">
                <span>J</span>
              </div>
            <div className="profile-info">              
              <div className="user-details">
                <div className="user-name">Johnathon Doe</div>
                <div className="user-role">Admin</div>
              </div>
            </div>
            <svg
              className="dropdown-icon"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.20921 7.70921C5.48816 7.43026 5.94042 7.43026 6.21936 7.70921L10 11.4898L13.7806 7.70921C14.0596 7.43026 14.5118 7.43026 14.7908 7.70921C15.0697 7.98816 15.0697 8.44042 14.7908 8.71936L10.5051 13.0051C10.2261 13.284 9.77387 13.284 9.49492 13.0051L5.20921 8.71936C4.93026 8.44042 4.93026 7.98816 5.20921 7.70921Z"
                fill="#006B5F"
              />
            </svg>
          </div>
        </div>
              </div>
      </nav>
    </>
  );
}
