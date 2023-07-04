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
 * Release Version: v.Q12023                                         *
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

export const LATEST_VERSION = "Version 7 CR7"; //Mention the latest version in double quotes.

//export const VER_PATH = "./../"+LATEST_VERSION+"/"


//Change Product Name to your actual product name. ex: Digital Experience
export const VERSION_LIST = {
    "0" : "Product Name",
    "v7" : "Version 7 CR7",
	"v6": "Version 6 CR6",
	"v5": "Version 5 CR5"


	//"v55": "Version 5.5 CR3"
}

export const VERSION_LIST_URL = {
    // "v7": "https://help.hcltechsw.com/connections/v7/index.html",
	// "v6": "https://help.hcltechsw.com/connections/v6/index.html",
    // "v55": "https://help.hcltechsw.com/connections/v55/index.html",
}

//Change the list base on your product languages availability.
export const PROD_LANG_LIST = ["en", "fr", "de", "ja"];
// export const PROD_LANG_LIST = ["en", "ar", "bg", "ca", "zh_CN", "zh_TW", "hr", "cs", "da", "nl", "fi", "fr", "de", "iw", "it", "hu", "ja", "kk", "ko", "no", "pl", "pt_BR", "pt", "ro", "ru", "sk", "sl", "es", "sv", "th", "tr"];

//List of product landing page URLs

export const PROD_LANDPAGE_URL = {
	bigfix : "https://help.hcltechsw.com/bigfix/landing/index.html",
	workloadautomation : "https://help.hcltechsw.com/workloadautomation/welcome/index.html",
	commerce : "https://help.hcltechsw.com/commerce/index.html",
	unica : "https://help.hcltechsw.com/unica/uc/unica_welcome_portal.html",
	UnicaDiscover : "https://help.hcltechsw.com/UnicaDiscover/UD/index.html"
	
};