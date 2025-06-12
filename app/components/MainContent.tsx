export default function MainContent() {
  return (
    <main className="main-content">
      {/* Breadcrumb and Welcome */}
      <div className="welcome-section">
        <div className="breadcrumb">
          <span className="breadcrumb-item">Global Dashboard</span>
          <svg
            className="breadcrumb-arrow"
            width="6"
            height="10"
            viewBox="0 0 6 10"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.04543 9.31171C0.794381 9.06066 0.794381 8.65363 1.04543 8.40257L4.44801 5L1.04543 1.59743C0.794381 1.34638 0.794381 0.939341 1.04543 0.68829C1.29648 0.437238 1.70352 0.437238 1.95457 0.68829L5.81171 4.54543C6.06276 4.79648 6.06276 5.20352 5.81171 5.45457L1.95457 9.31171C1.70352 9.56276 1.29648 9.56276 1.04543 9.31171Z"
              fill="#999999"
            />
          </svg>
          <span className="breadcrumb-item active">Home</span>
        </div>
        <h1 className="welcome-title">
          Good Morning, <span className="name">Shalini</span>
        </h1>
      </div>

      {/* Getting Started Card - Figma Design */}
      <div
        style={{
          display: "flex",
          height: "306px",
          padding: "18px 16px",
          marginBottom: "20px",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "12px",
          alignSelf: "stretch",
          borderRadius: "16px",
          border: "1px solid #CCC",
          background: "#F7F9FA",
          position: "relative",
        }}
      >
        {/* Header with Rocket Icon and Text */}
        <div
          style={{
            display: "flex",
            height: "81px",
            padding: "16px",
            alignItems: "center",
            gap: "13px",
            flexShrink: 0,
            alignSelf: "stretch",
            borderBottom: "1px solid #EFEFEF",
            position: "relative",
          }}
        >
          {/* Rocket Icon - Figma Design */}
          <svg
            width="52"
            height="53"
            viewBox="0 0 52 53"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              width: "52px",
              height: "52px",
              position: "relative",
            }}
          >
            <mask
              id="mask0_607_14729"
              style={{ maskType: "luminance" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="52"
              height="53"
            >
              <path d="M0 0.5H52V52.5H0V0.5Z" fill="white" />
            </mask>
            <g mask="url(#mask0_607_14729)">
              <path
                d="M17.1862 22.796C19.1362 22.0778 21.0325 23.9741 20.3143 25.9258L16.0617 37.486C15.9676 37.7421 15.8105 37.9704 15.6049 38.1499C15.3993 38.3293 15.1519 38.4541 14.8854 38.5127C14.6189 38.5713 14.3419 38.5618 14.08 38.4852C13.8182 38.4086 13.5798 38.2673 13.3869 38.0743L5.03766 29.725C4.84502 29.5321 4.70401 29.2938 4.62762 29.0322C4.55122 28.7705 4.54188 28.4938 4.60047 28.2275C4.65906 27.9613 4.78369 27.714 4.96289 27.5086C5.14209 27.3032 5.37009 27.1461 5.62591 27.0519L17.1862 22.796Z"
                fill="url(#paint0_linear_607_14729)"
              />
              <path
                d="M17.1862 22.796C19.1362 22.0778 21.0325 23.9741 20.3143 25.9258L16.0617 37.486C15.9676 37.7421 15.8105 37.9704 15.6049 38.1499C15.3993 38.3293 15.1519 38.4541 14.8854 38.5127C14.6189 38.5713 14.3419 38.5618 14.08 38.4852C13.8182 38.4086 13.5798 38.2673 13.3869 38.0743L5.03766 29.725C4.84502 29.5321 4.70401 29.2938 4.62762 29.0322C4.55122 28.7705 4.54188 28.4938 4.60047 28.2275C4.65906 27.9613 4.78369 27.714 4.96289 27.5086C5.14209 27.3032 5.37009 27.1461 5.62591 27.0519L17.1862 22.796Z"
                fill="url(#paint1_radial_607_14729)"
              />
              <path
                d="M17.1862 22.796C19.1362 22.0778 21.0325 23.9741 20.3143 25.9258L16.0617 37.486C15.9676 37.7421 15.8105 37.9704 15.6049 38.1499C15.3993 38.3293 15.1519 38.4541 14.8854 38.5127C14.6189 38.5713 14.3419 38.5618 14.08 38.4852C13.8182 38.4086 13.5798 38.2673 13.3869 38.0743L5.03766 29.725C4.84502 29.5321 4.70401 29.2938 4.62762 29.0322C4.55122 28.7705 4.54188 28.4938 4.60047 28.2275C4.65906 27.9613 4.78369 27.714 4.96289 27.5086C5.14209 27.3032 5.37009 27.1461 5.62591 27.0519L17.1862 22.796Z"
                fill="url(#paint2_linear_607_14729)"
              />
              <path
                d="M26.9378 32.546C28.8878 31.8278 30.7842 33.7241 30.0659 35.6758L25.81 47.236C25.7158 47.4918 25.5588 47.7198 25.3533 47.899C25.1479 48.0782 24.9006 48.2029 24.6344 48.2614C24.3682 48.32 24.0914 48.3107 23.8298 48.2343C23.5681 48.1579 23.3298 48.0169 23.1369 47.8243L14.7877 39.475C14.595 39.2821 14.454 39.0438 14.3776 38.7822C14.3012 38.5205 14.2919 38.2438 14.3505 37.9775C14.4091 37.7113 14.5337 37.464 14.7129 37.2586C14.8921 37.0532 15.1201 36.8961 15.3759 36.8019L26.9378 32.546Z"
                fill="url(#paint3_linear_607_14729)"
              />
              <path
                d="M26.9378 32.546C28.8878 31.8278 30.7842 33.7241 30.0659 35.6758L25.81 47.236C25.7158 47.4918 25.5588 47.7198 25.3533 47.899C25.1479 48.0782 24.9006 48.2029 24.6344 48.2614C24.3682 48.32 24.0914 48.3107 23.8298 48.2343C23.5681 48.1579 23.3298 48.0169 23.1369 47.8243L14.7877 39.475C14.595 39.2821 14.454 39.0438 14.3776 38.7822C14.3012 38.5205 14.2919 38.2438 14.3505 37.9775C14.4091 37.7113 14.5337 37.464 14.7129 37.2586C14.8921 37.0532 15.1201 36.8961 15.3759 36.8019L26.9378 32.546Z"
                fill="url(#paint4_radial_607_14729)"
              />
              <path
                d="M26.9378 32.546C28.8878 31.8278 30.7842 33.7241 30.0659 35.6758L25.81 47.236C25.7158 47.4918 25.5588 47.7198 25.3533 47.899C25.1479 48.0782 24.9006 48.2029 24.6344 48.2614C24.3682 48.32 24.0914 48.3107 23.8298 48.2343C23.5681 48.1579 23.3298 48.0169 23.1369 47.8243L14.7877 39.475C14.595 39.2821 14.454 39.0438 14.3776 38.7822C14.3012 38.5205 14.2919 38.2438 14.3505 37.9775C14.4091 37.7113 14.5337 37.464 14.7129 37.2586C14.8921 37.0532 15.1201 36.8961 15.3759 36.8019L26.9378 32.546Z"
                fill="url(#paint5_radial_607_14729)"
              />
              <g filter="url(#filter0_i_607_14729)">
                <path
                  d="M36.398 6.29061C36.4424 6.27297 36.4911 6.26881 36.5379 6.27863C36.5847 6.28846 36.6276 6.31184 36.6612 6.34586L46.2243 15.9821C46.2581 16.0159 46.2812 16.0589 46.2907 16.1057C46.3002 16.1525 46.2958 16.2011 46.278 16.2454C43.9867 21.8679 40.8293 27.8479 36.6027 32.0761C32.485 36.1939 25.5202 39.7022 19.2315 42.2827L10.3086 33.3582C12.8891 27.0695 16.3975 20.1064 20.5152 15.9886C24.7565 11.7474 30.7592 8.58348 36.3963 6.29223"
                  fill="url(#paint6_linear_607_14729)"
                />
                <path
                  d="M36.398 6.29061C36.4424 6.27297 36.4911 6.26881 36.5379 6.27863C36.5847 6.28846 36.6276 6.31184 36.6612 6.34586L46.2243 15.9821C46.2581 16.0159 46.2812 16.0589 46.2907 16.1057C46.3002 16.1525 46.2958 16.2011 46.278 16.2454C43.9867 21.8679 40.8293 27.8479 36.6027 32.0761C32.485 36.1939 25.5202 39.7022 19.2315 42.2827L10.3086 33.3582C12.8891 27.0695 16.3975 20.1064 20.5152 15.9886C24.7565 11.7474 30.7592 8.58348 36.3963 6.29223"
                  fill="url(#paint7_radial_607_14729)"
                />
              </g>
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_607_14729"
                x1="5.03766"
                y1="29.725"
                x2="20.3143"
                y2="25.9258"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FF6B35" />
                <stop offset="1" stopColor="#F7931E" />
              </linearGradient>
              <radialGradient
                id="paint1_radial_607_14729"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(12.8 30.4) rotate(-45) scale(12.7279)"
              >
                <stop stopColor="#FF8A65" />
                <stop offset="1" stopColor="#FF5722" />
              </radialGradient>
              <linearGradient
                id="paint2_linear_607_14729"
                x1="13.387"
                y1="38.074"
                x2="13.387"
                y2="22.796"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FFE0B2" />
                <stop offset="1" stopColor="#FFCC02" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_607_14729"
                x1="14.7877"
                y1="39.475"
                x2="30.0659"
                y2="35.6758"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FF6B35" />
                <stop offset="1" stopColor="#F7931E" />
              </linearGradient>
              <radialGradient
                id="paint4_radial_607_14729"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(22.55 40.15) rotate(-45) scale(12.7279)"
              >
                <stop stopColor="#FF8A65" />
                <stop offset="1" stopColor="#FF5722" />
              </radialGradient>
              <radialGradient
                id="paint5_radial_607_14729"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(23.137 47.824) rotate(-45) scale(12.7279)"
              >
                <stop stopColor="#FFE0B2" />
                <stop offset="1" stopColor="#FFCC02" />
              </radialGradient>
              <linearGradient
                id="paint6_linear_607_14729"
                x1="28.266"
                y1="24.32"
                x2="28.266"
                y2="6.29"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#1976D2" />
                <stop offset="1" stopColor="#42A5F5" />
              </linearGradient>
              <radialGradient
                id="paint7_radial_607_14729"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(36.6 6.3) rotate(135) scale(25.456)"
              >
                <stop stopColor="#64B5F6" />
                <stop offset="1" stopColor="#1565C0" />
              </radialGradient>
              <filter
                id="filter0_i_607_14729"
                x="10.3086"
                y="6.2785"
                width="35.9157"
                height="36.004"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="0.0121" />
                <feGaussianBlur stdDeviation="0.00605" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect1_innerShadow_607_14729"
                />
              </filter>
            </defs>
          </svg>

          {/* Header Text */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "4px",
              flex: "1 0 0",
            }}
          >
            <h3
              style={{
                color: "#334155",
                fontFamily:
                  "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                fontSize: "20px",
                fontWeight: "600",
                lineHeight: "1.4",
                margin: "0",
              }}
            >
              Let's get you started
            </h3>
            <p
              style={{
                color: "#64748B",
                fontFamily:
                  "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                fontSize: "14px",
                fontWeight: "400",
                lineHeight: "1.4",
                margin: "0",
              }}
            >
              Complete these steps to start Your Wellness Journey
            </p>
          </div>
        </div>

        {/* Progress Section */}
        <div
          style={{
            display: "flex",
            height: "177px",
            padding: "16px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "21px",
            flexShrink: 0,
            alignSelf: "stretch",
            borderRadius: "8px",
            border: "1px solid #E94545",
            background: "#FFF6F6",
            position: "relative",
          }}
        >
          {/* Icon and Progress Text */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              alignSelf: "stretch",
              position: "relative",
            }}
          >
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                width: "24px",
                height: "24px",
                fill: "#006B5F",
                position: "relative",
              }}
            >
              <path
                d="M12 0.5C12.4504 0.5 12.8944 0.5244 13.332 0.5732C13.4886 0.590535 13.6403 0.638552 13.7784 0.714511C13.9165 0.790469 14.0383 0.892882 14.1368 1.0159C14.2353 1.13892 14.3086 1.28014 14.3525 1.43149C14.3964 1.58284 14.4101 1.74136 14.3928 1.898C14.3755 2.05464 14.3274 2.20633 14.2515 2.34442C14.1755 2.4825 14.0731 2.60427 13.9501 2.70278C13.8271 2.80128 13.6859 2.87459 13.5345 2.91852C13.3832 2.96245 13.2246 2.97613 13.068 2.9588C11.0905 2.73757 9.09303 3.13633 7.35201 4.09991C5.61099 5.06349 4.21243 6.54427 3.34976 8.33744C2.48709 10.1306 2.20296 12.1475 2.53667 14.1092C2.87038 16.0709 3.80543 17.8805 5.21249 19.2875C6.61955 20.6946 8.42907 21.6296 10.3908 21.9633C12.3525 22.297 14.3694 22.0129 16.1626 21.1502C17.9557 20.2876 19.4365 18.889 20.4001 17.148C21.3637 15.407 21.7624 13.4095 21.5412 11.432C21.5239 11.2754 21.5376 11.1168 21.5815 10.9655C21.6254 10.8141 21.6987 10.6729 21.7972 10.5499C21.9962 10.3015 22.2857 10.1422 22.602 10.1072C22.9184 10.0722 23.2357 10.1643 23.4841 10.3632C23.6071 10.4617 23.7095 10.5835 23.7855 10.7216C23.8615 10.8597 23.9095 11.0114 23.9268 11.168C23.9748 11.6056 23.9992 12.0496 24 12.5C24 19.1276 18.6276 24.5 12 24.5C5.3724 24.5 0 19.1276 0 12.5C0 5.8724 5.3724 0.5 12 0.5ZM11.9616 7.5524C12.0407 7.86047 11.9942 8.18733 11.8325 8.46117C11.6707 8.73501 11.4068 8.93342 11.0988 9.0128C10.2526 9.23445 9.51604 9.7564 9.02645 10.4813C8.53685 11.2061 8.3277 12.0843 8.43804 12.952C8.54838 13.8198 8.97066 14.6177 9.62609 15.1969C10.2815 15.7762 11.1253 16.0972 12 16.1C12.7984 16.1003 13.5742 15.8353 14.2055 15.3465C14.8367 14.8578 15.2876 14.173 15.4872 13.4C15.5723 13.098 15.7722 12.8414 16.0442 12.685C16.3162 12.5287 16.6386 12.485 16.9423 12.5635C17.2461 12.6419 17.507 12.8362 17.6693 13.1047C17.8316 13.3732 17.8822 13.6946 17.8104 14C17.4423 15.4111 16.573 16.6399 15.365 17.4569C14.157 18.2739 12.6928 18.6231 11.2461 18.4394C9.79939 18.2557 8.46904 17.5515 7.50361 16.4585C6.53817 15.3655 6.00368 13.9583 6 12.5C5.99979 11.1697 6.44172 9.87699 7.2563 8.82521C8.07088 7.77342 9.21191 7.02218 10.5 6.6896C10.6526 6.65026 10.8115 6.64138 10.9676 6.66345C11.1236 6.68552 11.2738 6.73812 11.4095 6.81824C11.5452 6.89836 11.6639 7.00444 11.7586 7.1304C11.8533 7.25637 11.9223 7.39977 11.9616 7.5524ZM19.8048 0.6524C20.0238 0.743215 20.2111 0.896884 20.3428 1.09401C20.4746 1.29114 20.545 1.52289 20.5452 1.76C20.5452 2.97216 21.5278 3.956 22.74 3.956C22.9773 3.95605 23.2093 4.02646 23.4066 4.15832C23.6038 4.29018 23.7576 4.47757 23.8484 4.69681C23.9392 4.91605 23.963 5.15729 23.9167 5.39004C23.8704 5.62278 23.7562 5.83658 23.5884 6.0044L19.344 10.244C19.119 10.4691 18.8138 10.5955 18.4956 10.5956C16.6416 10.5956 14.8637 11.3323 13.5531 12.6437L13.4064 12.7904C13.1812 13.0156 12.8758 13.1421 12.5574 13.1421C12.239 13.1421 11.9336 13.0156 11.7084 12.7904C11.4832 12.5652 11.3567 12.2598 11.3567 11.9414C11.3567 11.623 11.4832 11.3176 11.7084 11.0924L11.8537 10.9472C13.1659 9.63649 13.9032 7.85788 13.9032 6.0032C13.9033 5.68497 14.0297 5.37979 14.2548 5.1548L18.4968 0.9116C18.6646 0.743681 18.8785 0.62931 19.1113 0.582958C19.3441 0.536605 19.5855 0.560354 19.8048 0.6512M18.1452 5.1548C18.1452 4.97069 17.9225 4.87855 17.7924 5.00882L16.5725 6.23032C16.4001 6.40301 16.3032 6.63708 16.3032 6.88114V6.99682C16.3032 7.65955 16.8405 8.1968 17.5032 8.1968H17.6187C17.8628 8.1968 18.097 8.09985 18.2697 7.92726L19.4909 6.70682C19.6209 6.57696 19.5289 6.3548 19.3452 6.3548C19.0269 6.3548 18.7217 6.22837 18.4967 6.00333C18.2716 5.77828 18.1452 5.47306 18.1452 5.1548Z"
                fill="#006B5F"
              />
            </svg>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "9px",
                flex: "1 0 0",
                position: "relative",
              }}
            >
              <div
                style={{
                  alignSelf: "stretch",
                  color: "#006B5F",
                  fontFamily:
                    "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                  fontSize: "16px",
                  fontWeight: "600",
                  lineHeight: "140%",
                  position: "relative",
                }}
              >
                You're just getting started – Let's kick off your Wellness
                Journey!
              </div>

              {/* Progress Indicator */}
              <div
                style={{
                  display: "flex",
                  height: "16px",
                  paddingRight: "252px",
                  alignItems: "center",
                  gap: "8px",
                  alignSelf: "stretch",
                  borderRadius: "64px",
                  background: "#E0E0E0",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "16px",
                    borderRadius: "8px",
                    background: "#DA1E28",
                    position: "relative",
                  }}
                ></div>
                <div
                  style={{
                    position: "absolute",
                    left: "31px",
                    top: "6px",
                    width: "4px",
                    height: "4px",
                    borderRadius: "50%",
                    background: "#EDF5FF",
                  }}
                ></div>
                <div
                  style={{
                    position: "absolute",
                    left: "171px",
                    top: "6px",
                    width: "4px",
                    height: "4px",
                    borderRadius: "50%",
                    background: "#A8A8A8",
                  }}
                ></div>
                <div
                  style={{
                    position: "absolute",
                    left: "337px",
                    top: "6px",
                    width: "4px",
                    height: "4px",
                    borderRadius: "50%",
                    background: "#A8A8A8",
                  }}
                ></div>
                <div
                  style={{
                    position: "absolute",
                    left: "580px",
                    top: "6px",
                    width: "4px",
                    height: "4px",
                    borderRadius: "50%",
                    background: "#A8A8A8",
                  }}
                ></div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div
            style={{
              width: "287.002px",
              height: "1px",
              background: "rgba(255, 255, 255, 0.24)",
              position: "relative",
            }}
          ></div>

          {/* Bottom Actions */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              alignSelf: "stretch",
              position: "relative",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "1px",
                position: "relative",
              }}
            >
              <div
                style={{
                  color: "#006B5F",
                  fontFamily:
                    "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                  fontSize: "16px",
                  fontWeight: "600",
                  lineHeight: "140%",
                  position: "relative",
                }}
              >
                Learn More
              </div>
            </div>

            {/* Complete Assessment Button */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "12px",
                  background: "#EFF5F3",
                  boxShadow:
                    "0px 1px 2px 0px rgba(0, 0, 0, 0.30), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    padding: "10px 16px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "8px",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      color: "#006A63",
                      fontFamily:
                        "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                      fontSize: "14px",
                      fontWeight: "500",
                      lineHeight: "20px",
                      letterSpacing: "0.1px",
                      position: "relative",
                    }}
                  >
                    Complete your Assessment
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Purple Section - Still Unsure */}
      <div className="purple-section">
        <div className="purple-content">
          <div className="purple-text">
            <h2>Still unsure about what you need?</h2>
            <p>
              Take 3 small steps to help us match you with the right care plan
              and support.
            </p>

            <div className="steps-container">
              <div className="steps-visual">
                <div className="step-indicator active">
                  <div className="step-circle filled"></div>
                </div>
                <div className="step-line"></div>
                <div className="step-indicator">
                  <div className="step-circle"></div>
                </div>
                <div className="step-line"></div>
                <div className="step-indicator">
                  <div className="step-circle"></div>
                </div>
              </div>

              <div className="steps-text">
                <div className="step-item">Set 1–3 wellness goals</div>
                <div className="step-item">Take a short assessment</div>
                <div className="step-item">
                  Tell us your therapist preferences
                </div>
              </div>
            </div>
          </div>

          <button className="discover-btn">
            <span>Discover Yourself</span>
            <div className="arrow-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="10" fill="white" />
                <path
                  d="M10.6669 10.0001L7.55566 6.8889L8.44457 6L12.4446 10.0001L8.44457 14.0001L7.55566 13.1112L10.6669 10.0001Z"
                  fill="black"
                />
              </svg>
            </div>
          </button>
        </div>

        <div className="purple-image">
          <div className="illustration-placeholder"></div>
        </div>
      </div>

      {/* My Goals Section */}
      <div className="goals-section">
        <div className="section-header">
          <div className="tabs">
            <div className="tab">Recommendation</div>
            <div className="tab-separator">|</div>
            <div className="tab">My Progress</div>
            <div className="tab-separator">|</div>
            <div className="tab active">My Goals</div>
          </div>
        </div>

        <div className="goals-content">
          <div className="goals-header">
            <h3>Select up to 3 goals</h3>
            <div className="goals-actions">
              <div className="search-box">
                <svg
                  className="search-icon"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.0998 5.29996C7.62052 5.29996 4.79996 8.12052 4.79996 11.5998C4.79996 15.0792 7.62052 17.8997 11.0998 17.8997C14.5792 17.8997 17.3997 15.0792 17.3997 11.5998C17.3997 8.12052 14.5792 5.29996 11.0998 5.29996ZM3 11.5998C3 7.12642 6.62642 3.5 11.0998 3.5C15.5733 3.5 19.1997 7.12642 19.1997 11.5998C19.1997 16.0733 15.5733 19.6997 11.0998 19.6997C6.62642 19.6997 3 16.0733 3 11.5998Z"
                    fill="#CCCCCC"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.5488 16.0488C15.9002 15.6973 16.4701 15.6973 16.8215 16.0488L20.7364 19.9637C21.0879 20.3151 21.0879 20.885 20.7364 21.2364C20.385 21.5879 19.8151 21.5879 19.4637 21.2364L15.5488 17.3215C15.1973 16.9701 15.1973 16.4002 15.5488 16.0488Z"
                    fill="#CCCCCC"
                  />
                </svg>
                <span>Search</span>
              </div>
              <button className="done-btn">Done</button>
            </div>
          </div>

          <div className="goals-grid">
            <div className="goal-chip">
              <div className="goal-emoji">😌</div>
              <span>Manage stress</span>
            </div>
            <div className="goal-chip">
              <div className="goal-emoji">😊</div>
              <span>Boost mood & feel positive</span>
            </div>
            <div className="goal-chip">
              <div className="goal-emoji">💤</div>
              <span>Sleep better</span>
            </div>
            <div className="goal-chip">
              <div className="goal-emoji">🔋</div>
              <span>Prevent burnout</span>
            </div>
            <div className="goal-chip">
              <div className="goal-emoji">😟</div>
              <span>Manage anxiety</span>
            </div>
            <div className="goal-chip">
              <div className="goal-emoji">🎯</div>
              <span>Improve focus & productivity</span>
            </div>
            <div className="goal-chip">
              <div className="goal-emoji">🤝</div>
              <span>Strengthen personal or work relationships</span>
            </div>
            <div className="goal-chip">
              <div className="goal-emoji">💪</div>
              <span>Build self-confidence</span>
            </div>
            <div className="goal-chip">
              <div className="goal-emoji">⚖️</div>
              <span>Improve work-life balance</span>
            </div>
            <div className="goal-chip">
              <div className="goal-emoji">🧘</div>
              <span>Feel calm</span>
            </div>
            <div className="goal-chip more">
              <svg width="17" height="5" viewBox="0 0 17 5" fill="none">
                <path
                  d="M2.06641 4.5C1.51641 4.5 1.04557 4.30417 0.653906 3.9125C0.26224 3.52083 0.0664062 3.05 0.0664062 2.5C0.0664062 1.95 0.26224 1.47917 0.653906 1.0875C1.04557 0.695833 1.51641 0.5 2.06641 0.5C2.61641 0.5 3.08724 0.695833 3.47891 1.0875C3.87057 1.47917 4.06641 1.95 4.06641 2.5C4.06641 3.05 3.87057 3.52083 3.47891 3.9125C3.08724 4.30417 2.61641 4.5 2.06641 4.5ZM8.06641 4.5C7.51641 4.5 7.04557 4.30417 6.65391 3.9125C6.26224 3.52083 6.06641 3.05 6.06641 2.5C6.06641 1.95 6.26224 1.47917 6.65391 1.0875C7.04557 0.695833 7.51641 0.5 8.06641 0.5C8.61641 0.5 9.08724 0.695833 9.47891 1.0875C9.87057 1.47917 10.0664 1.95 10.0664 2.5C10.0664 3.05 9.87057 3.52083 9.47891 3.9125C9.08724 4.30417 8.61641 4.5 8.06641 4.5ZM14.0664 4.5C13.5164 4.5 13.0456 4.30417 12.6539 3.9125C12.2622 3.52083 12.0664 3.05 12.0664 2.5C12.0664 1.95 12.2622 1.47917 12.6539 1.0875C13.0456 0.695833 13.5164 0.5 14.0664 0.5C14.6164 0.5 15.0872 0.695833 15.4789 1.0875C15.8706 1.47917 16.0664 1.95 16.0664 2.5C16.0664 3.05 15.8706 3.52083 15.4789 3.9125C15.0872 4.30417 14.6164 4.5 14.0664 4.5Z"
                  fill="#00201C"
                />
              </svg>
              <span>More</span>
            </div>
          </div>

          <div className="assessment-warning">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.8429 4.30333C11.1961 4.10447 11.5947 4 12 4C12.4053 4 12.8039 4.10447 13.1571 4.30333C13.5103 4.5022 13.8063 4.78874 14.0165 5.13531L14.0188 5.13904L20.684 16.2662C20.89 16.6228 20.9988 17.0272 21 17.439C21.0011 17.8508 20.8944 18.2558 20.6905 18.6136C20.4866 18.9713 20.1925 19.2695 19.8376 19.4783C19.4827 19.6872 19.0792 19.7994 18.6674 19.804L18.6588 19.8041L5.33257 19.804C4.92077 19.7995 4.51734 19.6872 4.16241 19.4783C3.80748 19.2695 3.51342 18.9713 3.30949 18.6136C3.10555 18.2558 2.99886 17.8508 3.00001 17.439C3.00116 17.0272 3.11013 16.6229 3.31606 16.2662L3.32236 16.2553L9.98348 5.1353C10.1937 4.78873 10.4897 4.5022 10.8429 4.30333Z"
                fill="#E94545"
              />
            </svg>
            <span>Kindly Take the Assessment to track your process</span>
            <svg
              className="close-icon"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M15 5L5 15"
                stroke="black"
                strokeOpacity="0.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5 5L15 15"
                stroke="black"
                strokeOpacity="0.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Micro Learnings Section */}
      <div className="micro-learnings">
        <div className="section-header">
          <h2>Micro Learnings</h2>
          <p>
            short reads designed to support your well-being. Complete your
            assessment to get personalized suggestions.
          </p>
        </div>

        <div className="learning-cards">
          <div className="learning-card">
            <div className="card-header">
              <h3>What is Microlearning?</h3>
              <div className="external-link">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.78557 19.2144C7.16633 19.5952 7.78367 19.5952 8.16443 19.2144L17.55 9.82886V17.225C17.55 17.7635 17.9865 18.2 18.525 18.2C19.0635 18.2 19.5 17.7635 19.5 17.225V7.475C19.5 6.93652 19.0635 6.5 18.525 6.5H8.775C8.23652 6.5 7.8 6.93652 7.8 7.475C7.8 8.01348 8.23652 8.45 8.775 8.45H16.1711L6.78557 17.8356C6.40481 18.2163 6.40481 18.8337 6.78557 19.2144Z"
                    fill="#00C7B2"
                  />
                </svg>
              </div>
            </div>

            <div className="card-tags">
              <span className="tag">Beginner</span>
              <span className="tag">Overview</span>
              <span className="tag">2-min read</span>
            </div>

            <p className="card-description">
              Microlearning offers quick, focused reads to help you manage
              mental health one step at a time.
            </p>

            <div className="card-actions">
              <button className="take-look-btn">Take a Look</button>
              <button className="assessment-btn">
                Take assessment to Personalize
              </button>
            </div>
          </div>

          <div className="learning-card">
            <div className="card-header">
              <h3>Why Short Reads Help</h3>
              <div className="external-link">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.78557 19.2144C7.16633 19.5952 7.78367 19.5952 8.16443 19.2144L17.55 9.82886V17.225C17.55 17.7635 17.9865 18.2 18.525 18.2C19.0635 18.2 19.5 17.7635 19.5 17.225V7.475C19.5 6.93652 19.0635 6.5 18.525 6.5H8.775C8.23652 6.5 7.8 6.93652 7.8 7.475C7.8 8.01348 8.23652 8.45 8.775 8.45H16.1711L6.78557 17.8356C6.40481 18.2163 6.40481 18.8337 6.78557 19.2144Z"
                    fill="#00C7B2"
                  />
                </svg>
              </div>
            </div>

            <div className="card-tags">
              <span className="tag">Beginner</span>
              <span className="tag">Motivation</span>
              <span className="tag">2-min read</span>
            </div>

            <p className="card-description">
              Learn how bite-sized articles reduce overwhelm and help you make
              steady progress.
            </p>

            <div className="card-actions">
              <button className="take-look-btn">Take a Look</button>
              <button className="assessment-btn">
                Take assessment to Personalize
              </button>
            </div>
          </div>

          <div className="learning-card">
            <div className="card-header">
              <h3>Personalize Your Learning</h3>
              <div className="external-link">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.78557 19.2144C7.16633 19.5952 7.78367 19.5952 8.16443 19.2144L17.55 9.82886V17.225C17.55 17.7635 17.9865 18.2 18.525 18.2C19.0635 18.2 19.5 17.7635 19.5 17.225V7.475C19.5 6.93652 19.0635 6.5 18.525 6.5H8.775C8.23652 6.5 7.8 6.93652 7.8 7.475C7.8 8.01348 8.23652 8.45 8.775 8.45H16.1711L6.78557 17.8356C6.40481 18.2163 6.40481 18.8337 6.78557 19.2144Z"
                    fill="#00C7B2"
                  />
                </svg>
              </div>
            </div>

            <div className="card-tags">
              <span className="tag">Interactive</span>
              <span className="tag">Overview</span>
              <span className="tag">2-min read</span>
            </div>

            <p className="card-description">
              Get tailored recommendations by taking a short assessment.
            </p>

            <div className="card-actions">
              <button className="take-look-btn">Take a Look</button>
              <button className="assessment-btn">
                Take assessment to Personalize
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Care Plan Section */}
      <div className="care-plan">
        <h2>Care Plan</h2>

        <div className="care-plan-grid">
          <div className="care-card card-1">
            <div className="card-content">
              <h3>Create ambient awareness through different senses</h3>
              <div className="card-decorations">
                <div className="decoration-circles"></div>
                <div className="decoration-elements"></div>
              </div>
            </div>
          </div>
          <div className="care-card card-2">
            <div className="card-content">
              <h3>Create ambient awareness through different senses</h3>
              <div className="card-decorations">
                <div className="decoration-circles"></div>
                <div className="decoration-elements"></div>
              </div>
            </div>
          </div>
          <div className="care-card card-3">
            <div className="card-content">
              <h3>Create ambient awareness through different senses</h3>
              <div className="card-decorations green">
                <div className="decoration-circles"></div>
                <div className="decoration-elements"></div>
              </div>
            </div>
          </div>
          <div className="care-card card-4">
            <div className="card-content">
              <h3>Create ambient awareness through different senses</h3>
              <div className="card-decorations blue">
                <div className="decoration-circles"></div>
                <div className="decoration-elements"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="care-plan-tabs">
          <div className="tab-filters">
            <span className="filter">Lorem Ipsum</span>
            <button className="filter active">Set Therapy Session</button>
            <span className="filter">Lorem Ipsum</span>
            <span className="filter">Lorem Ipsum</span>
            <span className="filter">Lorem Ipsum</span>
          </div>

          <div className="filter-scrollable">
            {Array(15)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="filter-item">
                  Lorem
                </div>
              ))}
          </div>
        </div>

        <div className="session-results">
          <div className="result-row">
            <div className="result-info">
              <span className="team-name">Lorem</span>
              <div className="score-badge">Lorem</div>
              <span className="team-name">Lorem</span>
            </div>
            <div className="status-badge pending">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M8.17105 1V2.71053M8.17105 11.7763V14.5132M3.89474 7.67105H1.5M14.5 7.67105H13.4737M12.5891 12.0891L12.1053 11.6053M12.7308 3.16606L11.7632 4.13368M3.32792 12.5142L5.26316 10.5789M3.46962 3.02436L4.92105 4.47579"
                  stroke="#D6A243"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Pending
            </div>
            <div className="result-meta">
              <span className="date">18 December 2022</span>
              <div className="action-icons">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20ZM11 7H13V9H11V7ZM11 11H13V17H11V11Z"
                    fill="#A4A4A4"
                  />
                </svg>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5.03133 3V19H21.2819V21H3V3H5.03133ZM20.5639 6.293L22 7.707L16.2036 13.414L13.1566 10.415L8.79639 14.707L7.36024 13.293L13.1566 7.586L16.2036 10.585L20.5639 6.293Z"
                    fill="#A4A4A4"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="result-row">
            <div className="result-info">
              <span className="team-name">Lorem</span>
              <div className="score-badge">Lorem</div>
              <span className="team-name">Lorem</span>
            </div>
            <div className="status-badge success">
              <svg width="15" height="10" viewBox="0 0 15 10" fill="none">
                <path
                  d="M13.5 1L5.25 9L1.5 5.36364"
                  stroke="#91C561"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Success
            </div>
            <div className="result-meta">
              <span className="date">18 December 2022</span>
              <div className="action-icons">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20ZM11 7H13V9H11V7ZM11 11H13V17H11V11Z"
                    fill="#A4A4A4"
                  />
                </svg>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5.03133 3V19H21.2819V21H3V3H5.03133ZM20.5639 6.293L22 7.707L16.2036 13.414L13.1566 10.415L8.79639 14.707L7.36024 13.293L13.1566 7.586L16.2036 10.585L20.5639 6.293Z"
                    fill="#A4A4A4"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="result-row">
            <div className="result-info">
              <span className="team-name">Lorem</span>
              <div className="score-badge">Lorem</div>
              <span className="team-name">Lorem</span>
            </div>
            <div className="status-badge canceled">
              <svg width="21" height="20" viewBox="0 0 21 20" fill="none">
                <path
                  d="M16.5 6L8.25 14"
                  stroke="#FA0E0E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.375 5.875L16.375 14.125"
                  stroke="#FA0E0E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Canceled
            </div>
            <div className="result-meta">
              <span className="date">17 December 2022</span>
              <div className="action-icons">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20ZM11 7H13V9H11V7ZM11 11H13V17H11V11Z"
                    fill="#A4A4A4"
                  />
                </svg>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5.03133 3V19H21.2819V21H3V3H5.03133ZM20.5639 6.293L22 7.707L16.2036 13.414L13.1566 10.415L8.79639 14.707L7.36024 13.293L13.1566 7.586L16.2036 10.585L20.5639 6.293Z"
                    fill="#A4A4A4"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* More rows... */}
          <div className="view-all">
            <button className="view-all-btn">
              VIEW ALL
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.08301 5.00033C9.08301 5.28222 8.85449 5.51074 8.57259 5.51074L1.42676 5.51074C1.14486 5.51074 0.916342 5.28222 0.916342 5.00033C0.916342 4.71843 1.14486 4.48991 1.42676 4.48991L8.57259 4.48991C8.85449 4.48991 9.08301 4.71843 9.08301 5.00033Z"
                  fill="#00C7B2"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.63876 8.934C4.43943 8.73467 4.43943 8.41149 4.63876 8.21216L7.85075 5.00016L4.63876 1.78817C4.43943 1.58884 4.43943 1.26566 4.63876 1.06633C4.83809 0.866998 5.16126 0.866998 5.36059 1.06633L8.93351 4.63924C9.13284 4.83857 9.13284 5.16175 8.93351 5.36108L5.36059 8.934C5.16126 9.13333 4.83809 9.13333 4.63876 8.934Z"
                  fill="#00C7B2"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
