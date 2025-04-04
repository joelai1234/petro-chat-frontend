export const form6QTemplate = `<html xmlns="http://www.w3.org/1999/xhtml" xmlns:ixt1="http://www.xbrl.org/inlineXBRL/transformation/2010-04-20" xmlns:xbrli="http://www.xbrl.org/2003/instance" xmlns:ix="http://www.xbrl.org/2013/inlineXBRL" xmlns:xbrldi="http://xbrl.org/2006/xbrldi" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:link="http://www.xbrl.org/2003/linkbase" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:ixtsec="http://www.sec.gov/inlineXBRL/transformation/2015-08-31" xmlns:ixt4="http://www.xbrl.org/inlineXBRL/transformation/2020-02-12" xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:xbrldt="http://xbrl.org/2005/xbrldt" xmlns:ferc-form-6q="http://ferc.gov/form/2022-01-01/ferc-form-6q">
  <head><title>FERC Form</title><meta content="text/html; charset=UTF-8" http-equiv="Content-Type"></meta><style type="text/css">
/*<![CDATA[*/       /*
        Theme Name: Form Templates
        Theme URI: https:/ferc.org/themes/formTemplates/
        Author: FERC
        email: campbell.pryde@XBRL.US
        Author URI: https://ferc.org/
        Description: This stylesheet controls the rendering of Form Templates to ensure that all forms have a consistent look and feel within the schedules on a form and schedules across forms.
        Version: 1.0
        License: GNU General Public License v2 or later
        License URI: http://www.gnu.org/licenses/gpl-2.0.html
        Text Domain: formTemplates
        Tags: abstract, col-heading, sch-title
        
        */
        @namespace ix url(http://www.xbrl.org/2013/inlineXBRL);

        .abstract {
            font-weight: bold;
         }
         .account-number {
            text-align: center; 
         }
         .boolean-flag {
            text-align: center; 
         }
         .status-flag {
            text-align: center; 
         }
         .page-number {
            text-align: center; 
         }
         .text-block {
            padding-bottom: 30 !important
        }

       

       body.xbrl {
            font-family: sans-serif;
        }

        div.xbrl {
            font-family: sans-serif;
        }
        
        table.xbrl {
            border-collapse: collapse;
            border: 1px solid;
            font-family: sans-serif;  
            
        }
        /* Makes the footnote cells span the full width of the page when there
           is xhtml content in the footnote
        */
        table.footnote-table {
            width: 100%;
            table-layout: fixed;
        }        
        /* Used to format cells in the template */
        td.top-border {
            border-top-style: solid;
            border-top-width: 4px;
        }

        td.xbrl {
            border: 1px solid;
            padding:10 !important;
            margin:5 !important;  
        }

        td.xbrl-no-top-line {
            border-bottom: 1px solid;
            border-left: 1px solid;
            border-right: 1px solid;
            padding:10 !important;
            margin:5 !important;  
        }
        td.xbrl-no-bottom-line {
            border-top: 1px solid;
            border-left: 1px solid;
            border-right: 1px solid;
            padding:10 !important;
            margin:5 !important;  
        }

        td.xbrl-no-bottom-top-line {
            border-left: 1px solid;
            border-right: 1px solid;
            padding:10 !important;
            margin:5 !important;  
        }

        td.xbrl-no-sides {
            border-top: 1px solid;
            border-bottom: 1px solid;
            padding:10 !important;
            margin:5 !important;  
        }

        td.xbrl-right-side-only {
            border-right: 1px solid;
            padding:10 !important;
            margin:5 !important;  
        }
        td.xbrl-no-box {
            padding:10 !important;
            margin:5 !important;  
        }
/**
        [contextref] {
            background-color: pink;
        }
**/     
        td.hideCell {
            display: none;
        }
    
        td.boolean-flag {
            width: 10%; 
        }
        td.status-flag {
            width: 10%; 
        }
        td.line-number {
            width: 2%;
        }

        td.account-number {
            width: 10%;
        }
        td.page-number {
            width: 10%; 
         }

        td.numeric_items{
            width: 15%;
        }

        td.percent_items{
            width: 10%;
        }
        td.date_items{
            width: 15%;
        }

        td.description_items {
            width: 25%;
            text-align: left;
        }

        td.monetary_items {
            width: 15%;
        }

        td.short_months {
            width: 5%;
        }
        
        .container-table {
            padding:0 !important;
            margin:0 !important;
        }

        .cell-top {
            vertical-align: top;
        }

        /* Used to center text */
        .center-text {
            text-align: center; 
        }

        /* Overflow text **/
        .overflow {
            max-width: 100px;
            overflow: visible;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        /* Used for table inside another table which will have no border.**/
        .contained-table {
            border: none;
        }

        /* Used to indicate that a cell is a column heading */
        .col-heading {
            text-align: center;
            font-weight: bold
        }

        .col-heading-row {
            font-weight: bold;
            background-color: rgb(167, 157, 157);
        }


        /** used to hide formatting on a template  if required */
        .hide {display: none}

        .ident-header {
            text-align: center;
        }

        .date_items {
            text-align: center;
        }

        .duration_items {
            text-align: center;
        }

        /* Used to indicate that the value is a numeric item */
        .numeric_items {
            text-align: right;
        }

        .monetary_items {
            text-align: right;
        }

        .percent_items {
            text-align: right;
        }

        /* Used to add percentage signs **/

        .percent_items > div.sub-replacement::after {
            content: '%';
        } 
        /* Used to add parens around negative numbers */
        .sign-negative::before {
            content: '(';
        }
        .sign-negative::after {
            content: ')';
        }

        /* Used to add dollar sign to monetary items */
        .unit-USD::before {
            content: '';
        }
        
        /* Used to remove an text decoration */
        .plain {
            text-decoration: none;
            } 

        /* used to define the title of a a schedule */
        .sch-title {
            text-align: center; 
            font-weight: bold;
        }
        /* Specifically for form 714 */
        .sch-header-title {
            text-align: center; 
            font-weight: bold;
            font-size: x-large;
        }
        .quart-split {
            width: 25%;
        }


        .sch-as-of-date-title {
            text-align: center; 
            font-weight: bold;
            font-size: large;
        }


        .form-id-code-top {
            text-align: left;
            vertical-align: top;
            width: 25%;
        }

        .form-name-top {
            text-align: left;
            vertical-align: top;
            border-top: 1px solid;
            border-left: 1px solid;
            border-bottom: 1px solid;
            padding:10 !important;
            margin:5 !important;  
            width: 25%;
        }

        .left-id-col {
            border-right: 2px solid;
            padding-left: 30 !important;
        }
        .left-id-col2 {
            border-right: 2px solid;
            padding-left: 60 !important;
        }

        .right-id-col {
            padding-left: 30 !important;
        }

        /* used to define the title of a a Form */
        .form-title {
            text-align: center; 
            font-weight: bold;
            font-size: large;
            
        }
        span.title {
            font-weight: bold;
        }
        div.padding-1 {
            padding-left: 0px;
        }

        div.padding-2 {
            padding-left: 4px;
        }

        div.padding-3 {
            padding-left: 12px;
        }

        div.padding-4 {
            padding-left: 16px;
        }

        div.padding-5 {
            padding-left: 20px;
        }

        .field-ref {
            text-align: left;
            font-size: 8pt;
        }

        .ident-table {
            border-bottom-style: none
        }

        .schedule-header {
            border-bottom-style: none
        }

        .schedule-footer {
            border-bottom-style: none;
            font-weight: bold;

        }

        /* Used add a grayed out box in a template */
        .gray-out {
            background-color: grey
        }
        /** Used for data Defined Headings such as Name of Pipeline **/
        .data-heading {
            background-color: lightgrey
        }

        /* Used to format cells that are a total */
        .total_items {
            font-weight: bold
        }

        .preformatted-text {
            white-space:pre-wrap;
            font-family: monospace;
        }        


        div.sub-value {
            display:inline-block
        }
        div.sub-html {
            display:inline-block
        }
        /* The preamble can be removed */
        div.sub-preamble {
            display:inline-block
        }
        div.unit {
            display:inline-block;
        }
        div.sign {
            display:inline-block;
        }

        table.footnote-page-title {
            width: 100%
        }
        td.footnote-page-title {
            text-align: center
        }
        div.ferc-seal, div.ferc-seal-large {
            content:url("data:image/png;base64,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");
        }
        div.ferc-seal {
            width: 100px;
            height: 100px;
        }

        div.ferc-seal-large {
            width: 220px;
            height: auto;
        }
        /*------------------------- Formatting for Ordered Lists -------------------------*/

        
    ol.upper-roman,  ol.upper-alpha, ol.lower-roman,  ol.lower-alpha, ol.number {
        margin: 1em 0;
        counter-reset: item; 
        list-style-type: none;
    }
   
    .start2 > li:before, .start3 > li:before, .start4 > li:before, .start5 > li:before, .start6 > li:before, .start7 > li:before, .start8 > li:before, .start9 > li:before, .start10 > li:before, .start11 > li:before, .start12 > li:before {
        content: counter(item ) '.';
        counter-increment: item;
        /* Alignment */
        position: absolute;
        margin-left: -3.50em;
        text-align: right;
        width: 3em;
    }
    
    ol.upper-roman > li:before {
        content: counter(item ) '.';
        counter-increment: item;
        /* Alignment */
        position: absolute;
        margin-left: -3.50em;
        text-align: right;
        width: 3em;
    }

    ol.upper-alpha > li:before {
        content: counter(item ) '.';
        counter-increment: item;
        /* Alignment */
        position: absolute;
        margin-left: -3.50em;
        text-align: right;
        width: 3em;
    }

    ol.number > li:before {
        content: counter(item ) '.';
        counter-increment: item;
        /* Alignment */
        position: absolute;
        margin-left: -3.50em;
        text-align: right;
        width: 3em;
    }

    ol.lower-alpha > li:before {
        content: counter(item ) '.';
        counter-increment: item;
        /* Alignment */
        position: absolute;
        margin-left: -3.50em;
        text-align: right;
        width: 3em;
    }

    ol.lower-roman > li:before {
        content: counter(item ) '.';
        counter-increment: item;
        /* Alignment */
        position: absolute;
        margin-left: -3.50em;
        text-align: right;
        width: 3em;
    }
    
    ol.start2 {
        margin: 1em 0;
        counter-reset: item 1; /* The first list item will start at 2, II */ 
        list-style-type: none;
    }
    
    ol.start3 {
        margin: 1em 0;
        counter-reset: item 2; /* The first list item will start at 3, III */ 
        list-style-type: none;
    }
    
    ol.start4 {
        margin: 1em 0;
        counter-reset: item 3; /* The first list item will start at 4, IV */ 
        list-style-type: none;
    }
    
    ol.start5 {
        margin: 1em 0;
        counter-reset: item 4; /* The first list item will start at 5, V */ 
        list-style-type: none;
    }
    
    ol.start6 {
        margin: 1em 0;
        counter-reset: item 5; /* The first list item will start at 6, VI */ 
        list-style-type: none;
    }
    
    ol.start7 {
        margin: 1em 0;
        counter-reset: item 6; /* The first list item will start at 7, VII */ 
        list-style-type: none;
    }
    ol.start8 {
        margin: 1em 0;
        counter-reset: item 7; /* The first list item will start at 8, VIII */ 
        list-style-type: none;
    }
    ol.start9 {
        margin: 1em 0;
        counter-reset: item 8; /* The first list item will start at 9, IX */ 
        list-style-type: none;
    }
    ol.start10 {
        margin: 1em 0;
        counter-reset: item 9; /* The first list item will start at 10, X */ 
        list-style-type: none;
    }
    ol.start11 {
        margin: 1em 0;
        counter-reset: item 10; /* The first list item will start at 11, XI */ 
        list-style-type: none;
    }ol.start12 {
        margin: 1em 0;
        counter-reset: item 11; /* The first list item will start at 12, XII */ 
        list-style-type: none;
    }
    
    
    ol.upper-roman > li:before {
        content: counter(item, upper-roman ) '.';
    }
    ol.upper-alpha > li:before {
        content: counter(item, upper-alpha ) '.';
    }
    ol.number > li:before {
        content: counter(item ) '.';
      }
  
    ol.lower-alpha > li:before {
                content: counter(item, lower-alpha ) '.';
      }

      ol.lower-roman > li:before {
        content: counter(item, lower-roman ) '.';
    }
   
            
    




        /** Underlining of text **/

        .under-line {
            text-decoration: underline;
        }

        /**  Formatting of Checkbox **/

        span.checkbox {
            font-size: x-large;
        }
        

        /* Cover Page formatting stuff */
        .center-image {
            display: block;
            margin-left: auto;
            margin-right: auto;
            width: 50%;
          }

        .box {
            border-style:solid;
            border-width: 1pt;
            border-color: black;
        }
    
        .center-blocktext {
        margin-left: auto;
        margin-right: auto;
        width: 35em
        }
        
        li.cover-instructions {
            margin: 10px 0;
        }

        /* Used for Instructions on Form 1F **/
        .two_column {
            column-count: 2
            ;
          }

        /* confidential styling */
        .parent-confidential {background: repeating-linear-gradient(
                                                    45deg,
                                                   /* rgb(233, 124, 124),
                                                    rgb(233, 124, 124)5px,*/
                                                    lightgrey,
                                                    lightgrey 5px,                                                    
                                                    white 5px,
                                                    white 10px
                                                    );}
        
        /* redacted styling */
        .parent-redacted {background: repeating-linear-gradient(
                                                    45deg,
                                                    lightgrey,
                                                    lightgrey 5px,
                                                    white 5px,
                                                    white 10px
                                                    );
                          text-align: center;}
        
        .redacted:after {content: 'REDACTED'; font-weight: bold;}
        

        /* confidential watermark */
        #watermark{
            padding: 15px;
            position: fixed;
            top: 50%;
            left: 50%;
            -ms-transform: translateX(-50%) translateY(-50%);
            -webkit-transform: translate(-50%,-50%);
            transform: translate(-50%,-50%);
            }
            
        #watermark p {
            /* the actual 'watermark' */
            opacity: 0.5; /* Firefox, Chrome, Safari, Opera, IE >= 9 (preview) */
            filter:alpha(opacity=50); /* for &lt;= IE 8 */
            font-size: xxx-large;
            text-align: center
            }     
            
        /* -------------------------FOOTNOTES ----------------------------------------*/

        .footnote-ref {
            
            vertical-align: super; /* 2 */
            font-size: 0.5em; /* 3 */
            margin-left: 2px; /* 4 */
            color: blue; /* 5 */
            text-decoration: underline; /* 5 */
            cursor: pointer; /* 5 */
          }

        /* -------------------------Tooltip STUFF ----------------------------------*/
        .tooltip {
            position: relative;
            display: inline-block;
            border-bottom: 1px dotted rgb(185, 183, 183);
            }
    
            .tooltip .tooltiptext {
            visibility: hidden;
            font-size: 12px;
            background-color: rgb(8, 199, 49);
            color: #fff;
            text-align: center;
            border-radius: 6px;
            padding: 5px 5px;
    
            /* Position the tooltip */
            position: absolute;
            display: block;
            z-index: 1;
            }
    
            .tooltip:hover .tooltiptext {
            visibility: visible;
            }
        /*--------------------------------------------------------------------------*/

        xule\:template-display {
            color: cadetblue
        }

        xule\:replace {
            color: blue
        }

        @media print {
            .screen-page-separator {
                display: none;
            } 
            .print-page-separator {
                page-break-after: always;
            }

           }

        @media screen {
            .print-page-separator {
                display: none;
            }
        }        /*]]>*/
</style></head>
  <body><div style="display:none"><ix:header><ix:hidden></ix:hidden><ix:references></ix:references><ix:resources></ix:resources></ix:header></div><div class="xbrl">
        <table width="100%">
            <tr>
                <td class="cell-top">
                    <table class="xbrl" width="70%">
                        <tr>
                            <td class="xbrl center-text">
                                THIS FILING IS
                            </td>
                        </tr>
                        <tr>
                            <td class="left-id-col xbrl">
                                <span>Item 1:</span>
                                    
                                    <div class="sub-value sub-replacement"><div class="sub-html"><span class="checkbox">&#9744;</span> An Initial (Original) Submission</div></div><span> OR </span>
                                    <div class="sub-value sub-replacement"><div class="sub-html"><span class="checkbox">&#9744;</span> Resubmission No.</div></div></td>
                        </tr>
                    </table>
                
                </td>
                <td class="form-id-code-top"></td>
            </tr>
        </table>
        <table width="100%">
            <tr> 
                <td class="center-text" colspan="3" style="padding-bottom: 30px"></td>
            </tr>
            <tr>
                <td colspan="3"> <div class="ferc-seal-large center-image"></div></td>
            </tr>
            <tr> 
                <td class="center-text" colspan="3" style="padding-bottom: 100px"></td>
            </tr>
            <tr>
                <td class="center-text" colspan="3">
                    <h1>FERC FINANCIAL REPORT<br/> FERC FORM No. 6: Annual Report of<br/>
Oil Pipeline Companies and <br/>Supplemental Form 6-Q: Quarterly<br/> Financial Report</h1><br/><br/>(Formerly ICC Form P)
                </td>
            </tr>
            <tr>
            <td class="center-text" colspan="3" style="padding-bottom: 100px">      
            </td>
             </tr>
            <tr>
                
                <td>
                    <div class="box center-blocktext">
                        These reports are mandatory under the Interstate Commerce Act, Sections 20 and 18 CFR
Parts 357.2 and 357.4. Failure to report may result in criminal fines, civil penalties and other
sanctions as provided by law. The Federal Energy Regulatory Commission does not consider
this report to be of a confidential nature.
                    </div>
                </td>
             
            </tr>
            <tr>
            <td class="center-text" colspan="3" style="padding-bottom: 350px">
                    
            </td>
        </tr>
    </table>
        <table class="xbrl" width="100%">
                  <tr>
            <td class="xbrl">
                <div class="abstract">Exact Legal Name of Respondent (Company)</div><br/>
                <%= respondent_exact_legal_name %>
                <div class="sub-value sub-no-replacement"></div></td>
            
            <td class="xbrl">
                <div class="sub-value sub-replacement">Year/Period of Report</div><br/>
               
                End of: <div class="sub-value sub-no-replacement"></div><span>/<%= year_period_report %></span>
                <div class="sub-value sub-no-replacement"></div></td>
        </tr>
        </table>
        <br/>
        <div class="schedule-footer">

            <div>FERC FORM NO. 
                    <div class="sub-value sub-no-replacement"></div><span> </span>
                    <div class="sub-value sub-replacement"> (ED. 02-04)</div></div>
           
        </div>
        </div>
        <hr class="screen-page-separator schedule-separator"></hr><div class="print-page-separator sechedule-separator"></div><div class="xbrl">
        <h2>INSTRUCTIONS FOR FILING FERC FORMS 6 AND 6-Q GENERAL INFORMATION </h2>

        <div class="sub-value sub-replacement"><div class="sub-html"><div class="two_column">
        <ol class="lower-roman">
            <li class="cover-instructions"><h3>Purpose</h3>
            The FERC Form No. 6 is an annual regulatory reporting requirement (18 C.F.R. &#167; 357.2). The FERC Form No. 6-Q is a quarterly regulatory reporting requirement (18 C.F.R. &#167; 357.4). These reports are designed to collect both financial and operational informational from oil pipeline companies subject to the jurisdiction of the Federal Energy Regulatory Commission. These reports  are also considered to be non-confidential public use forms.
            </li>
            <li class="cover-instructions"><h3>Who Must File</h3>
                <ol class="lower-alpha">
                    <li class="cover-instructions">
                    Each oil pipeline carrier whose annual jurisdictional operating revenues has been $500,000 or more for each of the three previous calendar years must file FERC Form No. 6 (18 C.F.R. &#167; 357.2 (a)). Oil pipeline carriers submitting FERC Form No. 6 must submit FERC Form No. 6-Q (18 C.F.R. &#167; 357.4(a)). Newly established entities must use projected data to determine whether FERC Form No. 6 must be filed.</li>
                    <li class="cover-instructions">
                    Oil pipeline carriers exempt from filing FERC Form No. 6 whose annual jurisdictional operating revenues have been more than $350,000 but less than $500,000 for each of the three previous calendar years must prepare and file page 301, &#8220;Operating Revenue Accounts (Account 600),&#8221; and page 700, &#8220;Annual Cost of Service Based Analysis Schedule,&#8221; of FERC Form No. 6. When submitting pages 301 and 700, each exempt oil pipeline carrier must include page 1 of the FERC Form No. 6, the Identification and Attestation schedule (18 C.F.R. &#167; 357.2 (a)(2)).</li>
                    <li class="cover-instructions">
                    Oil pipeline carriers exempt from filing FERC Form No. 6 and pages 301 and whose annual jurisdictional operating revenues were $350,000 or less for each of the three previous calendar years must prepare and file page 700, &#8220;Annual Cost of Service Based Analysis Schedule,&#8221; of FERC Form No. 6. When submitting page 700, each exempt oil pipeline carrier must include page 1 of FERC Form No. 6, the Identification and Attestation schedule (18 C.F.R. &#167; 357.2 (a)(3)).</li>
                </ol>
            </li>
            <li class="cover-instructions"><h3>What and Where to Submit</h3>
                <ol class="lower-alpha">
                    <li class="cover-instructions">
                        Submit FERC Form Nos. 2, 2-A and 3-Q electronically through the eCollection portal at <a href="https://eCollection.ferc.gov">https://eCollection.ferc.gov</a>, and according to the specifications in the Form 6 and 6-Q taxonomies.</li>
                    <li class="cover-instructions">
                        The Corporate Officer Certification must be submitted electronically as part of FERC Form Nos. 6 and 6-Q filings.</li>
                    <li class="cover-instructions">
                        Check the appropriate box on page 2, List of Schedules, if the Annual Report to Stockholders will be submitted, or if no Annual Report to Stockholders has been prepared.</li>
                    <li class="cover-instructions">
                        Submit immediately upon publication, by either eFiling or mail, two (2) copies of the latest Annual Report to Stockholders to the Secretary of the Commission at:<br/>
                                <br/>
                                Secretary of the Commission<br/>
                                Federal Energy Regulatory Commission<br/>
                                888 First Street, NE<br/>
                                Washington, DC 20426<br/>
                                <br/>
                        </li>
                    <li class="cover-instructions">
                        Filers are encouraged to file their Annual Report to Stockholders using eFiling at <a href="http://www.ferc.gov/docs-filing/efiling.asp">http://www.ferc.gov/docs-filing/efiling.asp</a>. Further instructions are found on Commission&#8217;s website at <a href="https://www.ferc.gov/ferc-online/ferc-online/frequently-asked-questions-faqs-efilingferc-online">https://www.ferc.gov/ferc-online/ferc-online/frequently-asked-questions-faqs-efilingferc-online</a>.</li>
                    <li class="cover-instructions">
                        Blank copies of FERC Form Nos. 6 and 6-Q are available free of charge from <a href="https://www.ferc.gov/general-information-1/oil-industry-forms">https://www.ferc.gov/general-information-1/oil-industry-forms</a>.</li>
                </ol>
            </li>
            <li class="cover-instructions"><h3>When to Submit</h3><p></p>
                FERC Forms must be filed by the following schedule: <p></p>
                <ol class="lower-alpha">
                    <li class="cover-instructions"> FERC Form No. 6 for each year ending December 31 must be filed by April 18th of the following year (18 C.F.R. &#167; 357.2), and</li>
                    <li class="cover-instructions">FERC Form No. 6-Q for each calendar quarter must be filed within 70 days after the end of the reporting quarter (18 C.F.R. &#167; 357.4).</li>
                </ol>
            </li>                  
            <li class="cover-instructions"><h3>Where to Send Comments on Public Reporting Burden</h3><p></p>                      
                <ol class="lower-alpha">
                    <li class="cover-instructions">The public reporting burden for the FERC Form No. 6 is estimated to average 161 hours per response, including the time for reviewing instructions, searching existing data sources, gathering and maintaining the data needed, and completing and reviewing the collection of information. The public reporting burden for the FERC Form No. 6-Q is estimated to average 150 hours per response. Send comments regarding these burden estimates or any aspect of these information collections, including suggestions for reducing this burden, to the Federal Energy Regulatory Commission, at <a href="mailto:DataClearance@FERC.gov">DataClearance@FERC.gov</a>, or to 888 First Street, NE, Washington, DC 20426 (Attention: Information Clearance Officer); and to the Office of Information and Regulatory Affairs, Office of Management and Budget, Washington, DC 20503 (Attention: Desk Officer for the Federal Energy Regulatory Commission). For security reasons, comments should be sent by e-mail to OMB at <a href="mailto:oira_submission@omb.eop.gov">oira_submission@omb.eop.gov</a>.</li>
                    <li class="cover-instructions">You shall not be penalized for failure to respond to this collection of information unless the collection of information displays a valid OMB control number.</li>
                </ol>
            </li>
        </ol>
        <h2>GENERAL INSTRUCTIONS</h2>
            <ol class="upper-roman">
                <li class="cover-instructions">
                    Prepare this report in conformity with the Uniform System of Accounts (18 C.F.R. Part 352) (USofA). Interpret all accounting words and phrases in accordance with the USofA.
                </li>
                <li class="cover-instructions">
                    Enter in whole numbers (dollars or MWH) only, except where otherwise noted. (Enter cents for averages and figures per unit where cents are important. The truncating of cents is allowed except on the four basic financial statements where rounding is required.) The amounts shown on all supporting pages must agree with the amounts entered on the statements that they support. When applying thresholds to determine significance for reporting purposes, use for balance sheet accounts the balances at the end of the current reporting period, and use for statement of income accounts the current year's year to date amounts.
                </li>
                <li class="cover-instructions">
                    Complete each question fully and accurately, even if it has been answered in a previous period. Enter the word "None" where it truly and completely states the fact.
                </li>
                <li class="cover-instructions">
                    For any page(s) that is not applicable to the Filer, either enter the words &#8220;Not Applicable&#8221; on the particular page(s), or omit the page(s) and enter &#8220;NA&#8221;, &#8220;None&#8221;, or &#8220;Not Applicable&#8221; in column (d) on the List of Schedules, page 2.
                </li>
                <li class="cover-instructions">
                    Enter the month, day, and year for all dates. Use customary abbreviations. The "Date of Report" at the top of each page is applicable only to resubmissions.
                </li>
                <li class="cover-instructions">
                    Generally, except for certain schedules, all numbers, whether they are expected to be debits or credits, must be reported in the positive. Numbers having a sign that is different from the expected sign should be entered with a negative (-) sign.
                </li>
                <li class="cover-instructions">                    For any resubmissions, please explain the reason for the resubmission in a footnote to the data field.
                   </li>
                <li class="cover-instructions">
                    Do not make references to reports of previous periods or to other reports in lieu of required entries, except as specifically authorized.
                </li>
                <li class="cover-instructions">
                    Whenever (schedule) pages refer to figures from a previous period the figures reported must be based upon those shown by the report of the previous period or an appropriate explanation given as to why different figures were used.
                </li>
                <li class="cover-instructions">
                    Schedule specific instructions are found in the applicable taxonomy and on the applicable blank rendered form.
                </li>
            </ol>

            <h2>DEFINITIONS</h2>
            <ol class="number">
                <li class="cover-instructions">
                    Active Corporation - A corporation which maintains an organization for operating property or administering its financial affairs.
                </li>
                <li class="cover-instructions">
                    Actually Issued - For the purposes of this report, capital stock and other securities are considered to be actually issued when sold to a bona fide purchaser for a valuable consideration, and such purchaser holds free from control by the respondent.
                </li>
                <li class="cover-instructions">
                    Actually Outstanding - For the purposes of this report, capital stock and other securities actually issued and not reacquired by or for the respondent.
                </li>
                <li class="cover-instructions">
                    Affiliated Companies - The situation where one company directly or indirectly controls the other, or where they are subject to a common control.
                </li>
                <li class="cover-instructions">
                    Carrier - A common carrier by pipeline subject to the Interstate Commerce Act.
                </li>
                <li class="cover-instructions">
                    Commission - Means the Federal Energy Regulatory Commission.
                </li>
                <li class="cover-instructions">
                    Control (including the terms "controlling," "controlled by," and "under common control with") -
                    <ol class="lower-alpha">
                        <li class="cover-instructions">
                            The possession, directly or indirectly, of the power to direct or cause the direction of the management and policies of a company, whether such power is exercised through one or more intermediary companies, or alone, or in conjunction with, or pursuant to an agreement. Also, it is necessary whether such power is established through a majority or minority ownership or voting of securities, common directors, officers or stockholders, voting trusts, holding trusts, associated companies, contract or any other direct or indirect means. When there is doubt about an existence of control in any particular situation, the carrier shall report all pertinent facts to the Commission for determination. (18 C.F.R. Part 352, Definition 10.)
                        </li>
                        <li class="cover-instructions">
                            For the purposes of this report, the following are to be considered forms of control:
                            <ol class="number">
                                <li class="cover-instructions">
                                    Right through title to securities issued or assumed to exercise the major part of the voting power in the controlled company;
                                </li>
                                <li class="cover-instructions">
                                    Right through agreement of through sources other than title to securities to name the majority of the board of directors, managers, or trustees of the controlled company;
                                </li>
                                <li class="cover-instructions">
                                    Right to foreclose a priority lien upon all or a major part in value of the tangible property of the controlled company;
                                </li>
                                <li class="cover-instructions">
                                    Right to secure control in consequence of advances made for construction of the property of the controlled company. Indirect control is that exercised through an intermediary.
                                </li>
                            </ol>
                        </li> 
                        <li class="cover-instructions">
                            A leasehold interest in the property of a company is not for the purpose of these accounts to be classed as a form of control over the lessor company.
                        </li>
                    </ol>
                </li> 
                <li class="cover-instructions">
                    Crude Oil - Oil in its natural state (including natural gas and other similar natural constituents), not altered, refined, or prepared for use by any process.
                </li>
                <li class="cover-instructions">
                    Inactive Corporation - A corporation which has been practically absorbed in a controlling corporation, and which neither operates property nor administers its financial affairs; if it maintains an organization it does so only for the purpose of complying with legal requirements and maintaining title to property or franchises.
                </li>
                <li class="cover-instructions">
                    Nominally Issued - For the purposes of this report, capital stock and other securities are considered to be nominally issued when certificates are signed and sealed and placed with the proper officer for sale and delivery or are pledged or otherwise placed in some special fund of the respondent.
                </li>
                <li class="cover-instructions">
                    Nominally Outstanding - For the purposes of this report, those capital stock and other securities
                    reacquired by or for the
                    respondent under such circumstances require them to be considered held alive and not canceled or retired.
                </li>
                <li class="cover-instructions">
                    Products - Oils that have been refined, altered, or processed for use, such as fuel oil and gasoline.
                </li>
                <li class="cover-instructions">
                    Undivided Joint Interest Pipeline - Physical pipeline property owned in undivided joint interest by more
                    than one person/entity.
                </li>
                <li class="cover-instructions">
                    Undivided Joint Interest Property - Carrier property owned as part of an undivided joint interest pipeline.
                </li>
            </ol>

            <h2>EXCERPTS FROM THE LAW</h2><p></p>
                Interstate Commerce Act, Part I<p></p>

                Section 20<p></p>
                                
                <ol class="number">
                    <li class="cover-instructions">The Commission is hereby authorized to require annual, periodical, or special reports from carriers, Lessons, "^^(as defined in this section),to prescribe the manner and form in which such reports shall be made, and to require from such carriers, lessors, "^^specific and full true, and correct answers to all questions upon which the Commission may deem information to be necessary, classify such carrier, lessors, "^^ as it may deem proper for any of these purposes. Such annual reports shall give an account of the affairs of the carrier, lessor, "^^ in such form and detail as may be prescribed by the Commission. </li>
                    <li class="cover-instructions">Said annual reports shall contain all the required information for the period of twelve months ending on the 31st day of December in each year, unless the Commission shall specify a different date, and shall be made out under oath and filled with the Commission at its office in Washington within three months after the close of the year for which report is made, unless additional time be granted in any case by the Commission.</li>
                </ol>                 
                                                                    
            <h2>GENERAL PENALTIES</h2><p></p>
                Section 20<p></p>
            (7)(b) Any person who shall knowingly and willfully make, cause to be made, or participate in the making of any false entry in any annual or other report required under this section to be filled, "^^ or shall knowingly or willfully file with the Commission any false report, or other document, shall be deemed guilty of a misdemeanor and shall be subject, upon conviction in any court of the United States of competent jurisdiction to a fine of not more than five thousand dollars or imprisonment for not more than two years, or both such fine and imprisonment."^^<p></p>
            
            (7)(c) Any carrier or lessor, or any officer, agent, employee, or representative thereof, who shall fail to make and file an annual or other report with the Commission within the time fixed by the Commission, or to make specific and full true and correct answer to any questions within thirty days from the time it is lawfully required by the Commission so to do, shall forfeit to the United States the sum of one hundred dollars for each and every day it shall continue to be in default with respect thereto.<p></p>
        </div></div></div><p></p>
        <div class="schedule-footer">
            <div>FERC FORM No. 
                    <div class="sub-value sub-no-replacement"></div><span> </span>
            </div>
        </div>
    </div>
<hr class="screen-page-separator schedule-separator"></hr><div class="print-page-separator sechedule-separator"></div><div class="xbrl" id="ScheduleIdentificationAbstract">
    <table class="xbrl">
                <tr class="form-title">
                        <td colspan="3">FERC FORM NO. 
                                <div class="sub-value sub-no-replacement"></div><br/> REPORT OF OIL PIPELINE COMPANIES</td>
                </tr>
        <tr class="sch-title">
            <td colspan="3" class="xbrl">
                <div class="sub-value sub-replacement">IDENTIFICATION</div></td>
        </tr>
        <tr>
            <td class="combinedField xbrl" colspan="2">
                    <div class="sub-value sub-replacement">01 Exact Legal Name of Respondent</div><br/>
                    <%= respondent_exact_legal_name %>
                     <br/>
                    <div class="sub-value sub-no-replacement"></div><br/>
                        <br/>
                              
            </td>
            <td class="xbrl" colspan="1">
                    <div class="sub-value sub-replacement">02 Year/ Period of Report</div><br/>
                End of: <div class="sub-value sub-no-replacement"></div><span>/<%= year_period_report %></span>
                <div class="sub-value sub-no-replacement"></div></td>
        </tr>
        <tr>
                <td class="xbrl" colspan="3">
                        <div class="sub-value sub-replacement">03 Previous Name and Date of Change (if name changed during year)</div><br/>
                         <br/>
                        <div class="sub-value sub-no-replacement"></div><span>/<%= previous_name_and_change_date %></span>
                        <div class="sub-value sub-no-replacement"></div><br/>
                        <br/>        
                </td>
        </tr>
        <tr>
                <td class="xbrl" colspan="3">
                        <div class="sub-value sub-replacement">04 Address of Principal Office at End of Year (Street, City, State, Zip Code)</div><br/>
                         <br/>
                         <%= principal_office_address %>
                        <div class="sub-value sub-no-replacement"></div><br/>
                        <br/>  
                </td>
        </tr>
        <tr>
                <td class="xbrl" colspan="2">
                        <div class="sub-value sub-replacement">05 Name of Contact Person</div><br/>
                        <br/>
                        <%= contact_person_name %>
                        <div class="sub-value sub-no-replacement"></div><br/>
                        <br/>   
                </td>
                <td class="xbrl" colspan="1">
                        <div class="sub-value sub-replacement">06 Title of Contact Person</div><br/>
                        <br/>
                        <%= contact_person_title %>
                        <div class="sub-value sub-no-replacement"></div><br/>
                        <br/>   
                </td>
        </tr>
        <tr>
                <td class="xbrl" colspan="3">
                        <div class="sub-value sub-replacement">07 Address of Contact Person (Street, City, State, Zip Code)</div><br/>
                        <br/>
                        <%= contact_person_address %>
                        <div class="sub-value sub-no-replacement"></div><br/>
                        <br/>     
                </td>
        </tr>
        <tr>
                <td class="xbrl">
                        <div class="sub-value sub-replacement">08 Telephone of Contact Person, Including Area Code</div><br/>
                        <br/>
                        <%= contact_person_phone %>
                        <div class="sub-value sub-no-replacement"></div><br/>
                        <br/>          
                </td>
                <td class="xbrl">
                        <div class="sub-value sub-replacement">09 This Report is</div><br/>
                                (1) 
                                <div class="sub-value sub-replacement"><div class="sub-html"><span class="checkbox">&#9745;</span> An Original</div></div><br/>
                            (2)
                                <div class="sub-value sub-replacement"><div class="sub-html"><span class="checkbox">&#9744;</span> A Resubmission</div></div></td>
                <td class="xbrl" colspan="1">
                        <div class="sub-value sub-replacement">10 Date of Report (Mo, Da, Yr)</div><br/>
                        <%= date_of_report %>
                        <br/>
                        <div class="sub-value sub-no-replacement"></div><br/>
                        <br/> 
                </td>
        </tr>
        <tr class="sch-title">
                <td colspan="3" class="xbrl">
                        <div class="sub-value sub-no-replacement"></div></td>
        </tr>
        <tr>
                <td class="xbrl" colspan="3">
                        The undersigned officer certifies that:<br/>
I have examined this report and to the best of my knowledge, information, and belief all statements of fact contained in this report are correct statements
of the business affairs of the respondent and the financial statements, and other financial information contained in this report, conform in all material
respects to the Uniform System of Accounts.
<br/>
<br/>
<br/>
<br/>

                                  
                </td>
        </tr>
        <tr>     
                <td class="xbrl" colspan="1">
                        <div class="sub-value sub-replacement">01 Name</div><br/>
                                <br/>
                        <div class="sub-value sub-no-replacement"></div><br/>
                        <br/>             
                </td>
                <td class="xbrl" colspan="2">
                        <div class="sub-value sub-replacement">02 Title</div><br/>
                        <br/>
                        <div class="sub-value sub-no-replacement"></div><br/>
                        <br/>             
                </td>
        </tr>
        <tr>    
                <td class="xbrl cell-top" colspan="1">
                        <div class="sub-value sub-replacement">03 Signature</div><br/>
                        <br/>
                        <div class="sub-value sub-no-replacement"></div><br/>
                        <br/>        
                </td>
                <td class="xbrl cell-top" colspan="2">
                        <div class="sub-value sub-replacement">04 Date Signed (Mo, Da, Yr)</div><br/>
                        <div class="sub-value sub-no-replacement"></div></td>
        </tr>
        <tr>
                <td class="xbrl" colspan="3">
                        Title 18, U.S.C. 1001 makes it a crime for any person to knowingly and willingly to make to any Agency or Department of the United States any
                        false, fictitious or fraudulent statements as to any matter within its jurisdiction.
   
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>      
                </td>
        </tr>  
    </table>
    <br/>
        <div class="schedule-footer">
                <div> FERC FORM No.
                        <div class="sub-value sub-no-replacement"></div><span> </span>
                        <div class="sub-value sub-replacement"> (REV. 02-04)</div></div> 
                <div class="center-text">Page 
                        <div class="sub-value sub-replacement">1</div></div>
        </div>
</div>

<hr class="screen-page-separator schedule-separator"></hr><div class="print-page-separator sechedule-separator"></div><div class="xbrl">
    <div id="ScheduleListOfSchedulesAbstract"></div>
    <table class="schedule-header xbrl" width="100%">
        <tr>
            <td class="xbrl">
                <div class="sub-value sub-replacement">Name of Respondent</div><br/>
                <div class="sub-value sub-no-replacement"></div></td>
            <td class="xbrl">
                <div class="sub-value sub-replacement">This Report Is:</div><br/>
                    (1) 
                        <div class="sub-value sub-replacement"><div class="sub-html"><span class="checkbox">&#9744;</span> An Original</div></div><br/>
                    (2)
                        <div class="sub-value sub-replacement"><div class="sub-html"><span class="checkbox">&#9744;</span> A Resubmission</div></div></td>
            <td class="xbrl"><div class="sub-value sub-replacement">Date of Report</div><br/>
                    <div class="sub-value sub-no-replacement"></div></td>
            <td class="xbrl"><div class="sub-value sub-replacement">Year/Period of Report</div><br/>
                End of: <div class="sub-value sub-no-replacement"></div><span>/</span>
                <div class="sub-value sub-no-replacement"></div></td>
        </tr>
    </table>
    <table class="xbrl" width="100%">
        <tr class="sch-title">
            <td class="xbrl" colspan="4"> 
                <div class="sub-value sub-replacement">List of Schedules</div></td>
        </tr>
        <tr>
            <td class="instruction xbrl" colspan="4">
                <div class="sub-value sub-replacement"><div class="sub-html"><p>Enter in column (d) the terms "none," "not applicable," or "NA," as appropriate, where no information or amounts have been reported for certain pages.</p></div></div></td>
        </tr>
        <tr class="col-heading-row">     
            <td class="col-heading xbrl">
                    <div style="text-align: center"><div class="sub-value sub-replacement">Title of Schedule</div></div>
                <div style="text-align: center"><div class="sub-value sub-replacement">(a)</div></div>
            </td>
        <td class="col-heading xbrl">
                    <div style="text-align: center"><div class="sub-value sub-replacement">Reference Page No.</div></div>
                <div style="text-align: center"><div class="sub-value sub-replacement">(b)</div></div>
            </td>
        <td class="col-heading xbrl">
                    <div style="text-align: center"><div class="sub-value sub-replacement">Date Revised</div></div>
                <div style="text-align: center"><div class="sub-value sub-replacement">(c)</div></div>
            </td>
        <td class="col-heading xbrl">
                    <div style="text-align: center"><div class="sub-value sub-replacement">Remarks</div></div>
                <div style="text-align: center"><div class="sub-value sub-replacement">(d)</div></div>
            </td>
        
        </tr>
        <tr class="schedule-row">
                <td class="xbrl description_items">
                    <div class="tooltip sch-title">
                            <div class="tooltiptext">
                                    <div class="sub-value sub-replacement">ScheduleWaiver</div></div>
                    <div class="sub-value sub-replacement">Schedule Waiver</div></div>
            </td> 

            <!--Page-->
            <td class="xbrl page-number">
                <a href="#ScheduleWaiver">
                    <span class="sub-value sub-no-replacement"></span></a>
            </td> 
            <!-- Data Revised -->
            <td class="xbrl date_items">
                <div class="sub-value sub-no-replacement"></div></td>  
            <!-- Remarks -->
            <td class="xbrl description_items">
                <div class="sub-value sub-no-replacement"></div><div class="sub-value sub-no-replacement"></div><div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
        <tr class="schedule-row">
                <td class="xbrl description_items">
                    <div class="tooltip sch-title">
                            <div class="tooltiptext">
                                    <div class="sub-value sub-replacement">ScheduleExemption</div></div>
                    <div class="sub-value sub-replacement">Schedule Exemption</div></div>
            </td> 

            <!--Page-->
            <td class="xbrl page-number">
                <a href="#ScheduleExemption">
                    <span class="sub-value sub-no-replacement"></span></a>
            </td> 
            <!-- Data Revised -->
            <td class="xbrl date_items">
                <div class="sub-value sub-no-replacement"></div></td>  
            <!-- Remarks -->
            <td class="xbrl description_items">
                <div class="sub-value sub-no-replacement"></div><div class="sub-value sub-no-replacement"></div><div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
        <tr class="schedule-row">
                <td class="xbrl description_items">
                    <div class="tooltip">
                            <div class="tooltiptext">
                                    <div class="sub-value sub-replacement">ScheduleImportantChangesDuringTheQuarterYearAbstract</div></div>
                    <div class="sub-value sub-replacement">Important Changes During the Year</div></div>
            </td> 

            <!--Page-->
            <td class="xbrl page-number">
                <a href="#ScheduleImportantChangesDuringTheQuarterYearAbstract">
                    <span class="sub-value sub-replacement">108</span></a>
            </td> 
            <!-- Data Revised -->
            <td class="xbrl date_items">
                <div class="sub-value sub-replacement">REV 12-95</div></td>  
            <!-- Remarks -->
            <td class="xbrl description_items">
                <div class="sub-value sub-no-replacement"></div><div class="sub-value sub-no-replacement"></div><div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
        <tr class="schedule-row">
                <td class="xbrl description_items">
                    <div class="tooltip">
                            <div class="tooltiptext">
                                    <div class="sub-value sub-replacement">ScheduleComparativeBalanceSheetAbstract</div></div>
                    <div class="sub-value sub-replacement">Comparative Balance Sheet Statement</div></div>
            </td> 

            <!--Page-->
            <td class="xbrl page-number">
                <a href="#ScheduleComparativeBalanceSheetAbstract">
                    <span class="sub-value sub-replacement">110</span></a>
            </td> 
            <!-- Data Revised -->
            <td class="xbrl date_items">
                <div class="sub-value sub-replacement">REV 12-03</div></td>  
            <!-- Remarks -->
            <td class="xbrl description_items">
                <div class="sub-value sub-no-replacement"></div><div class="sub-value sub-no-replacement"></div><div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
        <tr class="schedule-row">
                <td class="xbrl description_items">
                    <div class="tooltip">
                            <div class="tooltiptext">
                                    <div class="sub-value sub-replacement">ScheduleStatementOfIncomeAbstract</div></div>
                    <div class="sub-value sub-replacement">Income Statement</div></div>
            </td> 

            <!--Page-->
            <td class="xbrl page-number">
                <a href="#ScheduleStatementOfIncomeAbstract">
                    <span class="sub-value sub-replacement">114</span></a>
            </td> 
            <!-- Data Revised -->
            <td class="xbrl date_items">
                <div class="sub-value sub-replacement">REV 12-03</div></td>  
            <!-- Remarks -->
            <td class="xbrl description_items">
                <div class="sub-value sub-no-replacement"></div><div class="sub-value sub-no-replacement"></div><div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
        <tr class="schedule-row">
                <td class="xbrl description_items">
                    <div class="tooltip">
                            <div class="tooltiptext">
                                    <div class="sub-value sub-replacement">ScheduleStatementOfAccumulatedOtherComprehensiveIncomeAndHedgingActivitiesAbstract</div></div>
                    <div class="sub-value sub-replacement">Statement of Accumulated Other Comprehensive Income and Hedging Activities</div></div>
            </td> 

            <!--Page-->
            <td class="xbrl page-number">
                <a href="#ScheduleStatementOfAccumulatedOtherComprehensiveIncomeAndHedgingActivitiesAbstract">
                    <span class="sub-value sub-replacement">116</span></a>
            </td> 
            <!-- Data Revised -->
            <td class="xbrl date_items">
                <div class="sub-value sub-replacement">NEW 12-02</div></td>  
            <!-- Remarks -->
            <td class="xbrl description_items">
                <div class="sub-value sub-no-replacement"></div><div class="sub-value sub-no-replacement"></div><div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
        <tr class="schedule-row">
                <td class="xbrl description_items">
                    <div class="tooltip">
                            <div class="tooltiptext">
                                    <div class="sub-value sub-replacement">ScheduleUnappropriatedRetainedIncomeStatementAbstract</div></div>
                    <div class="sub-value sub-replacement">Unappropriated Retained Income Statement</div></div>
            </td> 

            <!--Page-->
            <td class="xbrl page-number">
                <a href="#ScheduleUnappropriatedRetainedIncomeStatementAbstract">
                    <span class="sub-value sub-replacement">119</span></a>
            </td> 
            <!-- Data Revised -->
            <td class="xbrl date_items">
                <div class="sub-value sub-replacement">REV 12-95</div></td>  
            <!-- Remarks -->
            <td class="xbrl description_items">
                <div class="sub-value sub-no-replacement"></div><div class="sub-value sub-no-replacement"></div><div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
        <tr class="schedule-row">
                <td class="xbrl description_items">
                    <div class="tooltip">
                            <div class="tooltiptext">
                                    <div class="sub-value sub-replacement">ScheduleStatementOfCashFlowsAbstract</div></div>
                    <div class="sub-value sub-replacement">Statement of Cash Flows</div></div>
            </td> 

            <!--Page-->
            <td class="xbrl page-number">
                <a href="#ScheduleStatementOfCashFlowsAbstract">
                    <span class="sub-value sub-replacement">120</span></a>
            </td> 
            <!-- Data Revised -->
            <td class="xbrl date_items">
                <div class="sub-value sub-replacement">REV 02-04</div></td>  
            <!-- Remarks -->
            <td class="xbrl description_items">
                <div class="sub-value sub-no-replacement"></div><div class="sub-value sub-no-replacement"></div><div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
        <tr class="schedule-row">
                <td class="xbrl description_items">
                    <div class="tooltip">
                            <div class="tooltiptext">
                                    <div class="sub-value sub-replacement">ScheduleNotesToFinancialStatementsAbstract</div></div>
                    <div class="sub-value sub-replacement">Notes to Financial Statements</div></div>
            </td> 

            <!--Page-->
            <td class="xbrl page-number">
                <a href="#ScheduleNotesToFinancialStatementsAbstract">
                    <span class="sub-value sub-replacement">122</span></a>
            </td> 
            <!-- Data Revised -->
            <td class="xbrl date_items">
                <div class="sub-value sub-replacement">REV 12-95</div></td>  
            <!-- Remarks -->
            <td class="xbrl description_items">
                <div class="sub-value sub-no-replacement"></div><div class="sub-value sub-no-replacement"></div><div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
        <tr class="schedule-row">
                <td class="xbrl description_items">
                    <div class="tooltip">
                            <div class="tooltiptext">
                                    <div class="sub-value sub-replacement">ScheduleOilOperatingRevenuesAbstract</div></div>
                    <div class="sub-value sub-replacement">Operating Revenue</div></div>
            </td> 

            <!--Page-->
            <td class="xbrl page-number">
                <a href="#ScheduleOilOperatingRevenuesAbstract">
                    <span class="sub-value sub-replacement">300</span></a>
            </td> 
            <!-- Data Revised -->
            <td class="xbrl date_items">
                <div class="sub-value sub-replacement">NEW. 06-04</div></td>  
            <!-- Remarks -->
            <td class="xbrl description_items">
                <div class="sub-value sub-no-replacement"></div><div class="sub-value sub-no-replacement"></div><div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
        <tr class="schedule-row">
                <td class="xbrl description_items">
                    <div class="tooltip">
                            <div class="tooltiptext">
                                    <div class="sub-value sub-replacement">ScheduleOperatingExpenseAccountsAbstract</div></div>
                    <div class="sub-value sub-replacement">Operating Expense Accounts</div></div>
            </td> 

            <!--Page-->
            <td class="xbrl page-number">
                <a href="#ScheduleOperatingExpenseAccountsAbstract">
                    <span class="sub-value sub-replacement">302</span></a>
            </td> 
            <!-- Data Revised -->
            <td class="xbrl date_items">
                <div class="sub-value sub-replacement">REV 12-03</div></td>  
            <!-- Remarks -->
            <td class="xbrl description_items">
                <div class="sub-value sub-no-replacement"></div><div class="sub-value sub-no-replacement"></div><div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
        <tr class="schedule-row">
                <td class="xbrl description_items">
                    <div class="tooltip">
                            <div class="tooltiptext">
                                    <div class="sub-value sub-replacement">ScheduleStatisticsOfOperationsAbstract</div></div>
                    <div class="sub-value sub-replacement">Statistics of Operations</div></div>
            </td> 

            <!--Page-->
            <td class="xbrl page-number">
                <a href="#ScheduleStatisticsOfOperationsAbstract">
                    <span class="sub-value sub-replacement">600</span></a>
            </td> 
            <!-- Data Revised -->
            <td class="xbrl date_items">
                <div class="sub-value sub-replacement">REV 12-00</div></td>  
            <!-- Remarks -->
            <td class="xbrl description_items">
                <div class="sub-value sub-no-replacement"></div><div class="sub-value sub-no-replacement"></div><div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
        <tr class="schedule-row">
                <td class="xbrl description_items">
                    <div class="tooltip">
                            <div class="tooltiptext">
                                    <div class="sub-value sub-replacement">ScheduleStatisticsOfOperationsOwnedByRespondentButOperatedByOthersAbstract</div></div>
                    <div class="sub-value sub-replacement">Statistics of Operations - Operated by Others</div></div>
            </td> 

            <!--Page-->
            <td class="xbrl page-number">
                <a href="#ScheduleStatisticsOfOperationsOwnedByRespondentButOperatedByOthersAbstract">
                    <span class="sub-value sub-replacement">600a</span></a>
            </td> 
            <!-- Data Revised -->
            <td class="xbrl date_items">
                <div class="sub-value sub-replacement">REV 12-00</div></td>  
            <!-- Remarks -->
            <td class="xbrl description_items">
                <div class="sub-value sub-no-replacement"></div><div class="sub-value sub-no-replacement"></div><div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
        
        <tr>
            <td class="xbrl description_items">
                <div>Stockholders' Reports (check appropriate box)</div>
                <input type="checkbox" id="ForCopies" value="ForCopies"></input><label for="ForCopies"> Two copies will be submitted</label><br/>
            </td>
            <td class="xbrl"></td>
            <td class="xbrl"></td>
            <td class="xbrl"></td>
        </tr>
    </table>
<p></p>
    <div class="schedule-footer">
        <div> FERC FORM NO.
            <div class="sub-value sub-no-replacement"></div><span> </span>
            <div class="sub-value sub-replacement"> (REV. 12-95)</div></div> 
        <div style="text-align: center">Page 
            <div class="sub-value sub-replacement">2</div></div>
</div>
</div>
<hr class="screen-page-separator schedule-separator"></hr><div class="print-page-separator sechedule-separator"></div><div class="xbrl">
    <div id="ScheduleImportantChangesDuringTheQuarterYearAbstract"></div>
    <table class="schedule-header xbrl" width="100%">
        <tr>
            <td class="xbrl">
                <div class="sub-value sub-replacement">Name of Respondent</div><br/>
                <div class="sub-value sub-no-replacement"></div></td>
            <td class="xbrl">
                <div class="sub-value sub-replacement">This Report Is:</div><br/>
                    (1) 
                    <div class="sub-value sub-replacement"><div class="sub-html"><span class="checkbox">&#9744;</span> An Original</div></div><br/>
                    (2)
                    <div class="sub-value sub-replacement"><div class="sub-html"><span class="checkbox">&#9744;</span> A Resubmission</div></div></td>
                <td class="xbrl"><div class="sub-value sub-replacement">Date of Report</div><br/>
                        <div class="sub-value sub-no-replacement"></div></td>
                <td class="xbrl"><div class="sub-value sub-replacement">Year/Period of Report</div><br/>
                    End of: <div class="sub-value sub-no-replacement"></div><span>/</span>
                    <div class="sub-value sub-no-replacement"></div></td>
            </tr>
        </table>
    <table class="xbrl" width="100%">
        <tr class="sch-title">
            <td class="xbrl" colspan="1"> 
                <div class="sub-value sub-replacement">Important Changes During the Quarter/Year</div></td>
        </tr>
        <tr>
            <td class="instruction xbrl" colspan="1">
                <div class="sub-value sub-replacement"><div class="sub-html"><p>Give particulars (details) concerning the matters indicated below. Make the statements explicit and precise, and number these in accordance with the inquiries. Each inquiry should be answered. Enter &#8220;none&#8221;; or &#8220;not applicable&#8221;; where applicable. If information which answers an inquiry is given elsewhere in the report, make a reference to the schedule in which it appears.</p>
                        <ol>
                        <li>Changes and important additions to franchise rights: Describe the actual consideration given therefor and state from whom the franchise rights were acquired. State if no consideration was given.</li>
                        <li>Acquisition of ownership in other carrier operations by reorganization, merger, or consolidation with other companies: Give names of companies involved, particulars concerning the transactions, and reference to dates of Commission authorization and journal entries filed if applicable.</li>
                        <li>Important extension or reduction of carrier pipeline operations: State territory added or relinquished and date operations began or ceased and give reference to Commission authorization, if any was required.</li>
                        <li>State briefly the status of any materially important legal proceedings pending at the end of the year, and the results of any such proceedings culminated during the year.</li>
                        <li>If the important changes during the year relating to the respondent appearing in the annual report to the stockholders are applicable and furnish the data required by the above instructions, such notes may be included herein.</li>
                        </ol></div></div></td>
        </tr>
        <tr>
            <td class="xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
        </tr>
    </table>
    <br/>
    <div class="schedule-footer">
        <div> FERC FORM NO.
            <div class="sub-value sub-no-replacement"></div><span> </span>
            <div class="sub-value sub-replacement"> (REV 12-95)</div></div>  
        <div style="text-align: center">Page 
            <div class="sub-value sub-replacement">108</div></div>
    </div>
</div>

<hr class="screen-page-separator schedule-separator"></hr><div class="print-page-separator sechedule-separator"></div><div class="xbrl">
    <div id="ScheduleComparativeBalanceSheetAbstract"></div>
    <table class="schedule-header xbrl" width="100%">
        <tr>
            <td class="xbrl">
                <div class="sub-value sub-replacement">Name of Respondent</div><br/>
                <div class="sub-value sub-no-replacement"></div></td>
            <td class="xbrl">
                <div class="sub-value sub-replacement">This Report Is:</div><br/>
                    (1) 
                        <div class="sub-value sub-replacement"><div class="sub-html"><span class="checkbox">&#9744;</span> An Original</div></div><br/>
                    (2)
                        <div class="sub-value sub-replacement"><div class="sub-html"><span class="checkbox">&#9744;</span> A Resubmission</div></div></td>
            <td class="xbrl"><div class="sub-value sub-replacement">Date of Report</div><br/>
                    <div class="sub-value sub-no-replacement"></div></td>
            <td class="xbrl"><div class="sub-value sub-replacement">Year/Period of Report</div><br/>
                End of: <div class="sub-value sub-no-replacement"></div><span>/</span>
                <div class="sub-value sub-no-replacement"></div></td>
        </tr>
    </table>
    <table class="xbrl">
        <tr class="sch-title">
            <td class="xbrl" colspan="5">
                <div class="sub-value sub-replacement">Comparative Balance Sheet Statement</div></td>
        </tr>
        <tr>
            <td class="instruction xbrl" colspan="5">
                <div class="sub-value sub-replacement"><div class="sub-html"><ol>
<li>For instructions covering this schedule, see the text and instructions pertaining to Balance Sheet Accounts in the USofA. The entries in this balance sheet should be consistent with those in the supporting schedules on the pages indicated.</li>
<li>On line 30, include depreciation applicable to investment in system property.</li>
</ol></div></div></td>
        </tr>        
        <tr class="col-heading-row">     
            <td class="col-heading xbrl line-number">Line No.</td>
            <td class="col-heading xbrl">
                    <div style="text-align: center"><div class="sub-value sub-replacement">Item</div></div>
                <div style="text-align: center"><div class="sub-value sub-replacement">(a)</div></div>
            </td>
        <td class="col-heading xbrl">
                    <div style="text-align: center"><div class="sub-value sub-replacement">Reference Page No. for Annual</div></div>
                <div style="text-align: center"><div class="sub-value sub-replacement">(b)</div></div>
            </td>
        <td class="col-heading xbrl">
                    <div style="text-align: center"><div class="sub-value sub-replacement">Current Year End of Quarter/Year Balance (in dollars)</div></div>
                <div style="text-align: center"><div class="sub-value sub-replacement">(c)</div></div>
            </td>
        <td class="col-heading xbrl">
                    <div style="text-align: center"><div class="sub-value sub-replacement">Prior Year End Balance 12/31 (in dollars)</div></div>
                <div style="text-align: center"><div class="sub-value sub-replacement">(d)</div></div>
            </td>
        
        </tr>
        <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement"></div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip sch-title padding-1">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">CurrentAssetsAbstract</div></div>
                                <div class="sub-value sub-replacement">CURRENT ASSETS</div></div>
                        </td> 

                        <!--Page-->
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current-->
                        <td class="xbrl monetary_items gray-out">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="xbrl monetary_items gray-out">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">1</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">Cash</div></div>
                                <div class="sub-value sub-replacement">Cash (10)</div></div>
                        </td> 

                        <!--Page-->
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">2</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">SpecialDeposits</div></div>
                                <div class="sub-value sub-replacement">Special Deposits (10-5)</div></div>
                        </td> 

                        <!--Page-->
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">3</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">TemporaryInvestments</div></div>
                                <div class="sub-value sub-replacement">Temporary Investments (11)</div></div>
                        </td> 

                        <!--Page-->
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">4</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">NotesReceivable</div></div>
                                <div class="sub-value sub-replacement">Notes Receivable (12)</div></div>
                        </td> 

                        <!--Page-->
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">5</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">ReceivablesFromAffiliatedCompanies</div></div>
                                <div class="sub-value sub-replacement">Receivables from Affiliated Companies (13)</div></div>
                        </td> 

                        <!--Page-->
                        <td class="xbrl page-number">
                                <div class="sub-value sub-replacement">200</div></td> 
                        <!--Current-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">6</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">AccountsReceivable</div></div>
                                <div class="sub-value sub-replacement">Accounts Receivable (14)</div></div>
                        </td> 

                        <!--Page-->
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">7</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">AccumulatedProvisionForUncollectibleAccounts</div></div>
                                <div class="sub-value sub-replacement">Accumulated Provision For Uncollectible Accounts (14-5)</div></div>
                        </td> 

                        <!--Page-->
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">8</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">InterestAndDividendsReceivable</div></div>
                                <div class="sub-value sub-replacement">Interest and Dividends Receivable (15)</div></div>
                        </td> 

                        <!--Page-->
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">9</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">OilInventory</div></div>
                                <div class="sub-value sub-replacement">Oil Inventory (16)</div></div>
                        </td> 

                        <!--Page-->
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">10</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">MaterialAndSupplies</div></div>
                                <div class="sub-value sub-replacement">Material and Supplies (17)</div></div>
                        </td> 

                        <!--Page-->
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">11</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">Prepayments</div></div>
                                <div class="sub-value sub-replacement">Prepayment (18)</div></div>
                        </td> 

                        <!--Page-->
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">12</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">OtherCurrentAssets</div></div>
                                <div class="sub-value sub-replacement">Other Current Assets (19)</div></div>
                        </td> 

                        <!--Page-->
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">13</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">DeferredIncomeTaxAssets</div></div>
                                <div class="sub-value sub-replacement">Deferred Income Tax Assets (19-5)</div></div>
                        </td> 

                        <!--Page-->
                        <td class="xbrl page-number">
                                <div class="sub-value sub-replacement">230</div></td> 
                        <!--Current-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">14</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">CurrentAssets</div></div>
                                <div class="sub-value sub-replacement">TOTAL Current Assets (Total of lines 1 thru 13)</div></div>
                        </td> 

                        <!--Page-->
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement"></div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip sch-title padding-1">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">InvestmentsAndSpecialFundsAbstract</div></div>
                                <div class="sub-value sub-replacement">INVESTMENTS AND SPECIAL FUNDS</div></div>
                        </td> 

                        <!--Page-->
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current-->
                        <td class="xbrl monetary_items gray-out">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="xbrl monetary_items gray-out">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement"></div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip sch-title padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">InvestmentsInAffiliatedCompaniesAbstract</div></div>
                                <div class="sub-value sub-replacement">Investments in Affiliated Companies (20):</div></div>
                        </td> 

                        <!--Page-->
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current-->
                        <td class="xbrl monetary_items gray-out">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="xbrl monetary_items gray-out">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">15</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-3">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">InvestmentsInAffiliatedCompaniesStocks</div></div>
                                <div class="sub-value sub-replacement">Stocks</div></div>
                        </td> 

                        <!--Page-->
                        <td class="xbrl page-number">
                                <div class="sub-value sub-replacement">202</div></td> 
                        <!--Current-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">16</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-3">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">InvestmentInAffiliatedCompaniesBonds</div></div>
                                <div class="sub-value sub-replacement">Bonds</div></div>
                        </td> 

                        <!--Page-->
                        <td class="xbrl page-number">
                                <div class="sub-value sub-replacement">202</div></td> 
                        <!--Current-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">17</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-3">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">InvestmentsInAffiliatedCompaniesOtherSecuredObligations</div></div>
                                <div class="sub-value sub-replacement">Other Secured Obligations</div></div>
                        </td> 

                        <!--Page-->
                        <td class="xbrl page-number">
                                <div class="sub-value sub-replacement">202</div></td> 
                        <!--Current-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">18</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-3">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">InvestmentsInAffiliatedCompaniesUnsecuredNotes</div></div>
                                <div class="sub-value sub-replacement">Unsecured Notes</div></div>
                        </td> 

                        <!--Page-->
                        <td class="xbrl page-number">
                                <div class="sub-value sub-replacement">202</div></td> 
                        <!--Current-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">19</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-3">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">InvestmentsInAffiliatedCompaniesInvestmentAdvances</div></div>
                                <div class="sub-value sub-replacement">Investment Advances</div></div>
                        </td> 

                        <!--Page-->
                        <td class="xbrl page-number">
                                <div class="sub-value sub-replacement">202</div></td> 
                        <!--Current-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">20</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-3">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">InvestmentsInAffiliatedCompaniesUndistributedEarningsFromCertainInvestments</div></div>
                                <div class="sub-value sub-replacement">Undistributed Earnings from Certain Invest. in Acct. 20</div></div>
                        </td> 

                        <!--Page-->
                        <td class="xbrl page-number">
                                <div class="sub-value sub-replacement">204</div></td> 
                        <!--Current-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement"></div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip sch-title padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">OtherInvestmentsAbstract</div></div>
                                <div class="sub-value sub-replacement">Other Investments (21):</div></div>
                        </td> 

                        <!--Page-->
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current-->
                        <td class="xbrl monetary_items gray-out">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="xbrl monetary_items gray-out">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">21</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-3">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">OtherInvestmentsStocks</div></div>
                                <div class="sub-value sub-replacement">Stocks</div></div>
                        </td> 

                        <!--Page-->
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">22</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-3">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">OtherInvestmentsBonds</div></div>
                                <div class="sub-value sub-replacement">Bonds</div></div>
                        </td> 

                        <!--Page-->
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">23</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-3">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">OtherInvestmentsOtherSecuredObligations</div></div>
                                <div class="sub-value sub-replacement">Other Secured Obligations</div></div>
                        </td> 

                        <!--Page-->
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">24</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-3">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">OtherInvestmentsUnsecuredNotes</div></div>
                                <div class="sub-value sub-replacement">Unsecured Notes</div></div>
                        </td> 

                        <!--Page-->
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">25</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-3">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">OtherInvestmentsInvestmentAdvances</div></div>
                                <div class="sub-value sub-replacement">Investment Advances</div></div>
                        </td> 

                        <!--Page-->
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">26</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-3">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">SinkingAndOtherFunds</div></div>
                                <div class="sub-value sub-replacement">Sinking and other funds (22)</div></div>
                        </td> 

                        <!--Page-->
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">27</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">InvestmentsAndSpecialFunds</div></div>
                                <div class="sub-value sub-replacement">TOTAL Investment and Special Funds (Total lines 15 thru 26)</div></div>
                        </td> 

                        <!--Page-->
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement"></div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip sch-title padding-1">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">TangiblePropertyAbstract</div></div>
                                <div class="sub-value sub-replacement">TANGIBLE PROPERTY</div></div>
                        </td> 

                        <!--Page-->
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current-->
                        <td class="xbrl monetary_items gray-out">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="xbrl monetary_items gray-out">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">28</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">CarrierProperty</div></div>
                                <div class="sub-value sub-replacement">Carrier Property (30)</div></div>
                        </td> 

                        <!--Page-->
                        <td class="xbrl page-number">
                                <div class="sub-value sub-replacement">213 &amp; 215</div></td> 
                        <!--Current-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">29</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">AccruedDepreciationCarrierProperty</div></div>
                                <div class="sub-value sub-replacement">(Less) Accrued Depreciation-Carrier Property (31)</div></div>
                        </td> 

                        <!--Page-->
                        <td class="xbrl page-number">
                                <div class="sub-value sub-replacement">216 &amp; 217</div></td> 
                        <!--Current-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">30</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">AccruedAmortizationCarrierProperty</div></div>
                                <div class="sub-value sub-replacement">(Less) Accrued Amortization-Carrier Property (32)</div></div>
                        </td> 

                        <!--Page-->
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">31</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">CarrierPropertyNet</div></div>
                                <div class="sub-value sub-replacement">Net Carrier Property (Line 28 less 29 and 30)</div></div>
                        </td> 

                        <!--Page-->
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">32</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">OperatingOilSupply</div></div>
                                <div class="sub-value sub-replacement">Operating Oil Supply (33)</div></div>
                        </td> 

                        <!--Page-->
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">33</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">NoncarrierProperty</div></div>
                                <div class="sub-value sub-replacement">Noncarrier Property (34)</div></div>
                        </td> 

                        <!--Page-->
                        <td class="xbrl page-number">
                                <div class="sub-value sub-replacement">220</div></td> 
                        <!--Current-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">34</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">AccruedDepreciationNoncarrierProperty</div></div>
                                <div class="sub-value sub-replacement">(Less) Accrued Depreciation-Noncarrier Property (35)</div></div>
                        </td> 

                        <!--Page-->
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">35</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">NoncarrierPropertyNet</div></div>
                                <div class="sub-value sub-replacement">Net Noncarrier Property (Line 33 less 34)</div></div>
                        </td> 

                        <!--Page-->
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">36</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">TangibleProperty</div></div>
                                <div class="sub-value sub-replacement">TOTAL Tangible Property (Total of lines 31, 32, and 35)</div></div>
                        </td> 

                        <!--Page-->
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement"></div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip sch-title padding-1">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">OtherAssetsAndDeferredChargesAbstract</div></div>
                                <div class="sub-value sub-replacement">OTHER ASSETS AND DEFERRED CHARGES</div></div>
                        </td> 

                        <!--Page-->
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current-->
                        <td class="xbrl monetary_items gray-out">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="xbrl monetary_items gray-out">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">37</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">OrganizationCostsAndOtherIntangibles</div></div>
                                <div class="sub-value sub-replacement">Organization Costs and Other Intangibles (40)</div></div>
                        </td> 

                        <!--Page-->
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">38</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">AccruedAmortizationOfIntangibles</div></div>
                                <div class="sub-value sub-replacement">(Less) Accrued Amortization of Intangibles (41)</div></div>
                        </td> 

                        <!--Page-->
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">40</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">MiscellaneousOtherAssets</div></div>
                                <div class="sub-value sub-replacement">Miscellaneous Other Assets (43)</div></div>
                        </td> 

                        <!--Page-->
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">41</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">OtherDeferredCharges</div></div>
                                <div class="sub-value sub-replacement">Other Deferred Charges (44)</div></div>
                        </td> 

                        <!--Page-->
                        <td class="xbrl page-number">
                                <div class="sub-value sub-replacement">221</div></td> 
                        <!--Current-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">42</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">AccumulatedDeferredIncomeTaxAssets</div></div>
                                <div class="sub-value sub-replacement">Accumulated Deferred Income Tax Assets (45)</div></div>
                        </td> 

                        <!--Page-->
                        <td class="xbrl page-number">
                                <div class="sub-value sub-replacement">230</div></td> 
                        <!--Current-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">43</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">DerivativeInstrumentAssets</div></div>
                                <div class="sub-value sub-replacement">Derivative Instrument Assets (46)</div></div>
                        </td> 

                        <!--Page-->
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">44</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">DerivativeInstrumentAssetsHedges</div></div>
                                <div class="sub-value sub-replacement">Derivative Instrument Assets - Hedges (47)</div></div>
                        </td> 

                        <!--Page-->
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">45</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">OtherAssetsAndDeferredCharges</div></div>
                                <div class="sub-value sub-replacement">TOTAL Other Assets and Deferred Charges (37 thru 44)</div></div>
                        </td> 

                        <!--Page-->
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">46</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-1">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">Assets</div></div>
                                <div class="sub-value sub-replacement">TOTAL Assets (Total of lines 14, 27, 36 and 45)</div></div>
                        </td> 

                        <!--Page-->
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement"></div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip sch-title padding-1">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">CurrentLiabilitiesAbstract</div></div>
                                <div class="sub-value sub-replacement">CURRENT LIABILITIES</div></div>
                        </td> 

                        <!--Page-->
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current-->
                        <td class="xbrl monetary_items gray-out">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="xbrl monetary_items gray-out">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">47</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">NotesPayable</div></div>
                                <div class="sub-value sub-replacement">Notes Payable (50)</div></div>
                        </td> 

                        <!--Page-->
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">48</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">PayablesToAffiliatedCompanies</div></div>
                                <div class="sub-value sub-replacement">Payables to Affiliated Companies (51)</div></div>
                        </td> 

                        <!--Page-->
                        <td class="xbrl page-number">
                                <div class="sub-value sub-replacement">225</div></td> 
                        <!--Current-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">49</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">AccountsPayable</div></div>
                                <div class="sub-value sub-replacement">Accounts Payable (52)</div></div>
                        </td> 

                        <!--Page-->
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">50</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">SalariesAndWagesPayable</div></div>
                                <div class="sub-value sub-replacement">Salaries and Wages Payable (53)</div></div>
                        </td> 

                        <!--Page-->
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">51</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">InterestPayable</div></div>
                                <div class="sub-value sub-replacement">Interest Payable (54)</div></div>
                        </td> 

                        <!--Page-->
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">52</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">DividendsPayable</div></div>
                                <div class="sub-value sub-replacement">Dividends Payable (55)</div></div>
                        </td> 

                        <!--Page-->
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">53</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">TaxesPayable</div></div>
                                <div class="sub-value sub-replacement">Taxes Payable (56)</div></div>
                        </td> 

                        <!--Page-->
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">54</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">LongTermDebtPayableWithinOneYear</div></div>
                                <div class="sub-value sub-replacement">Long-Term Debt - Payable Within One Year (57)</div></div>
                        </td> 

                        <!--Page-->
                        <td class="xbrl page-number">
                                <div class="sub-value sub-replacement">226</div></td> 
                        <!--Current-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">55</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">OtherCurrentLiabilities</div></div>
                                <div class="sub-value sub-replacement">Other Current Liabilities (58)</div></div>
                        </td> 

                        <!--Page-->
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">56</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">DeferredIncomeTaxLiabilities</div></div>
                                <div class="sub-value sub-replacement">Deferred Income Tax Liabilities (59)</div></div>
                        </td> 

                        <!--Page-->
                        <td class="xbrl page-number">
                                <div class="sub-value sub-replacement">230</div></td> 
                        <!--Current-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">57</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">CurrentLiabilities</div></div>
                                <div class="sub-value sub-replacement">TOTAL Current Liabilities (Total of lines 47 thru 56)</div></div>
                        </td> 

                        <!--Page-->
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement"></div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip sch-title padding-1">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">NoncurrentLiabilitiesAbstract</div></div>
                                <div class="sub-value sub-replacement">NONCURRENT LIABILITIES</div></div>
                        </td> 

                        <!--Page-->
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current-->
                        <td class="xbrl monetary_items gray-out">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="xbrl monetary_items gray-out">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">58</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">LongTermDebtPayableAfterOneYear</div></div>
                                <div class="sub-value sub-replacement">Long-Term Debt - Payable After One Year (60)</div></div>
                        </td> 

                        <!--Page-->
                        <td class="xbrl page-number">
                                <div class="sub-value sub-replacement">226</div></td> 
                        <!--Current-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">59</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">UnamortizedPremiumOnLongTermDebt</div></div>
                                <div class="sub-value sub-replacement">Unamortized Premium on Long-Term Debt (61)</div></div>
                        </td> 

                        <!--Page-->
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">60</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">UnamortizedDiscountOnLongTermDebtDebit</div></div>
                                <div class="sub-value sub-replacement">(Less) Unamortized Discount and Interest on Long-Term Debt (62)</div></div>
                        </td> 

                        <!--Page-->
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">61</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">OtherNoncurrentLiabilities</div></div>
                                <div class="sub-value sub-replacement">Other Noncurrent Liabilities (63)</div></div>
                        </td> 

                        <!--Page-->
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">62</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">AccumulatedDeferredIncomeTaxLiabilities</div></div>
                                <div class="sub-value sub-replacement">Accumulated Deferred Income Tax Liabilities (64)</div></div>
                        </td> 

                        <!--Page-->
                        <td class="xbrl page-number">
                                <div class="sub-value sub-replacement">230</div></td> 
                        <!--Current-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">63</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">DerivativeInstrumentLiabilities</div></div>
                                <div class="sub-value sub-replacement">Derivative Instrument Liabilities (65)</div></div>
                        </td> 

                        <!--Page-->
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">64</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">DerivativeInstrumentLiabilitiesHedges</div></div>
                                <div class="sub-value sub-replacement">Derivative Instrument Liabilities - Hedges (66)</div></div>
                        </td> 

                        <!--Page-->
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">65</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">AssetRetirementObligations</div></div>
                                <div class="sub-value sub-replacement">Asset Retirement Obligations (67)</div></div>
                        </td> 

                        <!--Page-->
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">66</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">NoncurrentLiabilities</div></div>
                                <div class="sub-value sub-replacement">TOTAL Noncurrent Liabilities (Total of lines 58 thru 65)</div></div>
                        </td> 

                        <!--Page-->
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">67</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-1">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">Liabilities</div></div>
                                <div class="sub-value sub-replacement">TOTAL Liabilities (Total of lines 57 and 66)</div></div>
                        </td> 

                        <!--Page-->
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement"></div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip sch-title padding-1">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">StockholdersEquityAbstract</div></div>
                                <div class="sub-value sub-replacement">STOCKHOLDERS' EQUITY</div></div>
                        </td> 

                        <!--Page-->
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current-->
                        <td class="xbrl monetary_items gray-out">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="xbrl monetary_items gray-out">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">68</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">CapitalStock</div></div>
                                <div class="sub-value sub-replacement">Capital Stock (70)</div></div>
                        </td> 

                        <!--Page-->
                        <td class="xbrl page-number">
                                <div class="sub-value sub-replacement">251</div></td> 
                        <!--Current-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">69</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">PremiumsOnCapitalStock</div></div>
                                <div class="sub-value sub-replacement">Premiums on Capital Stock (71)</div></div>
                        </td> 

                        <!--Page-->
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">70</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">CapitalStockSubscriptions</div></div>
                                <div class="sub-value sub-replacement">Capital Stock Subscriptions (72)</div></div>
                        </td> 

                        <!--Page-->
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">71</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">AdditionalPaidInCapital</div></div>
                                <div class="sub-value sub-replacement">Additional Paid-In Capital (73)</div></div>
                        </td> 

                        <!--Page-->
                        <td class="xbrl page-number">
                                <div class="sub-value sub-replacement">254</div></td> 
                        <!--Current-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">72</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">AppropriatedRetainedIncome</div></div>
                                <div class="sub-value sub-replacement">Appropriated Retained Income (74)</div></div>
                        </td> 

                        <!--Page-->
                        <td class="xbrl page-number">
                                <div class="sub-value sub-replacement">118</div></td> 
                        <!--Current-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">73</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">UnappropriatedRetainedIncomeAndEquityInUndistributedEarningsLossesOfAffiliatedCompany</div></div>
                                <div class="sub-value sub-replacement">Unappropriated Retained Income (75)</div></div>
                        </td> 

                        <!--Page-->
                        <td class="xbrl page-number">
                                <div class="sub-value sub-replacement">119</div></td> 
                        <!--Current-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">74</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">TreasuryStock</div></div>
                                <div class="sub-value sub-replacement">(Less) Treasury Stock (76)</div></div>
                        </td> 

                        <!--Page-->
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">75</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">AccumulatedOtherComprehensiveIncome</div></div>
                                <div class="sub-value sub-replacement">Accumulated Other Comprehensive Income (77)</div></div>
                        </td> 

                        <!--Page-->
                        <td class="xbrl page-number">
                                <div class="sub-value sub-replacement">116</div></td> 
                        <!--Current-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">76</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">StockholdersEquity</div></div>
                                <div class="sub-value sub-replacement">TOTAL Stockholders' Equity (Total of lines 68 thru 75)</div></div>
                        </td> 

                        <!--Page-->
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">77</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-1">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">LiabilitiesAndStockholdersEquity</div></div>
                                <div class="sub-value sub-replacement">TOTAL Liabilities and Stockholders' Equity (Total of lines 67 and 76)</div></div>
                        </td> 

                        <!--Page-->
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    
    </table>
<p></p>
    <div class="schedule-footer">
        <div> FERC FORM NO.
            <div class="sub-value sub-no-replacement"></div><span> </span>
            <div class="sub-value sub-replacement"> (REV 12-03)</div></div>
        <div class="center-text">Page 
            <div class="sub-value sub-replacement">110</div></div> 
    </div>
</div>
<hr class="screen-page-separator schedule-separator"></hr><div class="print-page-separator sechedule-separator"></div><div class="xbrl">
    <div id="ScheduleStatementOfIncomeAbstract"></div>
    <table class="schedule-header xbrl" width="100%">
        <tr>
            <td class="xbrl">
                <div class="sub-value sub-replacement">Name of Respondent</div><br/>
                <div class="sub-value sub-no-replacement"></div></td>
            <td class="xbrl">
                <div class="sub-value sub-replacement">This Report Is:</div><br/>
                    (1) 
                        <div class="sub-value sub-replacement"><div class="sub-html"><span class="checkbox">&#9744;</span> An Original</div></div><br/>
                    (2)
                        <div class="sub-value sub-replacement"><div class="sub-html"><span class="checkbox">&#9744;</span> A Resubmission</div></div></td>
            <td class="xbrl"><div class="sub-value sub-replacement">Date of Report</div><br/>
                <br/>
                    <div class="sub-value sub-no-replacement"></div></td>
            <td class="xbrl"><div class="sub-value sub-replacement">Year/Period of Report</div><br/>
                <br/>
                End of: <div class="sub-value sub-no-replacement"></div><span>/</span>
                <div class="sub-value sub-no-replacement"></div></td>
        </tr>
    </table>
    <table class="xbrl">
        <tr class="sch-title">
            <td class="xbrl" colspan="7">
                <div class="sub-value sub-replacement">Income Statement</div></td>
        </tr>
        <tr>
            <td class="instruction xbrl" colspan="7">
                <div class="sub-value sub-replacement"><div class="sub-html"><ol>
<li>Enter in column (c) the year to date operations for the period, and enter in column (d) the year to date operations for the same period of the prior year.</li>
<li>Enter in column (e) the operations for the reporting quarter and enter in column (f) the operations for the same three month period for the prior year. Do not report annual data in columns (e) and (f).</li>
</ol></div></div></td>
        </tr>
        <tr class="col-heading-row">     
            <td class="col-heading xbrl line-number">Line No.</td>
            <td class="col-heading xbrl">
                    <div style="text-align: center"><div class="sub-value sub-replacement">Item</div></div>
                <div style="text-align: center"><div class="sub-value sub-replacement">(a)</div></div>
            </td>
        <td class="col-heading xbrl">
                    <div style="text-align: center"><div class="sub-value sub-replacement">Reference Page No. in Annual Report</div></div>
                <div style="text-align: center"><div class="sub-value sub-replacement">(b)</div></div>
            </td>
        <td class="col-heading xbrl">
                    <div style="text-align: center"><div class="sub-value sub-replacement">Total current year to date Balance for Quarter/Year</div></div>
                <div style="text-align: center"><div class="sub-value sub-replacement">(c)</div></div>
            </td>
        <td class="col-heading xbrl">
                    <div style="text-align: center"><div class="sub-value sub-replacement">Total prior year to date Balance for Quarter/Year</div></div>
                <div style="text-align: center"><div class="sub-value sub-replacement">(d)</div></div>
            </td>
        <td class="col-heading xbrl">
                    <div style="text-align: center"><div class="sub-value sub-replacement">Current 3 months ended Quarterly only no 4th Quarter</div></div>
                <div style="text-align: center"><div class="sub-value sub-replacement">(e)</div></div>
            </td>
        <td class="col-heading xbrl">
                    <div style="text-align: center"><div class="sub-value sub-replacement">Prior 3 months ended Quarterly only no 4th Quarter</div></div>
                <div style="text-align: center"><div class="sub-value sub-replacement">(f)</div></div>
            </td>
        
        </tr>
       
        <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement"></div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip title padding-1">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">OrdinaryItemsCarrierOperatingIncomeAbstract</div></div>
                                <div class="sub-value sub-replacement">ORDINARY ITEMS - Carrier Operating Income</div></div>
                        </td> 
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td> 
    
                        <!--Current -->
                        <td class="xbrl monetary_items gray-out">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR -->
                        <td class="xbrl monetary_items gray-out">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--current_three_months -->
                        <td class="xbrl monetary_items gray-out">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--prior_three_months -->
                        <td class="xbrl monetary_items gray-out">
                                <div class="sub-value sub-no-replacement"></div></td> 
        </tr>
        <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">1</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">OperatingRevenues</div></div>
                                <div class="sub-value sub-replacement">Operating Revenues (600)</div></div>
                        </td> 
                        <td class="xbrl page-number">
                                <div class="sub-value sub-replacement">301</div></td> 
    
                        <!--Current -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--current_three_months -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--prior_three_months -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
        </tr>
        <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">2</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">OperatingExpenses</div></div>
                                <div class="sub-value sub-replacement">(Less) Operating Expenses (610)</div></div>
                        </td> 
                        <td class="xbrl page-number">
                                <div class="sub-value sub-replacement">302</div></td> 
    
                        <!--Current -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--current_three_months -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--prior_three_months -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
        </tr>
        <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">3</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">NetCarrierOperatingIncome</div></div>
                                <div class="sub-value sub-replacement">Net Carrier Operating Income</div></div>
                        </td> 
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td> 
    
                        <!--Current -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--current_three_months -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--prior_three_months -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
        </tr>
        <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement"></div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip title padding-1">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">OtherIncomeAndDeductionsAbstract</div></div>
                                <div class="sub-value sub-replacement">Other Income and Deductions</div></div>
                        </td> 
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td> 
    
                        <!--Current -->
                        <td class="xbrl monetary_items gray-out">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR -->
                        <td class="xbrl monetary_items gray-out">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--current_three_months -->
                        <td class="xbrl monetary_items gray-out">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--prior_three_months -->
                        <td class="xbrl monetary_items gray-out">
                                <div class="sub-value sub-no-replacement"></div></td> 
        </tr>
        <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">4</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">IncomeNetFromNoncarrierProperty</div></div>
                                <div class="sub-value sub-replacement">Income (Net) from Noncarrier Property (620)</div></div>
                        </td> 
                        <td class="xbrl page-number">
                                <div class="sub-value sub-replacement">335</div></td> 
    
                        <!--Current -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--current_three_months -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--prior_three_months -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
        </tr>
        <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">5</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">InterestAndDividendIncome</div></div>
                                <div class="sub-value sub-replacement">Interest and Dividend Income (From Investment under Cost Only) (630)</div></div>
                        </td> 
                        <td class="xbrl page-number">
                                <div class="sub-value sub-replacement">336</div></td> 
    
                        <!--Current -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--current_three_months -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--prior_three_months -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
        </tr>
        <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">6</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">MiscellaneousIncome</div></div>
                                <div class="sub-value sub-replacement">Miscellaneous Income (640)</div></div>
                        </td> 
                        <td class="xbrl page-number">
                                <div class="sub-value sub-replacement">337</div></td> 
    
                        <!--Current -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--current_three_months -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--prior_three_months -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
        </tr>
        <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">7</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">UnusualOrInfrequentItemsCredit</div></div>
                                <div class="sub-value sub-replacement">Unusual or Infrequent Items--Credits (645)</div></div>
                        </td> 
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td> 
    
                        <!--Current -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--current_three_months -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--prior_three_months -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
        </tr>
        <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">8</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">InterestExpense</div></div>
                                <div class="sub-value sub-replacement">(Less) Interest Expense (650)</div></div>
                        </td> 
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td> 
    
                        <!--Current -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--current_three_months -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--prior_three_months -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
        </tr>
        <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">9</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">MiscellaneousIncomeCharges</div></div>
                                <div class="sub-value sub-replacement">(Less) Miscellaneous Income Charges (660)</div></div>
                        </td> 
                        <td class="xbrl page-number">
                                <div class="sub-value sub-replacement">337</div></td> 
    
                        <!--Current -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--current_three_months -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--prior_three_months -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
        </tr>
        <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">10</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">UnusualOrInfrequentItemsDebit</div></div>
                                <div class="sub-value sub-replacement">(Less) Unusual or Infrequent Items--Debit (665)</div></div>
                        </td> 
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td> 
    
                        <!--Current -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--current_three_months -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--prior_three_months -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
        </tr>
        <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">11</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">DividendIncomeEquityInvestments</div></div>
                                <div class="sub-value sub-replacement">Dividend Income (From Investments under Equity Only)</div></div>
                        </td> 
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td> 
    
                        <!--Current -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--current_three_months -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--prior_three_months -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
        </tr>
        <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">12</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">UndistributedEarningsLosses</div></div>
                                <div class="sub-value sub-replacement">Undistributed Earnings (Losses)</div></div>
                        </td> 
                        <td class="xbrl page-number">
                                <div class="sub-value sub-replacement">205</div></td> 
    
                        <!--Current -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--current_three_months -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--prior_three_months -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
        </tr>
        <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">13</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">EquityInEarningsLossesOfAffiliatedCompaniesIncludingDividendIncome</div></div>
                                <div class="sub-value sub-replacement">Equity in Earnings (Losses) of Affiliated Companies (Total Lines 11 and 12)</div></div>
                        </td> 
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td> 
    
                        <!--Current -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--current_three_months -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--prior_three_months -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
        </tr>
        <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">14</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">OtherIncomeAndDeductions</div></div>
                                <div class="sub-value sub-replacement">TOTAL Other Income and Deductions (Total Lines 4 thru 10 and 13)</div></div>
                        </td> 
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td> 
    
                        <!--Current -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--current_three_months -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--prior_three_months -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
        </tr>
        <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">15</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">OrdinaryIncomeBeforeFederalIncomeTaxes</div></div>
                                <div class="sub-value sub-replacement">Ordinary Income before Federal Income Taxes (Line 3 +/- 14)</div></div>
                        </td> 
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td> 
    
                        <!--Current -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--current_three_months -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--prior_three_months -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
        </tr>
        <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">16</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">FederalIncomeTaxesOnIncomeFromContinuingOperations</div></div>
                                <div class="sub-value sub-replacement">(Less) Income Taxes on Income from Continuing Operations (670)</div></div>
                        </td> 
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td> 
    
                        <!--Current -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--current_three_months -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--prior_three_months -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
        </tr>
        <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">17</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">ProvisionForDeferredTaxes</div></div>
                                <div class="sub-value sub-replacement">(Less) Provision for Deferred Taxes (671)</div></div>
                        </td> 
                        <td class="xbrl page-number">
                                <div class="sub-value sub-replacement">230</div></td> 
    
                        <!--Current -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--current_three_months -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--prior_three_months -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
        </tr>
        <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">18</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-1">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">IncomeLossFromContinuingOperations</div></div>
                                <div class="sub-value sub-replacement">Income (Loss) from Continuing Operations (Total Lines 15 thru 17)</div></div>
                        </td> 
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td> 
    
                        <!--Current -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--current_three_months -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--prior_three_months -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
        </tr>
        <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement"></div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip title padding-1">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">DiscontinuedOperationsAbstract</div></div>
                                <div class="sub-value sub-replacement">Discontinued Operations</div></div>
                        </td> 
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td> 
    
                        <!--Current -->
                        <td class="xbrl monetary_items gray-out">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR -->
                        <td class="xbrl monetary_items gray-out">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--current_three_months -->
                        <td class="xbrl monetary_items gray-out">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--prior_three_months -->
                        <td class="xbrl monetary_items gray-out">
                                <div class="sub-value sub-no-replacement"></div></td> 
        </tr>
        <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">19</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">IncomeLossFromOperationsOfDiscontinuedSegmentsLessApplicableIncomeTaxes</div></div>
                                <div class="sub-value sub-replacement">Income (Loss) from Operations of Discontinued Segments (675)*</div></div>
                        </td> 
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td> 
    
                        <!--Current -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--current_three_months -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--prior_three_months -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
        </tr>
        <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">20</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">GainLossFromDispositionOfDiscontinuedSegmentsLessApplicableIncomeTaxes</div></div>
                                <div class="sub-value sub-replacement">Gain (Loss) on Disposal of Discontinued Segments (676)*</div></div>
                        </td> 
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td> 
    
                        <!--Current -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--current_three_months -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--prior_three_months -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
        </tr>
        <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">21</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">IncomeLossFromDiscontinuedOperations</div></div>
                                <div class="sub-value sub-replacement">TOTAL Income (Loss) from Discontinued Operations (Lines 19 and 20)</div></div>
                        </td> 
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td> 
    
                        <!--Current -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--current_three_months -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--prior_three_months -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
        </tr>
        <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">22</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">IncomeLossBeforeExtraordinaryItems</div></div>
                                <div class="sub-value sub-replacement">Income (Loss) before Extraordinary Items (Total Lines 18 and 21)</div></div>
                        </td> 
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td> 
    
                        <!--Current -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--current_three_months -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--prior_three_months -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
        </tr>
        <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement"></div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip title padding-1">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">ExtraordinaryItemsAndAccountingChangesAbstract</div></div>
                                <div class="sub-value sub-replacement">EXTRAORDINARY ITEMS AND ACCOUNT CHANGES</div></div>
                        </td> 
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td> 
    
                        <!--Current -->
                        <td class="xbrl monetary_items gray-out">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR -->
                        <td class="xbrl monetary_items gray-out">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--current_three_months -->
                        <td class="xbrl monetary_items gray-out">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--prior_three_months -->
                        <td class="xbrl monetary_items gray-out">
                                <div class="sub-value sub-no-replacement"></div></td> 
        </tr>
        <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">23</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">ExtraordinaryItemsNet</div></div>
                                <div class="sub-value sub-replacement">Extraordinary Items -- Net -- (Debit) Credit (680)</div></div>
                        </td> 
                        <td class="xbrl page-number">
                                <div class="sub-value sub-replacement">337</div></td> 
    
                        <!--Current -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--current_three_months -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--prior_three_months -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
        </tr>
        <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">24</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">IncomeTaxesOnExtraordinaryItems</div></div>
                                <div class="sub-value sub-replacement">Income Taxes on Extraordinary Items -- Debit (Credit) (695)</div></div>
                        </td> 
                        <td class="xbrl page-number">
                                <div class="sub-value sub-replacement">337</div></td> 
    
                        <!--Current -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--current_three_months -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--prior_three_months -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
        </tr>
        <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">25</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">ProvisionForDeferredTaxesExtraordinaryItems</div></div>
                                <div class="sub-value sub-replacement">Provision for Deferred Taxes -- Extraordinary Items (696)</div></div>
                        </td> 
                        <td class="xbrl page-number">
                                <div class="sub-value sub-replacement">230</div></td> 
    
                        <!--Current -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--current_three_months -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--prior_three_months -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
        </tr>
        <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">26</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">ExtraordinaryItems</div></div>
                                <div class="sub-value sub-replacement">TOTAL Extraordinary Items (Total Lines 23 thru 25)</div></div>
                        </td> 
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td> 
    
                        <!--Current -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--current_three_months -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--prior_three_months -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
        </tr>
        <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">27</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">CumulativeEffectOfChangesInAccountingPrinciplesLessApplicableIncomeTaxes</div></div>
                                <div class="sub-value sub-replacement">Cumulative Effect of Changes in Accounting Principles (697)*</div></div>
                        </td> 
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td> 
    
                        <!--Current -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--current_three_months -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--prior_three_months -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
        </tr>
        <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">28</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-2">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">ExtraordinaryItemsAndAccountingChanges</div></div>
                                <div class="sub-value sub-replacement">TOTAL Extraordinary Items and Accounting Changes -- (Debit) Credit
(Line 26 + 27)</div></div>
                        </td> 
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td> 
    
                        <!--Current -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--current_three_months -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--prior_three_months -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
        </tr>
        <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">29</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip padding-1">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">NetIncomeLoss</div></div>
                                <div class="sub-value sub-replacement">Net Income (Loss) (Total Lines 22 and 28)</div></div>
                        </td> 
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td> 
    
                        <!--Current -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--current_three_months -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--prior_three_months -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
        </tr>
        
        <tr class="col-heading-row">     
                <td class="xbrl"></td>
                <td class="xbrl">* Less applicable income taxes as reported on page 122</td>
                <td class="xbrl"></td>
                <td class="xbrl"></td>
                <td class="xbrl"></td>
                <td class="xbrl"></td>
                <td class="xbrl"></td>

        </tr>
    </table>
<p></p>
    <div class="schedule-footer">
        <div> FERC FORM No.
            <div class="sub-value sub-no-replacement"></div><span> </span>
            <div class="sub-value sub-replacement"> (REV 12-03)</div></div> 
        <div style="text-align: center">Page 
            <div class="sub-value sub-replacement">114</div></div>
    </div>
</div>
<hr class="screen-page-separator schedule-separator"></hr><div class="print-page-separator sechedule-separator"></div><div class="xbrl">
    <div id="ScheduleStatementOfAccumulatedOtherComprehensiveIncomeAndHedgingActivitiesAbstract"></div>
    <table class="schedule-header xbrl" width="100%">
            <tr>
                <td class="xbrl">
                    <div class="sub-value sub-replacement">Name of Respondent</div><br/>
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="xbrl">
                    <div class="sub-value sub-replacement">This Report Is:</div><br/>
                        (1) 
                            <div class="sub-value sub-replacement"><div class="sub-html"><span class="checkbox">&#9744;</span> An Original</div></div><br/>
                        (2)
                            <div class="sub-value sub-replacement"><div class="sub-html"><span class="checkbox">&#9744;</span> A Resubmission</div></div></td>
                <td class="xbrl"><div class="sub-value sub-replacement">Date of Report</div><br/>
                    <br/>
                        <div class="sub-value sub-no-replacement"></div></td>
                <td class="xbrl"><div class="sub-value sub-replacement">Year/Period of Report</div><br/>
                    <br/>
                    End of: <div class="sub-value sub-no-replacement"></div><span>/</span>
                    <div class="sub-value sub-no-replacement"></div></td>
                 </tr>
            </table>
    
    <table class="xbrl">
        <tr class="sch-title">
            <td class="xbrl" colspan="11">
                <div class="sub-value sub-replacement">Statement of Accumulated Other Comprehensive Income and Hedging Activities</div></td>
        </tr>
         <tr>
                <td class="instruction" colspan="11">
                   <div class="sub-value sub-replacement"><div class="sub-html"><ol>
<li>Report in columns (b), (c), (d), and (e) the amounts of accumulated other comprehensive income items, on a net-of-tax basis, where appropriate.</li>
<li>Report in columns (f) and (g) the amounts of other categories of other cash flow hedges.</li>
<li>For each category of hedges that have been accounted for as "fair value hedges", report the accounts affected and the related amounts in a footnote.</li>
</ol></div></div></td>
            </tr> 
            <tr class="col-heading-row">     
                <td class="col-heading xbrl line-number">Line No.</td>
                <td class="col-heading xbrl">
                        <div style="text-align: center"><div class="sub-value sub-replacement">Item</div></div>
                    <div style="text-align: center"><div class="sub-value sub-replacement">(a)</div></div>
                </td>
            <td class="col-heading xbrl">
                        <div style="text-align: center"><div class="sub-value sub-replacement">Unrealized Gains and Losses on available-for-sale securities</div></div>
                    <div style="text-align: center"><div class="sub-value sub-replacement">(b)</div></div>
                </td>
            <td class="col-heading xbrl">
                        <div style="text-align: center"><div class="sub-value sub-replacement">Minimum Pension liabililty Adjustment (net amount)</div></div>
                    <div style="text-align: center"><div class="sub-value sub-replacement">(c)</div></div>
                </td>
            <td class="col-heading xbrl">
                        <div style="text-align: center"><div class="sub-value sub-replacement">Foreign Currency Hedges</div></div>
                    <div style="text-align: center"><div class="sub-value sub-replacement">(d)</div></div>
                </td>
            <td class="col-heading xbrl">
                        <div style="text-align: center"><div class="sub-value sub-replacement">Other Adjustments</div></div>
                    <div style="text-align: center"><div class="sub-value sub-replacement">(e)</div></div>
                </td>
            <td class="col-heading xbrl">
                        <div style="text-align: center"><div class="sub-value sub-replacement">Other Cash Flow Hedges Interest Rate Swaps</div></div>
                    <div style="text-align: center"><div class="sub-value sub-replacement">(f)</div></div>
                </td>
            <td class="col-heading xbrl">
                        <div style="text-align: center"><div class="sub-value sub-replacement">Other Cash Flow Hedges [Insert Footnote at Line 1 to specify]</div></div>
                    <div style="text-align: center"><div class="sub-value sub-replacement">(g)</div></div>
                </td>
            <td class="col-heading xbrl">
                        <div style="text-align: center"><div class="sub-value sub-replacement">Totals for each category of items recorded in Account 77</div></div>
                    <div style="text-align: center"><div class="sub-value sub-replacement">(h)</div></div>
                </td>
            <td class="col-heading xbrl">
                        <div style="text-align: center"><div class="sub-value sub-replacement">Net Income (Carried Forward from Page 114, Line 29)</div></div>
                    <div style="text-align: center"><div class="sub-value sub-replacement">(i)</div></div>
                </td>
            <td class="col-heading xbrl">
                        <div style="text-align: center"><div class="sub-value sub-replacement">Total Comprehensive Income</div></div>
                    <div style="text-align: center"><div class="sub-value sub-replacement">(j)</div></div>
                </td>
            
            </tr>

        <tr class="schedule-row">
            <td class="xbrl line-number">
                <span class="sub-line-number">1</span></td> 
            <td class="xbrl description_items"><div class="sub-value sub-replacement">Balance of Account 77 at Beginning of Preceding Year</div></td>
            <td class="xbrl monetary_items"><div class="sub-value sub-no-replacement"></div></td>
            <td class="xbrl monetary_items"><div class="sub-value sub-no-replacement"></div></td>
            <td class="xbrl monetary_items"><div class="sub-value sub-no-replacement"></div></td>
           <td class="xbrl monetary_items"><div class="sub-value sub-no-replacement"></div></td>
             <td class="xbrl monetary_items"><div class="sub-value sub-no-replacement"></div></td>
            <td class="xbrl monetary_items"><div class="sub-value sub-no-replacement"></div></td>
            <td class="xbrl monetary_items"><div class="sub-value sub-no-replacement"></div></td>

            <td class="xbrl monetary_items gray-out"><div class="sub-value sub-no-replacement"></div></td>

            <td class="xbrl monetary_items gray-out"><div class="sub-value sub-no-replacement"></div></td>         
</tr> 
    <tr class="schedule-row">
            <td class="xbrl line-number">
                <span class="sub-line-number">2</span></td> 
            <td class="xbrl description_items"><div class="sub-value sub-replacement">Preceding Quarter/Year to Date Reclassifications from Account 77 to Net Income</div></td>
            <td class="xbrl monetary_items"><div class="sub-value sub-no-replacement"></div></td>
            <td class="xbrl monetary_items"><div class="sub-value sub-no-replacement"></div></td>
            <td class="xbrl monetary_items"><div class="sub-value sub-no-replacement"></div></td>
           <td class="xbrl monetary_items"><div class="sub-value sub-no-replacement"></div></td>
             <td class="xbrl monetary_items"><div class="sub-value sub-no-replacement"></div></td>
            <td class="xbrl monetary_items"><div class="sub-value sub-no-replacement"></div></td>
            <td class="xbrl monetary_items"><div class="sub-value sub-no-replacement"></div></td>

            <td class="xbrl monetary_items gray-out"><div class="sub-value sub-no-replacement"></div></td>

            <td class="xbrl monetary_items gray-out"><div class="sub-value sub-no-replacement"></div></td>         
</tr> 
    <tr class="schedule-row">
            <td class="xbrl line-number">
                <span class="sub-line-number">3</span></td> 
            <td class="xbrl description_items"><div class="sub-value sub-replacement">Preceding Quarter/Year to Date Changes in Fair Value</div></td>
            <td class="xbrl monetary_items"><div class="sub-value sub-no-replacement"></div></td>
            <td class="xbrl monetary_items"><div class="sub-value sub-no-replacement"></div></td>
            <td class="xbrl monetary_items"><div class="sub-value sub-no-replacement"></div></td>
           <td class="xbrl monetary_items"><div class="sub-value sub-no-replacement"></div></td>
             <td class="xbrl monetary_items"><div class="sub-value sub-no-replacement"></div></td>
            <td class="xbrl monetary_items"><div class="sub-value sub-no-replacement"></div></td>
            <td class="xbrl monetary_items"><div class="sub-value sub-no-replacement"></div></td>

            <td class="xbrl monetary_items gray-out"><div class="sub-value sub-no-replacement"></div></td>

            <td class="xbrl monetary_items gray-out"><div class="sub-value sub-no-replacement"></div></td>         
</tr> 
    <tr class="schedule-row">
            <td class="xbrl line-number">
                <span class="sub-line-number">4</span></td> 
            <td class="xbrl description_items"><div class="sub-value sub-replacement">Total (lines 2 and 3)</div></td>
            <td class="xbrl monetary_items"><div class="sub-value sub-no-replacement"></div></td>
            <td class="xbrl monetary_items"><div class="sub-value sub-no-replacement"></div></td>
            <td class="xbrl monetary_items"><div class="sub-value sub-no-replacement"></div></td>
           <td class="xbrl monetary_items"><div class="sub-value sub-no-replacement"></div></td>
             <td class="xbrl monetary_items"><div class="sub-value sub-no-replacement"></div></td>
            <td class="xbrl monetary_items"><div class="sub-value sub-no-replacement"></div></td>
            <td class="xbrl monetary_items"><div class="sub-value sub-no-replacement"></div></td>

            <td class="xbrl monetary_items"><div class="sub-value sub-no-replacement"></div></td>

            <td class="xbrl monetary_items"><div class="sub-value sub-no-replacement"></div></td>         
</tr> 
    <tr class="schedule-row">
            <td class="xbrl line-number">
                <span class="sub-line-number">5</span></td> 
            <td class="xbrl description_items"><div class="sub-value sub-replacement">Balance of Account 77 at End of Preceding Quarter/Year</div></td>
            <td class="xbrl monetary_items"><div class="sub-value sub-no-replacement"></div></td>
            <td class="xbrl monetary_items"><div class="sub-value sub-no-replacement"></div></td>
            <td class="xbrl monetary_items"><div class="sub-value sub-no-replacement"></div></td>
           <td class="xbrl monetary_items"><div class="sub-value sub-no-replacement"></div></td>
             <td class="xbrl monetary_items"><div class="sub-value sub-no-replacement"></div></td>
            <td class="xbrl monetary_items"><div class="sub-value sub-no-replacement"></div></td>
            <td class="xbrl monetary_items"><div class="sub-value sub-no-replacement"></div></td>

            <td class="xbrl monetary_items gray-out"><div class="sub-value sub-no-replacement"></div></td>

            <td class="xbrl monetary_items gray-out"><div class="sub-value sub-no-replacement"></div></td>         
</tr> 
    <tr class="schedule-row">
            <td class="xbrl line-number">
                <span class="sub-line-number">6</span></td> 
            <td class="xbrl description_items"><div class="sub-value sub-replacement">Balance of Account 77 at Beginning of Current Year</div></td>
            <td class="xbrl monetary_items"><div class="sub-value sub-no-replacement"></div></td>
            <td class="xbrl monetary_items"><div class="sub-value sub-no-replacement"></div></td>
            <td class="xbrl monetary_items"><div class="sub-value sub-no-replacement"></div></td>
           <td class="xbrl monetary_items"><div class="sub-value sub-no-replacement"></div></td>
             <td class="xbrl monetary_items"><div class="sub-value sub-no-replacement"></div></td>
            <td class="xbrl monetary_items"><div class="sub-value sub-no-replacement"></div></td>
            <td class="xbrl monetary_items"><div class="sub-value sub-no-replacement"></div></td>

            <td class="xbrl monetary_items gray-out"><div class="sub-value sub-no-replacement"></div></td>

            <td class="xbrl monetary_items gray-out"><div class="sub-value sub-no-replacement"></div></td>         
</tr> 
    <tr class="schedule-row">
            <td class="xbrl line-number">
                <span class="sub-line-number">7</span></td> 
            <td class="xbrl description_items"><div class="sub-value sub-replacement">Current Quarter/Year to Date Reclassifications from Account 77 to Net Income</div></td>
            <td class="xbrl monetary_items"><div class="sub-value sub-no-replacement"></div></td>
            <td class="xbrl monetary_items"><div class="sub-value sub-no-replacement"></div></td>
            <td class="xbrl monetary_items"><div class="sub-value sub-no-replacement"></div></td>
           <td class="xbrl monetary_items"><div class="sub-value sub-no-replacement"></div></td>
             <td class="xbrl monetary_items"><div class="sub-value sub-no-replacement"></div></td>
            <td class="xbrl monetary_items"><div class="sub-value sub-no-replacement"></div></td>
            <td class="xbrl monetary_items"><div class="sub-value sub-no-replacement"></div></td>

            <td class="xbrl monetary_items gray-out"><div class="sub-value sub-no-replacement"></div></td>

            <td class="xbrl monetary_items gray-out"><div class="sub-value sub-no-replacement"></div></td>         
</tr> 
    <tr class="schedule-row">
            <td class="xbrl line-number">
                <span class="sub-line-number">8</span></td> 
            <td class="xbrl description_items"><div class="sub-value sub-replacement">Current Quarter/Year to Date Changes in Fair Value</div></td>
            <td class="xbrl monetary_items"><div class="sub-value sub-no-replacement"></div></td>
            <td class="xbrl monetary_items"><div class="sub-value sub-no-replacement"></div></td>
            <td class="xbrl monetary_items"><div class="sub-value sub-no-replacement"></div></td>
           <td class="xbrl monetary_items"><div class="sub-value sub-no-replacement"></div></td>
             <td class="xbrl monetary_items"><div class="sub-value sub-no-replacement"></div></td>
            <td class="xbrl monetary_items"><div class="sub-value sub-no-replacement"></div></td>
            <td class="xbrl monetary_items"><div class="sub-value sub-no-replacement"></div></td>

            <td class="xbrl monetary_items gray-out"><div class="sub-value sub-no-replacement"></div></td>

            <td class="xbrl monetary_items gray-out"><div class="sub-value sub-no-replacement"></div></td>         
</tr> 
    <tr class="schedule-row">
            <td class="xbrl line-number">
                <span class="sub-line-number">9</span></td> 
            <td class="xbrl description_items"><div class="sub-value sub-replacement">Total (lines 7 and 8)</div></td>
            <td class="xbrl monetary_items"><div class="sub-value sub-no-replacement"></div></td>
            <td class="xbrl monetary_items"><div class="sub-value sub-no-replacement"></div></td>
            <td class="xbrl monetary_items"><div class="sub-value sub-no-replacement"></div></td>
           <td class="xbrl monetary_items"><div class="sub-value sub-no-replacement"></div></td>
             <td class="xbrl monetary_items"><div class="sub-value sub-no-replacement"></div></td>
            <td class="xbrl monetary_items"><div class="sub-value sub-no-replacement"></div></td>
            <td class="xbrl monetary_items"><div class="sub-value sub-no-replacement"></div></td>

            <td class="xbrl monetary_items"><div class="sub-value sub-no-replacement"></div></td>

            <td class="xbrl monetary_items"><div class="sub-value sub-no-replacement"></div></td>         
</tr> 
    <tr class="schedule-row">
            <td class="xbrl line-number">
                <span class="sub-line-number">10</span></td> 
            <td class="xbrl description_items"><div class="sub-value sub-replacement">Balance of Account 77 at End of Current Quarter/Year</div></td>
            <td class="xbrl monetary_items"><div class="sub-value sub-no-replacement"></div></td>
            <td class="xbrl monetary_items"><div class="sub-value sub-no-replacement"></div></td>
            <td class="xbrl monetary_items"><div class="sub-value sub-no-replacement"></div></td>
           <td class="xbrl monetary_items"><div class="sub-value sub-no-replacement"></div></td>
             <td class="xbrl monetary_items"><div class="sub-value sub-no-replacement"></div></td>
            <td class="xbrl monetary_items"><div class="sub-value sub-no-replacement"></div></td>
            <td class="xbrl monetary_items"><div class="sub-value sub-no-replacement"></div></td>

            <td class="xbrl monetary_items gray-out"><div class="sub-value sub-no-replacement"></div></td>

            <td class="xbrl monetary_items gray-out"><div class="sub-value sub-no-replacement"></div></td>         
</tr> 
     
    </table> 
    <br/>
    <div class="schedule-footer">
        <div> FERC FORM NO.
            <div class="sub-value sub-no-replacement"></div><span> </span>
            <div class="sub-value sub-replacement"> (NEW 12-02)</div></div> 
        <div style="text-align: center">Page 
            <div class="sub-value sub-replacement">116</div></div>
    </div>
</div>

<hr class="screen-page-separator schedule-separator"></hr><div class="print-page-separator sechedule-separator"></div><div class="xbrl">
    <div id="ScheduleUnappropriatedRetainedIncomeStatementAbstract"></div>
    <table class="schedule-header xbrl" width="100%">
        <tr>
            <td class="xbrl">
                <div class="sub-value sub-replacement">Name of Respondent</div><br/>
                <div class="sub-value sub-no-replacement"></div></td>
            <td class="xbrl">
                <div class="sub-value sub-replacement">This Report Is:</div><br/>
                    (1) 
                        <div class="sub-value sub-replacement"><div class="sub-html"><span class="checkbox">&#9744;</span> An Original</div></div><br/>
                    (2)
                        <div class="sub-value sub-replacement"><div class="sub-html"><span class="checkbox">&#9744;</span> A Resubmission</div></div></td>
            <td class="xbrl"><div class="sub-value sub-replacement">Date of Report</div><br/>
                    <div class="sub-value sub-no-replacement"></div></td>
            <td class="xbrl"><div class="sub-value sub-replacement">Year/Period of Report</div><br/>
                End of: <div class="sub-value sub-no-replacement"></div><span>/</span>
                <div class="sub-value sub-no-replacement"></div></td>
        </tr>
    </table>
    <table class="xbrl">
        <tr class="sch-title">
            <td class="xbrl" colspan="5">
                <div class="sub-value sub-replacement">Unappropriated Retained Income Statement</div></td>
        </tr>
        <tr>
            <td class="instruction xbrl" colspan="5">
                <div class="sub-value sub-replacement"><div class="sub-html"><ol>
<li>Report items of the Retained Income Accounts of the respondents for the period, classified in accordance with the USofA.</li>
<li>Report on lines 15 and 16 the amount of assigned Federal income tax consequences, Account Nos. 710 and 720.</li>
<li>Report on lines 17 through 20 all amounts applicable to the equity in undistributed earnings (losses) of affiliated companies based on the equity method of accounting.</li>
<li>Line 18 should agree with Line 12, Schedule 114. The total of lines 2, 6, and 18 should agree with line 29, Schedule 114.</li>
<li>Include on lines 1 through 12 only amounts applicable to Retained Income exclusive of any amounts included on lines 17 through 20.</li>
</ol></div></div></td>
        </tr>
        <tr class="col-heading-row">     
            <td class="col-heading xbrl line-number">Line No.</td>
            <td class="col-heading xbrl">
                    <div style="text-align: center"><div class="sub-value sub-replacement">Item</div></div>
                <div style="text-align: center"><div class="sub-value sub-replacement">(a)</div></div>
            </td>
        <td class="col-heading xbrl">
                    <div style="text-align: center"><div class="sub-value sub-replacement">Reference page no. for Year</div></div>
                <div style="text-align: center"><div class="sub-value sub-replacement">(b)</div></div>
            </td>
        <td class="col-heading xbrl">
                    <div style="text-align: center"><div class="sub-value sub-replacement">Current Quarter/Year (in dollars)</div></div>
                <div style="text-align: center"><div class="sub-value sub-replacement">(c)</div></div>
            </td>
        <td class="col-heading xbrl">
                    <div style="text-align: center"><div class="sub-value sub-replacement">Previous Quarter/Year (in dollars)</div></div>
                <div style="text-align: center"><div class="sub-value sub-replacement">(d)</div></div>
            </td>
        
        </tr>
        <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement"></div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip sch-title">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">UnappropriatedRetainedEarningsAbstract</div></div>
                                <div class="sub-value sub-replacement">UNAPPROPRIATED RETAINED INCOME</div></div>
                        </td>
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td>  

                        <!--Current-->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">1</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">UnappropriatedRetainedIncome</div></div>
                                <div class="sub-value sub-replacement">Balances at Beginning of Year</div></div>
                        </td>
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td>  

                        <!--Current-->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement"></div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip sch-title">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">AdditionsToUnappropriatedRetainedIncomeAbstract</div></div>
                                <div class="sub-value sub-replacement">CREDITS</div></div>
                        </td>
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td>  

                        <!--Current-->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">2</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">UnappropriatedRetainedIncomeCreditTransferredFromIncome</div></div>
                                <div class="sub-value sub-replacement">Net Balance Transferred from Income (700)</div></div>
                        </td>
                        <td class="xbrl page-number">
                                <div class="sub-value sub-replacement">114</div></td>  

                        <!--Current-->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">3</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">PriorPeriodAdjustmentsToBeginningRetainedIncomeAccount</div></div>
                                <div class="sub-value sub-replacement">Prior Period Adjustments to Beginning Retained Income (705)</div></div>
                        </td>
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td>  

                        <!--Current-->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">4</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">OtherCreditsToRetainedIncome</div></div>
                                <div class="sub-value sub-replacement">Other Credits to Retained Income (710)*</div></div>
                        </td>
                        <td class="xbrl page-number">
                                <div class="sub-value sub-replacement">337</div></td>  

                        <!--Current-->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">5</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">AdditionsToUnappropriatedRetainedIncome</div></div>
                                <div class="sub-value sub-replacement">TOTAL (Lines 2 thru 4)</div></div>
                        </td>
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td>  

                        <!--Current-->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement"></div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip sch-title">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">DeductionsFromUnappropriatedRetainedIncomeAbstract</div></div>
                                <div class="sub-value sub-replacement">DEBITS</div></div>
                        </td>
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td>  

                        <!--Current-->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">6</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">UnappropriatedRetainedIncomeDebitTransferredFromIncome</div></div>
                                <div class="sub-value sub-replacement">Net Balance Transferred from Income (700)</div></div>
                        </td>
                        <td class="xbrl page-number">
                                <div class="sub-value sub-replacement">114</div></td>  

                        <!--Current-->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">7</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">OtherDebitsToRetainedIncome</div></div>
                                <div class="sub-value sub-replacement">Other Debits to Retained Income (720)*</div></div>
                        </td>
                        <td class="xbrl page-number">
                                <div class="sub-value sub-replacement">337</div></td>  

                        <!--Current-->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">8</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">AppropriationsOfRetainedIncome</div></div>
                                <div class="sub-value sub-replacement">Appropriations of Retained Income (740)</div></div>
                        </td>
                        <td class="xbrl page-number">
                                <div class="sub-value sub-replacement">118</div></td>  

                        <!--Current-->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">9</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">DividendAppropriationsOfRetainedIncome</div></div>
                                <div class="sub-value sub-replacement">Dividend Appropriations of Retained Income (750)</div></div>
                        </td>
                        <td class="xbrl page-number">
                                <div class="sub-value sub-replacement">121</div></td>  

                        <!--Current-->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">10</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">DeductionsFromUnappropriatedRetainedIncome</div></div>
                                <div class="sub-value sub-replacement">TOTAL (lines 6 thru 9)</div></div>
                        </td>
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td>  

                        <!--Current-->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">11</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">NetIncreaseDecreaseInUnappropriatedRetainedIncome</div></div>
                                <div class="sub-value sub-replacement">Net Increase (Decrease) During Year (Line 5 minus line 10)</div></div>
                        </td>
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td>  

                        <!--Current-->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">12</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">UnappropriatedRetainedIncome</div></div>
                                <div class="sub-value sub-replacement">Balances at End of Year (Lines 1 and 11)</div></div>
                        </td>
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td>  

                        <!--Current-->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">13</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">EquityInEarningsLossesOfAffiliatedCompanies</div></div>
                                <div class="sub-value sub-replacement">Balance from Line 20</div></div>
                        </td>
                        <td class="xbrl page-number">
                                <div class="sub-value sub-replacement">204</div></td>  

                        <!--Current-->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">14</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">UnappropriatedRetainedIncomeAndEquityInUndistributedEarningsLossesOfAffiliatedCompany</div></div>
                                <div class="sub-value sub-replacement">TOTAL Unapprop. Retained Inc. and Equity in Undistr. Earnings. (Losses)
of Affil. Comp. at End of Year (Lines 12 &amp; 13)</div></div>
                        </td>
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td>  

                        <!--Current-->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement"></div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip sch-title">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">AssignedFederalIncomeTaxConsequencesAbstract</div></div>
                                <div class="sub-value sub-replacement">*Amount of Assigned Federal Income Tax Consequences</div></div>
                        </td>
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td>  

                        <!--Current-->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">15</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">AssignedFederalIncomeTaxConsequencesOtherCreditsToRetainedIncome</div></div>
                                <div class="sub-value sub-replacement">Account No. 710</div></div>
                        </td>
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td>  

                        <!--Current-->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">16</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">AssignedFederalIncomeTaxConsequencesOtherDebitsToRetainedIncome</div></div>
                                <div class="sub-value sub-replacement">Account No. 720</div></div>
                        </td>
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td>  

                        <!--Current-->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement"></div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip sch-title">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">EquityInUndistributedEarningsLossesOfAffiliatedCompaniesAbstract</div></div>
                                <div class="sub-value sub-replacement">EQUITY IN UNDISTRIBUTED EARNINGS (LOSSES) OF AFFILIATED COMPANIES</div></div>
                        </td>
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td>  

                        <!--Current-->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">17</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">EquityInEarningsLossesOfAffiliatedCompanies</div></div>
                                <div class="sub-value sub-replacement">Balances at Beginning of Year</div></div>
                        </td>
                        <td class="xbrl page-number">
                                <div class="sub-value sub-replacement">204</div></td>  

                        <!--Current-->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">18</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">UndistributedEarningsLosses</div></div>
                                <div class="sub-value sub-replacement">Net Balance transferred from Income (700)</div></div>
                        </td>
                        <td class="xbrl page-number">
                                <div class="sub-value sub-replacement">114</div></td>  

                        <!--Current-->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">19</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">OtherCreditsDebitsToEquityInUndistributedEarningsLossesOfAffiliatedCompanies</div></div>
                                <div class="sub-value sub-replacement">Other Credits (Debits)</div></div>
                        </td>
                        <td class="xbrl page-number">
                                <div class="sub-value sub-no-replacement"></div></td>  

                        <!--Current-->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">20</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">EquityInEarningsLossesOfAffiliatedCompanies</div></div>
                                <div class="sub-value sub-replacement">Balances at End of Reporting Period/Year</div></div>
                        </td>
                        <td class="xbrl page-number">
                                <div class="sub-value sub-replacement">204</div></td>  

                        <!--Current-->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR-->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                                    
        </tr>
    
    </table>
<p></p>
    <div class="schedule-footer">
        <div> FERC FORM NO. 
            <div class="sub-value sub-no-replacement"></div><span> </span>
            <div class="sub-value sub-replacement"> (REV 12-95)</div></div> 
        <div style="text-align: center">Page 
            <div class="sub-value sub-replacement">119</div></div>
    </div>
</div>
<hr class="screen-page-separator schedule-separator"></hr><div class="print-page-separator sechedule-separator"></div><div class="xbrl">
    <div id="ScheduleStatementOfCashFlowsAbstract"></div>
    <table class="schedule-header xbrl" width="100%">
        <tr>
            <td class="xbrl">
                <div class="sub-value sub-replacement">Name of Respondent</div><br/>
                <div class="sub-value sub-no-replacement"></div></td>
            <td class="xbrl">
                <div class="sub-value sub-replacement">This Report Is:</div><br/>
                    (1) 
                        <div class="sub-value sub-replacement"><div class="sub-html"><span class="checkbox">&#9744;</span> An Original</div></div><br/>
                    (2)
                        <div class="sub-value sub-replacement"><div class="sub-html"><span class="checkbox">&#9744;</span> A Resubmission</div></div></td>
            <td class="xbrl"><div class="sub-value sub-replacement">Date of Report</div><br/>
                    <div class="sub-value sub-no-replacement"></div></td>
            <td class="xbrl"><div class="sub-value sub-replacement">Year/Period of Report</div><br/>
                <br/>
                End of: <div class="sub-value sub-no-replacement"></div><span>/</span>
                <div class="sub-value sub-no-replacement"></div></td>
        </tr>
    </table>
    <table class="xbrl">
        <tr class="sch-title">
            <td class="xbrl" colspan="13">
                <div class="sub-value sub-replacement">Statement of Cash Flows</div></td>
        </tr>
        <tr>
            <td class="instruction xbrl" colspan="13">
                <div class="sub-value sub-replacement"><div class="sub-html"><ol>
<li>Codes to be used: (a) Net Proceeds or Payments; (b) Bonds, debentures, and other long-term debt; (c) Include commercial paper; and (d) Identify separately such items as investments, fixed assets, intangibles, etc.</li>
<li>Information about noncash investing and financing activities must be provided on Page 122, Notes to Financial Statements. Also provide a reconciliation between "Cash and Cash Equivalents at End of Period" with related amounts on the Balance Sheet.</li>
<li>Operating Activities - Other: Include gains and losses pertaining to operating activities only. Gains and losses pertaining to investing and financing activities should be reported in those activities. Show on Page 122, Notes to Financial Statements, the amounts of interest paid (net of amount capitalized) and income taxes paid.</li>
<li>Investing Activities: Include at Other net cash outflow to acquire other companies. Provide a reconciliation of assets acquired with liabilities assumed on Page 122, Notes to Financial Statements. Do not include on this statement the dollar amount of leases capitalized; instead provide a reconciliation of the dollar amount of leases capitalized with the plant cost.</li>
<li>Under "Other" specify significant amounts and group others.</li>
<li>Enter on Page 122, Notes to Financial Statements, clarifications and explanations.</li>
</ol></div></div></td>
        </tr>
        <tr class="col-heading-row">     
            <td class="col-heading xbrl line-number">Line No.</td>
            <td class="col-heading xbrl">
                    <div style="text-align: center"><div class="sub-value sub-replacement">Description (See Instructions No. 5 for Explanation of Codes)</div></div>
                <div style="text-align: center"><div class="sub-value sub-replacement">(a)</div></div>
            </td>
        <td class="col-heading xbrl">
                    <div style="text-align: center"><div class="sub-value sub-replacement">Current Quarter/Year Amount</div></div>
                <div style="text-align: center"><div class="sub-value sub-replacement">(b)</div></div>
            </td>
        <td class="col-heading xbrl">
                    <div style="text-align: center"><div class="sub-value sub-replacement">Previous Quarter/Year Amount</div></div>
                <div style="text-align: center"><div class="sub-value sub-replacement">(c)</div></div>
            </td>
        
        </tr>
       
        <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">1</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip title">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">NetCashFlowFromOperatingActivitiesAbstract</div></div>
                                <div class="sub-value sub-replacement">Cash Flow from Operating Activities:</div></div>
                        </td> 
                       
    
                        <!--Current -->
                        <td class="monetary_items xbrl gray-out">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR -->
                        <td class="monetary_items xbrl gray-out">
                                <div class="sub-value sub-no-replacement"></div></td> 
        </tr>

        
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">2</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">NetIncomeLoss</div></div>
                                <div class="sub-value sub-replacement">Net Income</div></div>
                        </td> 
                       
    
                        <!--Current -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
        </tr>

        
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">3</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip title">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">NoncashChargesCreditsToIncomeAbstract</div></div>
                                <div class="sub-value sub-replacement">Noncash Charges (Credits) to Income:</div></div>
                        </td> 
                       
    
                        <!--Current -->
                        <td class="monetary_items xbrl gray-out">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR -->
                        <td class="monetary_items xbrl gray-out">
                                <div class="sub-value sub-no-replacement"></div></td> 
        </tr>

        
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">4</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">DepreciationAndDepletion</div></div>
                                <div class="sub-value sub-replacement">Depreciation</div></div>
                        </td> 
                       
    
                        <!--Current -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
        </tr>

        
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">5</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">Amortization</div></div>
                                <div class="sub-value sub-replacement">Amortization</div></div>
                        </td> 
                       
    
                        <!--Current -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
        </tr>

        
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">6</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">NoncashAdjustmentsToCashFlowsFromOperatingActivities</div></div>
                                <div class="sub-value sub-replacement">Other Non Cash Adjustments</div></div>
                        </td> 
                       
    
                        <!--Current -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
        </tr>

        
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">8</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">DeferredIncomeTaxesNet</div></div>
                                <div class="sub-value sub-replacement">Deferred Income Taxes</div></div>
                        </td> 
                       
    
                        <!--Current -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
        </tr>

        
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">10</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">NetIncreaseDecreaseInReceivablesOperatingActivities</div></div>
                                <div class="sub-value sub-replacement">Net (Increase) Decrease in Receivables</div></div>
                        </td> 
                       
    
                        <!--Current -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
        </tr>

        
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">11</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">NetIncreaseDecreaseInInventoryOperatingActivities</div></div>
                                <div class="sub-value sub-replacement">Net (Increase) Decrease in Inventory</div></div>
                        </td> 
                       
    
                        <!--Current -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
        </tr>

        
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">12</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">NetIncreaseDecreaseInPayablesAndAccruedExpensesOperatingActivities</div></div>
                                <div class="sub-value sub-replacement">Net Increase (Decrease) in Payables and Accrued Expenses</div></div>
                        </td> 
                       
    
                        <!--Current -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
        </tr>

        
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">14</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">OtherAdjustmentsToCashFlowsFromOperatingActivities</div></div>
                                <div class="sub-value sub-replacement">Other</div></div>
                        </td> 
                       
    
                        <!--Current -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
        </tr>

        
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">22</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">NetCashProvidedByUsedInOperatingActivities</div></div>
                                <div class="sub-value sub-replacement">Net Cash Provided by (Used in) Operating Activities (Total of lines 2 thru 20)</div></div>
                        </td> 
                       
    
                        <!--Current -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
        </tr>

        
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">24</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip title">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">CashFlowsFromInvestmentActivitiesAbstract</div></div>
                                <div class="sub-value sub-replacement">Cash Flows from Investment Activities:</div></div>
                        </td> 
                       
    
                        <!--Current -->
                        <td class="monetary_items xbrl gray-out">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR -->
                        <td class="monetary_items xbrl gray-out">
                                <div class="sub-value sub-no-replacement"></div></td> 
        </tr>

        
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">25</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip title">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">ConstructionAndAcquisitionOfPlantIncludingLandAbstract</div></div>
                                <div class="sub-value sub-replacement">Construction and Acquisition of Plant (including land):</div></div>
                        </td> 
                       
    
                        <!--Current -->
                        <td class="monetary_items xbrl gray-out">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR -->
                        <td class="monetary_items xbrl gray-out">
                                <div class="sub-value sub-no-replacement"></div></td> 
        </tr>

        
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">26</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">GrossAdditionsToCarrierPropertyInvestmentActivities</div></div>
                                <div class="sub-value sub-replacement">Gross Additions to Carrier Property:</div></div>
                        </td> 
                       
    
                        <!--Current -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
        </tr>

        
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">27</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">GrossAdditionsToNoncarrierPropertyInvestmentActivities</div></div>
                                <div class="sub-value sub-replacement">Gross Additions to Noncarrier Property</div></div>
                        </td> 
                       
    
                        <!--Current -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
        </tr>

        
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">28</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">OtherConstructionAndAcquisitionOfPlantInvestmentActivities</div></div>
                                <div class="sub-value sub-replacement">Other</div></div>
                        </td> 
                       
    
                        <!--Current -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
        </tr>

        
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">34</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">CashOutflowsForPlant</div></div>
                                <div class="sub-value sub-replacement">Cash Outflows for Plant (Total of lines 26 thru 33)</div></div>
                        </td> 
                       
    
                        <!--Current -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
        </tr>

        
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">36</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">AcquisitionOfOtherNoncurrentAssets</div></div>
                                <div class="sub-value sub-replacement">Acquisition of Other Noncurrent Assets (d)</div></div>
                        </td> 
                       
    
                        <!--Current -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
        </tr>

        
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">37</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">ProceedsFromDisposalOfNoncurrentAssets</div></div>
                                <div class="sub-value sub-replacement">Proceeds from Disposal of Noncurrent Assets (d)</div></div>
                        </td> 
                       
    
                        <!--Current -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
        </tr>

        
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">39</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">InvestmentsInAndAdvancesToAssociatedAndSubsidiaryCompanies</div></div>
                                <div class="sub-value sub-replacement">Investments in and Advances to Assoc. and Subsidiary Companies</div></div>
                        </td> 
                       
    
                        <!--Current -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
        </tr>

        
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">40</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">ContributionsAndAdvancesFromAssociatedAndSubsidiaryCompanies</div></div>
                                <div class="sub-value sub-replacement">Contributions and Advances from Assoc. and Subsidiary Companies</div></div>
                        </td> 
                       
    
                        <!--Current -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
        </tr>

        
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">42</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">DispositionOfInvestmentsInAndAdvancesToAssociatedAndSubsidiaryCompanies</div></div>
                                <div class="sub-value sub-replacement">Disposition of Investments in (and Advances to) Associated and Subsidiary Companies</div></div>
                        </td> 
                       
    
                        <!--Current -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
        </tr>

        
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">44</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">PurchaseOfInvestmentSecurities</div></div>
                                <div class="sub-value sub-replacement">Purchase of Investment Securities (a)</div></div>
                        </td> 
                       
    
                        <!--Current -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
        </tr>

        
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">45</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">ProceedsFromSalesOfInvestmentSecurities</div></div>
                                <div class="sub-value sub-replacement">Proceeds from Sales of Investment Securities (a)</div></div>
                        </td> 
                       
    
                        <!--Current -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
        </tr>

        
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">46</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">LoansMadeOrPurchased</div></div>
                                <div class="sub-value sub-replacement">Loans Made or Purchased</div></div>
                        </td> 
                       
    
                        <!--Current -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
        </tr>

        
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">47</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">CollectionsOnLoans</div></div>
                                <div class="sub-value sub-replacement">Collections on Loans</div></div>
                        </td> 
                       
    
                        <!--Current -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
        </tr>

        
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">49</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">NetIncreaseDecreaseInReceivablesInvestingActivities</div></div>
                                <div class="sub-value sub-replacement">Net (Increase) Decrease in Receivables</div></div>
                        </td> 
                       
    
                        <!--Current -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
        </tr>

        
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">50</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">NetIncreaseDecreaseInInventoryInvestingActivities</div></div>
                                <div class="sub-value sub-replacement">Net (Increase) Decrease in Inventory</div></div>
                        </td> 
                       
    
                        <!--Current -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
        </tr>

        
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">51</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">NetIncreaseDecreaseInPayablesAndAccruedExpensesInvestingActivities</div></div>
                                <div class="sub-value sub-replacement">Net Increase (Decrease) in Payables and Accrued Expenses</div></div>
                        </td> 
                       
    
                        <!--Current -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
        </tr>

        
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">52</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">OtherAdjustmentsToCashFlowsFromInvestmentActivities</div></div>
                                <div class="sub-value sub-replacement">Other</div></div>
                        </td> 
                       
    
                        <!--Current -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
        </tr>

        
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">57</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">CashFlowsProvidedFromUsedInInvestmentActivities</div></div>
                                <div class="sub-value sub-replacement">Net Cash Provided by (Used in) Investing Activities (Total of Lines 34 thru 55)</div></div>
                        </td> 
                       
    
                        <!--Current -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
        </tr>

        
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">59</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip title">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">CashFlowsFromFinancingActivitiesAbstract</div></div>
                                <div class="sub-value sub-replacement">Cash Flows from Financing Activities:</div></div>
                        </td> 
                       
    
                        <!--Current -->
                        <td class="monetary_items xbrl gray-out">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR -->
                        <td class="monetary_items xbrl gray-out">
                                <div class="sub-value sub-no-replacement"></div></td> 
        </tr>

        
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">60</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip title">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">ProceedsFromIssuanceAbstract</div></div>
                                <div class="sub-value sub-replacement">Proceeds from Issuance of:</div></div>
                        </td> 
                       
    
                        <!--Current -->
                        <td class="monetary_items xbrl gray-out">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR -->
                        <td class="monetary_items xbrl gray-out">
                                <div class="sub-value sub-no-replacement"></div></td> 
        </tr>

        
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">61</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">ProceedsFromIssuanceOfLongTermDebtFinancingActivities</div></div>
                                <div class="sub-value sub-replacement">Long-Term Debt (b)</div></div>
                        </td> 
                       
    
                        <!--Current -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
        </tr>

        
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">62</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">ProceedsFromIssuanceOfCapitalStock</div></div>
                                <div class="sub-value sub-replacement">Capital Stock</div></div>
                        </td> 
                       
    
                        <!--Current -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
        </tr>

        
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">63</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">OtherAdjustmentsByOutsideSourcesToCashFlowsFromFinancingActivities</div></div>
                                <div class="sub-value sub-replacement">Other</div></div>
                        </td> 
                       
    
                        <!--Current -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
        </tr>

        
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">66</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">NetIncreaseInShortTermDebt</div></div>
                                <div class="sub-value sub-replacement">Net Increase in Short-Term Debt (c)</div></div>
                        </td> 
                       
    
                        <!--Current -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
        </tr>

        
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">67</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">OtherAdjustmentByShortTermDebtToCashFlowsFromFinancingActivities</div></div>
                                <div class="sub-value sub-replacement">Other</div></div>
                        </td> 
                       
    
                        <!--Current -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
        </tr>

        
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">70</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">CashProvidedByOutsideSources</div></div>
                                <div class="sub-value sub-replacement">Cash Provided by Outside Sources (Total of lines 61 thru 69)</div></div>
                        </td> 
                       
    
                        <!--Current -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
        </tr>

        
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">72</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip title">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">PaymentsForRetirementAbstract</div></div>
                                <div class="sub-value sub-replacement">Payment for Retirement of:</div></div>
                        </td> 
                       
    
                        <!--Current -->
                        <td class="monetary_items xbrl gray-out">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR -->
                        <td class="monetary_items xbrl gray-out">
                                <div class="sub-value sub-no-replacement"></div></td> 
        </tr>

        
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">73</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">PaymentsForRetirementOfLongTermDebtFinancingActivities</div></div>
                                <div class="sub-value sub-replacement">Long-term Debt (b)</div></div>
                        </td> 
                       
    
                        <!--Current -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
        </tr>

        
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">74</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">PaymentForRetirementOfCapitalStock</div></div>
                                <div class="sub-value sub-replacement">Capital Stock</div></div>
                        </td> 
                       
    
                        <!--Current -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
        </tr>

        
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">75</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">OtherRetirementsOfBalancesImpactingCashFlowsFromFinancingActivities</div></div>
                                <div class="sub-value sub-replacement">Other</div></div>
                        </td> 
                       
    
                        <!--Current -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
        </tr>

        
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">78</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">NetDecreaseInShortTermDebt</div></div>
                                <div class="sub-value sub-replacement">Net Decrease in Short-Term Debt (c)</div></div>
                        </td> 
                       
    
                        <!--Current -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
        </tr>

        
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">80</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">DividendsOnCapitalStock</div></div>
                                <div class="sub-value sub-replacement">Dividends on Capital Stock</div></div>
                        </td> 
                       
    
                        <!--Current -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
        </tr>

        
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">81</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">OtherAdjustmentsToCashFlowsFromFinancingActivities</div></div>
                                <div class="sub-value sub-replacement">Other</div></div>
                        </td> 
                       
    
                        <!--Current -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
        </tr>

        
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">83</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">CashFlowsProvidedFromUsedInFinancingActivities</div></div>
                                <div class="sub-value sub-replacement">Net Cash Provided by (Used in) Financing Activities (Total of lines 70 thru 81)</div></div>
                        </td> 
                       
    
                        <!--Current -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
        </tr>

        
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">85</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip title">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">NetIncreaseDecreaseInCashAndCashEquivalentsAbstract</div></div>
                                <div class="sub-value sub-replacement">Net Increase (Decrease) in Cash and Cash Equivalents</div></div>
                        </td> 
                       
    
                        <!--Current -->
                        <td class="monetary_items xbrl gray-out">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR -->
                        <td class="monetary_items xbrl gray-out">
                                <div class="sub-value sub-no-replacement"></div></td> 
        </tr>

        
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">86</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">NetIncreaseDecreaseInCashAndCashEquivalents</div></div>
                                <div class="sub-value sub-replacement">Net Increase (Decrease) in Cash and Cash Equivalents (Total of Lines 22, 57, and 83)</div></div>
                        </td> 
                       
    
                        <!--Current -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
        </tr>

        
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">88</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">CashAndCashEquivalents</div></div>
                                <div class="sub-value sub-replacement">Cash and Cash Equivalents at Beginning of Year</div></div>
                        </td> 
                       
    
                        <!--Current -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
        </tr>

        
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">90</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">CashAndCashEquivalents</div></div>
                                <div class="sub-value sub-replacement">Cash and Cash Equivalents at End of Year</div></div>
                        </td> 
                       
    
                        <!--Current -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--PRIOR -->
                        <td class="monetary_items xbrl">
                                <div class="sub-value sub-no-replacement"></div></td> 
        </tr>

        
    

        
    </table>
<br/>
    <div class="schedule-footer">
        <div>FERC FORM No.
            <div class="sub-value sub-no-replacement"></div><span> </span>
            <div class="sub-value sub-replacement"> (REV 02-04)</div></div>
        <div class="center-text">Page 
            <div class="sub-value sub-replacement">120</div></div> 
    </div>
</div>
<hr class="screen-page-separator schedule-separator"></hr><div class="print-page-separator sechedule-separator"></div><div class="xbrl">
    <div id="ScheduleNotesToFinancialStatementsAbstract"></div>
    <table class="schedule-header xbrl" width="100%">
        <tr>
            <td class="xbrl">
                <div class="sub-value sub-replacement">Name of Respondent</div><br/>
                <div class="sub-value sub-no-replacement"></div></td>
            <td class="xbrl">
                <div class="sub-value sub-replacement">This Report Is:</div><br/>
                    (1) 
                    <div class="sub-value sub-replacement"><div class="sub-html"><span class="checkbox">&#9744;</span> An Original</div></div><br/>
                    (2)
                    <div class="sub-value sub-replacement"><div class="sub-html"><span class="checkbox">&#9744;</span> A Resubmission</div></div></td>
                <td class="xbrl"><div class="sub-value sub-replacement">Date of Report</div><br/>
                        <div class="sub-value sub-no-replacement"></div></td>
                <td class="xbrl"><div class="sub-value sub-replacement">Year/Period of Report</div><br/>
                    End of: <div class="sub-value sub-no-replacement"></div><span>/</span>
                    <div class="sub-value sub-no-replacement"></div></td>
            </tr>
        </table>
    <table class="xbrl">
        <tr class="sch-title">
            <td class="xbrl" colspan="5"> 
                <div class="sub-value sub-replacement">Notes to Financial Statements</div></td>
        </tr>
        <tr>
            <td class="instruction xbrl" colspan="1">
                <div class="sub-value sub-replacement"><div class="sub-html"><p>Quarterly Notes</p>
<ol>
<li>Respondent must provide in the notes sufficient disclosures so as to make the interim information not misleading. Disclosures which would substantially duplicate the disclosures contained in the most recent FERC Annual Report may be omitted.</li>
<li>Disclosures shall be provided where events subsequent to the end of the most recent year have occurred which have a material effect on the respondent. Respondent must include in the notes significant changes since the most recently completed year such items as: accounting principles and practices; estimates inherent in the preparation of the financial statements; status of long-term contracts; capitalization including significant new borrowings or modifications of existing financing agreements; and changes resulting from business combinations or dispositions. However where material contingencies exist, the disclosure of such matters shall be
provided even though a significant change since year end may not have occurred.</li>
<li>Finally, if the notes to the financial statements relating to the respondent appearing in the annual report to the stockholders are applicable and furnish the data required by the above instructions, such notes may be included herein.</li>
</ol>
<p>Annual Notes</p>
<ol>
<li>Use the space below for important notes regarding the Balance Sheet, Statement of Income for the year, Statement of Retained Earnings for the year, and Statement of Cash Flows, or any account therefor. Classify the notes according to each basic statement, providing a subheading for each statement, except where a note is applicable to more than one statement.</li>
<li>Furnish details as to any significant commitments or contingent assets or liabilities existing at end of year, including a brief explanation of any action initiated by the Internal Revenue Service involving possible assessments of additional income taxes of a material amount, or of a claim for refund of income taxes of a material amount initiated by the respondent. State whether such commitments or contingencies will have a material adverse effect upon the financial position or results of operations of the respondent.</li>
<li>Furnish details on the accounting for the respondent's pensions and postretirement benefits and explain any changes in the method of accounting for them. Include in the details a concise breakdown of the effects of the various components on income for the year, funding for the plans and accumulated obligations at year end.</li>
<li>Provide an explanation of any significant changes in operations during the year. Give the financial statement effects of acquiring oil pipelines by purchase or merger or by participating in joint ventures or similar activities.</li>
<li>Furnish details on the respondent's accounting for income taxes and provide an explanation of any changes in the methods of accounting for income taxes and give the financial statement effects resulting from these changes.</li>
<li>Provide an explanation of any significant rate or other regulatory matters involving the respondent during the year and give the effects, if any, on the respondent's financial statements.</li>
</ol></div></div></td>
        </tr>
        <tr>
            <td class="xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
        </tr>
        <tr>
            <td class="xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
        </tr>
        <tr>
            <td class="xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
        </tr>
    </table>
    <br/>
    <div class="schedule-footer">
        <div> FERC FORM NO. 
            <div class="sub-value sub-no-replacement"></div><span> </span>
            <div class="sub-value sub-replacement"> (REV 12-95)</div></div>  
        <div style="text-align: center">Page 
            <div class="sub-value sub-replacement">122</div></div>
    </div>
</div>

<hr class="screen-page-separator schedule-separator"></hr><div class="print-page-separator sechedule-separator"></div><div class="xbrl">
    <div id="ScheduleOilOperatingRevenuesAbstract"></div>
    <table class="schedule-header xbrl" width="100%">
        <tr>
            <td class="xbrl">
                <div class="sub-value sub-replacement">Name of Respondent</div><br/>
                <div class="sub-value sub-no-replacement"></div></td>
            <td class="xbrl">
                <div class="sub-value sub-replacement">This Report Is:</div><br/>
                    (1) 
                        <div class="sub-value sub-replacement"><div class="sub-html"><span class="checkbox">&#9744;</span> An Original</div></div><br/>
                    (2)
                        <div class="sub-value sub-replacement"><div class="sub-html"><span class="checkbox">&#9744;</span> A Resubmission</div></div></td>
            <td class="xbrl"><div class="sub-value sub-replacement">Date of Report</div><br/>
                    <div class="sub-value sub-no-replacement"></div></td>
            <td class="xbrl"><div class="sub-value sub-replacement">Year/Period of Report</div><br/>
                End of: <div class="sub-value sub-no-replacement"></div><span>/</span>
                <div class="sub-value sub-no-replacement"></div></td>
        </tr>
    </table>
    <table class="xbrl">
        <tr class="sch-title">
            <td class="xbrl" colspan="5"> 
                <div class="sub-value sub-replacement">Operating Revenues</div></td>
        </tr>
        <tr>
            <td class="instruction xbrl" colspan="5">
                <div class="sub-value sub-replacement"><div class="sub-html"><p>Report the respondent's pipeline operating revenues year to date, classified in accordance with the USofA.</p></div></div></td>
        </tr>
        <tr class="col-heading-row">     
            <td class="col-heading xbrl line-number">Line No.</td>
            <td class="col-heading xbrl">
                    <div style="text-align: center"><div class="sub-value sub-replacement">Account</div></div>
                <div style="text-align: center"><div class="sub-value sub-replacement">(a)</div></div>
            </td>
        <td class="col-heading xbrl">
                    <div style="text-align: center"><div class="sub-value sub-replacement">Crude Oil Current Year to Date Quarter</div></div>
                <div style="text-align: center"><div class="sub-value sub-replacement">(b)</div></div>
            </td>
        <td class="col-heading xbrl">
                    <div style="text-align: center"><div class="sub-value sub-replacement">Products Current Year to Date Quarter</div></div>
                <div style="text-align: center"><div class="sub-value sub-replacement">(c)</div></div>
            </td>
        <td class="col-heading xbrl">
                    <div style="text-align: center"><div class="sub-value sub-replacement">Total Year to Date Quarter (b) + (c)</div></div>
                <div style="text-align: center"><div class="sub-value sub-replacement">(d)</div></div>
            </td>
        
        </tr>
       
        <tr class="schedule-row">
                <td class="xbrl line-number">
                <div class="sub-value sub-replacement">1</div></td> 
            <td class="xbrl description_items">
                    <div class="tooltip">
                            <div class="tooltiptext">
                                    <div class="sub-value sub-replacement">GatheringRevenues</div></div>
                    <div class="sub-value sub-replacement">(200) Gathering Revenues</div></div>
            </td> 
            <!--Current Crude Oil -->
            <td class="xbrl monetary_items">
                    <div class="sub-value sub-no-replacement"></div></td> 
            <!--Current Oil Products -->
            <td class="xbrl monetary_items">
                    <div class="sub-value sub-no-replacement"></div></td> 
            <!--Current -->
            <td class="xbrl monetary_items">
                    <div class="sub-value sub-no-replacement"></div></td> 
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                <div class="sub-value sub-replacement">2</div></td> 
            <td class="xbrl description_items">
                    <div class="tooltip">
                            <div class="tooltiptext">
                                    <div class="sub-value sub-replacement">TrunkRevenues</div></div>
                    <div class="sub-value sub-replacement">(210) Trunk Revenues</div></div>
            </td> 
            <!--Current Crude Oil -->
            <td class="xbrl monetary_items">
                    <div class="sub-value sub-no-replacement"></div></td> 
            <!--Current Oil Products -->
            <td class="xbrl monetary_items">
                    <div class="sub-value sub-no-replacement"></div></td> 
            <!--Current -->
            <td class="xbrl monetary_items">
                    <div class="sub-value sub-no-replacement"></div></td> 
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                <div class="sub-value sub-replacement">3</div></td> 
            <td class="xbrl description_items">
                    <div class="tooltip">
                            <div class="tooltiptext">
                                    <div class="sub-value sub-replacement">DeliveryRevenues</div></div>
                    <div class="sub-value sub-replacement">(220) Delivery Revenues</div></div>
            </td> 
            <!--Current Crude Oil -->
            <td class="xbrl monetary_items">
                    <div class="sub-value sub-no-replacement"></div></td> 
            <!--Current Oil Products -->
            <td class="xbrl monetary_items">
                    <div class="sub-value sub-no-replacement"></div></td> 
            <!--Current -->
            <td class="xbrl monetary_items">
                    <div class="sub-value sub-no-replacement"></div></td> 
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                <div class="sub-value sub-replacement">4</div></td> 
            <td class="xbrl description_items">
                    <div class="tooltip">
                            <div class="tooltiptext">
                                    <div class="sub-value sub-replacement">AllowanceOilRevenue</div></div>
                    <div class="sub-value sub-replacement">(230) Allowance Oil Revenue</div></div>
            </td> 
            <!--Current Crude Oil -->
            <td class="xbrl monetary_items">
                    <div class="sub-value sub-no-replacement"></div></td> 
            <!--Current Oil Products -->
            <td class="xbrl monetary_items">
                    <div class="sub-value sub-no-replacement"></div></td> 
            <!--Current -->
            <td class="xbrl monetary_items">
                    <div class="sub-value sub-no-replacement"></div></td> 
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                <div class="sub-value sub-replacement">5</div></td> 
            <td class="xbrl description_items">
                    <div class="tooltip">
                            <div class="tooltiptext">
                                    <div class="sub-value sub-replacement">StorageAndDemurrageRevenue</div></div>
                    <div class="sub-value sub-replacement">(240) Storage and Demurrage Revenue</div></div>
            </td> 
            <!--Current Crude Oil -->
            <td class="xbrl monetary_items">
                    <div class="sub-value sub-no-replacement"></div></td> 
            <!--Current Oil Products -->
            <td class="xbrl monetary_items">
                    <div class="sub-value sub-no-replacement"></div></td> 
            <!--Current -->
            <td class="xbrl monetary_items">
                    <div class="sub-value sub-no-replacement"></div></td> 
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                <div class="sub-value sub-replacement">6</div></td> 
            <td class="xbrl description_items">
                    <div class="tooltip">
                            <div class="tooltiptext">
                                    <div class="sub-value sub-replacement">RentalRevenue</div></div>
                    <div class="sub-value sub-replacement">(250) Rental Revenue</div></div>
            </td> 
            <!--Current Crude Oil -->
            <td class="xbrl monetary_items">
                    <div class="sub-value sub-no-replacement"></div></td> 
            <!--Current Oil Products -->
            <td class="xbrl monetary_items">
                    <div class="sub-value sub-no-replacement"></div></td> 
            <!--Current -->
            <td class="xbrl monetary_items">
                    <div class="sub-value sub-no-replacement"></div></td> 
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                <div class="sub-value sub-replacement">7</div></td> 
            <td class="xbrl description_items">
                    <div class="tooltip">
                            <div class="tooltiptext">
                                    <div class="sub-value sub-replacement">IncidentalRevenue</div></div>
                    <div class="sub-value sub-replacement">(260) Incidental Revenue</div></div>
            </td> 
            <!--Current Crude Oil -->
            <td class="xbrl monetary_items">
                    <div class="sub-value sub-no-replacement"></div></td> 
            <!--Current Oil Products -->
            <td class="xbrl monetary_items">
                    <div class="sub-value sub-no-replacement"></div></td> 
            <!--Current -->
            <td class="xbrl monetary_items">
                    <div class="sub-value sub-no-replacement"></div></td> 
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                <div class="sub-value sub-replacement">8</div></td> 
            <td class="xbrl description_items">
                    <div class="tooltip">
                            <div class="tooltiptext">
                                    <div class="sub-value sub-replacement">OperatingRevenues</div></div>
                    <div class="sub-value sub-replacement">TOTAL (lines 1 through 7)</div></div>
            </td> 
            <!--Current Crude Oil -->
            <td class="xbrl monetary_items">
                    <div class="sub-value sub-no-replacement"></div></td> 
            <!--Current Oil Products -->
            <td class="xbrl monetary_items">
                    <div class="sub-value sub-no-replacement"></div></td> 
            <!--Current -->
            <td class="xbrl monetary_items">
                    <div class="sub-value sub-no-replacement"></div></td> 
        </tr>
    
    </table>
<p></p>
    <div class="schedule-footer">
        <div>FERC FORM No.
            <div class="sub-value sub-no-replacement"></div><span> </span>
            <div class="sub-value sub-replacement"> (NEW. 06-04)</div></div>
        <div class="center-text">Page 
            <div class="sub-value sub-replacement">300</div></div> 
</div>
</div>
<hr class="screen-page-separator schedule-separator"></hr><div class="print-page-separator sechedule-separator"></div><div class="xbrl">
    <div id="ScheduleOperatingExpenseAccountsAbstract"></div>
    <table class="schedule-header xbrl" width="100%">
        <tr>
            <td class="xbrl">
                <div class="sub-value sub-replacement">Name of Respondent</div><br/>
                <div class="sub-value sub-no-replacement"></div></td>
            <td class="xbrl">
                <div class="sub-value sub-replacement">This Report Is:</div><br/>
                    (1) 
                        <div class="sub-value sub-replacement"><div class="sub-html"><span class="checkbox">&#9744;</span> An Original</div></div><br/>
                    (2)
                        <div class="sub-value sub-replacement"><div class="sub-html"><span class="checkbox">&#9744;</span> A Resubmission</div></div></td>
            <td class="xbrl"><div class="sub-value sub-replacement">Date of Report</div><br/>
                    <div class="sub-value sub-no-replacement"></div></td>
            <td class="xbrl"><div class="sub-value sub-replacement">Year/Period of Report</div><br/>
                End of: <div class="sub-value sub-no-replacement"></div><span>/</span>
                <div class="sub-value sub-no-replacement"></div></td>
        </tr>
    </table>
    <table class="xbrl">
        <tr class="sch-title">
            <td class="xbrl" colspan="10"> 
                <div class="sub-value sub-replacement">Operating Expense Accounts (Account 610)</div></td>
        </tr>
        <tr>
            <td class="instruction xbrl" colspan="10">
                <div class="sub-value sub-replacement"><div class="sub-html"><p>State the pipeline operating expenses of the respondent for the year, classifying them in accordance with the USofA.</p></div></div></td>
        </tr>
        <tr class="col-heading-row">
            <td class="xbrl-no-bottom-line" colspan="1"> </td>
            <td class="xbrl-no-bottom-line" colspan="1"> </td>
            <td class="xbrl col-heading" colspan="4">CRUDE OIL (Year to Date)</td>
            <td class="xbrl col-heading" colspan="3">PRODUCTS (Year to Date)</td>
            <td class="xbrl-no-bottom-line" colspan="1"> </td>
        </tr>
        <tr class="col-heading-row">     
            <td class="col-heading xbrl-no-top-line line-number">Line No.</td>
            <td class="col-heading xbrl-no-top-line">
                    <div style="text-align: center"><div class="sub-value sub-replacement">Operating Expenses Accounts</div></div>
                <div style="text-align: center"><div class="sub-value sub-replacement">(a)</div></div>
            </td>
        <td class="col-heading xbrl-no-top-line">
                    <div style="text-align: center"><div class="sub-value sub-replacement">Gathering</div></div>
                <div style="text-align: center"><div class="sub-value sub-replacement">(b)</div></div>
            </td>
        <td class="col-heading xbrl-no-top-line">
                    <div style="text-align: center"><div class="sub-value sub-replacement">Trunk</div></div>
                <div style="text-align: center"><div class="sub-value sub-replacement">(c)</div></div>
            </td>
        <td class="col-heading xbrl-no-top-line">
                    <div style="text-align: center"><div class="sub-value sub-replacement">Delivery</div></div>
                <div style="text-align: center"><div class="sub-value sub-replacement">(d)</div></div>
            </td>
        <td class="col-heading xbrl-no-top-line">
                    <div style="text-align: center"><div class="sub-value sub-replacement">Total (b + c + d)</div></div>
                <div style="text-align: center"><div class="sub-value sub-replacement">(e)</div></div>
            </td>
        <td class="col-heading xbrl-no-top-line">
                    <div style="text-align: center"><div class="sub-value sub-replacement">Trunk (in dollars)</div></div>
                <div style="text-align: center"><div class="sub-value sub-replacement">(f)</div></div>
            </td>
        <td class="col-heading xbrl-no-top-line">
                    <div style="text-align: center"><div class="sub-value sub-replacement">Delivery (in dollars)</div></div>
                <div style="text-align: center"><div class="sub-value sub-replacement">(g)</div></div>
            </td>
        <td class="col-heading xbrl-no-top-line">
                    <div style="text-align: center"><div class="sub-value sub-replacement">Total (f + g) (in dollars)</div></div>
                <div style="text-align: center"><div class="sub-value sub-replacement">(h)</div></div>
            </td>
        <td class="col-heading xbrl-no-top-line">
                    <div style="text-align: center"><div class="sub-value sub-replacement">Grand Total (e + h)</div></div>
                <div style="text-align: center"><div class="sub-value sub-replacement">(i)</div></div>
            </td>
        
        </tr>
       
        <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement"></div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip title">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">OperationsAndMaintenanceAbstract</div></div>
                                <div class="sub-value sub-replacement">OPERATIONS and MAINTENANCE</div></div>
                        </td> 
    
                        <!--Current Crude Oil Gathering -->
                        <td class="xbrl monetary_items gray-out">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current Crude Oil Trunk -->
                        <td class="xbrl monetary_items gray-out">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current Crude Oil Delivery -->
                        <td class="xbrl monetary_items gray-out">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Crude Oil -->
                        <td class="xbrl monetary_items gray-out">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Oil Products Trunk-->
                        <td class="xbrl monetary_items gray-out">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Oil Products Delivery-->
                        <td class="xbrl monetary_items gray-out">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Oil Products -->
                        <td class="xbrl monetary_items gray-out">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Grand Total-->
                        <td class="xbrl monetary_items gray-out">
                                <div class="sub-value sub-no-replacement"></div></td>           
                  
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">1</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">SalariesAndWagesOperationsAndMaintenance</div></div>
                                <div class="sub-value sub-replacement">Salaries and Wages (300)</div></div>
                        </td> 
    
                        <!--Current Crude Oil Gathering -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current Crude Oil Trunk -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current Crude Oil Delivery -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Crude Oil -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Oil Products Trunk-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Oil Products Delivery-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Oil Products -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Grand Total-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>           
                  
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">2</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">MaterialsAndSuppliesOperationsAndMaintenance</div></div>
                                <div class="sub-value sub-replacement">Materials and Supplies (310)</div></div>
                        </td> 
    
                        <!--Current Crude Oil Gathering -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current Crude Oil Trunk -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current Crude Oil Delivery -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Crude Oil -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Oil Products Trunk-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Oil Products Delivery-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Oil Products -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Grand Total-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>           
                  
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">3</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">OutsideServicesOperationsAndMaintenance</div></div>
                                <div class="sub-value sub-replacement">Outside Services (320)</div></div>
                        </td> 
    
                        <!--Current Crude Oil Gathering -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current Crude Oil Trunk -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current Crude Oil Delivery -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Crude Oil -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Oil Products Trunk-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Oil Products Delivery-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Oil Products -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Grand Total-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>           
                  
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">4</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">OperatingFuelAndPowerOperationsAndMaintenance</div></div>
                                <div class="sub-value sub-replacement">Operating Fuel and Power (330)</div></div>
                        </td> 
    
                        <!--Current Crude Oil Gathering -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current Crude Oil Trunk -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current Crude Oil Delivery -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Crude Oil -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Oil Products Trunk-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Oil Products Delivery-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Oil Products -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Grand Total-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>           
                  
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">5</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">OilLossesAndShortagesOperationsAndMaintenance</div></div>
                                <div class="sub-value sub-replacement">Oil Losses and Shortages (340)</div></div>
                        </td> 
    
                        <!--Current Crude Oil Gathering -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current Crude Oil Trunk -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current Crude Oil Delivery -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Crude Oil -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Oil Products Trunk-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Oil Products Delivery-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Oil Products -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Grand Total-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>           
                  
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">6</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">RentalsOperationsAndMaintenance</div></div>
                                <div class="sub-value sub-replacement">Rentals (350)</div></div>
                        </td> 
    
                        <!--Current Crude Oil Gathering -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current Crude Oil Trunk -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current Crude Oil Delivery -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Crude Oil -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Oil Products Trunk-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Oil Products Delivery-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Oil Products -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Grand Total-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>           
                  
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">7</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">OtherExpensesOperationsAndMaintenance</div></div>
                                <div class="sub-value sub-replacement">Other Expenses (390)</div></div>
                        </td> 
    
                        <!--Current Crude Oil Gathering -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current Crude Oil Trunk -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current Crude Oil Delivery -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Crude Oil -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Oil Products Trunk-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Oil Products Delivery-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Oil Products -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Grand Total-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>           
                  
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">8</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">OperationsAndMaintenanceExpensesOil</div></div>
                                <div class="sub-value sub-replacement">TOTAL Operations and Maintenance Expenses</div></div>
                        </td> 
    
                        <!--Current Crude Oil Gathering -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current Crude Oil Trunk -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current Crude Oil Delivery -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Crude Oil -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Oil Products Trunk-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Oil Products Delivery-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Oil Products -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Grand Total-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>           
                  
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement"></div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip title">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">GeneralExpenseAbstract</div></div>
                                <div class="sub-value sub-replacement">GENERAL</div></div>
                        </td> 
    
                        <!--Current Crude Oil Gathering -->
                        <td class="xbrl monetary_items gray-out">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current Crude Oil Trunk -->
                        <td class="xbrl monetary_items gray-out">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current Crude Oil Delivery -->
                        <td class="xbrl monetary_items gray-out">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Crude Oil -->
                        <td class="xbrl monetary_items gray-out">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Oil Products Trunk-->
                        <td class="xbrl monetary_items gray-out">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Oil Products Delivery-->
                        <td class="xbrl monetary_items gray-out">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Oil Products -->
                        <td class="xbrl monetary_items gray-out">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Grand Total-->
                        <td class="xbrl monetary_items gray-out">
                                <div class="sub-value sub-no-replacement"></div></td>           
                  
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">9</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">SalariesAndWagesGeneralExpense</div></div>
                                <div class="sub-value sub-replacement">Salaries and Wages (500)</div></div>
                        </td> 
    
                        <!--Current Crude Oil Gathering -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current Crude Oil Trunk -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current Crude Oil Delivery -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Crude Oil -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Oil Products Trunk-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Oil Products Delivery-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Oil Products -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Grand Total-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>           
                  
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">10</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">MaterialsAndSuppliesGeneralExpense</div></div>
                                <div class="sub-value sub-replacement">Materials and Supplies (510)</div></div>
                        </td> 
    
                        <!--Current Crude Oil Gathering -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current Crude Oil Trunk -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current Crude Oil Delivery -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Crude Oil -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Oil Products Trunk-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Oil Products Delivery-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Oil Products -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Grand Total-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>           
                  
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">11</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">OutsideServicesGeneralExpense</div></div>
                                <div class="sub-value sub-replacement">Outside Services (520)</div></div>
                        </td> 
    
                        <!--Current Crude Oil Gathering -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current Crude Oil Trunk -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current Crude Oil Delivery -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Crude Oil -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Oil Products Trunk-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Oil Products Delivery-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Oil Products -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Grand Total-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>           
                  
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">12</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">RentalsGeneralExpense</div></div>
                                <div class="sub-value sub-replacement">Rentals (530)</div></div>
                        </td> 
    
                        <!--Current Crude Oil Gathering -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current Crude Oil Trunk -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current Crude Oil Delivery -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Crude Oil -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Oil Products Trunk-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Oil Products Delivery-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Oil Products -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Grand Total-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>           
                  
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">13</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">DepreciationAndAmortizationGeneralExpense</div></div>
                                <div class="sub-value sub-replacement">Depreciation and Amortization (540)</div></div>
                        </td> 
    
                        <!--Current Crude Oil Gathering -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current Crude Oil Trunk -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current Crude Oil Delivery -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Crude Oil -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Oil Products Trunk-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Oil Products Delivery-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Oil Products -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Grand Total-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>           
                  
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">14</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">DepreciationExpenseForAssetRetirementCosts</div></div>
                                <div class="sub-value sub-replacement">Depreciation Expense for Asset Retirement Costs (541)</div></div>
                        </td> 
    
                        <!--Current Crude Oil Gathering -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current Crude Oil Trunk -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current Crude Oil Delivery -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Crude Oil -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Oil Products Trunk-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Oil Products Delivery-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Oil Products -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Grand Total-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>           
                  
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">15</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">EmployeeBenefitsGeneralExpense</div></div>
                                <div class="sub-value sub-replacement">Employee Benefits (550)</div></div>
                        </td> 
    
                        <!--Current Crude Oil Gathering -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current Crude Oil Trunk -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current Crude Oil Delivery -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Crude Oil -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Oil Products Trunk-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Oil Products Delivery-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Oil Products -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Grand Total-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>           
                  
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">16</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">InsuranceGeneralExpense</div></div>
                                <div class="sub-value sub-replacement">Insurance (560)</div></div>
                        </td> 
    
                        <!--Current Crude Oil Gathering -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current Crude Oil Trunk -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current Crude Oil Delivery -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Crude Oil -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Oil Products Trunk-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Oil Products Delivery-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Oil Products -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Grand Total-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>           
                  
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">17</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">CasualtyAndOtherLossesGeneralExpense</div></div>
                                <div class="sub-value sub-replacement">Casualty and Other Losses (570)</div></div>
                        </td> 
    
                        <!--Current Crude Oil Gathering -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current Crude Oil Trunk -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current Crude Oil Delivery -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Crude Oil -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Oil Products Trunk-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Oil Products Delivery-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Oil Products -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Grand Total-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>           
                  
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">18</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">PipelineTaxesGeneralExpense</div></div>
                                <div class="sub-value sub-replacement">Pipeline Taxes (580)</div></div>
                        </td> 
    
                        <!--Current Crude Oil Gathering -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current Crude Oil Trunk -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current Crude Oil Delivery -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Crude Oil -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Oil Products Trunk-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Oil Products Delivery-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Oil Products -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Grand Total-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>           
                  
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">19</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">OtherExpensesGeneralExpense</div></div>
                                <div class="sub-value sub-replacement">Other Expenses (590)</div></div>
                        </td> 
    
                        <!--Current Crude Oil Gathering -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current Crude Oil Trunk -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current Crude Oil Delivery -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Crude Oil -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Oil Products Trunk-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Oil Products Delivery-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Oil Products -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Grand Total-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>           
                  
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">20</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">AccretionExpense</div></div>
                                <div class="sub-value sub-replacement">Accretion Expense (591)</div></div>
                        </td> 
    
                        <!--Current Crude Oil Gathering -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current Crude Oil Trunk -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current Crude Oil Delivery -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Crude Oil -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Oil Products Trunk-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Oil Products Delivery-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Oil Products -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Grand Total-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>           
                  
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">21</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">GainsOrLossesOnAssetRetirementObligationsGeneralExpense</div></div>
                                <div class="sub-value sub-replacement">Gains or Losses on Asset Retirement Obligations (592)</div></div>
                        </td> 
    
                        <!--Current Crude Oil Gathering -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current Crude Oil Trunk -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current Crude Oil Delivery -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Crude Oil -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Oil Products Trunk-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Oil Products Delivery-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Oil Products -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Grand Total-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>           
                  
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">22</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">GeneralExpensesOil</div></div>
                                <div class="sub-value sub-replacement">TOTAL General Expenses</div></div>
                        </td> 
    
                        <!--Current Crude Oil Gathering -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current Crude Oil Trunk -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current Crude Oil Delivery -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Crude Oil -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Oil Products Trunk-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Oil Products Delivery-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Oil Products -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Grand Total-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>           
                  
        </tr>
    <tr class="schedule-row">
                <td class="xbrl line-number">
                            <div class="sub-value sub-replacement">23</div></td> 
                        <td class="xbrl description_items">
                                <div class="tooltip">
                                        <div class="tooltiptext">
                                                <div class="sub-value sub-replacement">OperatingExpenses</div></div>
                                <div class="sub-value sub-replacement">GRAND TOTALS</div></div>
                        </td> 
    
                        <!--Current Crude Oil Gathering -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current Crude Oil Trunk -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td> 
                        <!--Current Crude Oil Delivery -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Crude Oil -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Oil Products Trunk-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Oil Products Delivery-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Oil Products -->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <!--Current Grand Total-->
                        <td class="xbrl monetary_items">
                                <div class="sub-value sub-no-replacement"></div></td>           
                  
        </tr>
    
    </table>
<p></p>
        <div class="schedule-footer">
            <div> FERC FORM NO.
                <div class="sub-value sub-no-replacement"></div><span> </span>
                <div class="sub-value sub-replacement"> (REV 12-03)</div></div>
            <div style="text-align: center">Page 
                <div class="sub-value sub-replacement">302</div></div>
        </div>
    </div>
<hr class="screen-page-separator schedule-separator"></hr><div class="print-page-separator sechedule-separator"></div><div class="xbrl">
    <div id="ScheduleStatisticsOfOperationsAbstract"></div>
    <table class="schedule-header xbrl" width="100%">
            <tr>
                <td class="xbrl">
                    <div class="sub-value sub-replacement">Name of Respondent</div><br/>
                    
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="xbrl">
                    <div class="sub-value sub-replacement">This Report Is:</div><br/>        
                    (1) 
                    <div class="sub-value sub-replacement"><div class="sub-html"><span class="checkbox">&#9744;</span> An Original</div></div><br/>  
                    (2)
                    <div class="sub-value sub-replacement"><div class="sub-html"><span class="checkbox">&#9744;</span> A Resubmission</div></div></td>
                <td class="xbrl"><div class="sub-value sub-replacement">Date of Report</div><br/>
                        <div class="sub-value sub-no-replacement"></div></td>
                <td class="xbrl"><div class="sub-value sub-replacement">Year/Period of Report</div><br/>
                    End of: <div class="sub-value sub-no-replacement"></div><span>/</span>
                    <div class="sub-value sub-no-replacement"></div></td>
            </tr>
        </table>
    <table class="xbrl">
        <tr class="sch-title">
            <td class="xbrl" colspan="11"> 
                <div class="sub-value sub-replacement">Statistics of Operations</div></td>
        </tr>
        <tr>
            <td class="instruction xbrl" colspan="11">
                <div class="sub-value sub-replacement"><div class="sub-html"><ol>
                                    <li>Give particulars (details) by States of origin for crude oil and for each kind of product received year to date and totals only (i.e., no State detail) for number of barrels of crude oil and of each kind of product delivered out of the pipeline year to date. Classify and list in column (b) by States of origin the refined products transported in the following order: 29111, Gasoline, jet fuels, and other high volatile petroleum fuels, except natural gasoline; 29112, Kerosene; 29113, Distillate fuel oil; 29114, Lubricating and similar oils and derivatives; 29117, Residual fuel oil and other low volatile petroleum fuels; 29112, Products of petroleum refining, n.e.c. - Specify.</li>
                                    <li>In column (c) show all oils received by the respondent from connecting carriers reporting to the Federal Energy Regulatory Commission. In column (d) show all oils originated on respondent&#8217;s gathering lines and in column (e) all oils received into respondent&#8217;s trunk line, except receipts shown in columns (c) and (d). Any barrels received into a pipeline owned by the respondent, but operated by others, should be reported separately on page 600a.</li>
                                    <li>Entries in column (f) should be the sum of columns (c), (d), and (e). In column (g) show all oils delivered to connecting carriers reporting to the Federal Energy Regulatory Commission. In column (h) show all oils terminated on the respondent&#8217;s gathering lines, and in column (i) all oils delivered out of respondent&#8217;s pipeline, except deliveries shown under columns (g) and (h).<br/>
                                    Entries in column (j) should be the sum of columns (g), (h), and (i). Any barrels delivered out of a pipeline owned by the respondent, but operated by others, should be reported separately on page 600a.<br/></li>
                                    <li>Enter actual amount for lines 33a and 33b on an annual basis only. Do not report on a quarterly basis. Estimate if actual figures are not available. Barrel miles as reported on this schedule are the summation, for all segments, of the number of miles associated with each pipeline segment (trunk line only) multiplied by the number of barrels delivered through the segment. For example, 1,000 barrels moved through a 57-mile pipeline segment would be recorded as 57,000 barrel-miles. For a crude pipeline with several segments:
                                    <table>
                                    <tr>
                                    <th>Segments</th>
                                    <th>Barrels</th>
                                    <th>Miles</th>
                                    <th>Barrel-Miles</th>
                                    </tr>
                                    <tr>
                                    <td>A</td>
                                    <td>1,000</td>
                                    <td>57</td>
                                    <td>57,000</td>
                                    </tr>
                                    <tr>
                                    <td>B</td>
                                    <td>5,000</td>
                                    <td>10</td>
                                    <td>50,000</td>
                                    </tr>
                                    <tr>
                                    <td>C</td>
                                    <td>1,000</td>
                                    <td>25</td>
                                    <td>25,000</td>
                                    </tr>
                                    </table>
                                    </li>
                            </ol></div></div></td>
        </tr>
        <tr class="col-heading-row">
            <td class="xbrl-no-bottom-line" colspan="1"> </td>
            <td class="xbrl-no-bottom-line" colspan="1"> </td>
            <td class="xbrl-no-bottom-line" colspan="1"> </td>
            <td class="xbrl col-heading" colspan="4">Number of Barrels Received (Year to Date)</td>
            <td class="xbrl col-heading" colspan="4">Number of Barrels Delivered Out (Year to Date)</td>
        </tr>
        <tr class="col-heading-row">
            <td class="xbrl-no-bottom-top-line" colspan="1"> </td>
            <td class="xbrl-no-bottom-top-line" colspan="1"> </td>
            <td class="xbrl-no-bottom-top-line" colspan="1"> </td>
            <td class="xbrl-no-bottom-top-line" colspan="1"> </td>
            <td class="xbrl center-text" colspan="2">ORIGINATED On</td>
            <td class="xbrl-no-bottom-top-line" colspan="1"> </td>
            <td class="xbrl-no-bottom-top-line" colspan="1"> </td>
            <td class="xbrl center-text" colspan="2">TERMINATED On</td>
            <td class="xbrl-no-bottom-line" colspan="1"></td>
        </tr>      
        <tr class="col-heading-row">     
            <td class="col-heading xbrl-no-top-line line-number">Line No.</td>
            <td class="col-heading xbrl-no-top-line">
                    <div style="text-align: center">
                        <div class="tooltip">
                                <div class="tooltiptext">
                                        <div class="sub-value sub-replacement">StateOfOrigin</div></div>    
                            <div class="sub-value sub-replacement">State of Origin</div></div>
                    </div>
                <div style="text-align: center"><div class="sub-value sub-replacement">(a)</div></div>
            </td>
        <td class="col-heading xbrl-no-top-line">
                    <div style="text-align: center">
                        <div class="tooltip">
                                <div class="tooltiptext">
                                        <div class="sub-value sub-replacement">RefinedProductType</div></div>    
                            <div class="sub-value sub-replacement">Type of Refined Products Transported</div></div>
                    </div>
                <div style="text-align: center"><div class="sub-value sub-replacement">(b)</div></div>
            </td>
        <td class="col-heading xbrl-no-top-line">
                    <div style="text-align: center">
                        <div class="tooltip">
                                <div class="tooltiptext">
                                        <div class="sub-value sub-replacement">NumberOfBarrelsReceivedFromConnectingCarriers</div></div>    
                            <div class="sub-value sub-replacement">From Connecting Carriers</div></div>
                    </div>
                <div style="text-align: center"><div class="sub-value sub-replacement">(c)</div></div>
            </td>
        <td class="col-heading xbrl-no-top-line">
                    <div style="text-align: center">
                        <div class="tooltip">
                                <div class="tooltiptext">
                                        <div class="sub-value sub-replacement">NumberOfBarrelsReceivedOnGatheringLines</div></div>    
                            <div class="sub-value sub-replacement">Gathering Lines</div></div>
                    </div>
                <div style="text-align: center"><div class="sub-value sub-replacement">(d)</div></div>
            </td>
        <td class="col-heading xbrl-no-top-line">
                    <div style="text-align: center">
                        <div class="tooltip">
                                <div class="tooltiptext">
                                        <div class="sub-value sub-replacement">NumberOfBarrelsReceivedOnTrunkLines</div></div>    
                            <div class="sub-value sub-replacement">Trunk Lines</div></div>
                    </div>
                <div style="text-align: center"><div class="sub-value sub-replacement">(e)</div></div>
            </td>
        <td class="col-heading xbrl-no-top-line">
                    <div style="text-align: center">
                        <div class="tooltip">
                                <div class="tooltiptext">
                                        <div class="sub-value sub-replacement">NumberOfBarrelsReceived</div></div>    
                            <div class="sub-value sub-replacement">Total Received (c + d + e)</div></div>
                    </div>
                <div style="text-align: center"><div class="sub-value sub-replacement">(f)</div></div>
            </td>
        <td class="col-heading xbrl-no-top-line">
                    <div style="text-align: center">
                        <div class="tooltip">
                                <div class="tooltiptext">
                                        <div class="sub-value sub-replacement">NumberOfBarrelsDeliveredOutToConnectingCarriers</div></div>    
                            <div class="sub-value sub-replacement">To Connecting Carriers</div></div>
                    </div>
                <div style="text-align: center"><div class="sub-value sub-replacement">(g)</div></div>
            </td>
        <td class="col-heading xbrl-no-top-line">
                    <div style="text-align: center">
                        <div class="tooltip">
                                <div class="tooltiptext">
                                        <div class="sub-value sub-replacement">NumberOfBarrelsDeliveredOutOnGatheringLines</div></div>    
                            <div class="sub-value sub-replacement">Gathering Lines</div></div>
                    </div>
                <div style="text-align: center"><div class="sub-value sub-replacement">(h)</div></div>
            </td>
        <td class="col-heading xbrl-no-top-line">
                    <div style="text-align: center">
                        <div class="tooltip">
                                <div class="tooltiptext">
                                        <div class="sub-value sub-replacement">NumberOfBarrelsDeliveredOutOnTrunkLines</div></div>    
                            <div class="sub-value sub-replacement">Trunk Lines</div></div>
                    </div>
                <div style="text-align: center"><div class="sub-value sub-replacement">(i)</div></div>
            </td>
        <td class="col-heading xbrl-no-top-line">
                    <div style="text-align: center">
                        <div class="tooltip">
                                <div class="tooltiptext">
                                        <div class="sub-value sub-replacement">NumberOfBarrelsDeliveredOut</div></div>    
                            <div class="sub-value sub-replacement">Total Delivered Out (g + h + i)</div></div>
                    </div>
                <div style="text-align: center"><div class="sub-value sub-replacement">(j)</div></div>
            </td>
        
        </tr>
        <tr>
            <td class="xbrl"></td>
            <td class="xbrl col-heading">CRUDE OIL</td>
            <td class="xbrl"></td>
            <td class="xbrl"></td>
            <td class="xbrl"></td>
            <td class="xbrl"></td>
            <td class="xbrl"></td>
            <td class="xbrl"></td>
            <td class="xbrl"></td>
            <td class="xbrl"></td>
            <td class="xbrl"></td>
        </tr>
            <!-- Line 15 Total Crude Oil -->
            <tr>
                <td class="xbrl line-number">15</td>
                <td class="xbrl description_items">TOTAL</td>
                <td class="xbrl gray-out"></td>
                <td class="xbrl numeric_items">
                        <div class="sub-value sub-no-replacement"></div></td>
                <td class="xbrl numeric_items">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="xbrl numeric_items">
                        <div class="sub-value sub-no-replacement"></div></td>
                <td class="xbrl numeric_items">
                        <div class="sub-value sub-no-replacement"></div></td>
                <td class="xbrl numeric_items">
                        <div class="sub-value sub-no-replacement"></div></td>
                <td class="xbrl numeric_items">
                        <div class="sub-value sub-no-replacement"></div></td>
                <td class="xbrl numeric_items">
                        <div class="sub-value sub-no-replacement"></div></td>
                <td class="xbrl numeric_items">
                        <div class="sub-value sub-no-replacement"></div></td>
            </tr>
            <tr>
                <td class="xbrl"></td>
                <td class="xbrl col-heading">PRODUCTS</td>
                <td class="xbrl"></td>
                <td class="xbrl"></td>
                <td class="xbrl"></td>
                <td class="xbrl"></td>
                <td class="xbrl"></td>
                <td class="xbrl"></td>
                <td class="xbrl"></td>
                <td class="xbrl"></td>
                <td class="xbrl"></td>
                </tr>
            <!-- Line 31 Total Products -->
            <tr>
                    <td class="xbrl line-number">31</td>
                    <td class="xbrl">TOTAL</td>
                    <td class="xbrl gray-out"></td>
                    <td class="xbrl numeric_items">
                            <div class="sub-value sub-no-replacement"></div></td>
                    <td class="xbrl numeric_items">
                        <div class="sub-value sub-no-replacement"></div></td>
                    <td class="xbrl numeric_items">
                            <div class="sub-value sub-no-replacement"></div></td>
                    <td class="xbrl numeric_items">
                            <div class="sub-value sub-no-replacement"></div></td>
                    <td class="xbrl numeric_items">
                            <div class="sub-value sub-no-replacement"></div></td>
                    <td class="xbrl numeric_items">
                            <div class="sub-value sub-no-replacement"></div></td>
                    <td class="xbrl numeric_items">
                            <div class="sub-value sub-no-replacement"></div></td>
                    <td class="xbrl numeric_items">
                            <div class="sub-value sub-no-replacement"></div></td>
                </tr>
            <!-- Line 32 Total Products -->
                <tr>
                        <td class="xbrl line-number">32</td>
                        <td class="xbrl">GRAND TOTAL</td>
                        <td class="xbrl gray-out"></td>
                        <td class="xbrl numeric_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <td class="xbrl numeric_items">
                            <div class="sub-value sub-no-replacement"></div></td>
                        <td class="xbrl numeric_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <td class="xbrl numeric_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <td class="xbrl numeric_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <td class="xbrl numeric_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <td class="xbrl numeric_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                        <td class="xbrl numeric_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                    </tr>
    </table>
    <table class="xbrl" width="100%">
         <!-- Line 33a Total Barrel Miles Trunk -->
                    <tr>
                        <td>33a</td>
                        <td>Total Number of Barrel-Miles (Trunk Lines Only):</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>(1) Crude Oil</td>
                        <td class="numeric_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>(2) Products</td>
                        <td class="numeric_items">
                                <div class="sub-value sub-no-replacement"></div></td>
                    </tr>
        <!-- Line 33b Total Barrel Miles Trunk -->
        <tr>
                <td>33b</td>
                <td>Total Number of Barrels of Oil Having Trunk-Line Movement:</td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td>(1) Crude Oil</td>
                <td class="numeric_items">
                        <div class="sub-value sub-no-replacement"></div></td>
            </tr>
            <tr>
                <td></td>
                <td>(2) Products</td>
                <td class="numeric_items">
                        <div class="sub-value sub-no-replacement"></div></td>
            </tr>            
    </table>
<p></p>
    <div class="schedule-footer">
        <div> FERC FORM NO.
            <div class="sub-value sub-no-replacement"></div><span> </span>
            <div class="sub-value sub-replacement"> (REV 12-00)</div></div> 
        <div style="text-align: center">Page 
            <div class="sub-value sub-replacement">600</div></div>
    </div>
</div>
<hr class="screen-page-separator schedule-separator"></hr><div class="print-page-separator sechedule-separator"></div><div class="xbrl" id="ScheduleStatisticsOfOperationsOwnedByRespondentButOperatedByOthersAbstract">
    <table class="schedule-header xbrl" width="100%">
            <tr>
                <td class="xbrl">
                    <div class="sub-value sub-replacement">Name of Respondent</div><br/>
                    
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="xbrl">
                    <div class="sub-value sub-replacement">This Report Is:</div><br/>        
                    (1) 
                    <div class="sub-value sub-replacement"><div class="sub-html"><span class="checkbox">&#9744;</span> An Original</div></div><br/>  
                    (2)
                    <div class="sub-value sub-replacement"><div class="sub-html"><span class="checkbox">&#9744;</span> A Resubmission</div></div></td>
                <td class="xbrl"><div class="sub-value sub-replacement">Date of Report</div><br/>
                        <div class="sub-value sub-no-replacement"></div></td>
                <td class="xbrl"><div class="sub-value sub-replacement">Year/Period of Report</div><br/>
                    End of: <div class="sub-value sub-no-replacement"></div><span>/</span>
                    <div class="sub-value sub-no-replacement"></div></td>
            </tr>
        </table>
    <table class="xbrl">
        <tr class="sch-title">
            <td class="xbrl" colspan="11"> 
                <div class="sub-value sub-replacement">Statistics of Operations - Operated by Others</div></td>
        </tr>
        <tr>
            <td class="instruction xbrl" colspan="11">
                <div class="sub-value sub-replacement"><div class="sub-html"><ol>
                                    <li>Give particulars (details) by States of origin for crude oil and for each kind of product received year to date and totals only (i.e., no State detail) for number of barrels of crude oil and of each kind of product delivered out of the pipeline year to date. Classify and list in column (b) by States of origin the refined products transported in the following order: 29111, Gasoline, jet fuels, and other high volatile petroleum fuels, except natural gasoline; 29112, Kerosene; 29113, Distillate fuel oil; 29114, Lubricating and similar oils and derivatives; 29117, Residual fuel oil and other low volatile petroleum fuels; 29112, Products of petroleum refining, n.e.c. - Specify.</li>
                                    <li>In column (c) show all oils received by the respondent from connecting carriers reporting to the Federal Energy Regulatory Commission. In column (d) show all oils originated on respondent&#8217;s gathering lines and in column (e) all oils received into respondent&#8217;s trunk line, except receipts shown in columns (c) and (d). Any barrels received into a pipeline owned by the respondent, but operated by others, should be reported separately on page 600a.</li>
                                    <li>Entries in column (f) should be the sum of columns (c), (d), and (e). In column (g) show all oils delivered to connecting carriers reporting to the Federal Energy Regulatory Commission. In column (h) show all oils terminated on the respondent&#8217;s gathering lines, and in column (i) all oils delivered out of respondent&#8217;s pipeline, except deliveries shown under columns (g) and (h).<br/>
                                    Entries in column (j) should be the sum of columns (g), (h), and (i). Any barrels delivered out of a pipeline owned by the respondent, but operated by others, should be reported separately on page 600a.<br/></li>
                                    <li>Enter actual amount for lines 33a and 33b on an annual basis only. Do not report on a quarterly basis. Estimate if actual figures are not available. Barrel miles as reported on this schedule are the summation, for all segments, of the number of miles associated with each pipeline segment (trunk line only) multiplied by the number of barrels delivered through the segment. For example, 1,000 barrels moved through a 57-mile pipeline segment would be recorded as 57,000 barrel-miles. For a crude pipeline with several segments:
                                    <table>
                                    <tr>
                                    <th>Segments</th>
                                    <th>Barrels</th>
                                    <th>Miles</th>
                                    <th>Barrel-Miles</th>
                                    </tr>
                                    <tr>
                                    <td>A</td>
                                    <td>1,000</td>
                                    <td>57</td>
                                    <td>57,000</td>
                                    </tr>
                                    <tr>
                                    <td>B</td>
                                    <td>5,000</td>
                                    <td>10</td>
                                    <td>50,000</td>
                                    </tr>
                                    <tr>
                                    <td>C</td>
                                    <td>1,000</td>
                                    <td>25</td>
                                    <td>25,000</td>
                                    </tr>
                                    </table>
                                    </li>
                            </ol></div></div></td>
        </tr>

        <tr class="col-heading-row">
            <td class="xbrl-no-bottom-line" colspan="1"> </td>
            <td class="xbrl-no-bottom-line" colspan="1"> </td>
            <td class="xbrl-no-bottom-line" colspan="1"> </td>
            <td class="xbrl col-heading" colspan="4">Number of Barrels Received (Year to Date)</td>
            <td class="xbrl col-heading" colspan="4">Number of Barrels Delivered Out (Year to Date)</td>
        </tr>  
        <tr class="col-heading-row">
            <td class="xbrl-no-bottom-top-line" colspan="1"> </td>
            <td class="xbrl-no-bottom-top-line" colspan="1"> </td>
            <td class="xbrl-no-bottom-top-line" colspan="1"> </td>
            <td class="xbrl-no-bottom-top-line" colspan="1"> </td>
            <td class="xbrl center-text" colspan="2">ORIGINATED On</td>
            <td class="xbrl-no-bottom-top-line" colspan="1"> </td>
            <td class="xbrl-no-bottom-top-line" colspan="1"> </td>
            <td class="xbrl center-text" colspan="2">TERMINATED On</td>
            <td class="xbrl-no-bottom-line" colspan="1"></td>
        </tr>      
        <tr class="col-heading-row">     
            <td class="col-heading xbrl-no-top-line line-number">Line No.</td>
            <td class="col-heading xbrl-no-top-line">
                    <div style="text-align: center">
                        <div class="tooltip">
                                <div class="tooltiptext">
                                        <div class="sub-value sub-replacement">StateOfOriginOwnedByRespondentButOperatedByOthers</div></div>    
                            <div class="sub-value sub-replacement">State of Origin</div></div>
                    </div>
                <div style="text-align: center"><div class="sub-value sub-replacement">(a)</div></div>
            </td>
        <td class="col-heading xbrl-no-top-line">
                    <div style="text-align: center">
                        <div class="tooltip">
                                <div class="tooltiptext">
                                        <div class="sub-value sub-replacement">RefinedProductTypeOwnedByRespondentButOperatedByOthers</div></div>    
                            <div class="sub-value sub-replacement">Type of Refined Products Transported</div></div>
                    </div>
                <div style="text-align: center"><div class="sub-value sub-replacement">(b)</div></div>
            </td>
        <td class="col-heading xbrl-no-top-line">
                    <div style="text-align: center">
                        <div class="tooltip">
                                <div class="tooltiptext">
                                        <div class="sub-value sub-replacement">NumberOfBarrelsReceivedFromConnectingCarriersOwnedByRespondentButOperatedByOthers</div></div>    
                            <div class="sub-value sub-replacement">From Connecting Carriers</div></div>
                    </div>
                <div style="text-align: center"><div class="sub-value sub-replacement">(c)</div></div>
            </td>
        <td class="col-heading xbrl-no-top-line">
                    <div style="text-align: center">
                        <div class="tooltip">
                                <div class="tooltiptext">
                                        <div class="sub-value sub-replacement">NumberOfBarrelsReceivedOnGatheringLinesOwnedByRespondentButOperatedByOthers</div></div>    
                            <div class="sub-value sub-replacement">Gathering Lines</div></div>
                    </div>
                <div style="text-align: center"><div class="sub-value sub-replacement">(d)</div></div>
            </td>
        <td class="col-heading xbrl-no-top-line">
                    <div style="text-align: center">
                        <div class="tooltip">
                                <div class="tooltiptext">
                                        <div class="sub-value sub-replacement">NumberOfBarrelsReceivedOnTrunkLinesOwnedByRespondentButOperatedByOthers</div></div>    
                            <div class="sub-value sub-replacement">Trunk Lines</div></div>
                    </div>
                <div style="text-align: center"><div class="sub-value sub-replacement">(e)</div></div>
            </td>
        <td class="col-heading xbrl-no-top-line">
                    <div style="text-align: center">
                        <div class="tooltip">
                                <div class="tooltiptext">
                                        <div class="sub-value sub-replacement">NumberOfBarrelsReceivedOwnedByRespondentButOperatedByOthers</div></div>    
                            <div class="sub-value sub-replacement">Total Received (c + d + e)</div></div>
                    </div>
                <div style="text-align: center"><div class="sub-value sub-replacement">(f)</div></div>
            </td>
        <td class="col-heading xbrl-no-top-line">
                    <div style="text-align: center">
                        <div class="tooltip">
                                <div class="tooltiptext">
                                        <div class="sub-value sub-replacement">NumberOfBarrelsDeliveredOutToConnectingCarriersOwnedByRespondentButOperatedByOthers</div></div>    
                            <div class="sub-value sub-replacement">To Connecting Carriers</div></div>
                    </div>
                <div style="text-align: center"><div class="sub-value sub-replacement">(g)</div></div>
            </td>
        <td class="col-heading xbrl-no-top-line">
                    <div style="text-align: center">
                        <div class="tooltip">
                                <div class="tooltiptext">
                                        <div class="sub-value sub-replacement">NumberOfBarrelsDeliveredOutOnGatheringLinesOwnedByRespondentButOperatedByOthers</div></div>    
                            <div class="sub-value sub-replacement">Gathering Lines</div></div>
                    </div>
                <div style="text-align: center"><div class="sub-value sub-replacement">(h)</div></div>
            </td>
        <td class="col-heading xbrl-no-top-line">
                    <div style="text-align: center">
                        <div class="tooltip">
                                <div class="tooltiptext">
                                        <div class="sub-value sub-replacement">NumberOfBarrelsDeliveredOutOnTrunkLinesOwnedByRespondentButOperatedByOthers</div></div>    
                            <div class="sub-value sub-replacement">Trunk Lines</div></div>
                    </div>
                <div style="text-align: center"><div class="sub-value sub-replacement">(i)</div></div>
            </td>
        <td class="col-heading xbrl-no-top-line">
                    <div style="text-align: center">
                        <div class="tooltip">
                                <div class="tooltiptext">
                                        <div class="sub-value sub-replacement">NumberOfBarrelsDeliveredOutOwnedByRespondentButOperatedByOthers</div></div>    
                            <div class="sub-value sub-replacement">Total Delivered Out (g + h + i)</div></div>
                    </div>
                <div style="text-align: center"><div class="sub-value sub-replacement">(j)</div></div>
            </td>
        
        </tr>
        <tr class="schedule-row">
                <td class="xbrl line-number"><span class="sub-line-number">1</span></td>
                <td class="xbrl col-heading">
                    <div class="sub-value sub-replacement">CRUDE OIL</div></td>
                <td class="xbrl description_items">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
       
            </tr> 

          
    <tr class="schedule-row">
                <td class="xbrl line-number"><span class="sub-line-number">2</span></td>
                <td class="xbrl description_items">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="xbrl description_items">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
       
            </tr> 

          
    <tr class="schedule-row">
                <td class="xbrl line-number"><span class="sub-line-number">3</span></td>
                <td class="xbrl description_items">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="xbrl description_items">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
       
            </tr> 

          
    <tr class="schedule-row">
                <td class="xbrl line-number"><span class="sub-line-number">4</span></td>
                <td class="xbrl description_items">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="xbrl description_items">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
       
            </tr> 

          
    <tr class="schedule-row">
                <td class="xbrl line-number"><span class="sub-line-number">5</span></td>
                <td class="xbrl description_items">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="xbrl description_items">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
       
            </tr> 

          
    <tr class="schedule-row">
                <td class="xbrl line-number"><span class="sub-line-number">6</span></td>
                <td class="xbrl description_items">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="xbrl description_items">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
       
            </tr> 

          
    <tr class="schedule-row">
                <td class="xbrl line-number"><span class="sub-line-number">7</span></td>
                <td class="xbrl description_items">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="xbrl description_items">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
       
            </tr> 

          
    <tr class="schedule-row">
                <td class="xbrl line-number"><span class="sub-line-number">8</span></td>
                <td class="xbrl description_items">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="xbrl description_items">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
       
            </tr> 

          
    <tr class="schedule-row">
                <td class="xbrl line-number"><span class="sub-line-number">9</span></td>
                <td class="xbrl description_items">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="xbrl description_items">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
       
            </tr> 

          
    <tr class="schedule-row">
                <td class="xbrl line-number"><span class="sub-line-number">10</span></td>
                <td class="xbrl description_items">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="xbrl description_items">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
       
            </tr> 

          
    <tr class="schedule-row">
                <td class="xbrl line-number"><span class="sub-line-number">11</span></td>
                <td class="xbrl description_items">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="xbrl description_items">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
       
            </tr> 

          
    <tr class="schedule-row">
                <td class="xbrl line-number"><span class="sub-line-number">12</span></td>
                <td class="xbrl description_items">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="xbrl description_items">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
       
            </tr> 

          
    <tr class="schedule-row">
                <td class="xbrl line-number"><span class="sub-line-number">13</span></td>
                <td class="xbrl description_items">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="xbrl description_items">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
       
            </tr> 

          
    <tr class="schedule-row">
                <td class="xbrl line-number"><span class="sub-line-number">14</span></td>
                <td class="xbrl description_items">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="xbrl description_items">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
       
            </tr> 

          
    <tr class="schedule-row">
                <td class="xbrl line-number"><span class="sub-line-number">15</span></td>
                <td class="xbrl description_items">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="xbrl description_items">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
       
            </tr> 

          
    <tr class="schedule-row">
                <td class="xbrl line-number"><span class="sub-line-number">16</span></td>
                <td class="xbrl description_items">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="xbrl description_items">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
       
            </tr> 

          
    <tr class="schedule-row">
                <td class="xbrl line-number"><span class="sub-line-number">17</span></td>
                <td class="xbrl col-heading">
                    <div class="sub-value sub-replacement">PRODUCT</div></td>
                <td class="xbrl description_items">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
       
            </tr> 

          
    <tr class="schedule-row">
                <td class="xbrl line-number"><span class="sub-line-number">18</span></td>
                <td class="xbrl description_items">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="xbrl description_items">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
       
            </tr> 

          
    <tr class="schedule-row">
                <td class="xbrl line-number"><span class="sub-line-number">19</span></td>
                <td class="xbrl description_items">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="xbrl description_items">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
       
            </tr> 

          
    <tr class="schedule-row">
                <td class="xbrl line-number"><span class="sub-line-number">20</span></td>
                <td class="xbrl description_items">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="xbrl description_items">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
       
            </tr> 

          
    <tr class="schedule-row">
                <td class="xbrl line-number"><span class="sub-line-number">21</span></td>
                <td class="xbrl description_items">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="xbrl description_items">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
       
            </tr> 

          
    <tr class="schedule-row">
                <td class="xbrl line-number"><span class="sub-line-number">22</span></td>
                <td class="xbrl description_items">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="xbrl description_items">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
       
            </tr> 

          
    <tr class="schedule-row">
                <td class="xbrl line-number"><span class="sub-line-number">23</span></td>
                <td class="xbrl description_items">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="xbrl description_items">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
       
            </tr> 

          
    <tr class="schedule-row">
                <td class="xbrl line-number"><span class="sub-line-number">24</span></td>
                <td class="xbrl description_items">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="xbrl description_items">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
       
            </tr> 

          
    <tr class="schedule-row">
                <td class="xbrl line-number"><span class="sub-line-number">25</span></td>
                <td class="xbrl description_items">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="xbrl description_items">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
       
            </tr> 

          
    <tr class="schedule-row">
                <td class="xbrl line-number"><span class="sub-line-number">26</span></td>
                <td class="xbrl description_items">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="xbrl description_items">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
       
            </tr> 

          
    <tr class="schedule-row">
                <td class="xbrl line-number"><span class="sub-line-number">27</span></td>
                <td class="xbrl description_items">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="xbrl description_items">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
       
            </tr> 

          
    <tr class="schedule-row">
                <td class="xbrl line-number"><span class="sub-line-number">28</span></td>
                <td class="xbrl description_items">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="xbrl description_items">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
       
            </tr> 

          
    <tr class="schedule-row">
                <td class="xbrl line-number"><span class="sub-line-number">29</span></td>
                <td class="xbrl description_items">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="xbrl description_items">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
       
            </tr> 

          
    <tr class="schedule-row">
                <td class="xbrl line-number"><span class="sub-line-number">30</span></td>
                <td class="xbrl description_items">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="xbrl description_items">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
       
            </tr> 

          
    <tr class="schedule-row">
                <td class="xbrl line-number"><span class="sub-line-number">31</span></td>
                <td class="xbrl description_items">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="xbrl description_items">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
       
            </tr> 

          
    <tr class="schedule-row">
                <td class="xbrl line-number"><span class="sub-line-number">32</span></td>
                <td class="xbrl description_items">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="xbrl description_items">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl">
                    <div class="sub-value sub-no-replacement"></div></td>
       
            </tr> 

          
    <tr class="schedule-row">
                <td class="xbrl line-number"><span class="sub-line-number">33</span></td>
                <td class="xbrl-no-box description_items overflow">
                    <div class="sub-value sub-replacement">33a    Total Number of Barrel-Miles (Trunk Lines Only):</div></td>
                <td class="xbrl-no-box numeric_items">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl-no-box">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl-no-box">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl-no-box">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl-no-box">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl-no-box">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl-no-box">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl-no-box">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl-right-side-only">
                    <div class="sub-value sub-no-replacement"></div></td>
       
            </tr> 

          
    <tr class="schedule-row">
                <td class="xbrl line-number"><span class="sub-line-number">34</span></td>
                <td class="xbrl-no-box description_items">
                    <div class="sub-value sub-replacement">(1) Crude Oil</div></td>
                <td class="xbrl-no-box numeric_items">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl-no-box">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl-no-box">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl-no-box">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl-no-box">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl-no-box">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl-no-box">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl-no-box">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl-right-side-only">
                    <div class="sub-value sub-no-replacement"></div></td>
       
            </tr> 

          
    <tr class="schedule-row">
                <td class="xbrl line-number"><span class="sub-line-number">35</span></td>
                <td class="xbrl-no-box description_items">
                    <div class="sub-value sub-replacement">(2) Products</div></td>
                <td class="xbrl-no-box numeric_items">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl-no-box">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl-no-box">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl-no-box">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl-no-box">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl-no-box">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl-no-box">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl-no-box">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl-right-side-only">
                    <div class="sub-value sub-no-replacement"></div></td>
       
            </tr> 

          
    <tr class="schedule-row">
                <td class="xbrl line-number"><span class="sub-line-number">36</span></td>
                <td class="xbrl-no-box description_items overflow">
                    <div class="sub-value sub-replacement">33b    Total Number of Barrels of Oil Having Trunk-Line Movement:</div></td>
                <td class="xbrl-no-box numeric_items">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl-no-box">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl-no-box">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl-no-box">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl-no-box">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl-no-box">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl-no-box">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl-no-box">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl-right-side-only">
                    <div class="sub-value sub-no-replacement"></div></td>
       
            </tr> 

          
    <tr class="schedule-row">
                <td class="xbrl line-number"><span class="sub-line-number">37</span></td>
                <td class="xbrl-no-box description_items">
                    <div class="sub-value sub-replacement">(1) Crude Oil</div></td>
                <td class="xbrl-no-box numeric_items">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl-no-box">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl-no-box">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl-no-box">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl-no-box">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl-no-box">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl-no-box">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl-no-box">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl-right-side-only">
                    <div class="sub-value sub-no-replacement"></div></td>
       
            </tr> 

          
    <tr class="schedule-row">
                <td class="xbrl line-number"><span class="sub-line-number">38</span></td>
                <td class="xbrl-no-box description_items">
                    <div class="sub-value sub-replacement">(2) Products</div></td>
                <td class="xbrl-no-box numeric_items">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl-no-box">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl-no-box">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl-no-box">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl-no-box">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl-no-box">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl-no-box">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl-no-box">
                    <div class="sub-value sub-no-replacement"></div></td>
                <td class="numeric_items xbrl-right-side-only">
                    <div class="sub-value sub-no-replacement"></div></td>
       
            </tr> 

          
     

          
    </table>
   
<p></p>
    <div class="schedule-footer">
        <div> FERC FORM NO.
            <div class="sub-value sub-no-replacement"></div><span> </span>
            <div class="sub-value sub-replacement"> (REV 12-00)</div></div> 
        <div style="text-align: center">Page 
            <div class="sub-value sub-replacement">600a</div></div>
    </div>
</div>
</body>
</html>`
