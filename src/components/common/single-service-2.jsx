/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import React from "react"

const SingleServiceTwo = ({ service, border }) => {
  return (
    <div className="col-lg-6 col-md-12 col-12 position-relative">
      <div
        className="tp-sv-box wow tpfadeUp"
        data-wow-duration={service.duration}
        data-wow-delay={service.delay}
      >
        <div
          className={`tp-service-item ${
            border ? border : ""
          } d-flex mb-30 p-5 py-4`}
        >
          <div
            className="tp-sv-img"
            style={{
              margin: "-85px -100px -30px 0px",
            }}
          >
            <img src={service.img} alt="" width={280} />
          </div>
          <div className="tp-sv-content pl-60 pe-0">
            <h3 className="tp-sv-title mb-2">
              <Link href={`/service-details/${service.id}`}>
                <a>{service.title}</a>
              </Link>
            </h3>
            <p className="mb-1">{service.text_1}</p>
            <p>{service.text_2}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleServiceTwo
