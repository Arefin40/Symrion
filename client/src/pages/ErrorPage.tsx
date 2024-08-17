import { Link } from "react-router-dom";

const NotFoundIllustration = ({ className = "w-full h-full max-w-screen-md max-h-full" }) => {
   const color1 = "text-secondary";
   const color2 = "text-primary";

   return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 500" className={className}>
         <path
            className={`fill-current ${color1}`}
            d="M704.18 191.6c-7.88-28.378-60.413 2.488-60.413 2.488l13.747-24.936a55.12 55.12 0 0 0 4.354-7.899c6.904-15.439 6.813-31.954-.036-46.337-1.883-8.732-7.586-21.212-23.319-34.889-29.768-25.878-129.58-43.579-158.47-39.649-28.893 3.931 26.266 16.086 26.266 16.086l-4.372-.038c-84.153-8.922-168.82-10.07-252.83-8.331-21.066.436-42.196 1.127-62.822 4.686-5.935 1.024-12.317 2.588-15.85 7.375-15.683 21.266 48.469 23.344 58.532 22.934-44.063 5.727-93.023 7.483-134 24.512-5.718 2.376-11.382 5.192-15.69 9.588s-7.115 10.633-6.144 16.901c2.819 18.197 27.89 23.591 42.106 27.632 0 0-81.72 54.339-72.089 81.922 3.981 11.402 9.915 23.405 20.912 35.221-6.268 7.869-11.787 16.126-16.053 24.856-2.61 5.34-6.029 12.656-3.108 18.803 14.884 31.325 240.61 138.86 421.5 108.16 48.051-8.153 95.907-21.635 138.03-45.479 41.919-23.729 84.636-62.924 95.196-112.35.348-1.629.603-3.208.777-4.744 6.553-22.777 10.38-52.778 3.788-76.519z"
         />
         <path
            fill="#fff"
            d="M704.18 191.6c-7.88-28.378-60.413 2.488-60.413 2.488l13.747-24.936a55.12 55.12 0 0 0 4.354-7.899c6.904-15.439 6.813-31.954-.036-46.337-1.883-8.732-7.586-21.212-23.319-34.889-29.768-25.878-129.58-43.579-158.47-39.649-28.893 3.931 26.266 16.086 26.266 16.086l-4.372-.038c-84.153-8.922-168.82-10.07-252.83-8.331-21.066.436-42.196 1.127-62.822 4.686-5.935 1.024-12.317 2.588-15.85 7.375-15.683 21.266 48.469 23.344 58.532 22.934-44.063 5.727-93.023 7.483-134 24.512-5.718 2.376-11.382 5.192-15.69 9.588s-5.994 10.56-6.144 16.901c-.397 16.776 26.564 23.005 42.106 27.632 0 0-81.72 54.339-72.089 81.922 3.981 11.402 9.915 23.405 20.912 35.221-6.268 7.869-11.787 16.126-16.053 24.856-2.61 5.34-6.029 12.656-3.108 18.803 14.884 31.325 240.61 138.86 421.5 108.16 48.051-8.153 95.907-21.635 138.03-45.479 41.919-23.729 84.636-62.924 95.196-112.35.348-1.629.603-3.208.777-4.744 6.553-22.777 10.38-52.778 3.788-76.519z"
            opacity=".8"
         />
         <g fill="none" strokeMiterlimit="10" className={`stroke-current ${color2}`}>
            <path d="M557.96 160.6s1.02-3.061 6.122-4.082c5.102-1.02 11.225 4.592 11.225 4.592s4.082-8.163 8.163-8.674c4.082-.51 8.674 3.061 8.674 3.061M544.69 179.98s1.02-3.061 6.122-4.082c5.102-1.02 11.225 4.592 11.225 4.592s4.082-8.163 8.163-8.674c4.082-.51 8.674 3.061 8.674 3.061M593.16 180.1s.777-2.33 4.66-3.107c3.884-.777 8.544 3.495 8.544 3.495s3.107-6.214 6.214-6.602 6.602 2.33 6.602 2.33M649.86 200.65s.509-1.528 3.056-2.038c2.547-.509 5.603 2.292 5.603 2.292s2.038-4.075 4.075-4.33 4.33 1.528 4.33 1.528" />
         </g>
         <g fill="none" strokeMiterlimit="10" className={`stroke-current ${color2}`}>
            <path d="M378.14 155.19c-5.272-23.687-32.575-41.341-56.374-37.958-5.931.843-11.702 3.062-16.158 7.162-6.077 5.591-4.635 11.938-7.644 18.866-.835 1.923-2.463 3.631-4.533 3.986-5.919 1.015-10.687-4.885-16.68-4.929-4.481-.033-10.209 2.443-12.709 6.312-2.327 3.603-.705 9.891-4.894 12.283-4.685 2.675-10.382-2.414-15.446-.572-6.293 2.288-3.432 6.865-5.721 9.725-2.288 2.86-6.865 1.716-13.158 1.144s-11.441 6.865-11.441 6.865h198.51s1.716-2.86-5.721-14.302-17.734-3.432-22.311-3.432c-4.573-.001-5.719-5.141-5.721-5.15zM433.42 117.14c-2.115-9.503-13.069-16.585-22.617-15.228-2.38.338-4.695 1.229-6.483 2.873-2.438 2.243-1.86 4.789-3.067 7.569-.335.771-.988 1.456-1.819 1.599-2.374.407-4.288-1.96-6.692-1.977-1.798-.013-4.096.98-5.099 2.532-.934 1.445-.283 3.968-1.963 4.928-1.879 1.073-4.165-.968-6.197-.23-2.525.918-1.377 2.754-2.295 3.902s-2.754.689-5.279.459c-2.525-.229-4.59 2.754-4.59 2.754h79.64s.688-1.148-2.295-5.738c-2.984-4.59-7.115-1.377-8.951-1.377-1.832 0-2.292-2.062-2.293-2.066zM603.32 233.6c-2.115-9.503-13.069-16.585-22.617-15.228-2.38.338-4.695 1.229-6.483 2.874-2.438 2.243-1.86 4.789-3.067 7.569-.335.771-.988 1.456-1.818 1.599-2.374.407-4.288-1.96-6.692-1.978-1.798-.013-4.096.98-5.099 2.532-.934 1.445-.283 3.968-1.963 4.928-1.879 1.073-4.165-.968-6.197-.23-2.525.918-1.377 2.754-2.295 3.902s-2.754.689-5.279.459-4.59 2.754-4.59 2.754h79.64s.689-1.148-2.295-5.738-7.115-1.377-8.951-1.377c-1.833 0-2.293-2.062-2.294-2.066zM475.58 223.2c-3.24-14.555-20.017-25.403-34.641-23.325-3.645.518-7.191 1.882-9.929 4.401-3.734 3.436-2.848 7.336-4.697 11.593-.513 1.182-1.514 2.231-2.785 2.45-3.637.624-6.567-3.002-10.25-3.029-2.754-.02-6.274 1.501-7.81 3.879-1.43 2.214-.433 6.078-3.007 7.548-2.879 1.644-6.379-1.483-9.491-.352-3.867 1.406-2.109 4.218-3.515 5.976s-4.218 1.055-8.085.703-7.031 4.218-7.031 4.218h121.98s1.055-1.758-3.515-8.788c-4.57-7.031-10.898-2.109-13.71-2.109s-3.516-3.159-3.517-3.165z" />
         </g>
         <g className={`fill-current ${color2}`}>
            <path d="M504.27 390.9s-7.291-7.555-5.245-7.327c2.046.227 5.876 5.876 5.876 5.876s.053-12.454 1.872-9.725-.416 9.777-.416 9.777 5.2-8.113 5.189-6.787c-.036 4.099-4.007 7.306-4.007 7.306s8.327-6.169 6.963-3.667c-1.364 2.501-6.689 4.865-6.689 4.865s9.599-1.936 6.189-.572a80.19 80.19 0 0 1-6.657 2.301h-2.652s-9.065-4.548-5.654-3.866c3.412.682 5.231 1.819 5.231 1.819zM600.56 367.26s-5.674-5.879-4.082-5.702c1.593.177 4.573 4.573 4.573 4.573s.041-9.692 1.457-7.568-.324 7.609-.324 7.609 4.047-6.314 4.038-5.282c-.028 3.19-3.118 5.685-3.118 5.685s6.481-4.801 5.419-2.854-5.206 3.786-5.206 3.786 7.471-1.507 4.816-.445a62.218 62.218 0 0 1-5.18 1.791h-2.064s-7.054-3.539-4.4-3.008c2.655.53 4.071 1.415 4.071 1.415zM689.95 346.17s-5.674-5.879-4.082-5.702c1.593.177 4.573 4.573 4.573 4.573s.041-9.692 1.457-7.568-.324 7.609-.324 7.609 4.047-6.314 4.038-5.282c-.028 3.19-3.118 5.685-3.118 5.685s6.48-4.801 5.419-2.854c-1.062 1.947-5.205 3.786-5.205 3.786s7.471-1.507 4.816-.445a62.218 62.218 0 0 1-5.18 1.791h-2.064s-7.055-3.539-4.4-3.008c2.655.53 4.07 1.415 4.07 1.415z" />
         </g>
         <path
            className={`fill-current ${color1}`}
            d="M576.02 394.34s-6.778-7.023-4.876-6.812c1.903.211 5.463 5.463 5.463 5.463s.049-11.577 1.74-9.04-.387 9.089-.387 9.089 4.835-7.542 4.824-6.31c-.033 3.811-3.725 6.791-3.725 6.791s7.741-5.734 6.473-3.409-6.218 4.523-6.218 4.523 8.924-1.8 5.753-.532-6.188 2.139-6.188 2.139h-2.466s-8.427-4.228-5.256-3.594c3.172.635 4.863 1.692 4.863 1.692z"
         />
         <g fill="none" strokeMiterlimit="10" className={`stroke-current ${color2}`}>
            <path d="m441.89 363.88-59.96-67.24-13.14 10.51-65.74-98.98-57.23 12.75-17.12-31.97-16.63-.87-31.52-62.17-47.15 43.02-22.73-8.12-82.804 84.43M453.14 376.48l-6.29-7.05M215.09 229.14l-4.96 1.34M245.7 220.85l-25.03 6.78" />
            <path d="m151.26 192.07 14.02-20.69-.95-7.1 16.09-32.65M145.4 200.72l3.52-5.19M123.65 212.96l-22.73 30.82M111.81 164.28l5.67 12.78 12.78 10.41-1.42 18.46-3.09 4.19M228.7 188.95l-11.84 11.3-4.26-7.1M707.01 315.44l-92.02-64.91-27.93 39.44-34.51-11.51-53.4 74.77-34.51-7.39-17.25 14.78" />
            <path d="m614.99 250.53-10.94 48.09-12.9-5.64M552.85 281.29l-27.02 78.62-18.54-3.23" />
         </g>
         <path
            className={`fill-current ${color1}`}
            d="M551.6 275.67c-23.946 0-43.357 19.28-43.357 43.062 0 11.026 4.175 21.083 11.037 28.701 3.14-.455 8.862-.768 15.187 1.384 8.381 2.851 13.604 7.523 14.748 8.614h3.885c1.144-1.091 6.367-5.763 14.748-8.614 6.886-2.343 13.061-1.764 15.962-1.261 6.928-7.632 11.147-17.738 11.147-28.824 0-23.783-19.411-43.062-43.357-43.062z"
         />
         <path
            className={`fill-current ${color2}`}
            d="M571.78 336a112.19 112.19 0 0 0-3.961 2.008 38.878 38.878 0 0 0-3.788 2.338c-.454.314-.897.638-1.34.962l7.102-13.231-9.745 15.261a99.007 99.007 0 0 0-2.909 2.432 128.52 128.52 0 0 0-4.604 4.205l-.495-14.354 10.196-15.525-10.271 13.353-.443-12.847-.733 14.375-.002.003.002.001-.734 14.408a128.267 128.267 0 0 0-3.986-3.619 96.799 96.799 0 0 0-3.272-2.727l-9.22-15.746 6.772 13.89c-.389-.283-.776-.568-1.172-.842a38.953 38.953 0 0 0-3.788-2.338 112.19 112.19 0 0 0-3.961-2.008c-2.672-1.282-5.393-2.481-8.204-3.471 2.731 1.157 5.349 2.513 7.906 3.944 1.276.72 2.538 1.46 3.779 2.227a37.276 37.276 0 0 1 3.512 2.492c2.246 1.778 4.345 3.72 6.365 5.724a120.955 120.955 0 0 1 5.119 5.405l-.932 18.287h4.272l-.605-17.544a119.13 119.13 0 0 1 5.781-6.148c2.02-2.004 4.118-3.945 6.365-5.724a36.966 36.966 0 0 1 3.512-2.492 109.14 109.14 0 0 1 3.779-2.227c2.557-1.431 5.175-2.787 7.906-3.944-2.81.991-5.532 2.191-8.203 3.472z"
         />
         <path
            className={`fill-current ${color1}`}
            d="M218.71 334.76c0 12.373-6.938 13.307-15.497 13.307s-15.497-.934-15.497-13.307 6.938-38.236 15.497-38.236c8.559-.001 15.497 25.863 15.497 38.236z"
         />
         <path
            className={`fill-current ${color2}`}
            d="m208.45 340.37-2.56.18 6.67-4.5-4.76 2.41.65-1.89-2.18 2.66-2.56 1.29-.2-8.88 1.35-3.29-1.38 1.85-.12-5.16 4.25-5.66-4.28 4.38-.26-11.34-.23 7.26-2.72-3.04 2.68 4.43-.36 11.5-2.38-1.55-2.16-3.83.87 2.98-4.24-2.77 7.86 6.78-1.19 37.73h3.23l-.68-29.92.75-.5z"
         />
         <path
            className={`fill-current ${color1}`}
            d="M635.52 292.15c0 24.176-13.557 26.002-30.28 26.002-16.724 0-30.281-1.825-30.281-26.002s13.557-74.714 30.281-74.714c16.723 0 30.28 50.538 30.28 74.714z"
         />
         <path
            fill="#fff"
            opacity=".31"
            d="M635.52 292.15c0 24.176-13.557 26.002-30.28 26.002-16.724 0-30.281-1.825-30.281-26.002s13.557-74.714 30.281-74.714c16.723 0 30.28 50.538 30.28 74.714z"
         />
         <path
            className={`fill-current ${color2}`}
            d="m615.48 303.12-5.01.34 13.04-8.79-9.31 4.71 1.28-3.68-4.26 5.18-5 2.53-.4-17.36 2.65-6.43-2.71 3.62-.23-10.07 8.3-11.06-8.36 8.55-.51-22.16-.44 14.18-5.33-5.93 5.24 8.66-.71 22.46-4.63-3.03-4.22-7.48 1.69 5.83-8.29-5.42 15.35 13.24-2.32 73.73h6.32l-1.34-58.46 1.46-.98z"
         />
         <path
            className={`fill-current ${color1}`}
            d="M700.34 301.66c0 12.373-6.938 13.307-15.497 13.307s-15.497-.934-15.497-13.307 6.938-38.236 15.497-38.236 15.497 25.863 15.497 38.236z"
         />
         <path
            fill="#fff"
            opacity=".5"
            d="M700.34 301.66c0 12.373-6.938 13.307-15.497 13.307s-15.497-.934-15.497-13.307 6.938-38.236 15.497-38.236 15.497 25.863 15.497 38.236z"
         />
         <path
            className={`fill-current ${color2}`}
            d="m690.08 307.28-2.56.17 6.67-4.5-4.77 2.41.66-1.88-2.18 2.65-2.56 1.3-.2-8.89 1.35-3.29-1.38 1.85-.12-5.15 4.25-5.66-4.28 4.38-.26-11.34-.23 7.25-2.72-3.03 2.68 4.43-.37 11.5-2.37-1.56-2.16-3.83.87 2.99-4.24-2.78 7.85 6.78-1.19 37.73h3.24l-.68-29.91.74-.51z"
         />
         <path
            className={`fill-current ${color1}`}
            d="M68.666 291.2c0 12.373-6.938 13.307-15.497 13.307s-15.497-.934-15.497-13.307 6.938-38.236 15.497-38.236 15.497 25.863 15.497 38.236z"
         />
         <path
            fill="#fff"
            opacity=".5"
            d="M68.666 291.2c0 12.373-6.938 13.307-15.497 13.307s-15.497-.934-15.497-13.307 6.938-38.236 15.497-38.236 15.497 25.863 15.497 38.236z"
         />
         <path
            className={`fill-current ${color2}`}
            d="m58.409 296.82-2.563.17 6.676-4.5-4.768 2.41.655-1.88-2.18 2.65-2.557 1.29-.203-8.88 1.354-3.29-1.387 1.85-.118-5.15 4.247-5.66-4.276 4.37-.259-11.34-.229 7.26-2.724-3.04 2.68 4.44-.362 11.49-2.372-1.55-2.161-3.83.866 2.99-4.241-2.78 7.857 6.78-1.19 37.73h3.235l-.683-29.92.747-.5z"
         />
         <path
            className={`fill-current ${color1}`}
            d="M145.46 263.14c-23.945 0-43.357 19.28-43.357 43.062 0 11.026 4.175 21.083 11.037 28.701 3.14-.455 8.862-.768 15.187 1.384 8.381 2.851 13.604 7.523 14.748 8.614h3.885c1.144-1.091 6.367-5.763 14.748-8.614 6.886-2.342 13.061-1.764 15.962-1.261 6.928-7.632 11.147-17.738 11.147-28.824 0-23.782-19.412-43.062-43.357-43.062z"
         />
         <path
            fill="#fff"
            d="M145.46 263.14c-23.945 0-43.357 19.28-43.357 43.062 0 11.026 4.175 21.083 11.037 28.701 3.14-.455 8.862-.768 15.187 1.384 8.381 2.851 13.604 7.523 14.748 8.614h3.885c1.144-1.091 6.367-5.763 14.748-8.614 6.886-2.342 13.061-1.764 15.962-1.261 6.928-7.632 11.147-17.738 11.147-28.824 0-23.782-19.412-43.062-43.357-43.062z"
            opacity=".33"
         />
         <path
            className={`fill-current ${color2}`}
            d="M165.64 323.48a112.19 112.19 0 0 0-3.961 2.008 38.878 38.878 0 0 0-3.788 2.338c-.454.314-.897.638-1.34.962l7.102-13.231-9.745 15.261c-.987.794-1.957 1.605-2.909 2.432a128.52 128.52 0 0 0-4.604 4.205l-.495-14.354 10.196-15.525-10.271 13.353-.443-12.847-.732 14.375-.002.003.002.001-.734 14.408a128.267 128.267 0 0 0-3.986-3.619 96.799 96.799 0 0 0-3.272-2.727l-9.22-15.746 6.772 13.89c-.389-.283-.775-.568-1.173-.842a38.953 38.953 0 0 0-3.788-2.338 113.017 113.017 0 0 0-3.96-2.008c-2.671-1.282-5.393-2.481-8.204-3.471 2.731 1.157 5.349 2.512 7.906 3.944 1.276.72 2.538 1.46 3.779 2.227a37.276 37.276 0 0 1 3.512 2.492c2.246 1.778 4.345 3.72 6.365 5.724a120.924 120.924 0 0 1 5.119 5.405l-.932 18.287h4.272l-.605-17.544a119.54 119.54 0 0 1 5.781-6.148c2.02-2.004 4.118-3.945 6.365-5.724a37.146 37.146 0 0 1 3.512-2.492 109.14 109.14 0 0 1 3.779-2.227c2.558-1.431 5.175-2.787 7.906-3.944-2.811.991-5.533 2.19-8.204 3.472z"
         />
         <g className={`fill-current ${color2}`}>
            <path d="M265.84 391.65v-39.676h-51.642v-25.402l44.295-104.96h37.787v105.59h16.374v24.772H296.28v39.676h-30.44zm-26.031-64.448h26.031v-72.215l-26.031 72.215zM373.53 391.74c-10.217 0-18.684-2.099-25.401-6.298-6.718-4.199-11.756-9.972-15.115-17.32-3.359-7.347-5.038-15.849-5.038-25.506v-76.203c0-9.936 1.607-18.648 4.828-26.136 3.218-7.485 8.187-13.33 14.905-17.529s15.324-6.298 25.821-6.298c10.356 0 18.858 2.099 25.506 6.298 6.646 4.199 11.579 10.044 14.8 17.529 3.218 7.488 4.828 16.201 4.828 26.136v76.203c0 9.657-1.679 18.159-5.038 25.506-3.359 7.348-8.398 13.121-15.115 17.32-6.718 4.199-15.046 6.298-24.981 6.298zm0-28.55c3.779 0 6.508-1.188 8.187-3.57 1.679-2.378 2.798-5.212 3.359-8.502.558-3.287.84-6.331.84-9.132v-74.944c0-3.077-.246-6.298-.735-9.657-.492-3.359-1.574-6.262-3.254-8.712-1.679-2.446-4.48-3.674-8.397-3.674-3.92 0-6.754 1.227-8.502 3.674-1.751 2.45-2.87 5.353-3.359 8.712-.492 3.359-.735 6.58-.735 9.657v74.944c0 2.801.279 5.845.84 9.132.558 3.29 1.748 6.124 3.569 8.502 1.817 2.382 4.546 3.57 8.187 3.57zM487.94 391.65v-39.676h-51.642v-25.402l44.295-104.96h37.786v105.59h16.374v24.772h-16.374v39.676H487.94zm-26.031-64.448h26.031v-72.215l-26.031 72.215z" />
         </g>
         <path
            fill="#fff"
            d="M720.11 309.64c-65.377 42.858-194.5 72.028-343.1 72.028-153.16 0-285.63-30.986-348.94-76.009v172.34h692.04v-168.36z"
         />
         <path
            fill="none"
            className={`stroke-current ${color2}`}
            strokeMiterlimit="10"
            d="M705.91 318.19c-68.82 38.142-190.4 63.479-328.9 63.479-153.16 0-285.63-30.986-348.94-76.009M720.41 309.44a214.334 214.334 0 0 1-9.227 5.733"
         />
         <path
            className={`fill-current ${color1}`}
            d="M678.37 299.65c0 25.28-14.176 27.189-31.664 27.189s-31.664-1.909-31.664-27.189c0-25.281 14.176-78.126 31.664-78.126s31.664 52.846 31.664 78.126z"
         />
         <path
            className={`fill-current ${color2}`}
            d="m657.41 311.12-5.23.36 13.64-9.19-9.75 4.92 1.34-3.85-4.45 5.43-5.23 2.64-.41-18.16 2.76-6.71-2.83 3.77-.24-10.52 8.68-11.57-8.74 8.94-.53-23.16-.47 14.82-5.56-6.2 5.47 9.05-.74 23.49-4.84-3.17-4.42-7.83 1.77 6.1-8.66-5.66 16.05 13.84-2.43 77.1h6.61l-1.4-61.13 1.53-1.03z"
         />
         <path
            className={`fill-current ${color2}`}
            d="M644.57 376.24s-11.687-12.109-8.406-11.744c3.28.365 9.419 9.419 9.419 9.419s.085-19.961 3.001-15.587-.667 15.671-.667 15.671 8.335-13.003 8.317-10.879c-.058 6.57-6.422 11.709-6.422 11.709s13.347-9.887 11.16-5.878-10.721 7.798-10.721 7.798 15.386-3.104 9.919-.917-10.669 3.688-10.669 3.688h-4.251s-14.529-7.289-9.062-6.196c5.466 1.094 8.382 2.916 8.382 2.916zM84.725 361.2s-10.108-10.473-7.271-10.158 8.147 8.147 8.147 8.147.073-17.265 2.595-13.482-.577 13.554-.577 13.554 7.209-11.247 7.193-9.41c-.05 5.683-5.555 10.128-5.555 10.128s11.544-8.552 9.653-5.084-9.273 6.745-9.273 6.745 13.308-2.685 8.579-.793c-4.729 1.891-9.228 3.19-9.228 3.19h-3.677s-12.567-6.305-7.838-5.359c4.73.946 7.252 2.522 7.252 2.522z"
         />
         <path
            className={`fill-current ${color1}`}
            d="M121.26 285.87c0 25.308-14.192 27.219-31.698 27.219s-31.698-1.911-31.698-27.219 14.192-78.211 31.698-78.211 31.698 52.903 31.698 78.211z"
         />
         <path
            className={`fill-current ${color2}`}
            d="m100.28 297.35-5.242.37 13.652-9.21-9.749 4.93 1.339-3.85-4.458 5.43-5.231 2.64-.415-18.17 2.77-6.73-2.837 3.78-.241-10.54 8.687-11.58-8.747 8.96-.53-23.2-.468 14.85-5.572-6.22 5.482 9.07-.741 23.52-4.852-3.18-4.42-7.83 1.772 6.1-8.675-5.67 16.071 13.86-2.434 77.18h6.618l-1.399-61.19 1.529-1.03z"
         />
         <g className={`fill-current ${color2}`}>
            <path d="M195.39 387.51s-10.108-10.473-7.271-10.158 8.147 8.147 8.147 8.147.074-17.265 2.595-13.482c2.522 3.783-.577 13.554-.577 13.554s7.209-11.247 7.193-9.41c-.05 5.683-5.555 10.128-5.555 10.128s11.544-8.552 9.653-5.084-9.273 6.745-9.273 6.745 13.308-2.684 8.579-.793-9.228 3.19-9.228 3.19h-3.677s-12.566-6.305-7.838-5.359c4.73.945 7.252 2.522 7.252 2.522zM249.04 410.46s-10.108-10.473-7.271-10.158 8.147 8.147 8.147 8.147.073-17.265 2.595-13.482-.577 13.554-.577 13.554 7.21-11.247 7.193-9.41c-.05 5.683-5.555 10.128-5.555 10.128s11.544-8.552 9.653-5.084-9.273 6.745-9.273 6.745 13.308-2.684 8.579-.793c-4.729 1.892-9.228 3.19-9.228 3.19h-3.677s-12.567-6.305-7.838-5.359c4.73.946 7.252 2.522 7.252 2.522zM392.94 395.05s-7.291-7.554-5.245-7.327 5.876 5.876 5.876 5.876.053-12.453 1.872-9.725c1.819 2.729-.416 9.777-.416 9.777s5.201-8.113 5.189-6.787c-.036 4.099-4.007 7.306-4.007 7.306s8.327-6.168 6.963-3.667-6.689 4.865-6.689 4.865 9.599-1.936 6.188-.572-6.656 2.301-6.656 2.301h-2.652s-9.065-4.548-5.654-3.866c3.412.682 5.231 1.819 5.231 1.819zM675.97 376.98s-5.674-5.879-4.082-5.702 4.573 4.573 4.573 4.573.041-9.692 1.457-7.568-.324 7.609-.324 7.609 4.047-6.314 4.038-5.282c-.028 3.19-3.118 5.685-3.118 5.685s6.481-4.8 5.419-2.854c-1.062 1.947-5.206 3.786-5.206 3.786s7.471-1.507 4.816-.445a62.218 62.218 0 0 1-5.18 1.791h-2.064s-7.054-3.539-4.4-3.008c2.655.53 4.071 1.415 4.071 1.415z" />
         </g>
         <g fill={color1} className={`fill-current ${color1}`}>
            <path d="M293.9 395.09s-10.108-10.473-7.271-10.158 8.147 8.147 8.147 8.147.073-17.265 2.595-13.482-.577 13.554-.577 13.554 7.21-11.247 7.193-9.41c-.05 5.683-5.555 10.128-5.555 10.128s11.544-8.552 9.653-5.084-9.273 6.745-9.273 6.745 13.308-2.685 8.579-.793c-4.729 1.891-9.228 3.19-9.228 3.19h-3.677s-12.566-6.305-7.838-5.359c4.731.946 7.252 2.522 7.252 2.522zM220.96 388.14s-6.778-7.023-4.876-6.812 5.463 5.463 5.463 5.463.049-11.577 1.74-9.04-.387 9.089-.387 9.089 4.834-7.542 4.824-6.31c-.033 3.811-3.725 6.791-3.725 6.791s7.741-5.734 6.473-3.409-6.218 4.523-6.218 4.523 8.924-1.8 5.753-.532-6.188 2.139-6.188 2.139h-2.466s-8.427-4.228-5.256-3.594c3.172.635 4.863 1.692 4.863 1.692zM136.26 415.88s-6.778-7.023-4.876-6.812c1.903.211 5.463 5.463 5.463 5.463s.049-11.577 1.74-9.041c1.691 2.537-.387 9.089-.387 9.089s4.834-7.542 4.824-6.31c-.033 3.811-3.725 6.791-3.725 6.791s7.741-5.734 6.473-3.409-6.218 4.523-6.218 4.523 8.924-1.8 5.753-.532-6.188 2.139-6.188 2.139h-2.466s-8.427-4.228-5.256-3.594c3.172.636 4.863 1.693 4.863 1.693zM363.03 417.24s-6.778-7.023-4.876-6.812 5.463 5.463 5.463 5.463.049-11.577 1.74-9.04-.387 9.089-.387 9.089 4.834-7.542 4.824-6.31c-.033 3.811-3.725 6.791-3.725 6.791s7.741-5.734 6.473-3.409-6.218 4.523-6.218 4.523 8.924-1.8 5.753-.532-6.188 2.139-6.188 2.139h-2.466s-8.427-4.228-5.256-3.594c3.172.635 4.863 1.692 4.863 1.692zM473 417.6s-6.778-7.023-4.876-6.812 5.463 5.463 5.463 5.463.049-11.577 1.74-9.04-.387 9.089-.387 9.089 4.834-7.542 4.824-6.31c-.033 3.811-3.725 6.791-3.725 6.791s7.741-5.734 6.473-3.409-6.218 4.523-6.218 4.523 8.924-1.8 5.753-.532-6.188 2.139-6.188 2.139h-2.466s-8.427-4.228-5.256-3.594S473 417.6 473 417.6zM677.47 395.64s-10.32-10.693-7.424-10.371c2.897.322 8.318 8.318 8.318 8.318s.075-17.627 2.65-13.764c2.575 3.862-.589 13.838-.589 13.838s7.361-11.482 7.344-9.607c-.051 5.802-5.671 10.34-5.671 10.34s11.786-8.731 9.855-5.19c-1.931 3.54-9.467 6.886-9.467 6.886s13.587-2.741 8.759-.81-9.422 3.257-9.422 3.257h-3.754s-12.83-6.437-8.002-5.471c4.829.965 7.403 2.574 7.403 2.574zM62.538 395.64s-10.32-10.693-7.423-10.371 8.318 8.318 8.318 8.318.075-17.627 2.65-13.764c2.575 3.862-.589 13.838-.589 13.838s7.361-11.482 7.344-9.607c-.051 5.802-5.671 10.34-5.671 10.34s11.786-8.731 9.855-5.19c-1.931 3.54-9.467 6.886-9.467 6.886s13.587-2.741 8.759-.81-9.422 3.257-9.422 3.257h-3.754s-12.83-6.437-8.002-5.471c4.827.965 7.402 2.574 7.402 2.574z" />
         </g>
         <path
            className={`fill-current ${color1}`}
            d="M113.45 380.54s-10.562-18.213-7.549-19.619c3.012-1.406 9.238 12.452 9.238 12.452s-1.205-26.108 1.607-23.698 5.423 20.886 5.423 20.886 5.623-20.083 7.431-15.866-1.445 16.979-1.445 16.979 8.072-15.372 8.876-10.351c.803 5.021-3.816 13.255-3.816 13.255s10.644-10.644 11.447-6.427-2.812 8.435-2.812 8.435 14.058-7.632 10.644-3.414c-3.414 4.217-8.435 9.64-8.435 9.64s13.456-4.82 11.849-2.008-7.632 5.824-7.632 5.824 11.046-2.008 9.841-.201-4.01 3.582-4.01 3.582h-50.014s-13.255-4.787-8.033-5.189 10.041 1.807 10.041 1.807-16.267-11.046-8.636-11.849c7.632-.803 13.857 8.836 13.857 8.836s-10.845-15.263-7.029-12.853l9.157 9.779z"
         />
         <path
            strokeMiterlimit="10"
            className={`fill-current stroke-current ${color2}`}
            d="M114.13 385.72s-13.636-14.129-9.809-13.703 10.99 10.99 10.99 10.99.099-23.29 3.501-18.187-.778 18.284-.778 18.284 9.726-15.172 9.704-12.694c-.067 7.666-7.493 13.663-7.493 13.663s15.573-11.536 13.022-6.858c-2.552 4.678-12.509 9.099-12.509 9.099s17.953-3.621 11.574-1.07c-6.379 2.552-12.449 4.304-12.449 4.304h-4.96s-16.952-8.505-10.573-7.229c6.378 1.275 9.78 3.401 9.78 3.401z"
         />
         <path
            className={`fill-current ${color1}`}
            d="M563.2 412.58s-19.962-34.425-14.269-37.082c5.694-2.657 17.461 23.535 17.461 23.535s-2.278-49.347 3.037-44.792c5.314 4.555 10.249 39.478 10.249 39.478s10.628-37.959 14.045-29.988c3.416 7.971-2.731 32.092-2.731 32.092s15.258-29.055 16.776-19.565-7.212 25.053-7.212 25.053 20.118-20.118 21.637-12.147c1.518 7.971-5.314 15.943-5.314 15.943s26.571-14.424 20.118-6.453-15.943 18.22-15.943 18.22 25.433-9.11 22.396-3.796-14.424 11.008-14.424 11.008 20.878-3.796 18.6-.379c-2.278 3.416-7.58 6.77-7.58 6.77h-94.531s-25.053-9.048-15.184-9.807 18.979 3.416 18.979 3.416-30.747-20.878-16.322-22.396c14.424-1.518 26.192 16.702 26.192 16.702s-20.498-28.849-13.286-24.294L563.2 412.58z"
         />
         <path
            strokeMiterlimit="10"
            className={`fill-current stroke-current ${color2}`}
            d="M564.49 422.38s-25.774-26.704-18.54-25.901 20.772 20.772 20.772 20.772.187-44.021 6.618-34.375c6.43 9.646-1.471 34.559-1.471 34.559s18.383-28.677 18.342-23.992c-.127 14.49-14.163 25.824-14.163 25.824s29.435-21.805 24.613-12.963c-4.823 8.842-23.644 17.198-23.644 17.198s33.932-6.845 21.875-2.022-23.53 8.134-23.53 8.134h-9.375s-32.042-16.076-19.985-13.665c12.058 2.412 18.488 6.431 18.488 6.431z"
         />
         <path
            fill="#fff"
            strokeMiterlimit="10"
            className={`stroke-current ${color2}`}
            d="M147.85 381.57s2.042-1.846 3.793-1.846 7.1 2.571 7.1 2.571 2.14 3.296 2.334 3.494c.195.198 2.82 1.319 3.015 1.78.195.462.584 1.978.584 1.978h-16.339l-3.015-7.911 2.528-.066z"
         />
         <path
            className={`fill-current ${color2}`}
            d="m151.64 379.72-.097 1.556s4.182 2.431 4.085 3.307c-.097.875-.973 2.918-.973 2.918l2.14 2.237h-11.379l.875-6.711s2.431-3.502 5.349-3.307z"
         />
         <path
            fill="#fff"
            strokeMiterlimit="10"
            className={`stroke-current ${color2}`}
            d="M126.55 380.6s8.17-12.254 10.017-12.449c1.848-.194 5.738 1.362 7.197 3.89 1.459 2.529 2.82 7.489 2.918 7.781.097.292.486.486 2.723 4.085 2.237 3.598 2.14 5.641 2.14 5.641h-31.609s.681-3.21 1.848-5.057 3.89-2.529 3.89-2.529l.876-1.362z"
         />
         <path
            className={`fill-current ${color2}`}
            d="M139.09 389.35s-.875-2.14-.973-2.431c-.097-.292-.097-3.112-.389-4.279s-2.723-4.766-2.723-4.766l1.751-5.057-.875-.681 1.459-3.599-.817-.378c-1.915.344-9.979 12.438-9.979 12.438l-.875 1.362s-2.723.681-3.89 2.529c-.998 1.58-1.639 4.15-1.804 4.863h19.115z"
         />
         <path
            fill="#fff"
            strokeMiterlimit="10"
            className={`stroke-current ${color2}`}
            d="M462.84 384.62s1.281-1.157 2.378-1.157c1.098 0 4.452 1.612 4.452 1.612s1.342 2.067 1.464 2.191 1.769.827 1.89 1.116c.122.289.366 1.24.366 1.24h-10.245l-1.89-4.96 1.585-.042z"
         />
         <path
            className={`fill-current ${color2}`}
            d="m465.22 383.46-.061.976s2.622 1.525 2.561 2.073-.61 1.829-.61 1.829l1.342 1.403h-7.135l.549-4.208c0 .001 1.524-2.195 3.354-2.073z"
         />
         <path
            fill="#fff"
            strokeMiterlimit="10"
            className={`stroke-current ${color2}`}
            d="M449.48 384.01s5.122-7.684 6.281-7.805c1.159-.122 3.598.854 4.513 2.439s1.768 4.695 1.829 4.878.305.305 1.707 2.561c1.403 2.256 1.342 3.537 1.342 3.537h-19.819s.427-2.012 1.159-3.171 2.439-1.586 2.439-1.586l.549-.853z"
         />
         <path
            className={`fill-current ${color2}`}
            d="M457.35 389.5s-.549-1.342-.61-1.525-.061-1.951-.244-2.683-1.708-2.988-1.708-2.988l1.098-3.171-.549-.427.915-2.256-.512-.237c-1.201.216-6.257 7.799-6.257 7.799l-.549.854s-1.707.427-2.439 1.586c-.626.991-1.028 2.602-1.131 3.049h11.986z"
         />
         <path
            fill="#fff"
            strokeMiterlimit="10"
            className={`stroke-current ${color2}`}
            d="M628.22 414.53s3.86-3.489 7.169-3.489 13.419 4.86 13.419 4.86 4.044 6.23 4.412 6.604 5.331 2.492 5.699 3.364 1.103 3.738 1.103 3.738h-30.883l-5.699-14.953 4.78-.124z"
         />
         <path
            className={`fill-current ${color2}`}
            d="m635.39 411.04-.184 2.941s7.905 4.596 7.721 6.25-1.838 5.515-1.838 5.515l4.044 4.228h-21.508l1.654-12.684s4.596-6.618 10.111-6.25z"
         />
         <path
            fill="#fff"
            strokeMiterlimit="10"
            className={`stroke-current ${color2}`}
            d="M587.96 412.7s15.441-23.162 18.934-23.53 10.846 2.574 13.603 7.353 5.331 14.155 5.515 14.706c.184.552.919.919 5.147 7.721s4.044 10.662 4.044 10.662H575.46s1.287-6.066 3.493-9.559 7.353-4.78 7.353-4.78l1.654-2.573z"
         />
         <path
            className={`fill-current ${color2}`}
            d="M611.68 429.24s-1.654-4.044-1.838-4.596-.184-5.883-.735-8.088c-.551-2.206-5.147-9.008-5.147-9.008l3.309-9.559-1.654-1.287 2.757-6.802-1.544-.715c-3.62.65-18.861 23.51-18.861 23.51l-1.654 2.574s-5.147 1.287-7.353 4.78c-1.886 2.987-3.097 7.843-3.41 9.191h36.13z"
         />
      </svg>
   );
};

export default () => {
   return (
      <section className="container mx-auto px-5 lg:px-0 grid justify-items-center content-center text-center h-screen">
         <NotFoundIllustration />

         <div className="grid justify-items-center gap-y-5">
            <h1 className="font-extrabold text-5xl lg:text-6xl text-violet-950">Opps!</h1>
            <p className="px-3">
               Looks like we took a wrong turn! Home is just a click away. Let's go back.
            </p>

            <Link
               to="/"
               className="mt-5 px-6 py-3 rounded-full bg-primary text-primary-foreground text-lg"
            >
               Go to Home
            </Link>
         </div>
      </section>
   );
};
