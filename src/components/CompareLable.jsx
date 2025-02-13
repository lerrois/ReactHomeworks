import React from 'react';

//
// function сomparison(a, b, precision) {
//
//     let num = (a > b ? a : b)
//
//     return Math.abs(num <= precision ? num : precision)

function CompareLable(props) {
    let comparetext = "Looser"
    if (getStars(result1) > getStars(result2 ) ) {
        comparetext = "Winner"
    }

    return (
        <div className={'comparediv'}>
            {
                status.every((value, index) => value === compareRestart[index]) ?
                    <label
                        className={'battle_label'}
                        name={"winner_or_not"}
                    /> :

                    <></>
            }
        </div>
    );
}

export default CompareLable;