import React from "react"

function DetailImage({img, name}){

    return (
        <div className="adBanner"
            style={{
                background: `linear-gradient(
                190deg,
                rgba(0, 0, 0, 0.8),
                rgba(0, 0, 0, 0.8)),
                url(${img})`,
                backgroundSize: "cover",
            }}
        >
            <div className="detailTitle">
                <h1>{name}</h1>
            </div>

        </div>

    )
}

export default DetailImage