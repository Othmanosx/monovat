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
          className={`tp-service-item align-items-center justify-content-center ${
            border ? border : ""
          } d-flex mb-30 p-4 gap-4`}
        >
          <div
            className="tp-sv-img bg-shine"
            style={{
              width: 530,
              height: "fit-content",
              maxWidth: 230,
              minWidth: 230,
            }}
          >
            <img
              src={service.img}
              alt=""
              style={{
                marginTop: "-20%",
                marginRight: "-15%",
                width: "125%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
          <div className="tp-sv-content pl-60 pe-0">
            <h3 className="tp-sv-title mb-4" style={{ fontWeight: 700 }}>
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
