import { createGlobalStyle } from "styled-components";

const MyGlobalStyles = createGlobalStyle`
:root {
  &, &.light-mode {
  
  --color-grey1: #fff;
  --color-grey2: #f9fafb;
  --color-grey3: #f3f4f6;
  --color-grey4: #e5e7eb;
  --color-grey5: #d1d5db;
  --color-grey6: #9ca3af;
  --color-grey7: #6b7280;
  --color-grey8: #4b5563;
  --color-grey9: #374151;
  --color-grey10: #1f2937;
  --color-grey11: #111827;

  --color-blue1: #e0f2fe;
  --color-blue2: #0369a1;
  --color-green1: #dcfce7;
  --color-green2: #15803d;
  --color-yellow1: #fef9c3;
  --color-yellow2: #a16207;
  --color-silver1: #e5e7eb;
  --color-silver2: #374151;
  --color-indigo1: #e0e7ff;
  --color-indigo2: #4338ca;

  --color-red1: #fee2e2;
  --color-red2: #b91c1c;
  --color-red3: #991b1b;

  --backdrop-color: rgba(255, 255, 255, 0.1);

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);
  

    --image-grayscale: 0;
  --image-opacity: 100%;
  }
  
  --color-brand-50: #eef2ff;
  --color-brand-100: #e0e7ff;
  --color-brand-200: #c7d2fe;
  --color-brand-500: #6366f1;
  --color-brand-600: #4f46e5;
  --color-brand-700: #4338ca;
  --color-brand-800: #3730a3;
  --color-brand-900: #312e81;
  
  --border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 9px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 60%;
}

body {
  font-family: "Poppins", sans-serif;
  color: var(--color-grey-700);

  transition: color 0.4s, background-color 0.4s;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-brand-600);
  outline-offset: -1px;
}

ul {
  list-style: none;
}

button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}



p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;
  filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
}

`;

export default MyGlobalStyles;
