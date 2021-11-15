import React, { useState } from 'react'

function NoResults({exceptionType}) {
    if(exceptionType === "num"){
        return(
            <div className="exceptionArea">
                <p>검색어에 숫자가 들어있습니다.</p>
                <p>다시 검색해주세요.</p>
            </div>
        )
    }
}

export default NoResults