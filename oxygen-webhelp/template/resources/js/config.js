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
export const LNG_IDX = 3;
export const VER_IDX = 2;
export const LND_IDX = 1;
export const LANGUAGE = "Language";
export const VERSION = "Version";
export const PAGE_IDX_LOC = "index.html";
export const ENABLE_LANG_EN = false; // This should be the same configuration for all the languages within the same version.
export const PDFPRINTICON = false; // Set to true to enable PDF print icon in the TOC page.
export const PDF_URL_PATH = "https://help.hcltechsw.com/bigfix/10.0/platform/pdf/BigFix_Asset_Discovery_Users_Guide.pdf"; //Mention your PDF URL path here
export const CHANGE_LANG = "en"; //Mention the language you want to generate the webhelp build

//Change Product Name to your actual product name. ex: Digital Experience
export const VERSION_LIST = {
    "0" : "Product Name",
    // "v6": "Version 6 CR6",
    // "v55": "Version 5.5 CR3"
}

export const VERSION_LIST_URL = {
    // "v6": "https://help.hcltechsw.com/connections/v6/index.html",
    // "v55": "https://help.hcltechsw.com/connections/v55/index.html",
}

//Change the list base on your product languages availability.
export const PROD_LANG_LIST = ["en", "fr", "de", "ja"]
// export const PROD_LANG_LIST = ["en", "ar", "bg", "ca", "zh_CN", "zh_TW", "hr", "cs", "da", "nl", "fi", "fr", "de", "iw", "it", "hu", "ja", "kk", "ko", "no", "pl", "pt_BR", "pt", "ro", "ru", "sk", "sl", "es", "sv", "th", "tr"]