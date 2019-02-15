<!DOCTYPE html>
<!--
  - This file is part of Adblock Plus <https://adblockplus.org/>,
  - Copyright (C) 2006-present eyeo GmbH
  -
  - Adblock Plus is free software: you can redistribute it and/or modify
  - it under the terms of the GNU General Public License version 3 as
  - published by the Free Software Foundation.
  -
  - Adblock Plus is distributed in the hope that it will be useful,
  - but WITHOUT ANY WARRANTY; without even the implied warranty of
  - MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  - GNU General Public License for more details.
  -
  - You should have received a copy of the GNU General Public License
  - along with Adblock Plus.  If not, see <http://www.gnu.org/licenses/>.
  -->
  <html lang="en-US" dir="ltr"><head>
<meta charset="utf-8">
<title>Block element</title>
<link href="jquery-ui/css/smoothness/jquery-ui-1.12.1.custom.css" rel="stylesheet" type="text/css">
<script src="jquery-ui/js/jquery-3.2.1.min.js" type="text/javascript"></script>
<script src="jquery-ui/js/jquery-ui-1.12.1.custom.min.js" type="text/javascript"></script>
<script src="polyfill.js" type="text/javascript"></script>
<script src="ext/common.js" type="text/javascript"></script>
<script src="ext/content.js" type="text/javascript"></script>
<script src="i18n.js" type="text/javascript" charset="utf-8"></script>
<script src="composer.js" type="text/javascript" charset="utf-8"></script>
<style type="text/css">
  *
  {
    box-sizing: border-box;
  }
  html
  {
    height: 100%;
  }
  body
  {
    height: 100%;
    margin: 0px;
    padding: 5px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 13px;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column;
    flex-direction: column;
  }
  #title,
  #filters
  {
    margin-bottom: 3px;
  }
  #title > *
  {
    vertical-align: middle;
  }
  #title > img
  {
    margin-right: 5px;
  }
  #title, #buttons
  {
    -webkit-flex-shrink: 0;
    flex-shrink: 0;
  }
  #filters
  {
    width: 100%;
    resize: none;
    white-space: pre;
    word-wrap: normal;
    -webkit-flex-grow: 1;
    flex-grow: 1;
  }
  #buttons
  {
    text-align: right;
  }
</style>
</head>
<body>

<div id="title">
  <img src="icons/detailed/abp-32.png" srcset="icons/detailed/abp-64.png 2x">
  <span class="i18n_add_filters_msg">Add filter(s)?</span>
</div>

<textarea disabled="" class="i18n_loading" id="filters">Loading...</textarea>

<div id="buttons">
  <button disabled="" class="i18n_add ui-button ui-corner-all ui-widget ui-button-disabled ui-state-disabled" id="addButton">Add</button>
  <button class="i18n_cancel ui-button ui-corner-all ui-widget" id="cancelButton">Cancel</button>
</div>



</body></html>
