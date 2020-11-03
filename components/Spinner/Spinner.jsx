import React from 'react'
import style from './spinner.module.css'

const Spinner = ({ size = '15vh' }) => {
  return (
    <>
      <svg
        className={style.avocado}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 111.79 201.16"
        style={{ maxHeight: size }}
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="background_2" data-name="background 2">
            <g>
              <g>
                <g className={style.avocado__leg}>
                  <path
                    className={style.avocado_1}
                    d="M33.56,193.39a1.84,1.84,0,0,1-.9.21l-6.83-.06a1.93,1.93,0,0,1,0-3.86l3.76,0c-5.67-14.42,4.11-28.61,4.56-29.25a1.93,1.93,0,1,1,3.16,2.23c-.11.15-10.17,14.84-3,28.05a1.91,1.91,0,0,1,0,1.92A1.86,1.86,0,0,1,33.56,193.39Z"
                  />
                  <g className={style.avocado_2}>
                    <path d="M32.87,172.71a36.55,36.55,0,0,1,4.48-10,1.93,1.93,0,1,0-3.16-2.23,39.48,39.48,0,0,0-5.3,11.95A22.16,22.16,0,0,1,32.87,172.71Z" />
                  </g>
                </g>
                <g className={style.avocado__leg}>
                  <path
                    className={style.avocado_1}
                    d="M85.24,193.48H75.82a1.93,1.93,0,0,1-1.76-2.73c6.62-14.68.06-29.73,0-29.88a1.94,1.94,0,0,1,3.53-1.59c.28.64,6.58,15,1.1,30.33h6.55a1.94,1.94,0,1,1,0,3.87Z"
                  />
                  <g className={style.avocado_2}>
                    <path d="M76.6,170.64A22.76,22.76,0,0,1,80.31,169a42.49,42.49,0,0,0-2.72-9.73,1.94,1.94,0,0,0-3.53,1.59A40.61,40.61,0,0,1,76.6,170.64Z" />
                  </g>
                </g>
                <g className={style.avocado__body}>
                  <g>
                    <path
                      className={style.avocado_3}
                      d="M60,1.4s-27-2.62-28.79,30.53S-9,79,4.12,127.87s95.08,42.74,103.8,3.49C118.65,83.07,92,73.35,83.5,30.18,77.39-.78,60,1.4,60,1.4Z"
                    />
                    <path
                      className={style.avocado_1}
                      d="M60,.09A27.4,27.4,0,0,0,38.67,8.15c-5.06,5.24-7.49,12.32-8.42,19.41C29.09,36.44,28.1,44,23.92,52.08c-6.93,13.4-17,25-21.38,39.66-4.67,15.75-3,35.57,6.09,49.5C24.22,165,59.19,169,83.81,158.7c11-4.61,21.1-12.83,24.73-24.58,5.43-17.54,3.89-36.72-3.36-53.41-3.91-9-8.87-17.5-12.77-26.51a120.62,120.62,0,0,1-5.93-16.91c-1.7-6.41-2.6-13-5.09-19.15C78.09,9.92,70.31-1.09,60,.09c-1.66.19-1.68,2.81,0,2.62,9.15-1,16,8.91,18.92,16.13,3.71,9.16,4.68,19.21,8,28.54A190.58,190.58,0,0,0,96.6,69c7.81,15.42,13.68,30.3,12.25,48-1.24,15.35-5.62,27.83-19.27,36-21.84,13-55.63,11.9-73.89-7C4.17,134,.8,114.88,3.53,99,6,84.34,14.75,72.58,22.29,60.22c3.62-5.93,6.92-12.15,8.7-18.9,2.35-8.86,1.2-18.19,5.91-26.44A24.63,24.63,0,0,1,60,2.71C61.62,2.86,61.61.24,60,.09Z"
                    />
                  </g>
                  <circle
                    className={style.avocado_4}
                    cx="55.92"
                    cy="107.99"
                    r="25.99"
                    transform="translate(-65.32 117.52) rotate(-67.12)"
                  />
                  <path
                    className={style.avocado_5}
                    d="M62.51,82.88a23.14,23.14,0,1,1-31.7,31.71,26,26,0,1,0,31.7-31.71Z"
                  />
                  <g>
                    <path
                      className={style.avocado_6}
                      d="M41.15,103.25a2.86,2.86,0,1,0,3.18-2.51A2.86,2.86,0,0,0,41.15,103.25Z"
                    />
                    <path
                      className={style.avocado_6}
                      d="M65.88,106.18a2.86,2.86,0,1,0,3.18-2.51A2.87,2.87,0,0,0,65.88,106.18Z"
                    />
                    <path
                      className={style.avocado_6}
                      d="M60.72,107a4.84,4.84,0,0,1-1.63,4,5.58,5.58,0,0,1-8.34-1,4.89,4.89,0,0,1-.65-4.31,6.14,6.14,0,0,0,1.57,3.58,5.22,5.22,0,0,0,6.69.79A6,6,0,0,0,60.72,107Z"
                    />
                  </g>
                </g>
                <ellipse
                  className={style.avocado_7}
                  cx="56.33"
                  cy="195.4"
                  rx="46.19"
                  ry="5.76"
                />
              </g>
            </g>
          </g>
        </g>
      </svg>
      <p className="text-center">Loading...</p>
    </>
  )
}

export default Spinner