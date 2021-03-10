$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/search.feature");
formatter.feature({
  "line": 1,
  "name": "duck duck go Search",
  "description": "",
  "id": "duck-duck-go-search",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "I wan to seach on  duck-duck-go site",
  "description": "",
  "id": "duck-duck-go-search;i-wan-to-seach-on--duck-duck-go-site",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on the website duck-duck-go",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter the \"\u003ckeywork\u003e\" to search",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I navigate to videos search",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I should get minimun 2 search results",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "duck-duck-go-search;i-wan-to-seach-on--duck-duck-go-site;",
  "rows": [
    {
      "cells": [
        "keywork"
      ],
      "line": 11,
      "id": "duck-duck-go-search;i-wan-to-seach-on--duck-duck-go-site;;1"
    },
    {
      "cells": [
        "java"
      ],
      "line": 12,
      "id": "duck-duck-go-search;i-wan-to-seach-on--duck-duck-go-site;;2"
    },
    {
      "cells": [
        "webdriver"
      ],
      "line": 13,
      "id": "duck-duck-go-search;i-wan-to-seach-on--duck-duck-go-site;;3"
    },
    {
      "cells": [
        "docker"
      ],
      "line": 14,
      "id": "duck-duck-go-search;i-wan-to-seach-on--duck-duck-go-site;;4"
    },
    {
      "cells": [
        "kubernetes"
      ],
      "line": 15,
      "id": "duck-duck-go-search;i-wan-to-seach-on--duck-duck-go-site;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3831078300,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "I wan to seach on  duck-duck-go site",
  "description": "",
  "id": "duck-duck-go-search;i-wan-to-seach-on--duck-duck-go-site;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on the website duck-duck-go",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter the \"java\" to search",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I navigate to videos search",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I should get minimun 2 search results",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.iAmOnTheWebsiteDuckDuckGo()"
});
formatter.result({
  "duration": 1606302000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "java",
      "offset": 13
    }
  ],
  "location": "SearchSteps.iEnterThe(String)"
});
formatter.result({
  "duration": 1944394100,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.iNavigateToVideosSearch()"
});
formatter.result({
  "duration": 255764000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 21
    }
  ],
  "location": "SearchSteps.iShouldGetMinimunSearchResults(int)"
});
formatter.result({
  "duration": 374753700,
  "status": "passed"
});
formatter.after({
  "duration": 77048800,
  "status": "passed"
});
formatter.before({
  "duration": 648521100,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "I wan to seach on  duck-duck-go site",
  "description": "",
  "id": "duck-duck-go-search;i-wan-to-seach-on--duck-duck-go-site;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on the website duck-duck-go",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter the \"webdriver\" to search",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I navigate to videos search",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I should get minimun 2 search results",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.iAmOnTheWebsiteDuckDuckGo()"
});
formatter.result({
  "duration": 1201626800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "webdriver",
      "offset": 13
    }
  ],
  "location": "SearchSteps.iEnterThe(String)"
});
formatter.result({
  "duration": 2041226100,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.iNavigateToVideosSearch()"
});
formatter.result({
  "duration": 313428700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 21
    }
  ],
  "location": "SearchSteps.iShouldGetMinimunSearchResults(int)"
});
formatter.result({
  "duration": 384526500,
  "status": "passed"
});
formatter.after({
  "duration": 72837100,
  "status": "passed"
});
formatter.before({
  "duration": 774694900,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "I wan to seach on  duck-duck-go site",
  "description": "",
  "id": "duck-duck-go-search;i-wan-to-seach-on--duck-duck-go-site;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on the website duck-duck-go",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter the \"docker\" to search",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I navigate to videos search",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I should get minimun 2 search results",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.iAmOnTheWebsiteDuckDuckGo()"
});
formatter.result({
  "duration": 1178397500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "docker",
      "offset": 13
    }
  ],
  "location": "SearchSteps.iEnterThe(String)"
});
formatter.result({
  "duration": 1966685000,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.iNavigateToVideosSearch()"
});
formatter.result({
  "duration": 252010200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 21
    }
  ],
  "location": "SearchSteps.iShouldGetMinimunSearchResults(int)"
});
formatter.result({
  "duration": 304585200,
  "status": "passed"
});
formatter.after({
  "duration": 67647700,
  "status": "passed"
});
formatter.before({
  "duration": 673751400,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "I wan to seach on  duck-duck-go site",
  "description": "",
  "id": "duck-duck-go-search;i-wan-to-seach-on--duck-duck-go-site;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on the website duck-duck-go",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter the \"kubernetes\" to search",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I navigate to videos search",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I should get minimun 2 search results",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.iAmOnTheWebsiteDuckDuckGo()"
});
formatter.result({
  "duration": 1163823500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kubernetes",
      "offset": 13
    }
  ],
  "location": "SearchSteps.iEnterThe(String)"
});
formatter.result({
  "duration": 2762568200,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.iNavigateToVideosSearch()"
});
formatter.result({
  "duration": 230500800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 21
    }
  ],
  "location": "SearchSteps.iShouldGetMinimunSearchResults(int)"
});
formatter.result({
  "duration": 312698700,
  "status": "passed"
});
formatter.after({
  "duration": 70546000,
  "status": "passed"
});
});