import React, { useEffect, useState } from "react";
import zxcvbn from "zxcvbn";
import './PasswordStrength.css'

export default function PassWordStrength({password}){
    const passwordResult = zxcvbn(password)
    const numCases = 4
    const wholeNum = 100
    const passwordMeter = (passwordResult.score * wholeNum)/numCases
    

    const funcPasswordLabel = () => {
        switch(passwordResult.score){
            case 0:
                return 'Very Weak';
            case 1:
                return 'weak';
            case 2:
                return 'Fair';
            case 3:
                return 'Good';
            case 4:
                return 'Strong';
            default:
                return '';           
        }
    }

    const funcProgressColor = () => {
        switch(passwordResult.score){
            case 0:
                return '#8B0000';
            case 1:
                return '#FF7F7F';
            case 2:
                return '#FFA500';
            case 3:
                return '#FFFF00';
            case 4:
                return '#00FF00';
            default:
                return '#808080';           
        }
    }

    const changePasswordColor = () =>({
        width: `${passwordMeter}%`,
        background: funcProgressColor(),
        height: '7px',
    })

    const pw = () => {
        var pw = password.toString();
        const errors = [];
        if(pw.length < 8){
            errors.push('Has at least 8 characters')
        }
        if(pw.search(/[0-9]/i) < 0){
            errors.push('Has one digit')
        }
        if(pw.search(/[A-Z]/i) < 0){
            errors.push('Has one uppercase letter')
        }
        if(pw.search(/[!@#$%^&*()]/i) < 0){
            errors.push('Has a special characters')
        }
        if(errors.length > 0){
            return errors
        }
        return true
    }

    return (
        <>
            <div className="progress">
                <div className="progress-bar" style={changePasswordColor()}>
                </div>
            </div>
            <p className="pass"style={{color: funcProgressColor()}}>{funcPasswordLabel()}</p>
            <span>{pw()[0]}</span>
            <br/>
            <span>{pw()[1]}</span>
            <br/>
            <span>{pw()[2]}</span>
            <br/>
            <span>{pw()[3]}</span>
            <br/>
        </>
    )
}
