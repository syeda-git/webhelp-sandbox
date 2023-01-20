/*
 ********************************************************************
 * Licensed Materials - Property of HCL                             *
 *                                                                  *
 * Copyright HCL Software 2020. All Rights Reserved.                *
 *                                                                  *
 * Note to US Government Users Restricted Rights:                   *
 *                                                                  *
 * Use, duplication or disclosure restricted by GSA ADP Schedule    *
 *                                                                  *
 * Author: Emmanuel Palogan                                         *
 * Release Version: v.Q42022                                         *
 ********************************************************************
 */
import { getIndexLocation, msg } from './utils.js';
import { LNG_IDX } from './config.js'
import { LANG_LIST } from './constants.js'

const defaultStarRate = 999;
const defaultCommentRate = "no comment - ";

export function submitRating() {
    let userFeedback = document.getElementById('rate-comment').value;
    let userRate = getStarRating();
    let selectedLang = getIndexLocation(LNG_IDX)
    if (LANG_LIST[selectedLang] === undefined) selectedLang = "en"
//User has to enter feedback in comment box, if he/she has selected both checkbox and star rating  
    let rateCheck = document.getElementById("rateCheck");
    if(userRate !== "" && rateCheck.checked !=false && userFeedback == ""){

       alert(msg(selectedLang, "feedback.comment.alert"));
    } else if (userRate !== "" || userFeedback !== "") {
//Alerts user to remove personal information from user feedback
        const emailRegEx = new RegExp(/\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+/, "gm");
        let contact_num = /([0-9-+:]{7,32})/gm;
		let IPaddressRegEx = /[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}/gm;
        if(emailRegEx.test(userFeedback) || contact_num.test(userFeedback) || IPaddressRegEx.test(userFeedback)){
            alert(msg(selectedLang, "feedback.comment.PII.messagealert"));
         } else{
        if (userRate === "") userRate = defaultStarRate;
        if (userFeedback === "") userFeedback += defaultCommentRate + Math.random().toString(36).substr(2, 9);
        gtag('event', 'User Feedback', {'event_category': 'rating', 'event_label':userFeedback, 'value':userRate});
        console.log("Star rating: " + userRate + "\nComment: " + userFeedback);
        alert(msg(selectedLang, "rating.success.alert"));
        clearRating();
        location.reload();
        }

    } else {
        alert(msg(selectedLang, "rating.error.alert"));
    }
}

export function toggleRateCheckbox() {
    let rateCheck = document.getElementById("rateCheck");
    let userFeedback = document.getElementById('rate-comment');
    userFeedback.value = "";
    userFeedback.disabled = !rateCheck.checked;
    let starRating = getStarRating();

//This code enables or disables a submit button based on the checkbox is ticked or not.
    
    let submitBtn = document.getElementById('rate-submit');

   if(rateCheck.checked != true) {
       
       submitBtn.setAttribute("disabled", true)
       userFeedback.setAttribute("disabled", true)
   } else {
        
       submitBtn.removeAttribute("disabled")
       userFeedback.removeAttribute("disabled")
   }
    //return rateCheck;
    if (starRating !== ""){
        submitBtn.removeAttribute("disabled")
    }
}

export function toggleSubmitButton() {
    let userFeedback = document.getElementById('rate-comment');
    let starRating = getStarRating();
    let submitBtn = document.getElementById('rate-submit');
    
    if (starRating !== "" || userFeedback !== "") {
   
        submitBtn.removeAttribute("disabled")
        
    } else {
        submitBtn.setAttribute("disabled", true)
    }

}

function clearRating() {
    let userFeedback = document.getElementById('rate-comment');
    let starRating = document.getElementsByName('rate');
    let rateCheck = document.getElementById("rateCheck");

    rateCheck.checked = false;
    userFeedback.value = "";
    userFeedback.disabled = true;

    starRating.forEach(function(val){ 
        if (val.checked) {
            val.checked = false
        }
    })
}

function getStarRating() {
    let starRating = document.getElementsByName('rate');
    let userRate = "";

    starRating.forEach(function(val){ 
        if (val.checked) {
            userRate = val.value;
        }
    })


    return userRate;
}