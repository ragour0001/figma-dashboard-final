"use client";

interface RadioButtonProps {
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
}

export default function RadioButton({
  value,
  checked,
  onChange,
}: RadioButtonProps) {
  return (
    <div className="radio-button-container" onClick={() => onChange(value)}>
      <div className="radio-button-wrapper">
        <div className="radio-state-layer">
          <div className="radio-icon">
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 20.668C8.61667 20.668 7.31667 20.4055 6.1 19.8805C4.88333 19.3555 3.825 18.643 2.925 17.743C2.025 16.843 1.3125 15.7846 0.7875 14.568C0.2625 13.3513 0 12.0513 0 10.668C0 9.28464 0.2625 7.98464 0.7875 6.76797C1.3125 5.5513 2.025 4.49297 2.925 3.59297C3.825 2.69297 4.88333 1.98047 6.1 1.45547C7.31667 0.930469 8.61667 0.667969 10 0.667969C11.3833 0.667969 12.6833 0.930469 13.9 1.45547C15.1167 1.98047 16.175 2.69297 17.075 3.59297C17.975 4.49297 18.6875 5.5513 19.2125 6.76797C19.7375 7.98464 20 9.28464 20 10.668C20 12.0513 19.7375 13.3513 19.2125 14.568C18.6875 15.7846 17.975 16.843 17.075 17.743C16.175 18.643 15.1167 19.3555 13.9 19.8805C12.6833 20.4055 11.3833 20.668 10 20.668ZM10 18.668C12.2333 18.668 14.125 17.893 15.675 16.343C17.225 14.793 18 12.9013 18 10.668C18 8.43464 17.225 6.54297 15.675 4.99297C14.125 3.44297 12.2333 2.66797 10 2.66797C7.76667 2.66797 5.875 3.44297 4.325 4.99297C2.775 6.54297 2 8.43464 2 10.668C2 12.9013 2.775 14.793 4.325 16.343C5.875 17.893 7.76667 18.668 10 18.668Z"
                fill="#49454F"
              />
            </svg>
            {checked && (
              <div className="radio-inner-circle">
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="10" cy="10.668" r="4" fill="#006B5F" />
                </svg>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
